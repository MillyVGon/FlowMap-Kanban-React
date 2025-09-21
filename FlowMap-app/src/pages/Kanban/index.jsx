import { useState } from "react";
import "./Kanban.css";

function Kanban() {
  const [tasks, setTasks] = useState({
    todo: [],
    doing: [],
    done: [],
  });

  const [newTask, setNewTask] = useState("");

  const addTask = () => {
    if (newTask.trim() === "") return;
    setTasks({
      ...tasks,
      todo: [...tasks.todo, newTask]
    })
    setNewTask("")
  }

  const moveTask = (task, from, to) => {
    setTasks({
      ...tasks,
      [from]: tasks[from].filter((t) => t !== task),
      [to]: [...tasks[to], task]
    })
  }

  return (
    <main className="kanban">
      <h1>📌 Quadro Kanban</h1>

      <div className="add-task">
        <input
          type="text"
          placeholder="Nova tarefa..."
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
        />
        <button onClick={addTask}>Adicionar</button>
      </div>

      <div className="kanban-board">
        {["todo", "doing", "done"].map((column) => (
          <div key={column} className="kanban-column">
            <h2>
              {column === "todo" && "A Fazer"}
              {column === "doing" && "Em Progresso"}
              {column === "done" && "Concluído"}
            </h2>
            <ul>
              {tasks[column].map((task, index) => (
                <li key={index} className="kanban-task">
                  <span>{task}</span>
                  <div className="task-actions">
                    {column !== "todo" && (
                      <button onClick={() => moveTask(task, column, "todo")}>
                        ⬅
                      </button>
                    )}
                    {column !== "doing" && (
                      <button onClick={() => moveTask(task, column, "doing")}>
                        🔄
                      </button>
                    )}
                    {column !== "done" && (
                      <button onClick={() => moveTask(task, column, "done")}>
                        ✔
                      </button>
                    )}
                  </div>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </main>
  )
}

export default Kanban
