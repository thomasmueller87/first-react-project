import styled from 'styled-components';
import './Button.css'

function Button({isLarge, text}) {
    const buttonClass = isLarge ? 'button button--large' : 'button'
    return <Button_Style className={buttonClass}>{text}</Button_Style>;
  }

const Button_Style = styled.button`
border: 1px solid white;
border-radius: 5px;
background-color: rgba(255, 255, 255, 0.303);
font-size: 1.2rem;
padding: 0rem 1rem;
margin-left: 0.5rem;
`
  export default Button;
