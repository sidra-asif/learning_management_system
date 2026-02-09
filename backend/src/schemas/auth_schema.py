from marshmallow import Schema, fields, validate, validates
from src.models.admin import Admin


class LoginSchema(Schema):
    email = fields.Email(required=True)
    password = fields.String(required=True, validate=validate.Length(min=6,max=20))

    @validates('email')
    def validate_email(self, value, **kwargs):
        admin = Admin.query.filter_by(email=value).first()
        if not admin:
            raise validate.ValidationError('entered email does not exist.')