import React, { Fragment } from 'react'
import Picture from './Picture'

export const Pictures = (props) => {
  const { pictures, favoritesIDs, setFavorite } = props
  return (
    <Fragment>
      {pictures.map(picture => <Picture key={picture.id} picture={picture} favoritesIDs={favoritesIDs} setFavorite={setFavorite} />)}
    </Fragment>
  )

}

export default Pictures        