"use client";

import styles from "./styles/styles.module.scss";
import Header from "../app/header/header";
import { useState } from "react";
import Modal from "../app/modal/Modal";
import ModalDelete from "../app/modal/ModalDelete"; // Importando o modal de deletar

type TaskKeys =
  | "lavarAsMaos"
  | "fazerBolo"
  | "lavarLouca"
  | "levarLixoParaFora";

export default function Home() {
  const [tasks, setTasks] = useState<Record<string, boolean>>({
    lavarAsMaos: false,
    fazerBolo: false,
    lavarLouca: false,
    levarLixoParaFora: true,
  });

  const [isModalOpen, setModalOpen] = useState(false);
  const [isDeleteModalOpen, setDeleteModalOpen] = useState(false);
  const [taskToDelete, setTaskToDelete] = useState<string | null>(null);

  const handleCheckboxChange = (task: string) => {
    setTasks((prevTasks) => ({
      ...prevTasks,
      [task]: !prevTasks[task],
    }));
  };

  const addTask = (task: string) => {
    const cleanedTask = task.trim().replace(/[^a-zA-Z\s]/g, "");
    if (cleanedTask) {
      const newTaskKey = cleanedTask.replace(/\s+/g, "").toLowerCase();
      if (!(newTaskKey in tasks)) {
        setTasks((prevTasks) => ({
          ...prevTasks,
          [newTaskKey]: false,
        }));
      }
    }
  };

  const confirmDeleteTask = (task: string) => {
    setTaskToDelete(task);
    setDeleteModalOpen(true);
  };

  const deleteTask = () => {
    if (taskToDelete) {
      const { [taskToDelete]: _, ...remainingTasks } = tasks;
      setTasks(remainingTasks);
      setTaskToDelete(null);
    }
    setDeleteModalOpen(false);
  };

  return (
    <main className={styles.mainContainer}>
      <Header userName="João" />
      <div className={styles.todoContainer}>
        <h2 className="task-title">Suas tarefas de hoje</h2>

        {Object.keys(tasks).map((task) => (
          <div key={task} className={styles.taskItem}>
            <input
              type="checkbox"
              id={task}
              checked={tasks[task]}
              onChange={() => handleCheckboxChange(task)}
            />
            <label htmlFor={task}>{task.replace(/([A-Z])/g, " $1")}</label>
            <button
              className={styles.deleteButton}
              onClick={() => confirmDeleteTask(task)}
            ></button>
          </div>
        ))}

        <h2>Tarefas finalizadas</h2>

        {Object.keys(tasks)
          .filter((task) => tasks[task])
          .map((task) => (
            <div
              key={task}
              className={`${styles.taskItem} ${styles.completedTask}`}
            >
              <input
                type="checkbox"
                id={task}
                checked={tasks[task]}
                onChange={() => handleCheckboxChange(task)}
              />
              <label htmlFor={task}>{task.replace(/([A-Z])/g, " $1")}</label>
              <button
                className={styles.deleteButton}
                onClick={() => confirmDeleteTask(task)}
              ></button>
            </div>
          ))}

        <button className={styles.button} onClick={() => setModalOpen(true)}>
          Adicionar nova tarefa
        </button>

        <Modal
          isOpen={isModalOpen}
          onClose={() => setModalOpen(false)}
          onAddTask={addTask}
        />
        
        <ModalDelete
          isOpen={isDeleteModalOpen}
          onClose={() => setDeleteModalOpen(false)}
          onDelete={deleteTask}
        />
      </div>
    </main>
  );
}
