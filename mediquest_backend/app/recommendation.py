from data import Diseases, Symptoms

def get_suggested_diseases(selected_symptoms):
    """
    Get suggested diseases based on selected symptoms.

    Parameters:
    - selected_symptoms (list): A list of symptoms selected by the user.

    Returns:
    - suggested_diseases (list): A list of suggested diseases and common symptoms.
    - all_symptoms (list): A list of all available symptoms for reference.

    """
    suggested_diseases = []
    for disease, symptoms in Diseases.items():
        common_symptoms = set(selected_symptoms) & set(symptoms)
        if common_symptoms:
            urgency_level = calculate_urgency(selected_symptoms)
            suggested_diseases.append({
                'disease': disease,
                'common_symptoms': list(common_symptoms),
                'urgency_level': urgency_level
            })

    #with this we remove diseases without common symptoms
    suggested_diseases = [disease for disease in suggested_diseases if disease['common_symptoms']]

    # Also returns the full list of symptoms for reference sake
    all_symptoms = Symptoms

    # Calculate overall urgency level based on selected symptoms
    urgency_level = calculate_urgency(selected_symptoms)

    return suggested_diseases, all_symptoms, urgency_level

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
        return "Critical Response"

    return "Normal Response"
