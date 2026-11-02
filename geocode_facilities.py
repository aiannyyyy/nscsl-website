import os

import pandas as pd
import requests

# Read the OpenCage key from the environment; never commit it.
API_KEY = os.environ.get('OPENCAGE_API_KEY', '')
if not API_KEY:
    raise SystemExit('Set OPENCAGE_API_KEY before running this script.')

# Function to get Google Maps link from OpenCage Geocoding API
def get_google_maps_link(address):
    url = f'https://api.opencagedata.com/geocode/v1/json'
    params = {
        'q': address,
        'key': API_KEY
    }
    
    response = requests.get(url, params=params)
    data = response.json()

    if data['status']['code'] == 200 and data['results']:
        lat = data['results'][0]['geometry']['lat']
        lng = data['results'][0]['geometry']['lng']
        return f'https://www.google.com/maps?q={lat},{lng}'
    else:
        return 'Location not found'

# Read your Excel file containing addresses
file_path = 'locations.xlsx'  # Replace with your Excel file path
df = pd.read_excel(file_path)

# Assuming the addresses are in column 'Address'
df['Google Maps Link'] = df['FULL_ADDRESS'].apply(lambda x: get_google_maps_link(x))

# Save the new Excel file with Google Maps links
df.to_excel('locations_with_maps_links.xlsx', index=False)

print('Google Maps links generated and saved to locations_with_maps_links.xlsx')
