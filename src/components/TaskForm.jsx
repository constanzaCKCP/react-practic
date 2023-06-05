import { useState, useContext } from "react";
import { TaskContext } from "../context/TaskContext";

function TaskForm() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const { createTask } = useContext(TaskContext);

  const handleSubmit = (e) => {
    e.preventDefault();

    createTask({
      title,
      description,
    });
    setTitle = "";
    setDescription = "";
  };

  return (
    <div className="mx-w-md mx-auto ">
      <form className="p-10 mb-4 " onSubmit={handleSubmit}>
        <input
          placeholder="Escriba aqui el titulo"
          onChange={(e) => setTitle(e.target.value)}
          value={title}
          className="text-black font-bold p-3 w-full mb-2 "
          autoFocus
        ></input>

        <textarea
          placeholder="Escribe la descripción aquí"
          onChange={(e) => setDescription(e.target.value)}
          className="text-black font-bold p-3 w-full mb-2"
          value={description}
        ></textarea>

        <button className="rounded-sm text-white text-2xl p-2 font-bold bg-red-600 hover:bg-red-400" type="submit">
          Guardar
        </button>
      </form>
    </div>
  );
}

export default TaskForm;
