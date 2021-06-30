# Mini Full Stack Project
This project is your first foray into full stack development!
We want you to create a CRUD application that:
- stores some user-generated data in a database
- is able to retrieve and manipulate that data properly


This application should have:
- React front end
- Express server
- PostgreSQL database.

## App Plan

Create a coding cheatsheet hub

### Initial Must Dos
- [X] Inputs into a field
- [X] Push Inputs into a list
- [X] Post inputs to server using Express
    - [X] on submit, POST to server with a fetch()
- [X] write inputs to local storage (data.json)
- [X] send json data to '/'
- [X] GET data from '/' to display
- [X] replace local storage .json file with database using knex

#### App Layout
- Home Page
  - Navbar
    - Links to input sheet
    - links to category
  - Search Function
    - Category (dropdown)
  - Display Cheats based on category
    - delete input option

- Cheatsheet -> Input Cheat
  - Input fields
    - Title
    - Description
    - Category
      - dropdown with a list of exisiting
      - add button and input to add a new category to the list

- Some Category Page
  - All input titles in that category
    - click to display details

### Stretch goals
- [ ] Add a dropdown selecter
- [ ] Use drop down to organize inputs into containers
- [ ] Seperate data into seperate pages OR a search function# 03-mini-fullstack


#### Styling Points
- [ ] Click on name to display description