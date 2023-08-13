import logo from './logo.svg';
import './App.css';

function Person(props){
  return(
    <div>
      <p>{props.name}</p>
      <p>{props.age}</p>
    </div>
  )
}

export function Button(props){
  const click = ()  => alert("hello")
  return(

    <div>

      <button onClick={click} >Click</button>

    </div>
  )
}

export function Header(props){
  return(
    <>
    <p>{props.title}</p>
    </>
  )
}
// export function List1(props){
//   return <li>{props.items}</li>
// }
export function List(props){
  const list = ["apple  ","banana  ","mango"]
  return(
    <>
    <p>{ list.map((e)=>e) }<br/> </p>
    </>
  )
}

export default Person;
