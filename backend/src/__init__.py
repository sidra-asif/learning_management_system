from flask import Flask
from src.extentions import db, bcrypt, jwt
from flask_cors import CORS     

from src.models.student import Student
from src.models.teacher import Teacher
from src.models.admin import Admin  
from src.models.attendance import Attendance

from src.routes.auth import auth_bp
from src.routes.student import student_bp
from src.routes.teacher import teacher_bp
from src.routes.attendance import attendance_bp


def create_app():
    app = Flask(__name__)

    CORS(app,
         resources={r"/api/*": {"origins": "*"}},
         allow_headers="*", methods=["GET", "HEAD", "POST", "OPTIONS", "PUT", "PATCH", "DELETE"],
         supports_credentials=True
         )

    app.register_blueprint(auth_bp, url_prefix='/api')
    app.register_blueprint(student_bp, url_prefix='/api')
    app.register_blueprint(teacher_bp, url_prefix='/api')
    app.register_blueprint(attendance_bp, url_prefix='/api')


    app.config['SECRET_KEY'] = 'iamaideveloper'
    app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///lms.db'
    db.init_app(app)
    bcrypt.init_app(app)
    jwt.init_app(app)

    with app.app_context():
        db.create_all()

    return app
