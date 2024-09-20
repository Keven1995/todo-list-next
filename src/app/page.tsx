"use client"; // Adiciona essa linha no topo

import styles from "./styles/styles.module.scss";
import Header from "../app/header/header";
import { useState } from "react";

// Defina um tipo para as chaves do objeto tasks
type TaskKeys =
  | "lavarAsMaos"
  | "fazerBolo"
  | "lavarLouca"
  | "levarLixoParaFora";

export default function Home() {
  // Estado para gerenciar o estado dos checkboxes e tarefas
  const [tasks, setTasks] = useState<Record<string, boolean>>({
    lavarAsMaos: false,
    fazerBolo: false,
    lavarLouca: false,
    levarLixoParaFora: true, // Essa já está marcada como completa
  });

  const [newTask, setNewTask] = useState("");
  const [isInputVisible, setInputVisible] = useState(false);

  // Função para lidar com mudanças nos checkboxes
  const handleCheckboxChange = (task: string) => {
    setTasks((prevTasks) => ({
      ...prevTasks,
      [task]: !prevTasks[task],
    }));
  };

  const addTask = () => {
    if (newTask.trim() !== "") {
      const newTaskKey = newTask.replace(/\s+/g, '').toLowerCase(); // Remover espaços e converter para minúsculas
      if (!(newTaskKey in tasks)) { // Verificar se a tarefa já existe
        setTasks((prevTasks) => ({
          ...prevTasks,
          [newTaskKey]: false, // Adiciona a nova tarefa com estado inicial false
        }));
      }
      setNewTask("");
      setInputVisible(false);
    }
  };

  const removeTask = (task: string) => {
    const { [task]: _, ...remainingTasks } = tasks;
    setTasks(remainingTasks);
  };

  const toggleInput = () => {
    setInputVisible((prev) => !prev);
  };

  return (
    <main className={styles.mainContainer}>
      <Header userName="João" />
      <div className={styles.todoContainer}>
        <h2>Suas tarefas de hoje</h2>

        {/* Lista de Tarefas */}
        {Object.keys(tasks).map((task) => (
          <div key={task} className={styles.taskItem}>
            <input
              type="checkbox"
              checked={tasks[task]}
              onChange={() => handleCheckboxChange(task)}
            />
            <span>{task.replace(/([A-Z])/g, ' $1')}</span>
            <button className={styles.deleteButton} onClick={() => removeTask(task)}></button>
          </div>
        ))}

        <h2>Tarefas finalizadas</h2>

        {/* Tarefas finalizadas */}
        {Object.keys(tasks).filter(task => tasks[task]).map((task) => (
          <div key={task} className={`${styles.taskItem} ${styles.completedTask}`}>
            <input
              type="checkbox"
              checked={tasks[task]}
              onChange={() => handleCheckboxChange(task)}
            />
            <span>{task.replace(/([A-Z])/g, ' $1')}</span>
            <button className={styles.deleteButton} onClick={() => removeTask(task)}></button>
          </div>
        ))}

        <button className={styles.button} onClick={toggleInput}>
          {isInputVisible ? "Cancelar" : "Adicionar nova tarefa"}
        </button>

        {isInputVisible && (
          <div>
            <input
              type="text"
              value={newTask}
              onChange={(e) => setNewTask(e.target.value)}
              placeholder="Nova tarefa"
            />
            <button onClick={addTask}>Adicionar</button>
          </div>
        )}
      </div>
    </main>
  );
}
