import styles from './Modal.module.css';

const Backdrop = (props) => {
	return (
		<div className={styles.backdrop}>{props.children}</div>
	)
}

const Modal = (props) => {
	return (
		<Backdrop>
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