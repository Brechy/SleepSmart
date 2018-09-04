"""stuff"""
from flask import Flask
import requests

APP = Flask(__name__)


@APP.route('/')
def hello_world():
    """test function to print on localhost"""
    return 'Hello, World!'
