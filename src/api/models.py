from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(120), nullable=False)
    email = db.Column(db.String(120), unique=True, nullable=False)
    password = db.Column(db.String(80), nullable=False)
    number = db.Column(db.String(120), nullable=False)
    gender = db.Column(db.String(80), nullable=False)
    country = db.Column(db.String(120), nullable=False)
    city = db.Column(db.String(120), nullable=False)
    bio = db.Column(db.Text, nullable=True)
    is_active = db.Column(db.Boolean(), unique=False, nullable=False)

    def __repr__(self):
        return f'<User {self.email}>'

    def serialize(self):
        return {
            "id": self.id,  
            "name": self.name,  
            "email": self.email,  
            "number": self.number,
            "country": self.country,
            "city": self.city,
            "gender": self.gender,
            "bio":self.bio if self.bio else None
            # do not serialize the password, its a security breach
        }
    
class Category(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(120),  unique=True, nullable=False)

    def __repr__(self):
        return f'<Category {self.name}>'

    def serialize(self):
        return {
            "id": self.id,  
            "name": self.name,
            "skills": [skill.serialize() for skill in self.skills] if self.skills else None
        }
    
class Skill(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(120),  unique=True, nullable=False)

    category_id = db.Column(db.Integer, db.ForeignKey('category.id'))
    category = db.relationship("Category", backref="skills") #helps with a bi directional relationship in which we don't have to specify another and can access the residents of each planet, on the planet object.

    def __repr__(self):
        return f'<Skill {self.name}>'

    def serialize(self):
        return {
            "id": self.id,  
            "name": self.name,
            "category": self.category.name if self.category else None
        }
    
