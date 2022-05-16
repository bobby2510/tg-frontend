import React,{useEffect,useState} from 'react'
import NavBarTwo from '../navbar/NavBarTwo';
import GenericFooter from '../footer/GenericFooter';
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import axios from 'axios'


const Decision = (props)=>{
    let {id} = useParams()
    let navigate = useNavigate()
    let [primeLoader,setPrimeLoader] = useState(false)
    let [primeTeams,setPrimeTeams] = useState(false)
    let [backupLoader,setBackupLoader] = useState(false)

    let get_player_list = ()=>{
        if(props.sportIndex===2)
            return [[],[],[],[],[]]
        else if(props.sportIndex===3)
            return [[],[],[]]
        else 
            return [[],[],[],[]]
    }

    useEffect(()=>{
        if(props.reload === null)
        {
            navigate('/')
            return
        }
        if(props.login === false)
        {
            navigate('/login')
            return 
        }
        if(props.plan === false)
        {
            navigate('/plandata')
        }
       
            axios.get(`${props.backend}/api/fantasy/match/${id}`)
            .then((response)=>{
                let m_data = response.data.data 
                let player_list = get_player_list()
                props.setLeftName(m_data.left_team_name)
                props.setRightName(m_data.right_team_name)
                props.setLeftImage(m_data.left_team_image)
                props.setRightImage(m_data.right_team_image)
                props.setMatchId(id)  
                m_data.left_team_players.forEach((player)=>{
                    player.selected = 0
                    player_list[player.role].push(player)
                })
                m_data.right_team_players.forEach((player)=>{
                    player.selected = 0
                    player_list[player.role].push(player)
                })
                // setPlayerList 
                props.setPlayerList(player_list)
            })

            //calling second api 
            axios.get(`${props.backend}/api/primeteam/getdata/${id}/${props.phoneNumber}`)
            .then((response)=>{
                if(response.status === 200)
                {
                    props.setPrimeFetchedData(response.data)
                    setPrimeTeams(response.data.primeTeams)
                    setPrimeLoader(true)
                }
                else 
                {
                    setBackupLoader(true)
                }
            }) 
    },[])

    return (
        <React.Fragment>
            <NavBarTwo navigate ={navigate} />
            <div className="mini-container">
            <h4 className="sub-heading mb-4">Choose Here</h4>
            {/*prime user stuff here only */}
            {props.primeUser && props.primePlan &&  props.primeMatchList.indexOf(id.toString()) !== -1  ?
                <React.Fragment>
                { primeTeams === true ? 
                        <div className='section-card'>
                            <img className="section-image" src="/primeteam.jpg" alt="prime" />
                            <button onClick={()=>{ navigate('/primedisplay')}} className='btn section-btn' style={{backgroundColor:'purple',color:'white'}}>Continue</button>
                        </div>
                    : 
                    <React.Fragment>
                    {backupLoader === true? 
                        <div className='section-card'>
                            You didn't book Prime Teams.
                        </div>
                        :
                        <div className='section-card'>
                        <div class="spinner-border" role="status">
                            <span class="sr-only"></span>
                        </div>
                    </div>
                    }
                    </React.Fragment>
                }
               
                </React.Fragment>
                :
                null
            }
                <div className='section-card'>
                    <div className="card-start-part" style={{display:"flex",alignItems:"center",justifyContent:"space-between"}}>
                    <br/>
                    </div>
                    <img className="section-image" src="/generator.jpg" alt="generator" />
                    <button onClick={()=>{ navigate(`/match/${id}`)}} className='btn btn-success section-btn'>Continue</button>

                </div>
                <div className='section-card'>
                    <div className="card-start-part" style={{display:"flex",alignItems:"center",justifyContent:"space-between"}}>
                    <br/>
                    </div>
                    <img className="section-image" src="/expert.jpg" alt="expert" />
                    <button onClick={()=>{ navigate(`/expertpanel/${id}`) }} className='btn btn-primary section-btn'>Continue</button>

                </div>
            </div>
            <GenericFooter />
        </React.Fragment>
    );
}

export default Decision;