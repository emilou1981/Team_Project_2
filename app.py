#Import Modules and Dependencies
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
app.config['STATIC_FOLDER'] = 'MDB-Free'

#################################################
# Database Setup
#################################################

app.config["SQLALCHEMY_DATABASE_URI"] = os.environ.get('DATABASE_URL','')
db = SQLAlchemy(app)

#Reflect Database into a New Model
Base = automap_base()
#Reflect a Table
Base.prepare(db.engine, reflect=True)

#Save References to the Table
Cities_Metadata = Base.classes.citystatistics

#Create App Routes
@app.route("/")
def index():
    """Return the homepage."""
    return render_template("index3.html")

@app.route("/names")
def names():

    # Use Pandas to Perform the SQL Query
    results = db.session.query(Cities_Metadata.city).all()
    #Flatten
    flat_results = []
    
    for sublist in results:
        for item in sublist:
            flat_results.append(item)
    
    return jsonify(flat_results)


@app.route("/metadata/<cities>")
def cities_metadata(cities):

    """Return the MetaData for a given sample."""
    sel = [
        Cities_Metadata.metropolitanpopulation,
        Cities_Metadata.averageincome,
        Cities_Metadata.studio,
        Cities_Metadata.onebedroom,
        Cities_Metadata.twobedroom,
    ]

    results = db.session.query(*sel).filter(Cities_Metadata.cities == cities).all()

    # Create a Dictionary Entry for Each Row of Metadata Information
    cities_metadata = {}
    for result in results:
        cities_metadata["Population"] = result[0]
        cities_metadata["Average Income"] = result[1]
        cities_metadata["Studio Apartments"] = result[2]
        cities_metadata["1BR Apartments"] = result[3]
        cities_metadata["2BR Apartments"] = result[4]

    print(cities_metadata)
    return jsonify(cities_metadata)

if __name__ == "__main__":
    app.run()