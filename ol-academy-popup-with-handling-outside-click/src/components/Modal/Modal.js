
const Backdrop = (props) => {
	return (
		<div>{props.children}</div>
	)
}

const Modal = (props) => {
	return (
		<Backdrop>
			<div>
				<div>bojack horseman</div>
				<div>{props.modalText}</div>
				<div>
					<button onClick={props.onModalClose}>close</button>
				</div>
			</div>
		</Backdrop>
	)
}


export default Modal;