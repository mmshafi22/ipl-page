import {Component} from 'react'
import './index.css'
import Loader from 'react-loader-spinner'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

class TeamMatches extends Component {
  state = {isLoading: true, teamDetails: []}

  componentDidMount() {
    this.fetchTeamDetails()
  }

  fetchTeamDetails = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    const response = await fetch(`https://apis.ccbp.in/ipl/${id}`)
    const data = await response.json()
    const formatData = {
      teamBannerUrl: data.team_banner_url,
      latest_match_details: data.latest_match_details,
      recentMatches: data.recent_matches,
    }
    this.setState({teamDetails: formatData, isLoading: false})
  }

  renderTeamDetails = () => {
    const {teamDetails} = this.state
    console.log(teamDetails)
  }

  render() {
    const {match} = this.props
    const {params} = match
    const {id} = params
    const {isLoading} = this.state
    return (
      <div className={`team-detail-container ${id}`}>
        {isLoading ? (
          <div data-testid="loader" className="spinner">
            <Loader type="Oval" color="#ffffff" height={50} />
          </div>
        ) : (
          this.renderTeamDetails()
        )}
      </div>
    )
  }
}

export default TeamMatches
