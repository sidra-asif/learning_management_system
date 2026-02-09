from flask import Blueprint, request, jsonify
from src.extentions import db
from src.models.student import Student
from flask_jwt_extended import jwt_required, get_jwt_identity
from marshmallow import ValidationError
from src.schemas.std_schema import AddStudentSchema
student_bp = Blueprint('student', __name__)

@student_bp.route('/students/<department>', methods=['GET'])
@jwt_required()
def get_students(department):
    
    std_query = Student.query
    if  department != 'all':
        std_query=std_query.filter_by(department=department)
    students=std_query.all()
    
    student_list = []

    for student in students:
        student_data = {
            'id': student.id,
            'name': student.name,
            'email': student.email,
            'age': student.age,
            'department':student.department
        }
        student_list.append(student_data)

    return jsonify({'data': student_list}), 200

@student_bp.route('/students', methods=['POST'])
@jwt_required()
def add_student():
    data = request.form
    try:
        validated_data=AddStudentSchema().load(data)
    except ValidationError as e:
        return jsonify({"msg":"validation error","errors":e.messages})    
    
    name = data.get('name')
    email = data.get('email')
    age = data.get('age')
    department= data.get('department')

    if not name or not email or not age:
        return jsonify({'message': 'Missing required fields'}), 400
    
    existing_student = Student.query.filter_by(email=email).first()
    if existing_student:
        return jsonify({'message': 'Student with this email already exists'}), 400
    
    std = Student(name=name, email=email, age=age, department=department)

    db.session.add(std)
    db.session.commit()

    # Here you would normally add the student to the database

    return jsonify({'message': 'Student added successfully'}), 200

@student_bp.route('/update-students/<id>', methods=['PUT'])
@jwt_required()
def update_students(id):
    data=request.get_json()
    student = Student.query.get(id)
    
    if not student:
        return jsonify({"message":"record not found"})
    
    student.name=data['name']
    student.email=data['email']
    student.age=data['age']
    student.department=data.get('department')
    
    db.session.commit()
    
    return jsonify({"message":"data added successfully"})

@student_bp.route("/delete-student/<int:id>",methods=['DELETE'])
@jwt_required()
def delete_student(id):
    student=Student.query.get(id)
    if not student:
        return jsonify({"message":"record not found"})
    db.session.delete(student)
    db.session.commit()
    return jsonify({"message":"data deleted successfully"})



