import React,{useState} from 'react' 
import { useEffect } from 'react/cjs/react.development';
import { useNavigate } from 'react-router';


const MatchCard = (props)=>{

    const [time,setTime] = useState('')
    const match_time = new Date(props.match.match_time).getTime();
    const lineups = props.match.lineup_out 
    const navigate = useNavigate()
    let x = setInterval(function() {
        let now = new Date().getTime();
        let distance = match_time - now;
        let days = Math.floor(distance / (1000 * 60 * 60 * 24));
        let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        let seconds = Math.floor((distance % (1000 * 60)) / 1000);
        let timeString = ''
        if(days>0)
            timeString += days+"d "
        if(hours>0)
            timeString += hours+"h "
        if(minutes>0)
            timeString += minutes+"m "
        if(seconds>0)
            timeString += seconds+"s "
        setTime(timeString)
        if (distance < 0) {
          clearInterval(x);
          setTime("Expired")
        }
      }, 1000);
    let handleMatchCard = (id)=>
    {
        props.setSeriesName(props.match.series_name)
        navigate(`/match/${id}`)
    }
   
    return (
        <React.Fragment>
            <div className="match-card" onClick={() => handleMatchCard(props.match.id)}>
                <div className="d-flex justify-content-between border-bottom" style={{marginLeft:10,marginRight:10}}>
                    <span className="series-name">{props.match.series_name}</span>
                    <span class="lineups">{lineups? '• Lineups out' : ''}</span>
                </div> 
                <div className="card-middle" style={{marginLeft:10,marginRight:10}}>
                   <div className="combine-image">
                    <img className="team-image" src={props.match.left_team_image} alt="left" />
                    <span className="left-team-name">{props.match.left_team_name}</span>
                    </div>
                    <div className="timer"> {time} </div>
                   <div className="combine-image" >
                   <span className="right-team-name">{props.match.right_team_name}</span>
                    <img className="team-image" src={props.match.right_team_image} alt="right" />
                   </div>
                   
                </div>
                <div className="card-end-part">
                <span class="badge badge-outline-success">Mega GL</span>
                <span class="badge badge-outline-warning">SL</span>
                <span class="badge badge-outline-danger">H2H</span>
                {lineups?
                <span class="badge badge-outline-success">Auto Create</span>

                     : null}
                </div>
            </div>
        </React.Fragment>
    );
}

export default MatchCard;