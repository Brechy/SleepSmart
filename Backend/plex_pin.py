"""stuff"""
from flask import Flask
from xmljson import badgerfish as bf
import requests

P = Flask(__name__)

@P.route('/auth')
def plex_pin():
    """function to get tempory pin from plex"""

    url = 'https://plex.tv/pins.xml'
    headers = {
        'X-Plex-Product': 'SleepSmart',
        'X-Plex-Version': '0.1.0',
        'X-Plex-Client-Identifier': 'SleepSmartTedothy'
    }

    response = requests.post(url, headers=headers)
    auth_req = bf.data(response)
    return auth_req
