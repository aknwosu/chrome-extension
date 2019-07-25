import React, { Component } from 'react';
import styled from 'styled-components'
import { fetchPictures } from '../api'
import Pictures from './pictures'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      pictures: [],
      isLoading: false
    }
  }
  async componentDidMount() {
    this.setState({ isLoading: true })
    try {
      const pics = await fetchPictures()
      this.setState({ pictures: pics.slice(0, 20), isLoading: false })
    } catch (error) {

    }
  }
  render() {
    const { isLoading, pictures } = this.state
    return (
      <Container>
        {isLoading && <div>Loading...</div>}
        {!isLoading && <Pictures pictures={pictures} />}
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
`