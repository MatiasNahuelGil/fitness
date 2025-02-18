import React from 'react'

const Button = ({textButton,background, border, animation}) => {
  return (
    <button className={`w-60 h-20 ${background} ${border} ${animation} p-5 border-2 cursor-pointer button-animation`}>
      {textButton}
    </button>
  )
}

export default Button
