import requests
from math import radians, sin, cos, sqrt, atan2

# Calculates the distance between two sets of coordinates using Haversine formula
def calculate_distance(coord1, coord2):
    # Radius of the Earth in meters
    earth_radius = 6371000  

    # Converts coordinates from degrees to radians
    lat1, lon1 = map(radians, coord1)
    lat2, lon2 = map(radians, coord2)

    # Haversine formula
    dlat = lat2 - lat1
    dlon = lon2 - lon1

    a = sin(dlat / 2)**2 + cos(lat1) * cos(lat2) * sin(dlon / 2)**2
    c = 2 * atan2(sqrt(a), sqrt(1 - a))

    # Calculates the distance
    distance = earth_radius * c
    return distance

# Gets the user's location based on IP address 
def get_user_location():
    try:
        response = requests.get('http://ip-api.com/json')
        data = response.json()
        if data['status'] == 'success':
            latitude = data['lat']
            longitude = data['lon']
            return latitude, longitude
    except Exception as e:
        print(f"Error: {e}")
    return None

# Finds the nearest health facilities 
def find_nearest_health_facilities(latitude, longitude):

    search_url = 'https://discover.search.hereapi.com/v1/discover'


    api_key = 'AoN49OcFKSSbwmOrCVau3IIQiWHqc0qVQ0eAEmqGTjY'

    # Defines the facility types
    facility_types = ["hospital", "clinic"]

    for facility_type in facility_types:
        # API parameters
        facility_params = {
            'apiKey': api_key,
            'at': f"{latitude},{longitude}",
            'q': facility_type,
            'limit': 5,
        }

        # Makes the API request to search for nearby health facilities
        facility_response = requests.get(search_url, params=facility_params)

        if facility_response.status_code == 200:
            facility_data = facility_response.json()
            # Processes the data to find the nearest health facilities
            items = facility_data.get('items', [])
            if items:
                print(f"Nearby {facility_type}s:")
                for item in items:
                    title = item.get('title', 'Facility name not found')
                    address = item.get('address', 'Address not found')
                    position = item.get('position', {'lat': 0, 'lng': 0})  # Get the position
                    distance = calculate_distance((latitude, longitude), (position['lat'], position['lng']))
                    print(f"Name: {title}, Distance: {int(distance)} meters")
                    print(f"Address: {address}")
                print()
            else:
                print(f"No nearby {facility_type}s found.")
        else:
            print(f"Request to HERE Location Services for {facility_type}s failed.")

# Calls the function for the user's location
user_location = get_user_location()

if user_location:
    latitude, longitude = user_location
    print(f"Latitude: {latitude}")
    print(f"Longitude: {longitude}")

    # Calls the function for the nearest health facilities
    find_nearest_health_facilities(latitude, longitude)
else:
    print("Location not available.")
