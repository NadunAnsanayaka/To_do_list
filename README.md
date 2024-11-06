
# Todo List Application
![image](https://github.com/user-attachments/assets/337b6fe5-dbaa-412f-90f2-cb40ade0ef79)

A simple, responsive React-based Todo List application built with Yarn and Vite. This app allows users to add, edit, and delete items on a todo list with a clean, minimalistic UI.

## Features
- **Add Item**: Users can add new items to their todo list.
- **Edit Item**: Users can edit existing items.
- **Delete Item**: Users can remove items from their list.
- **Responsive UI**: Clean and responsive design.

## Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/NadunAnsanayaka/Todo-list-app.git
   ```
2. Navigate to the project directory:
   ```bash
   cd Todo-list-app
   ```
3. Install the dependencies using Yarn:
   ```bash
   yarn install
   ```

## Usage
1. Start the application with Vite:
   ```bash
   yarn dev
   ```
2. Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

## Code Overview

### Main Files:
- **`App.js`**: Main component where the state is managed and the UI structure is defined. It includes the following functions:
  - `createItem`: Updates the `item` state based on user input.
  - `additem`: Adds a new item to the list or updates an existing one if editing.
  - `editItem`: Loads an item into the input field for editing.
  - `deleteItem`: Removes an item from the list.
- **`Todolist.js`**: Component for rendering individual items in the list. It includes buttons to edit or delete items.
- **`App.css`**: Contains the styling for the app.

### Example Code Snippet
Here's how the main state is managed in `App.js`:
```javascript
const [item, setItem] = useState('');
const [itemlist, setItemlist] = useState([]);
const [isEditing, setIsEditing] = useState(false);
const [editedItemId, setEditedItemId] = useState(null);
```

## File Structure
```
todo-list-app
├── public
│   └── index.html
├── src
│   ├── App.js                # Main application component
│   ├── Todolist.js           # Todo list component
│   ├── App.css               # Styling for the app
│   ├── index.js              # Application entry point
│   └── index.css
├── .gitignore
├── package.json
└── README.md
```

## Technologies Used
- **React**: Front-end JavaScript library for building user interfaces.
- **Yarn**: Package manager used to manage dependencies.
- **Vite**: Build tool for faster and leaner development experience.

## Contributing
Feel free to fork this project, make improvements, and submit pull requests.

## License
This project is licensed under the MIT License.
