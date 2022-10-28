import styles from './Modal.module.css';

const Backdrop = (props) => {
	return (
		<div className={styles.backdrop} onClick={props.onModalClose}>{props.children}</div>
	)
}

const Modal = (props) => {
	const onCloseButtonClick = (e) => {
		e.stopPropagation();
		props.onModalClose()
	}
	return (
		<Backdrop onModalClose={props.onModalClose}>
			<div onClick={(e) => e.stopPropagation()} className={styles.modalBox}>
				<div className={styles.modalHeader}>სალამი დანიელ :დ</div>
				<div>{props.modalText}</div>
				<div className={styles.modalContent}>
					<button
						onClick={onCloseButtonClick}
						className={styles.modalButton}>close
					</button>
				</div>
			</div>
		</Backdrop>
	)
}


export default Modal;