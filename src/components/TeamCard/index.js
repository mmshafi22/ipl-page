import {Link} from 'react-router-dom'
import './index.css'

const TeamCard = props => {
  const {team} = props
  const {id, name, teamImageUrl} = team

  return (
    <Link to={`/team-matches/${id}`} className="team-link">
      <li className="team-card">
        <img src={teamImageUrl} alt={name} />
        <p>{name}</p>
      </li>
    </Link>
  )
}

export default TeamCard
