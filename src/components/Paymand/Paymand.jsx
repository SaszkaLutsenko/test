export const Paymand = ({data: {amount, description, cardNumber, cardType, cardOwner, date}}) =>{

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
    )}