import time

import pandas as pd
import requests

# Geocoding uses OpenStreetMap's Nominatim service, which needs no API key.
# Usage policy: https://operations.osmfoundation.org/policies/nominatim/
# - at most 1 request per second
# - a User-Agent that identifies this script
# - credit: "Data (c) OpenStreetMap contributors, ODbL"
NOMINATIM_URL = 'https://nominatim.openstreetmap.org/search'
HEADERS = {'User-Agent': 'nscsl-website-geocoder/1.0 (+https://github.com/aiannyyyy/nscsl-website)'}
DELAY_SECONDS = 1.1

# Lookups are cached so a repeated address is only requested once
cache = {}

# Function to get a Google Maps link for an address from Nominatim
def get_google_maps_link(address):
    if pd.isna(address) or not str(address).strip():
        return 'Location not found'
    address = str(address).strip()
    if address in cache:
        return cache[address]

    params = {
        'q': address,
        'format': 'jsonv2',
        'limit': 1,
        'countrycodes': 'ph'
    }

    try:
        response = requests.get(NOMINATIM_URL, params=params, headers=HEADERS, timeout=15)
        response.raise_for_status()
        results = response.json()
    except (requests.RequestException, ValueError):
        results = []
    finally:
        time.sleep(DELAY_SECONDS)

    if results:
        lat = results[0]['lat']
        lng = results[0]['lon']
        link = f'https://www.google.com/maps?q={lat},{lng}'
    else:
        link = 'Location not found'

    cache[address] = link
    return link

# Read your Excel file containing addresses
file_path = 'locations.xlsx'  # Replace with your Excel file path
df = pd.read_excel(file_path)

# Assuming the addresses are in column 'FULL_ADDRESS'
df['Google Maps Link'] = df['FULL_ADDRESS'].apply(get_google_maps_link)

# Save the new Excel file with Google Maps links
df.to_excel('locations_with_maps_links.xlsx', index=False)

print('Google Maps links generated and saved to locations_with_maps_links.xlsx')
print('Geocoding data (c) OpenStreetMap contributors, ODbL')
