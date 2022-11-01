const ListItem = (props) => {
    return (
        <li onClick={() => console.log('j')} style={{ background: props.background }}>{props.text}</li>
    )
}

export default ListItem;