import {Component} from 'react'
import Loader from 'react-loader-spinner'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import './index.css'
import TeamCard from '../TeamCard'

class Home extends Component {
  state = {isLoading: true, teamsData: []}

  componentDidMount() {
    this.fetchTeams()
  }

  fetchTeams = async () => {
    const response = await fetch('https://apis.ccbp.in/ipl')
    const data = await response.json()
    const {teams} = data
    const updateData = teams.map(each => ({
      id: each.id,
      name: each.name,
      teamImageUrl: each.team_image_url,
    }))
    this.setState({teamsData: updateData, isLoading: false})
  }

  renderTeamCards = () => {
    const {teamsData} = this.state
    return (
      <>
        <div className="page-heading-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/ipl-logo-img.png"
            alt="ipl logo"
          />
          <h1>IPL Dashboard</h1>
        </div>
        <ul className="team-cards-list">
          {teamsData.map(each => (
            <TeamCard team={each} key={each.id} />
          ))}
        </ul>
      </>
    )
  }

  render() {
    const {isLoading} = this.state
    return (
      <div className="ipl-bg-container">
        {isLoading ? (
          <div data-testid="loader">
            <Loader type="Oval" color="#ffffff" height={50} width={50} />
          </div>
        ) : (
          this.renderTeamCards()
        )}
      </div>
    )
  }
}

export default Home
