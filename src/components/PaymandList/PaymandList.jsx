import { Paymand } from "../Paymand/Paymand"

export const PaymandList = () =>{
    return(
        <ul>
        {paymands.map((paymand) => (
          <li key={paymand.id}>
            <Paymand data={paymand}/>
            </li>
        ))}
      </ul>
    )
}