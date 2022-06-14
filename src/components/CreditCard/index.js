// Write your code here
import {useState} from 'react'
import {
  MainContainer,
  CreditMode,
  CreditCode,
  CreditHeading,
  CreditCardNumber,
  CardholderTitle,
  CardholderValue,
  PaymentMode,
  Heading,
  CardNumber,
  PaymentCard,
} from './styledComponents'

const CreditCard = () => {
  const [cardNumber, setCardNumber] = useState('')
  const [cardholderName, setCardHolderName] = useState('')
  const cardholderNameInUppercase = cardholderName.toUpperCase()

  const onChangeCardNumber = event => {
    setCardNumber(event.target.value)
  }

  const onChangeCardholder = event => {
    setCardHolderName(event.target.value)
  }

  return (
    <MainContainer>
      <CreditMode>
        <CreditHeading>CREDIT CARD</CreditHeading>
        <CreditCode data-testid="creditCard">
          <CreditCardNumber>{cardNumber}</CreditCardNumber>
          <CardholderTitle>CARDHOLDER NAME</CardholderTitle>
          <CardholderValue>{cardholderNameInUppercase}</CardholderValue>
        </CreditCode>
      </CreditMode>
      <PaymentMode>
        <PaymentCard>
          <Heading>Payment Method</Heading>
          <CardNumber
            type="text"
            placeholder="Card Number"
            value={cardNumber}
            onChange={onChangeCardNumber}
          />
          <CardNumber
            type="text"
            value={cardholderName}
            placeholder="Cardholder Name"
            onChange={onChangeCardholder}
          />
        </PaymentCard>
      </PaymentMode>
    </MainContainer>
  )
}
export default CreditCard
