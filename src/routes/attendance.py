from flask import Blueprint, request, jsonify
from src.extentions import db
from src.models.attendance import Attendance
from src.schemas.attendance_schema import AttendanceSchema
from marshmallow import ValidationError
from flask_jwt_extended import jwt_required 

attendance_bp = Blueprint('attendance', __name__)

@attendance_bp.route('/api/attendance/<int:student_id>', methods=['POST'])
def mark_attendance(student_id):
    data = request.get_json() 
    if not data:
        return jsonify({'message': 'Missing JSON data in request body'}), 400
    try:
        validated_data = AttendanceSchema().load(data)
    except ValidationError as err:
        return jsonify(err.messages), 400
    new_attendance = Attendance(student_id=student_id,date=validated_data["date"])
    db.session.add(new_attendance)
    db.session.commit()
    return jsonify({'message': 'attendance marked successfully'}), 201

@attendance_bp.route('/update-attendance/<int:student_id>', methods=['PUT'])
@jwt_required()
def update_attendance(student_id):
    data = request.get_json() 
    if not data:
        return jsonify({'message': 'Missing JSON data in request body'}), 400
    try:
        validated_data = AttendanceSchema().load(data)
    except ValidationError as err:
        return jsonify(err.messages), 400
    attendance = Attendance.query.get(student_id)
    attendance.date=validated_data['date']
    attendance.student_id=validated_data['student_id']
    attendance.is_present=validated_data['is_present']
    db.session.commit()
    return jsonify({'message': 'attendance updated successfully'}), 200


@attendance_bp.route('/delete-attendance/<int:student_id>', methods=['DELETE'])
@jwt_required()
def delete_attendance(student_id):
    attendance = Attendance.query.get(student_id)
    if not attendance:
        return jsonify({'message': 'Attendance record not found'}), 404
    db.session.delete(attendance)
    db.session.commit()
    return jsonify({'message': 'attendance deleted successfully'}), 200