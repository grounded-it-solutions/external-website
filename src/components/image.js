import React from 'react'

const Image = (props) => {
  return <img className={props.className} src={props.src} alt={props.alt}></img>
}

export default Image