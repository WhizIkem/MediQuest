from data import Diseases, Symptoms
from typing import List, Dict


def get_suggested_diseases(selected_symptoms: List[str]) -> List[dict]:
    """
    Get suggested diseases based on selected symptoms.

    Parameters:
    - selected_symptoms (List[str]): List of symptoms selected by the user.

    Returns:
    - List[dict]: List of dictionaries containing information about suggested diseases.
      Each dictionary has keys: 'disease', 'common_symptoms', 'other_symptoms', 'urgency_level'.
    """

    print("Selected Symptoms in get_suggested_diseases:", selected_symptoms)

    suggested_diseases = []

    for disease, symptoms_list in Diseases.items():
        if set(selected_symptoms).issubset(symptoms_list):
            other_symptoms = [symptom for symptom in symptoms_list if symptom not in selected_symptoms]

            suggested_diseases.append({
                'disease': disease,
                'common_symptoms': selected_symptoms,
                'other_symptoms': other_symptoms,
                'urgency_level': calculate_urgency(selected_symptoms)
            })

    return suggested_diseases

def calculate_urgency(selected_symptoms):
    """
    Calculate the urgency level based on selected symptoms.

    Args:
        selected_symptoms (list): List of symptoms selected by the user.

    Returns:
        str: Urgency level, either "Critical Response" or "Normal Response".

    This function checks if the selected symptoms include anything related to heart or brain issues
    by comparing them to a predefined list of critical symptoms. If any critical symptom is found,
    it indicates a "Critical Response," otherwise, it returns a "Normal Response."
    """
    # List of critical symptoms
    critical_symptoms = [
        "angina pectoris", "aphasia", "ataxia", "bradykinesia", "confusion", "dizziness",
        "dysarthria", "dysphagia", "hemianopsia homonymous", "hemiplegia", "numbness of hand",
        "seizure", "speech slurred", "stupor", "syncope", "tachypnea", "tremor", "vision blurred"
    ]

    if any(symptom.lower() in selected_symptoms for symptom in critical_symptoms):
        return "Critical!! Seek Medical Care Immediately"

    return "Not Critical"
