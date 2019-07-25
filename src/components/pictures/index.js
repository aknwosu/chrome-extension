import React, { Fragment } from 'react'

export const Pictures = (props) => {
  const { pictures } = props
  return (
    <div>
      {pictures.map(picture => <div key={picture.id}>{picture.title}</div>)}
    </div>
  )

}

export default Pictures        