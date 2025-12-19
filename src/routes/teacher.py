from flask import Blueprint,jsonify,request
from src.models.teacher import Teacher
from flask_jwt_extended import jwt_required, get_jwt_identity
from marshmallow import ValidationError
from src.extentions import db

teacher_bp= Blueprint("teacher", __name__)


@teacher_bp.route("/get-teacher", methods=["GET"])
@jwt_required()
def get_teacher():
    teachers=Teacher.query.all()
    teacher_list=[]
    for teacher in teachers:
        teacher_info={"name":teacher.name,"subject":teacher.subject,"email":teacher.email,"age":teacher.age}
        teacher_list.append(teacher_info)
    return jsonify({"teacher":teacher_list
                    ,"response":"record found successsfully"})

@teacher_bp.route("/get-teacher/<id>", methods=["GET"])
@jwt_required()
def get_teacher_by_id(id):
    teacher=Teacher.query.get(id)
    if not teacher:
        return jsonify({"message":"record not found"})
    teacher_info={"name":teacher.name,"subject":teacher.subject,"email":teacher.email,"age":teacher.age}
    return jsonify({"teacher":teacher_info
                    ,"response":"record found successsfully"})

@teacher_bp.route("/create-teacher", methods=["POST"])
@jwt_required()
def create_teacher():
    data=request.get_json()
    teacher =Teacher( name=data['name'], subject=data['subject'],email=data.get('email'),age=data.get('age')) 
    db.session.add(teacher)
    db.session.commit()
    return jsonify({"message":"data added successfully"})

@teacher_bp.route("/update-teacher/<int:id>",methods=['PUT'])
@jwt_required()
def update_teacher(id):
    data=request.get_json()
    teacher=Teacher.query.get(id)
    if not teacher:
        return jsonify({"message":"record not found"})
    
    teacher.name=data['name']
    teacher.subject=data['subject']
    teacher.age=data['age']
    teacher.email=data.get('email')
    
    db.session.commit()
    
    return jsonify({"message":"data added successfully"})

@teacher_bp.route("/update-teacher-name/<int:id>",methods=['PATCH'])
@jwt_required()
def update_name_of_teacher(id):
    data=request.get_json()
    teacher=Teacher.query.get(id)
    if not teacher:
        return jsonify({"message":"record not found"})
    
    teacher.name=data['name']
    db.session.commit()
    
    return jsonify({"message":"name updated successfully"})

@teacher_bp.route("/delete-teacher/<int:id>",methods=['DELETE'])
@jwt_required()
def delete_teacher(id):
    teacher=Teacher.query.get(id)
    if not teacher:
        return jsonify({"message":"record not found"})
    db.session.delete(teacher)
    db.session.commit()
    return jsonify({"message":"data deleted successfully"})
