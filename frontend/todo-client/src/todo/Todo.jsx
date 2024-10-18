import React, { useState } from "react";
import "./Todo.css";
import TodoCards from "./TodoCards";
const Todo = () => {
  const [inputs, setInputs] = useState({ title: "", body: "" });
  const [Array, setArray] = useState([]);
  const show = () => {
    document.getElementById("textarea").style.display = "block";
  };
  const change = (e) => {
    const { name, value } = e.target;
    setInputs({ ...inputs, [name]: value });
  };
  const submit = () => {
    setArray([...Array, inputs]);
    setInputs({ title: "", body: "" });
    console.log(inputs);
  };
  return (
    <div className="todo">
      <div className="todo-main container d-flex justify-content-center align-items-center my-4 flex-column">
        <div className="d-flex flex-column w-50 todo-inputs-div p-2">
          <input
            type="text"
            placeholder="TITLE"
            className="my-2  p-2 todo-inputs"
            onClick={show}
            onChange={change}
            name="title"
            value={inputs.title}
          />
          <textarea
            type="text"
            placeholder="BODY"
            className="p-2 todo-inputs"
            id="textarea"
            name="body"
            onChange={change}
            value={inputs.body}
          />
        </div>
        <div className=" w-50 d-flex justify-content-end my-3">
          <button className="home-btn px-2 py-2" onClick={submit}>
            Add
          </button>
        </div>
      </div>
      <div className="todo-body">
        <div className="container-fluid">
          <div className="row">
            {Array &&
              Array.map((item, index) => (
                <>
                  <div className="col-lg-3 col-10 mx-5 my-2">
                    <TodoCards title={item.title} body={item.body} />
                  </div>
                </>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Todo;
