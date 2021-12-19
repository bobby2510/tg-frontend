import React,{useState} from 'react' 
import { useEffect } from 'react/cjs/react.development';
import { useNavigate } from 'react-router';


const PreviousMatchCard = (props)=>{
    const match_time = new Date(props.match.time).getTime();
    const navigate = useNavigate()
    
    let now = new Date().getTime();
    let distance = now-match_time;
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
    let handleMatchCard = (id)=>
    {
        navigate(`/previousmatch/${id}`)
    }
   
    return (
        <React.Fragment>
            <div className="match-card" onClick={() => handleMatchCard(props.match.id)}>
                <div className="d-flex justify-content-between border-bottom" style={{marginLeft:10,marginRight:10}}>
                    <span className="series-name">{props.match.series_name}</span>
                    <span class="lineups">{}</span>
                </div> 
                <div className="card-middle" style={{marginLeft:10,marginRight:10}}>
                   <div className="combine-image">
                    <img className="team-image" src={props.match.left_image} alt="left" />
                    <span className="left-team-name">{props.match.left_name}</span>
                    </div>
                    <div className="timer"> {timeString} ago </div>
                   <div className="combine-image" >
                   <span className="right-team-name">{props.match.right_name}</span>
                    <img className="team-image" src={props.match.right_image} alt="right" />
                   </div>
                   
                </div>
                <div className="card-end-part">
                <span class="badge badge-outline-warning">See Teams</span>
                {props.match.result === true ? 
                <span class="badge badge-outline-success">Results Available</span>
                :
                <span class="badge badge-outline-danger">Add points to check results</span>
                }
                </div>
            </div>
        </React.Fragment>
    );
}

export default PreviousMatchCard;