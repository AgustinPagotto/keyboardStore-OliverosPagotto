import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
//import ItemCount from './components/ItemCount/ItemCount';

function App() {
  //const onAdd = () =>{
  //  console.log("congratulations you just added this to the cart!!");
  //}

  return (
    <>
      <NavBar/>
      <ItemListContainer/>
      {
        //<ItemCount stock={10} initial={2} onAdd={onAdd} />
      }
    </>
  );
}

export default App;
