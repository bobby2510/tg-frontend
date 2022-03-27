import React,{useEffect,useState} from 'react'
import { useParams } from "react-router";
import {useNavigate} from 'react-router-dom'
import NavBarTwo from '../navbar/NavBarTwo';
import {MdIosShare , MdAddBox } from 'react-icons/md'
import { toast } from 'react-toastify';
import TeamArena from './TeamArena';
import ShareTeam from './ShareTeam';

const ShareHuman = (props)=>{
    let player_list = [
        [
            {
                "name": "Hyron Shallow",
                "image": "https://d13ir53smqqeyp.cloudfront.net/player-images/default-player-image.png",
                "playing": 1,
                "role": 0,
                "credits": 9,
                "points": 71,
                "selected_by": 50.49,
                "team_index": 1,
                "team_name": "GRD",
                "player_index": 23,
                "player_fixed_id": 36113,
                "selected": 0
            },
            {
                "name": "Ozico Williams",
                "image": "https://d13ir53smqqeyp.cloudfront.net/player-images/default-player-image.png",
                "playing": 0,
                "role": 0,
                "credits": 8.5,
                "points": 0,
                "selected_by": 1.32,
                "team_index": 0,
                "team_name": "FCS",
                "player_index": 13,
                "player_fixed_id": 53662,
                "selected": 0
            },
            {
                "name": "Casmus Hackshaw",
                "image": "https://d13ir53smqqeyp.cloudfront.net/player-images/default-player-image.png",
                "playing": 0,
                "role": 0,
                "credits": 8.5,
                "points": 106,
                "selected_by": 87.27,
                "team_index": 0,
                "team_name": "FCS",
                "player_index": 7,
                "player_fixed_id": 36100,
                "selected": 0
            }
        ],
        [
            {
                "name": "Shem Browne",
                "image": "https://d13ir53smqqeyp.cloudfront.net/player-images/default-player-image.png",
                "playing": 0,
                "role": 1,
                "credits": 9,
                "points": 65,
                "selected_by": 87.9,
                "team_index": 1,
                "team_name": "GRD",
                "player_index": 19,
                "player_fixed_id": 36080,
                "selected": 0
            },
            {
                "name": "Crystian Thurton",
                "image": "https://d13ir53smqqeyp.cloudfront.net/player-images/default-player-image.png",
                "playing": 0,
                "role": 1,
                "credits": 9,
                "points": 0,
                "selected_by": 2.78,
                "team_index": 0,
                "team_name": "FCS",
                "player_index": 14,
                "player_fixed_id": 105550,
                "selected": 0
            },
            {
                "name": "Sealroy Williams",
                "image": "https://d13ir53smqqeyp.cloudfront.net/player-images/default-player-image.png",
                "playing": 0,
                "role": 1,
                "credits": 9,
                "points": 47,
                "selected_by": 25.94,
                "team_index": 0,
                "team_name": "FCS",
                "player_index": 9,
                "player_fixed_id": 36136,
                "selected": 0
            },
            {
                "name": "Donwell Hector",
                "image": "https://d13ir53smqqeyp.cloudfront.net/player-images/default-player-image.png",
                "playing": 0,
                "role": 1,
                "credits": 9,
                "points": 34,
                "selected_by": 2.23,
                "team_index": 0,
                "team_name": "FCS",
                "player_index": 4,
                "player_fixed_id": 36091,
                "selected": 0
            },
            {
                "name": "Kody Horne",
                "image": "https://d13ir53smqqeyp.cloudfront.net/player-images/default-player-image.png",
                "playing": 0,
                "role": 1,
                "credits": 8.5,
                "points": 0,
                "selected_by": 0.7,
                "team_index": 1,
                "team_name": "GRD",
                "player_index": 24,
                "player_fixed_id": 36128,
                "selected": 0
            },
            {
                "name": "Roland Cato",
                "image": "https://d13ir53smqqeyp.cloudfront.net/player-images/default-player-image.png",
                "playing": 0,
                "role": 1,
                "credits": 8.5,
                "points": 100,
                "selected_by": 94.15,
                "team_index": 1,
                "team_name": "GRD",
                "player_index": 16,
                "player_fixed_id": 23186,
                "selected": 0
            },
            {
                "name": "Miles Bascombe",
                "image": "https://d13ir53smqqeyp.cloudfront.net/player-images/default-player-image.png",
                "playing": 0,
                "role": 1,
                "credits": 8.5,
                "points": 95,
                "selected_by": 94.44,
                "team_index": 0,
                "team_name": "FCS",
                "player_index": 11,
                "player_fixed_id": 36491,
                "selected": 0
            },
            {
                "name": "Christroy John",
                "image": "https://d13ir53smqqeyp.cloudfront.net/player-images/default-player-image.png",
                "playing": 0,
                "role": 1,
                "credits": 8.5,
                "points": 0,
                "selected_by": 0.42,
                "team_index": 0,
                "team_name": "FCS",
                "player_index": 5,
                "player_fixed_id": 36094,
                "selected": 0
            },
            {
                "name": "Vedol Edwards",
                "image": "https://d13ir53smqqeyp.cloudfront.net/player-images/default-player-image.png",
                "playing": 0,
                "role": 1,
                "credits": 8,
                "points": 12,
                "selected_by": 2.78,
                "team_index": 1,
                "team_name": "GRD",
                "player_index": 29,
                "player_fixed_id": 106952,
                "selected": 0
            },
            {
                "name": "Irvin Warrican Jr.",
                "image": "https://d13ir53smqqeyp.cloudfront.net/player-images/default-player-image.png",
                "playing": 0,
                "role": 1,
                "credits": 8,
                "points": 0,
                "selected_by": 0.42,
                "team_index": 1,
                "team_name": "GRD",
                "player_index": 26,
                "player_fixed_id": 72283,
                "selected": 0
            }
        ],
        [
            {
                "name": "Denson Hoyte",
                "image": "https://d13ir53smqqeyp.cloudfront.net/player-images/default-player-image.png",
                "playing": 0,
                "role": 2,
                "credits": 9.5,
                "points": 25,
                "selected_by": 3.89,
                "team_index": 1,
                "team_name": "GRD",
                "player_index": 25,
                "player_fixed_id": 36130,
                "selected": 0
            },
            {
                "name": "Kirton Lavia",
                "image": "https://d13ir53smqqeyp.cloudfront.net/player-images/default-player-image.png",
                "playing": 0,
                "role": 2,
                "credits": 9.5,
                "points": 79,
                "selected_by": 74.55,
                "team_index": 0,
                "team_name": "FCS",
                "player_index": 8,
                "player_fixed_id": 36135,
                "selected": 0
            },
            {
                "name": "Kevin Abraham",
                "image": "https://d13ir53smqqeyp.cloudfront.net/player-images/default-player-image.png",
                "playing": 0,
                "role": 2,
                "credits": 9,
                "points": 39,
                "selected_by": 19.96,
                "team_index": 1,
                "team_name": "GRD",
                "player_index": 22,
                "player_fixed_id": 36111,
                "selected": 0
            },
            {
                "name": "Asif Hooper",
                "image": "https://d13ir53smqqeyp.cloudfront.net/player-images/default-player-image.png",
                "playing": 0,
                "role": 2,
                "credits": 9,
                "points": 184,
                "selected_by": 96.38,
                "team_index": 1,
                "team_name": "GRD",
                "player_index": 18,
                "player_fixed_id": 36075,
                "selected": 0
            },
            {
                "name": "Joshua James",
                "image": "https://d13ir53smqqeyp.cloudfront.net/player-images/default-player-image.png",
                "playing": 0,
                "role": 2,
                "credits": 9,
                "points": 239,
                "selected_by": 95.97,
                "team_index": 0,
                "team_name": "FCS",
                "player_index": 2,
                "player_fixed_id": 26454,
                "selected": 0
            },
            {
                "name": "Richie Richards",
                "image": "https://d13ir53smqqeyp.cloudfront.net/player-images/default-player-image.png",
                "playing": 0,
                "role": 2,
                "credits": 8.5,
                "points": 45,
                "selected_by": 5.7,
                "team_index": 0,
                "team_name": "FCS",
                "player_index": 3,
                "player_fixed_id": 36078,
                "selected": 0
            }
        ],
        [
            {
                "name": "Wesrick Strough",
                "image": "https://d13ir53smqqeyp.cloudfront.net/player-images/default-player-image.png",
                "playing": 0,
                "role": 3,
                "credits": 9,
                "points": 136,
                "selected_by": 93.53,
                "team_index": 1,
                "team_name": "GRD",
                "player_index": 17,
                "player_fixed_id": 32427,
                "selected": 0
            },
            {
                "name": "Rasheed Frederick",
                "image": "https://d13ir53smqqeyp.cloudfront.net/player-images/default-player-image.png",
                "playing": 0,
                "role": 3,
                "credits": 9,
                "points": 49,
                "selected_by": 9.6,
                "team_index": 0,
                "team_name": "FCS",
                "player_index": 10,
                "player_fixed_id": 36142,
                "selected": 0
            },
            {
                "name": "Braxie Browne",
                "image": "https://d13ir53smqqeyp.cloudfront.net/player-images/default-player-image.png",
                "playing": 0,
                "role": 3,
                "credits": 8.5,
                "points": 4,
                "selected_by": 2.29,
                "team_index": 1,
                "team_name": "GRD",
                "player_index": 21,
                "player_fixed_id": 36086,
                "selected": 0
            },
            {
                "name": "Geron Wyllie",
                "image": "https://d13ir53smqqeyp.cloudfront.net/player-images/default-player-image.png",
                "playing": 0,
                "role": 3,
                "credits": 8.5,
                "points": 12,
                "selected_by": 3.41,
                "team_index": 1,
                "team_name": "GRD",
                "player_index": 20,
                "player_fixed_id": 36084,
                "selected": 0
            },
            {
                "name": "Reynolly Hillocks",
                "image": "https://d13ir53smqqeyp.cloudfront.net/player-images/default-player-image.png",
                "playing": 0,
                "role": 3,
                "credits": 8.5,
                "points": 0,
                "selected_by": 0.7,
                "team_index": 0,
                "team_name": "FCS",
                "player_index": 15,
                "player_fixed_id": 107148,
                "selected": 0
            },
            {
                "name": "Preston McSween",
                "image": "https://d13ir53smqqeyp.cloudfront.net/player-images/default-player-image.png",
                "playing": 0,
                "role": 3,
                "credits": 8.5,
                "points": 32,
                "selected_by": 4.24,
                "team_index": 0,
                "team_name": "FCS",
                "player_index": 12,
                "player_fixed_id": 45523,
                "selected": 0
            },
            {
                "name": "Javid Harry",
                "image": "https://d13ir53smqqeyp.cloudfront.net/player-images/default-player-image.png",
                "playing": 0,
                "role": 3,
                "credits": 8.5,
                "points": 103,
                "selected_by": 51.74,
                "team_index": 0,
                "team_name": "FCS",
                "player_index": 6,
                "player_fixed_id": 36096,
                "selected": 0
            },
            {
                "name": "Ray Jordan",
                "image": "https://d13ir53smqqeyp.cloudfront.net/player-images/default-player-image.png",
                "playing": 0,
                "role": 3,
                "credits": 8.5,
                "points": 119,
                "selected_by": 92.07,
                "team_index": 0,
                "team_name": "FCS",
                "player_index": 1,
                "player_fixed_id": 25623,
                "selected": 0
            },
            {
                "name": "Imran Joseph",
                "image": "https://d13ir53smqqeyp.cloudfront.net/player-images/default-player-image.png",
                "playing": 0,
                "role": 3,
                "credits": 8,
                "points": 125,
                "selected_by": 94.3,
                "team_index": 1,
                "team_name": "GRD",
                "player_index": 28,
                "player_fixed_id": 74199,
                "selected": 0
            },
            {
                "name": "Kodi Grant",
                "image": "https://d13ir53smqqeyp.cloudfront.net/player-images/default-player-image.png",
                "playing": 0,
                "role": 3,
                "credits": 8,
                "points": 0,
                "selected_by": 0.63,
                "team_index": 1,
                "team_name": "GRD",
                "player_index": 27,
                "player_fixed_id": 73139,
                "selected": 0
            }
        ]
    ]
    const [teamArena,setTeamArena] = useState(false)
    const [teamNumber,setTeamNumber] = useState(1)
    const [localHumanTeams,setLocalHumanTeams] = useState([])
    let [selectedTeams,setSelectedTeams] = useState([])
    let [finalTeamData,setFinalTeamData] = useState([])
    let navigate = useNavigate()

    let get_player_list = ()=>{
        if(props.sportIndex === 2)
            return [[],[],[],[],[]]
        else if(props.sportIndex === 3)
            return [[],[],[]]
        else 
            return [[],[],[],[]]
    }

    useEffect(()=>{ 
        console.log(localHumanTeams)
        // do some stuff here 
        let final = []
        
        for(let i=0;i<localHumanTeams.length;i++)
        {
            let temp_final = get_player_list()
            let vp = localHumanTeams[i].team 
            for(let j=0;j<vp.length;j++)
            {
                for(let k=0;k<vp[j].length;k++)
                {
                    for(let p=0;p<player_list[j].length;p++)
                    {
                        let jp = player_list[j][p]
                        if(vp[j][k].player_index === jp.player_index)
                        {
                            temp_final[j].push({...jp})
                        }
                    }
                }
            }
            final.push({
                team_number: localHumanTeams[i].team_number,
                captain: localHumanTeams[i].captain,
                final_team:temp_final,
                vicecaptain : localHumanTeams[i].vicecaptain,
                credits: localHumanTeams[i].credits
            })
        }
        setFinalTeamData(final)

    },[localHumanTeams])


    let handleShareTeams = ()=>{
        if(selectedTeams.length>0)
        {
            let shareStuff = []
            for(let i=0;i<selectedTeams.length;i++)
            {
                let t_index = selectedTeams[i]
                shareStuff.push({
                    team_number: i+1,
                    captain: localHumanTeams[t_index].captain,
                    vicecaptain: localHumanTeams[t_index].vicecaptain,
                    credits:localHumanTeams[t_index].credits,
                    team:localHumanTeams[t_index].team
                })
            }
            console.log(shareStuff)
        }
        else 
        {
            toast.error('Select Atleast One Teams!',{position:'top-center'})
            return;
        }
    }



    return (
        <React.Fragment>
        <NavBarTwo navigate={navigate} />
        {teamArena === true? 
            <TeamArena 
                sportIndex = {props.sportIndex}
                playerList = {player_list}
                teamNumber = {teamNumber}
                setTeamNumber = {setTeamNumber}
                localHumanTeams = {localHumanTeams}
                setLocalHumanTeams = {setLocalHumanTeams}
                teamArena = {teamArena}
                setTeamArena = {setTeamArena}
            /> 
            : 
        <div style={{backgroundColor:'white'}}>
        <nav class=" container d-flex justify-content-around top-nav  p-2 top-fix-two" style={{maxWidth:1200,padding:0}}>
            <div onClick={()=>{}} className='sport-icon'>
            <h2 style={{color:'black'}}>{localHumanTeams.length}</h2>
                <span>Teams Created</span>
            </div>
            <div onClick={()=>{}} className='sport-icon'>
                    <h2 style={{color:'black'}}>{selectedTeams.length}</h2>
                <span>Selected Teams</span>
            </div>
            <div onClick={()=> handleShareTeams()}  className={'sport-icon'}>
                <MdIosShare style={{color:'green'}} size={36} />
                <span>Share Teams</span>
            </div>
        </nav> 
        <nav class=" container d-flex justify-content-around top-nav  p-2 top-fix-two" style={{maxWidth:1200,padding:0}}>
            <button onClick={()=>{setTeamArena(true)}} className='btn btn-primary' style={{fontWeight:500}}>
               <div className="d-flex align-items-center">
               <MdAddBox size={24} />
               <span>&nbsp;Add Team</span>
               </div>
            </button>
        </nav>
        <div className='preview-container' style={{maxWidth:1200,padding:8}}>

                <div className="card mt-2 text-center">
                    <div className='card-header d-flex justify-content-between'>
                        <h4>Select Teams to share</h4>
                    </div>
                    <div className="display-team">

                        { finalTeamData.length>0?  finalTeamData.map((team,index)=> <ShareTeam teamData = {team} sportIndex={props.sportIndex} index={index} setSelectedTeams={setSelectedTeams} selectedTeams={selectedTeams} type={0} />)
                        :
                        <span className='mt-4 p-4'>
                        Please Add Teams to see Here
                        </span>
                    }
                    </div>
                </div>
            </div>

        
        </div>
        }
        </React.Fragment>
    );
}

export default ShareHuman;