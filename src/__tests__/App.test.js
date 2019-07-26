import React from 'react';
import ReactDOM from 'react-dom';
import { shallow, mount } from 'enzyme'
import { App, TabItem } from '../components/App';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { create } from 'react-test-renderer'

import { Pictures } from '../components/Pictures'

import { fetchPictures, setFavoritePic } from '../api'
configure({ adapter: new Adapter() });

jest.mock('../api');

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
describe('App', () => {
  let apiMockActions;
  let wrapper
  beforeEach(() => {
    apiMockActions = {
      fetchPictures: jest.fn(),
      getFavorites: jest.fn()
    };
  });
  beforeEach(() => {
    wrapper = shallow(<App {...apiMockActions} />, { disableLifecycleMethods: true });
  });

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
  it('should match snapshot', () => {
    const c = create(<App />);
    expect(c.toJSON()).toMatchSnapshot();
  })
  it('calls fetchPictures on componentDidMount', async () => {
    const wrapper = shallow(<App fetchPictures={jest.fn()} />, { disableLifecycleMethods: false });
    expect(fetchPictures).toHaveBeenCalled();
  })

  it('creates Pictures on componentDidMount', async () => {
    const wrapper = shallow(<App />);
    wrapper.instance();
    wrapper.setState({ pictures })
    expect(wrapper.find(Pictures)).toBeDefined();
  })

  it('should call changeTab on click of Favorites', () => {
    wrapper = mount(<App />);
    const spy = jest.spyOn(wrapper.instance(), 'changeTab');
    wrapper.find(TabItem).at(1).simulate('click', 'using prototype');
    expect(spy).toHaveBeenCalled();
  })
  it('should call changeTab on click of All', () => {
    wrapper = mount(<App />);
    const spy = jest.spyOn(wrapper.instance(), 'changeTab');
    wrapper.find(TabItem).at(0).simulate('click', 'using prototype');
    expect(spy).toHaveBeenCalled();
  })

  it('should call changeTab when favorite is clicked', () => {
    wrapper = mount(<App />);
    wrapper.instance().setFavorite(1)
    expect(setFavoritePic).toHaveBeenCalled();
  })
})
