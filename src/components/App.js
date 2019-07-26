import React, { Component } from 'react';
import styled from 'styled-components'
import { fetchPictures, getFavoritedPics, setFavoritePic } from '../api'
import Pictures from './pictures'

export class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      pictures: [],
      isLoading: false,
      activeView: 'all',
      favoritesIDs: [],
    }
  }
  async componentDidMount() {
    this.setState({ isLoading: true })
    try {
      const pics = await fetchPictures()
      this.setState({
        pictures: pics.slice(0, 20),
        favoritesIDs: getFavoritedPics(),
        isLoading: false
      })
    } catch (error) {

    }
  }

  setFavorite = (id) => {
    setFavoritePic(id)
    this.setState({ favoritesIDs: getFavoritedPics() })
  }

  changeTab = (newTab) => {
    if (this.state.activeView !== newTab) {
      this.setState({ activeView: newTab })
    }

  }

  render() {
    let { activeView, pictures, favoritesIDs, isLoading } = this.state
    if (activeView === 'favorites') {
      pictures = pictures.filter(picture => favoritesIDs.includes(picture.id))
    }
    return (
      <Container>
        <Tab className="view-tabs">
          <TabItem isActive={activeView === 'all'} onClick={() => this.changeTab('all')}>All</TabItem>
          <TabItem isActive={activeView === 'favorites'} onClick={() => this.changeTab('favorites')}>Favorites</TabItem>
        </Tab>
        {isLoading && <div>Loading...</div>}
        {!isLoading && pictures.length > 0 && <Pictures pictures={pictures} favoritesIDs={favoritesIDs} setFavorite={this.setFavorite} />}
        {activeView === 'favorites' && pictures.length < 1 && <div>When you have favorites, they will appear here</div>}
      </Container>
    );
  }
}

export default App;

const Container = styled.div`
  text-align: center;
  background-color: #FBFBFD;
  height: 500px;
  overflow: scroll;
  margin: auto;
  width: 200px;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto";
`
const Tab = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  > div {
    flex: 1
  }
  :nth-child(0) {
    border-right: 1px solid black
  }
`
export const TabItem = styled.div`
	color: ${({ isActive }) => isActive && 'green'};
`
