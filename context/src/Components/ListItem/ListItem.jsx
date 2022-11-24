const ListItem = ({ background, text, onContextMenu }) => {
    return (
        <li
            onContextMenu={onContextMenu}
            onClick={() => console.log('j')}
            style={{ background }}>
            {text}
        </li>
    );
};

export default ListItem;