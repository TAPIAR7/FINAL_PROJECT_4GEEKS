from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    email = db.Column(db.String(120), unique=True, nullable=False)
    password = db.Column(db.String(80), unique=False, nullable=False)
    is_active = db.Column(db.Boolean(), unique=False, nullable=False)

    def __repr__(self):
        return '<User %r>' % self.username

    def serialize(self):
        return {
            "id": self.id,
            "email": self.email,
            # do not serialize the password, its a security breach
        }

class ChassisParts(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(120), unique=False, nullable=False)
    system = db.Column(db.String(80), unique=False, nullable=False)
    amount = db.Column(db.Integer, unique=False, nullable=False)
    numberpart=db.Column(db.Integer, unique=False, nullable=False)
    image= db.Column(db.String(80), unique=False, nullable=False)
    description=db.Column(db.String(200), unique=False, nullable=False)
    price=db.Column(db.Integer, unique=False, nullable=False)


    def __repr__(self):
        return '<ChassisParts %r>' % self.name

    def serialize(self):
        return {
            "id": self.id,
            "name ": self.name,
            "system": self.system,  #conjunto al cual pertenece la parte.
            "amount": self.amount,
            "numberpart": self.numberpart,
            "image": self. image,
            "description": self.description
            # do not serialize the password, its a security breach
        }        