import './App.css';
import ListItem from './Components/ListItem/ListItem';
import ContextMenu from './Components/ContextMenu/ContextMenu';
import { useEffect, useState } from 'react';

const STATIC_DATA = [
  { title: "Leqso", color: "green", id: 1 },
  { title: "Kalduna", color: "indigo", id: 2 },
  { title: "Zaxarich", color: "blue", id: 3 },
  { title: "Katamadze", color: "yellow", id: 4 },
  { title: "Shemogevle", color: "seagreen", id: 5 },
  { title: "Onger", color: "orange", id: 6 },
  { title: "Siko", color: "tomato", id: 7 },
  { title: "Sklinta", color: "gray", id: 8 },
  { title: "afton", color: "pink", id: 9 },
  { title: "vano gejadze", color: "silver", id: 10 },
];

function App() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [showContextMenu, setShowContextMenu] = useState(false);
  const [contextMenuData, setContextMenuData] = useState({});

  const onMouseRightClick = (e, liData) => {
    console.log('e', e)
    e.preventDefault();
    setShowContextMenu(true);
    setContextMenuData(liData);
    setPosition({ x: e.pageX, y: e.pageY });
  };

  // hide menu
  const handleContextMenuHide = () => {
    setShowContextMenu(false);
    setPosition({ x: 0, y: 0 });
    setContextMenuData({});
  };

  useEffect(() => {
    const windowContextMenuHide = (e) => {
      e.preventDefault();
      handleContextMenuHide();
    }
    window.addEventListener('click', () => handleContextMenuHide());
    window.addEventListener('contextmenu', windowContextMenuHide);

    return () => {
      window.removeEventListener('click', () => handleContextMenuHide());
      window.removeEventListener('contextmenu', windowContextMenuHide)
    }
  }, [])

  return (
    <div className="App">
      {showContextMenu && (
        <ContextMenu
          onContextMenuHide={handleContextMenuHide}
          positionX={position.x}
          positionY={position.y}
          content={contextMenuData.title}
          background={contextMenuData.color}
        />
      )}
      <ul onContextMenu={(e) => e.stopPropagation()}>
        {STATIC_DATA.map(item => (
          <ListItem onContextMenu={(e) => onMouseRightClick(e, item)} key={item.id} background={item.color} text={item.title} />
        ))}
      </ul>
    </div>
  );
}

export default App;
