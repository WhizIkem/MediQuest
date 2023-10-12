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
            suggested_diseases.append({'disease': disease, 'common_symptoms': list(common_symptoms)})

    #also returns the full list of symptoms for reference
    all_symptoms = Symptoms
    return suggested_diseases, all_symptoms
