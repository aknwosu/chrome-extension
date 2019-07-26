import React from 'react';
import { shallow, mount } from 'enzyme'
import { Picture, StyledFaveCta } from '../components/Pictures/Picture'
import { create } from 'react-test-renderer'


const picture = {
  "albumId": 1,
  "id": 2,
  "title": "reprehenderit est deserunt velit ipsam",
  "url": "https://via.placeholder.com/600/771796",
  "thumbnailUrl": "https://via.placeholder.com/150/771796"
}

describe('Picture', () => {
  let wrapper;
  const favoritesIDs = [2]
  const setFavorite = jest.fn()
  const comp = <Picture picture={picture} favoritesIDs={favoritesIDs} setFavorite={setFavorite} />
  beforeEach(() => {
    wrapper = shallow(comp).dive()
  })
  it('should match snapshot', () => {
    const c = create(comp);
    expect(c.toJSON()).toMatchSnapshot();
  })

  it('should call setFavorite on click of CTA', () => {
    wrapper.find(StyledFaveCta).simulate('click');
    expect(setFavorite).toHaveBeenCalled();
  })

  it('should chek if the picture ia a favorite', () => {  
    let favorited = wrapper.find(StyledFaveCta).props().isFavorite
    expect(favorited).toBe(true);
  })

  it('should call check is the picture has not been favorited', () => {
    let newWrapper = mount(<Picture picture={picture} favoritesIDs={[]} setFavorite={setFavorite} />)
    let favorited = newWrapper.find(StyledFaveCta).props().isFavorite
    expect(favorited).toBe(false);
  })
})