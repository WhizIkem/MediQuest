from recommendations.recommendation import get_suggested_diseases, calculate_urgency
from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

@app.route('/suggest_diseases', methods=['POST'])
def suggest_diseases():
    """
    Endpoint to receive selected symptoms and return suggested diseases.

    Method: POST
    Endpoint: /suggest_diseases

    Request JSON Payload:
    {
        "selected_symptoms": ["Symptom1", "Symptom2", ...]
    }

    Response JSON Payload:
    {
        "suggested_diseases": [
            {
                "disease": "Disease1",
                "common_symptoms": ["Symptom1", "Symptom3"]
            },
            {
                "disease": "Disease2",
                "common_symptoms": ["Symptom2", "Symptom4"]
            },
            ...
        ]
    }
    """
    data = request.get_json()
    selected_symptoms = data.get('selected_symptoms', [])

    suggested_diseases = get_suggested_diseases(selected_symptoms)
    urgency_level = calculate_urgency(selected_symptoms)

    return jsonify({'suggested_diseases': suggested_diseases, 'urgency_level': urgency_level})

if __name__ == '__main__':
    app.run(debug=True)

