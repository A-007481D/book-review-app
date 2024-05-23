from flask import Flask

app = Flask(__name__)

from . import routes #import routes after creating the app instance
app.register_blueprint(routes.bp)

def create_app():
    return app