from marshmallow import Schema, fields, validate, validates
from src.models.attendance import Attendance
from src.models.student import Student
from src.extentions import db



class AttendanceSchema(Schema):
    student_id = fields.Int(required=True)
    date = fields.Date(required=True)
    is_present=fields.Boolean(required=True)

    @validates('student_id')
    def validate_id(self, value, **kwargs):
        attendance = Attendance.query.filter_by(id=value).first()

        if not id:
            raise validate.ValidationError('entered id does not exist.')