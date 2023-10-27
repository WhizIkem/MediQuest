# MediQuest

MediQuest is a web application designed to assist users in identifying potential diseases or health conditions based on the symptoms they are experiencing. MediQuest is not only a medical symptoms checker but also a medical center locator.This README.md file provides essential information about the application to help users and developers understand its functionality and how to get started. 

It utilizes the following develpoping technologies and stacks:
- 	frontend programming languages- javascript react, html and css
- 	backend programming languages- python flask
- 	database - Still Database

## Table of Contents

- [Features](#features)
- [Status](#status)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
	- [Bugs](#bugs)
- [License](#license)

## Features

- **Symptom Checker**: Users can enter their symptoms into the application, and it will suggest potential diseases or health conditions that match those symptoms.

- **Disease Information**: Detailed information about each suggested disease, including symptoms, causes, treatments, and more.

- **Hospital Locator**: Shows you the near hospitals and clinics near you and how far they are from you in kilometers

- **Interactive UI**: An intuitive and user-friendly interface that makes it easy to input symptoms and understand the results.

- **Privacy and Security**: User data and symptom information are securely stored and protected.

## Status
The project is still under development

## Getting Started

### Prerequisites

Before you begin, ensure you have met the following requirements:

- Node.js: Make sure you have Node.js installed on your system. You can download it from [nodejs.org](https://nodejs.org/).

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/WhizIkem/mediquest.git

2. Change your directory to the project folder:
	```bash
	cd mediquest

3. Install the project dependencies:
	```bash
	npm install

4. Set up environment variables: 
Activate the .env file in the project root with the defined and necessary environment variables. 

5. Start the application:
	```bash
	npm start

Now, the MediQuest web application should be up and running on http://localhost:3000.

## Usage

- Open your web browser and go to http://localhost:3000 (or the appropriate URL where you deployed the application).

- Input your symptoms in the provided fields and click the "Check Symptoms" button.

- The application will display a list of potential diseases or health conditions based on the entered symptoms.

- The appilication would suggest for you to go to the nearest hospital or clinic if your condition is a serious one.

## Contributing

We welcome contributions from the community. To contribute to MediQuest, please follow these steps:

1. Fork the repository.

2. Create a new branch for your feature or bug fix:

   ```bash
   git checkout -b feature/new-feature

3. Make your changes, test them thoroughly, and ensure they follow our coding standards.

4. Commit your changes:
	```bash
	git commit -m "Add new feature: Your feature description"

5. Push your changes to your fork:
	```bash
	git push origin feature/new-feature

6. Create a pull request to the main repository.

7. Wait for feedback and be prepared to make further changes if necessary.

### Bugs
We are currently trying to solve an issue with the nearest health facility function integration as it jas become a challenge to use that feature.

## License
This project is licensed under the MIT License - see the [LICENSE](/LICENSE) file for details.