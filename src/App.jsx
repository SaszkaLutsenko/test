import paymand from './paymand.json'
import './App.css'


const Paymand = ({data: {amount, description, cardNumber, cardType, cardOwner, date}}) => {

  return(
    <div>
      <p>Amount:{amount}</p>
      <p>Status of paid of Paimant:{}</p>
      <p>Description:{description}</p>
      <p>Card Number:{cardNumber}</p>
      <p>Card Type:{cardType}</p>
      <p>Card Honer Name:{cardOwner}</p>
      <p>Paymend Date:{date}</p>
    </div>
  )
}


export default function App() {
  // const username = 'Grigoryj';
  return (
   <>
   {/* <Paymand data={data1}/>
   <hr />
   <Paymand  data={data2}/> */}
   <p>{3 > 2 ? <Paymand data={data1}/> : <Paymand  data={data2}/>}</p>
   </>
  //     <>
  //     <p>Hello, Word, my name {username}</p>
  //     <h1>Vite + React Sashka do it</h1>
  //     <button>Ckick</button>
  //     </>
      
  );
}


