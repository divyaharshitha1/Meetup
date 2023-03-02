import {Component} from 'react'
import {Switch, Route} from 'react-router-dom'

import Home from './components/Home'
import Register from './components/Register'
import NotFound from './components/NotFound'
import TopicsContext from './context/TopicsContext'

const topicsList = [
  {
    id: 'ARTS_AND_CULTURE',
    displayText: 'Arts and Culture',
  },
  {
    id: 'CAREER_AND_BUSINESS',
    displayText: 'Career and Business',
  },
  {
    id: 'EDUCATION_AND_LEARNING',
    displayText: 'Education and Learning',
  },
  {
    id: 'FASHION_AND_BEAUTY',
    displayText: 'Fashion and Learning',
  },
  {
    id: 'GAMES',
    displayText: 'Games',
  },
]

class App extends Component {
  state = {userName: '', selectedOption: '', topicsListDetails: topicsList}

  updateDetails = (name, option) => {
    this.setState({userName: name, selectedOption: option})
  }

  render() {
    const {userName, selectedOption, topicsListDetails} = this.state
    return (
      <TopicsContext.Provider
        value={{
          userName,
          selectedOption,
          updateDetails: this.updateDetails,
          topicsListDetails,
        }}
      >
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/register" component={Register} />
          <Route path="/bad-path" component={NotFound} />
        </Switch>
      </TopicsContext.Provider>
    )
  }
}

export default App
