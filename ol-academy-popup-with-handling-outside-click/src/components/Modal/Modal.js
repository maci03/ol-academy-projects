import styles from './Modal.module.css';

const Backdrop = (props) => {
	return (
		<div className={styles.backdrop} onClick={props.onModalClose}>{props.children}</div>
	)
}

const Modal = (props) => {
	return (
		<Backdrop onModalClose={props.onModalClose}>
			<div className={styles.modalBox}>
				<div className={styles.modalHeader}>bojack horseman</div>
				<div>{props.modalText}</div>
				<div className={styles.modalContent}>
					<button
						onClick={props.onModalClose}
						className={styles.modalButton}>close
					</button>
				</div>
			</div>
		</Backdrop>
	)
}


export default Modal;