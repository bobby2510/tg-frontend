import React,{useState,useEffect} from 'react' 
import NavBarTwo from '../components/navbar/NavBarTwo';
import { useNavigate } from 'react-router-dom';
import PropFooter from '../components/footer/PropFooter';
import {MdOfflinePin , MdAddTask , MdAccountCircle} from 'react-icons/md'
import { useParams } from 'react-router-dom';
import {MdRemoveCircleOutline,MdAddCircleOutline} from 'react-icons/md'
import { toast } from 'react-toastify';
import axios from 'axios';


const PostPrime = (props)=>{
    let navigate = useNavigate()
    let [primePhoneNumber,setPrimePhoneNumber] = useState([]) 
    let [teamPerUser,setTeamPerUser] = useState(0)
    let [teamUse,setTeamUse] = useState(0)

    let handleTeamPerUser = (e)=>{
        setTeamPerUser(parseInt(e.target.value))
    }
   

    useEffect(()=>{
        if(props.reload === null)
        {
            navigate('/')
            return
        }

        axios.get(`${props.backend}/api/primeplan/refresh`)
        .then ((response)=>{
            if(response.status === 200)
            {
                setPrimePhoneNumber(response.data.phoneNumberList)
                let temp = parseInt(props.primeTeamData.length/response.data.phoneNumberList.length)
                if(temp>20)
                    temp = 20
                setTeamPerUser(temp)
                setTeamUse(temp*(response.data.phoneNumberList.length))
            }
        }).catch(e=>{
            toast.error('Something went wrong!',{position:'top-center'})
            return 
        })
    },[])

    useEffect(()=>{
        setTeamUse(teamPerUser*primePhoneNumber.length)
    },[teamPerUser])

    function shuffle(array) {
        let currentIndex = array.length,  randomIndex;
        while (currentIndex !== 0) {
          randomIndex = Math.floor(Math.random() * currentIndex);
          currentIndex--;
          [array[currentIndex], array[randomIndex]] = [
            array[randomIndex], array[currentIndex]];
        }
        return array;
      }
      

    let handleContinue = ()=>{
        if(teamPerUser === null || teamPerUser === undefined || teamPerUser === '')
        {
            toast.error('Enter Proper number of teams per user!',{position:'top-center'})
            return; 
        }
        let final_number = [] 
        let temp_list = [...primePhoneNumber]
        temp_list = shuffle(temp_list)
        let start = 1
        for(let i=0;i<temp_list.length;i++)
        {
            final_number.push({
                phoneNumber: temp_list[i],
                left: start,
                right: start+teamPerUser-1
            })
            start = start+ teamPerUser;
        }
        let data = {
            matchId: props.matchId, 
            numberOfTeams: teamUse, 
            teamData: props.primeTeamData.slice(0,teamUse), 
            sportIndex: props.sportIndex, 
            primeUserData: final_number
        }
       // console.log(data)
        axios.post(`${props.backend}/api/primeteam/add`,data)
        .then((response)=>{
            if(response.status === 200)
            {
                toast.success('Prime Teams Posted Successfully!',{position:'top-center'})
                navigate('/')
                return
            }
        })
        .catch(e=>{
            toast.error('Something went wrong!',{position:'top-center'})
            return
        })
    }

    return (
        <React.Fragment>
            <NavBarTwo navigate={navigate} />
            <div className='continue-container' style={{padding:5}}>
                <div className='card text-center' >
                    <div className='card-header'> Post Prime Teams  </div>
                    <div className='card-body'>
                        <h5 className='card-title mb-4'>Fill the Data to Post Teams</h5>
                        <div className="expert-block">
                            <div className="expert-label">Teams Attached</div>
                            <div className='expert-content'>
                                <div className='expert-box' style={{padding:10,fontWeight:400,fontSize:18,display:'flex',alignItems:'center',justifyContent:'center'}}><MdOfflinePin size={24} style={{color:'green'}}/> <span>&nbsp;Total {props.primeTeamData.length} Teams Added</span></div>
                            </div>
                        </div>
                        <div className="expert-block">
                            <div className="expert-label">Total Active Prime Users</div>
                            <div className='expert-content'>
                                <div className='expert-box' style={{padding:10,fontWeight:400,fontSize:18,display:'flex',alignItems:'center',justifyContent:'center'}}><MdAccountCircle size={24} style={{color:'orange'}}/> <span>&nbsp;Total {primePhoneNumber.length} Active Prime Users</span></div>
                            </div>
                        </div>
                        <div className="expert-block">
                            <div className="expert-label">Number Of Teams Per User</div>
                            <div className='expert-content'>
                                <div className='expert-box' style={{padding:10,fontWeight:400,fontSize:18,display:'flex',alignItems:'center',justifyContent:'center'}}>
                                   <span style={{marginRight:20}}>Teams Per User</span> <input type="number" onChange={handleTeamPerUser} style={{width:80,textAlign:'center',border:'2px solid green',borderRadius:5}} value={teamPerUser} /> 
                                </div>
                            </div>
                        </div>

                        <div className="expert-block">
                            <div className="expert-label">Total Teams Used will be</div>
                            <div className='expert-content'>
                                <div className='expert-box' style={{padding:10,fontWeight:400,fontSize:18,display:'flex',alignItems:'center',justifyContent:'center'}}><MdAddTask size={24} style={{color:'blue'}}/> <span>&nbsp; &nbsp;{teamUse} Teams will be Used</span></div>
                            </div>
                        </div>



                    </div>
                </div>
            </div>
            <PropFooter label="Post Teams" handleContinue={()=> handleContinue()} />
        </React.Fragment>
    );
}

export default PostPrime;