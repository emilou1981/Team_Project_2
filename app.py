import os

import pandas as pd
import numpy as np

import sqlalchemy
from sqlalchemy.ext.automap import automap_base
from sqlalchemy.orm import Session
from sqlalchemy import create_engine

from flask import Flask, jsonify, render_template
from flask_sqlalchemy import SQLAlchemy

app = Flask(__name__)


#################################################
# Database Setup
#################################################

app.config["SQLALCHEMY_DATABASE_URI"] = "postgres://vqwpldlnxxqrvl:ba6bd238c236357aa816db445bceb5e604d7e491fbdecfd5bd8aace8885fb953@ec2-174-129-253-45.compute-1.amazonaws.com:5432/dbba91nli2plqi"
db = SQLAlchemy(app)

# reflect an existing database into a new model
Base = automap_base()
# reflect the tables
Base.prepare(db.engine, reflect=True)

# Save references to each table
Cities_Metadata = Base.classes.cities_metadata
Cities = Base.classes.cities


@app.route("/")
def index():
    """Return the homepage."""
    return render_template("index.html")

if __name__ == "__main__":
    app.run()