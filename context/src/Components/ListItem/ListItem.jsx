const ListItem = (props) => {
    return (
        <li onContextMenu={props.onContextMenu} onClick={() => console.log('j')} style={{ background: props.background }}>{props.text}</li>
    )
}

export default ListItem;