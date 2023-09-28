import React, { useState } from "react";
import "./App.css";
import Input from "./components/Input";
import Button from "./components/Button";
import Tab from "./components/Tab";
import { isValidElement } from "react";

const intialValue = {
  value: "",
  error: false,
};
function App() {
  const [val, setVal] = useState(intialValue);

  const { value, error } = val;

  const [todos, setTodos] = useState([]);

  const [filter, setFilter] = useState("all");

  //Event Button Add Task
  const onAddClick = () => {
    if (!value) {
      setVal({ ...val, error: true });
      return;
    }

    const newTodo = {
      isComplete: false,
      nameTask: value,
      id: todos.length + 1,
    };

    setTodos([...todos, newTodo]);
    setVal(intialValue);
  };

  //Ham tim vi tri index
  function findIndexInList(list, conditionFn) {
    for (let i = 0; i < list.length; i++) {
      if (conditionFn(list[i])) {
        return i; // Trả về chỉ số của đối tượng thỏa mãn điều kiện
      }
    }
    return -1; // Trả về -1 nếu không tìm thấy đối tượng thỏa mãn điều kiện
  }

  const completeTask = (taskId) => {
    //1 tim xem o vi tri nao
    let findIndex = findIndexInList(todos, (item) => item.id === taskId);
    //2 tro den vi tri do va thay doi status
    if (findIndex != -1) {
      let newAllTask = [...todos];
      newAllTask[findIndex].isComplete = !newAllTask[findIndex].isComplete;

      //3 set lai state de cap nhap lai giao dien
      setTodos(newAllTask);
    }

    console.log(todos);
  };

  const deleteTask = (taskId) => {
    //1 tim xem o vi tri nao
    let findIndex = findIndexInList(todos, (item) => item.id === taskId);
    //2 tro den vi tri do va thay doi status
    if (findIndex != -1) {
      let newAllTask = [...todos];
      newAllTask.splice(findIndex, 1);
      //newAllTask[findIndex].isComplete = !newAllTask[findIndex].isComplete;

      //3 set lai state de cap nhap lai giao dien
      setTodos(newAllTask);
    }
  };

  
  //Events Tab
  const fillterTask = (filter) => {
    if(filter === "active"){
      let newTaskActive = todos.filter((item) => item.isComplete == false);
      
    }else if(filter === "complete"){
      let newTaskActive = todos.filter((item) => item.isComplete == true);
      console.log(newTaskActive);
      
    }else{
      //setTodos(todos);
      console.log(todos);
    }
  };

  return (
    <div className="app">
      <h1>TODO LIST</h1>
      <div className="input-content">
        <Input
          value={value}
          onChange={(e) => setVal({ value: e.target.value, error: false })}
        />
      </div>
      <p className="error">{error ? "Enter task your please!" : ""}</p>
      <div className="tab-container">
        <div className="tab-todos">
          <nav className="nav">
            <Button text={"ALL"} onClick={()=> fillterTask("all")} />
            <Button text={"ACTIVE"} onClick={()=> fillterTask("active")} />
            <Button text={"COMPLETE"} onClick={()=> fillterTask("complete")} />
          </nav>
        </div>
        <Button text={"ADD"} onClick={onAddClick} />
      </div>
      <div className="todos-list">
        {todos.map((item) => {
          const { id, isComplete, nameTask } = item;
          return (
            <div
              className={`todos-content ${isComplete ? "done" : "no-done"}`}
              key={id}
            >
              <input
                name={id}
                type="checkbox"
                checked={isComplete}
                onChange={() => {
                  completeTask(id);
                }}
              />
              <p className="name">{nameTask}</p>
              <div className="actions">
                <Button text={"Delete"} onClick={() => deleteTask(id)} />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
