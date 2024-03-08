
import './App.css'
import Counter from './Counter'
import Friends from './Friends'
import Team from './Team'
import Users from './Users'

function App() {
  function handleClick (){
    alert('oi')
  }
const handleClick2 = ()=>{
  alert('button click 2')
}
const addToFive = (num)=>{
  alert(num + 5);
}
  return (
    <>
      <h1>React Core Concepts 2</h1>
      <Friends></Friends>
      <Users></Users>
      <Team></Team>
      <Counter></Counter>
      <button onClick={handleClick}>Click me</button>
      <button onClick={handleClick2}>Click me 2</button>
      <button onClick={()=>{alert('third click')}}>Click me 3</button>

      <button onClick={()=>addToFive(3)}>Four</button>
      
    </>
  )
}

export default App
