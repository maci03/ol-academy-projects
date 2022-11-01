import './App.css';
import ListItem from './Components/ListItem/ListItem';

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
  return (
    <div className="App">
      <ul>
        {STATIC_DATA.map(item => <ListItem key={item.id} background={item.color} text={item.title} />)}
      </ul>
    </div>
  );
}

export default App;
