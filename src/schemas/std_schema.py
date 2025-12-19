from marshmallow import Schema, fields, validate, validates
from src.models.student import Student
class AddStudentSchema(Schema):
    name=fields.Str(required=True)
    email= fields.Email(required=True)
    age= fields.Int(required=True)
    department=fields.Str(required=True)

@validates('email')
def validate_email(self, values, **kwargs):
    student=student.query.filter_by('email=value').first()
    if student:
        raise Exception("email already exist")
