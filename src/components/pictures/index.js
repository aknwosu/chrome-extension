import React, { Fragment } from 'react'
import Picture from './Picture'

export const Pictures = (props) => {
  const { pictures } = props
  return (
    <Fragment>
      {pictures.map(picture => <Picture key={picture.id} picture={picture} />)}
    </Fragment>
  )

}

export default Pictures        