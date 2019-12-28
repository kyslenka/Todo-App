import React from "react";
import { connect } from "react-redux";
import { addTodo } from "../actions";
import "../index.css";

const AddTodo = ({ dispatch }) => {
  let input;
  return (
    <div className="column">
      <form
        className="form"
        onSubmit={e => {
          e.preventDefault();
          if (!input.value.trim()) {
            return;
          }
          dispatch(addTodo(input.value));
          input.value = "";
        }}
      >
        <input
          className="form-input"
          type="text"
          placeholder="What needs to be done?"
          ref={node => (input = node)}
        />
        {/* <button type="submit">Add Todo</button> */}
      </form>
    </div>
  );
};

export default connect()(AddTodo);
