const divStyles = {
  borderRadius: "21px",
  padding: 10,
  position: "fixed",
};

const ContextMenu = ({ onContextMenuHide, positionY, positionX, background, content }) => {
  const onContextClick = (e, action) => {
    e.stopPropagation();
    console.log(action);
    onContextMenuHide();
  };

  return (
    <div
      onClick={(e) => e.stopPropagation()}
      onContextMenu={(e) => e.stopPropagation()}
      style={{
        ...divStyles,
        top: positionY,
        left: positionX,
        background,
      }}
    >
      <h1>{content}</h1>
      <button onClick={(e) => onContextClick(e, "edit")}>EDIT</button>
      <button onClick={(e) => onContextClick(e, "remove")}>DELETE</button>
    </div>
  );
};

export default ContextMenu;
