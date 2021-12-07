import './Button.css'

function Button({isLarge, text}) {
    const buttonClass = isLarge ? 'button button--large' : 'button'
    return <button className={buttonClass}>{text}</button>;
  }

  export default Button;
