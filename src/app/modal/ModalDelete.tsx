import styles from "../styles/styles.module.scss";

interface ModalDeleteProps {
  isOpen: boolean;
  onClose: () => void;
  onDelete: () => void;
}

export default function ModalDelete({
  isOpen,
  onClose,
  onDelete,
}: ModalDeleteProps) {
  if (!isOpen) return null;

  return (
    <div className={styles.modalOverlay}>
      <div className={styles.deleteModalContent}>
        <h3 className={styles.modalTitle}>Deletar tarefa</h3>
        <p className={styles.modalMessage}>
          Tem certeza que você deseja deletar essa tarefa?
        </p>
        <div className={styles.modalButtons}>
          <button className={styles.cancelButton} onClick={onClose}>
            Cancelar
          </button>
          <button className={styles.deleteButton} onClick={onDelete}>
            Deletar
          </button>
        </div>
      </div>
    </div>
  );
}
