import { Component } from 'react'
import SimpleCounterComponent from './components/SimpleCounterComponent'
import PureCounterComponent from './components/PureCounterComponent'
import './App.css'

export default class App extends Component {
  render() {
    return(
      <> 
      <SimpleCounterComponent/>
      <PureCounterComponent/>
      </>
    )
  }
}
