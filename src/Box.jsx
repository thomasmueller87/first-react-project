import './Box.css'

function Box({backcolor, text}) {

    const colorMap = {
        'red': 'box-red',
        'green': 'box-green',
        'blue': 'box-blue',
        'default': 'box-grey'
    }

    
    const className = colorMap[backcolor] ?? colorMap['default']

    return <div className={className}>{text}</div>
}

export default Box;
