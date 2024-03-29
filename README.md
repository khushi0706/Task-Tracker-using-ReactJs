# ReactJS Task Tracker

![image](https://github.com/khushi0706/Task-Tracker-using-ReactJs/assets/96778933/59565fae-fe79-45a5-a683-7e033760d21b)


## Introduction

Welcome to the **ReactJS Task Tracker** project! This project is a simple task management application built using ReactJS. It allows users to manage tasks with features like adding, editing, and deleting tasks, as well as filtering and sorting tasks based on various criteria.

## Features

- **Task Management:** Users can add new tasks with details like title, description, assignee, priority, and start date.
- **Task Editing:** Existing tasks can be edited to update their details, such as title, description, assignee, priority, and start date.
- **Task Deletion:** Users can delete tasks they no longer need, removing them from the task list.
- **Task Filtering:** Tasks can be filtered based on assignee name, priority, start date, and end date to focus on specific tasks.
- **Task Sorting:** Tasks can be sorted based on priority, start date, and end date to organize them effectively.
- **Error Handling:** The application includes error handling to provide a smooth user experience and handle unexpected errors gracefully.
- **Responsive Design:** The application is designed to be responsive and work seamlessly on different devices and screen sizes.

## Getting Started

To get started with the **ReactJS Task Tracker** project, follow these steps:

1. **Clone the Repository:**
   ```bash
   git clone https://github.com/khushi0706/Task-Tracker-using-ReactJs.git

2. **Install dependencies**
   ```
   cd task-tracker
   npm install
   ```

3. **Run the Development Server**
   ```
   npm start
   ```

4.**Open the Application**
Once the development server is running, open your web browser and navigate to http://localhost:3000 to view the Task Tracker application or it will automatically open it.

## Assumptions
While designing this project, the following assumptions were made:

-**User Authentication**: This project assumes that user authentication is not required for managing tasks. Therefore, anyone with access to the application can add, edit, and delete tasks.

-**Local Storage**: Task data is stored locally in the browser's storage. There is no backend server involved in this project for storing task information.

-**Single User**: The project assumes that it will be used by a single user at a time. Therefore, there are no features for collaborating on tasks with multiple users.

## Error Handling
Error handling is implemented in the following areas:

-**Task Validation**: When adding or editing tasks, input fields are validated to ensure that required fields are not empty and that the data entered is in the correct format.

-**Network Connectivity**: If there are any issues with network connectivity, the application displays an error message informing the user about the problem and suggests retrying or checking the network connection.

-**Data Retrieval**: When retrieving tasks from local storage or an API, error handling is implemented to catch any errors that may occur during data retrieval and display appropriate messages to the user.

-**Form Submission**: Error handling is implemented when submitting forms to ensure that all required fields are filled out correctly before allowing the submission to proceed.

**Thank you for visiting this repository, feel free to pull issue request :)**
