const divStyles = {
  borderRadius: '21px',
  padding: 10,
  position: 'fixed',
};

const ContextMenu = (props) => {
  const onContextClick = (e, action) => {
    e.stopPropagation();
    console.log(action);
    props.onContextMenuHide();
  };

  return (
    <div
      onClick={(e) => e.stopPropagation()}
      style={{ ...divStyles, top: props.y, left: props.x, background: props.background }}
    >
      <h1>{props.content}</h1>
      <button onClick={(e) => onContextClick(e, 'edit')}>EDIT</button>
      <button onClick={(e) => onContextClick(e, 'remove')}>DELETE</button>
    </div>
  )
};

export default ContextMenu;
