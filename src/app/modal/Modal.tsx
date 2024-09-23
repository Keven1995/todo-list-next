import { useState } from "react";
import styles from "../styles/styles.module.scss";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  onAddTask: (task: string) => void;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, onAddTask }) => {
  const [taskName, setTaskName] = useState("");

  const handleAddTask = () => {
    onAddTask(taskName);
    setTaskName("");
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modalContent}>
        <h2 className={styles.modalTitle}>Nova Tarefa</h2>
        <p className={styles.modalSubTitle}> Titulo</p>
        <input
          type="text"
          value={taskName}
          onChange={(e) => setTaskName(e.target.value)}
          placeholder="Digite"
        />
        <div className={styles.modalButtons}>
          <button className={styles.cancelButton} onClick={onClose}>
            Cancelar
          </button>

          <button className={styles.button} onClick={handleAddTask}>
            Adicionar
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
