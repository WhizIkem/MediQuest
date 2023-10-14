#!/bin/bash

# Abeg run this file in the root directory
#ABEGGGGGGG
#I TAKE GOD BEG YOU LOL
#RUN THIS FILE ONLY IN THE ROOT DIRECTORY
echo "Installing backend dependencies..."
(cd mediquest_backend && python3 -m venv venv && source venv/bin/activate && pip install -r requirements.txt)

echo "Installation complete."
