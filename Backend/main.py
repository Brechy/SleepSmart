"""stuff"""
from flask import Flask
import requests

APP = Flask(__name__)


@APP.route('/')
def hello_world():
    """Return string Hello, World!

    >>> hello_world()
    'Hello, World!'
    """

    return 'Hello, World!'

if __name__ == "__main__":
    import doctest
doctest.testmod()
