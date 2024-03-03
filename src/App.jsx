import paymands from './paymands.json'
import './App.css'

import { Linter } from 'eslint';
import { PaymandList } from './components/PaymandList/PaymandList';






export default function App() {

  // const username = 'Grigoryj';
  return (
   <>
   {/* <Paymand data={data1}/>
   <hr />
   <Paymand  data={data2}/> */}
   {/* <p>{3 > 2 ? <Paymand data={data1}/> : <Paymand  data={data2}/>}</p> */}
  

  <PaymandList/>
   </>
  //     <>
  //     <p>Hello, Word, my name {username}</p>
  //     <h1>Vite + React Sashka do it</h1>
  //     <button>Ckick</button>
  //     </>
      
  );
}


