import React from 'react'
import styled from 'styled-components'

import heartOutlineIcon from '../../ui/heart-outline.svg'

import heartIcon from '../../ui/heart-icon.svg'

export const Picture = (props) => {
  const { picture, favoritesIDs, setFavorite } = props
  const isFavorite = favoritesIDs.includes(picture.id)
  const title = picture.title.length > 25 ? `${picture.title.slice(0, 23)}...` : picture.title
  return (
    <PictureWrapper>
      <div>{title}</div>
      <StyledImage src={picture.thumbnailUrl}>
        <StyledFaveCta isFavorite={isFavorite} onClick={() => setFavorite(picture.id)} />
      </StyledImage>
    </PictureWrapper>
  )
}

export default Picture


export const StyledImage = styled.div`
  height: 150px;
  background: ${({ src }) => `url(${src})`};
  position: relative;
  background-position: center;
  width: 150px;
  background-repeat: no-repeat;
  margin: auto;
`
const PictureWrapper = styled.div`
  height: 180px;
  margin: auto;
  margin-bottom: 6px;
`
export const StyledFaveCta = styled.div`
  position: absolute;
  top: 10px;
  right: 10px;
  width: 28px;
  height: 28px;
	background-image: url("${({ isFavorite }) => (isFavorite ? heartIcon : heartOutlineIcon)}");
	background-position: top right;
	background-repeat: no-repeat;
	background-size: 28px;
	width: 28px;
	height: 28px;
  cursor: pointer;
`