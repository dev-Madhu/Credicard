// Style your elements here
import styled from 'styled-components/macro'

export const MainContainer = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
`
export const CreditMode = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  background-color: #3b4b69;
  min-height: 100vh;
  width: 50%;
`

export const CreditCode = styled.div`
  background-image: url('https://assets.ccbp.in/frontend/hooks/credit-card-bg.png');
  width: 80%;
  height: 300px;
  padding: 20px;
  display: flex;
  border-radius: 20px;
  flex-direction: column;
  justify-content: flex-end;
`

export const CreditHeading = styled.h1`
  font-size: 30px;
  font-weight: bold;
  font-family: 'Roboto';
  color: #fff;
  border-bottom: 2px solid #ffd773;
`

export const CreditCardNumber = styled.h1`
  font-size: 36px;
  font-weight: 600;
  color: #fff;
  font-family: 'Roboto';
`
export const CardholderValue = styled.p`
  color: #ffffff;
  font-family: 'Roboto';
  font-weight: 500;
  font-size: 12px;
  margin: 0px;
  margin-top: 7px;
  min-height: 16px;
  line-height: 1.33;
  @media screen and (min-width: 768px) {
    font-size: 18px;
    margin-top: 12px;
    min-height: 28px;
    line-height: 1.5;
  }
  @media screen and (min-width: 992px) {
    font-size: 24px;
    min-height: 36px;
  }
`
export const PaymentMode = styled.div`
  background-color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 50%;
  height: 100vh;
`
export const PaymentCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: transparent;
  width: 80%;
  height: 250px;
  border-radius: 10px;
  box-shadow: 0px 4px 16px #bfbfbf;
`
export const Heading = styled.h1`
  font-size: 24px;
  font-weight: bold;
  color: #344e7a;
  font-family: 'Roboto';
`

export const CardholderTitle = styled.p`
  font-size: 24px;
  font-family: 'Roboto';
  color: #fff;
`

export const CardNumber = styled.input`
  height: 40px;
  width: 80%;
  color: #475569;
  font-size: 20px;
  padding: 4px 8px;
  border-radius: 4px;
  border: 1px solid #000;
  margin-bottom: 20px;
  background-color: transparent;
`
