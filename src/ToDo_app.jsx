import { useState } from "react";

const ToDO_app = () => {
  const [userInput, setUserInput] = useState("");
  const [list, setList] = useState([]);

  // Setting a user input value
  const updateInput = (value) => {
    setUserInput(value);
  };

  // Addding item if user input is not empty
  const addItem = () => {
    if (userInput.trim() !== "") {
      const newItem = {
        id: Math.random(),
        value: userInput,
      };

      setList([...list, newItem]);
      setUserInput("");
    }
  };

  // Function to delete item from list using id
  const deleteItem = (key) => {
    const updatedList = list.filter((item) => item.id !== key);
    setList(updatedList);
  };

  // Function to edit item in the list
  const editItem = (index) => {
    const editedTodo = prompt("Edit the todo:");

    if (editedTodo !== null && editedTodo.trim() !== "") {
      const updatedList = [...list];
      updatedList[index].value = editedTodo;
      setList(updatedList);
    }
  };

  return (
    <div className="container mx-auto p-4">
      <div className="text-3xl font-bold text-center">TODO LIST</div>

      <hr className="my-4" />

      <div className="md:w-1/2 md:mx-auto">
        <div className="mb-3">
          <input
            type="text"
            placeholder="add item . . ."
            className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:border-blue-500"
            value={userInput}
            onChange={(e) => updateInput(e.target.value)}
            aria-label="add something"
          />
          <button
            className="mt-2 ml-2 px-4 py-2 bg-gray-800 text-white rounded-lg shadow-md focus:outline-none"
            onClick={addItem}
          >
            ADD
          </button>
        </div>

        <div>
          <ul className="divide-y divide-gray-300">
            {list.map((item, index) => (
              <li
                key={item.id}
                className="flex justify-between items-center py-3"
              >
                <span>{item.value}</span>
                <div>
                  <button
                    className="mr-2 px-4 py-2 bg-gray-200 text-gray-800 rounded-lg shadow-sm focus:outline-none"
                    onClick={() => deleteItem(item.id)}
                  >
                    Delete
                  </button>
                  <button
                    className="px-4 py-2 bg-gray-200 text-gray-800 rounded-lg shadow-sm focus:outline-none"
                    onClick={() => editItem(index)}
                  >
                    Edit
                  </button>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ToDO_app;
