import React from 'react';

import { Pictures } from '../components/Pictures/'
import { Picture } from '../components/Pictures/Picture'
import { shallow } from 'enzyme';

const pictures = [
  {
    "albumId": 1,
    "id": 1,
    "title": "accusamus beatae ad facilis cum similique qui sunt",
    "url": "https://via.placeholder.com/600/92c952",
    "thumbnailUrl": "https://via.placeholder.com/150/92c952"
  },
  {
    "albumId": 1,
    "id": 2,
    "title": "reprehenderit est deserunt velit ipsam",
    "url": "https://via.placeholder.com/600/771796",
    "thumbnailUrl": "https://via.placeholder.com/150/771796"
  }
]
describe ('Pictures', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<Pictures pictures={pictures}/>)
  })
  
  it('should render Pictures', () => {
    expect(wrapper.find(Picture)).toBeDefined()
  })
})