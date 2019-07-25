import React from 'react'
import styled from 'styled-components'

import heartOutlineIcon from '../../ui/heart-outline.svg'

import heartIcon from '../../ui/heart-icon.svg'

export const Picture = (props) => {
  const { picture} = props

  return (
    <PictureWrapper>
      <StyledImage src={picture.thumbnailUrl}>
        <StyledFaveCta onClick={() => console.log(picture.id)} />
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