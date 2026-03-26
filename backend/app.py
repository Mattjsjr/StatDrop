from flask import Flask, request, jsonify, request
from werkzeug.utils import secure_filename
from flask_cors import CORS
from main import create_model, predict, get_headers
import os

app = Flask(__name__)
CORS(app)

DEFAULT_FILE = r'C:\Users\Mattj\Documents\Projects\TeamPrediction\excel\total_team_stats.csv'
#model = create_model(DEFAULT_FILE)

@app.route('/')
def home():
    return "API is running"

@app.route('/api/stats', method=['POST'])
def get_stats():
    
    '''
    Get the file name from request
    Check if there is a file inside the dictionary that's returned
    Check if it's malicious
    Call get_headers
    '''

    if 'file' in request.files:
        file = request.files['file']

        if file.filename != "":
            filename = secure_filename(file.filename)
            filepath = os.path.join("uploads", filename)
            file.save(filepath)
        else:
            filepath = DEFAULT_FILE

    else:
        filepath = DEFAULT_FILE
    
    result = get_headers(filepath)
    return jsonify(result)



@app.route('/predict', methods=['POST'])
def predict_route():
    data = request.get_json()

    if not data:
        return jsonify({'error': 'Missing data to process'}), 400
    
    try:
        print()
    except:
        return
         
