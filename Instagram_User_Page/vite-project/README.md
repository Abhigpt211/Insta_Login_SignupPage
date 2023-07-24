# Instagram-like User Page React Application

This is a React application that simulates an Instagram-like user page. The application allows users to sign up or log in based on their choice, and the user interface displays different input fields depending on their selection.

## Requirements

- Node.js (https://nodejs.org) installed on your machine.

## Setup and Installation

1. Clone this repository to your local machine using the following command:


2. Navigate to the project directory:


3. Install the required dependencies using npm:


## Usage

1. Start the development server:


2. Open your web browser and visit http://localhost:3000 to access the Instagram-like user page.

## Functionality

- The user page displays an Instagram logo at the top.
- Users can switch between the sign-up and login views using the provided button.
- If users choose to sign up, they will see additional input fields for name and email.
- If users choose to log in, only the basic username and password inputs will be visible.
- Upon successful signup, the user details will be logged to the console.
- Upon successful login, a "Login successful!" message will be logged to the console.

## Project Structure


- `public/`: Contains the public assets of the application, including the Instagram logo image.
- `src/`: Contains the React components and CSS styles for the application.
- `App.js`: The main component that renders the UserPage component.
- `LoginForm.js`: The component that handles the login form and logic.
- `SignUpForm.js`: The component that handles the signup form and logic.
- `UserPage.js`: The main user page component that handles conditional rendering based on user choice.
- `styles.css`: Contains general CSS styles for the components.
- `README.md`: The documentation file you are currently reading.
- `package.json`: Contains information about the project and its dependencies.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
