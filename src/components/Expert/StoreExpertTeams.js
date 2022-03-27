import React,{useState,useEffect} from 'react' 
import NavBarTwo from '../navbar/NavBarTwo';
import { useNavigate } from 'react-router-dom';
import PropFooter from '../footer/PropFooter';
import {MdOfflinePin} from 'react-icons/md'
import { useParams } from 'react-router-dom';
import {MdRemoveCircleOutline,MdAddCircleOutline} from 'react-icons/md'
import { toast } from 'react-toastify';
import axios from 'axios';


const StoreExpertTeams = (props)=>{
    let {match,type} = useParams()
    let navigate = useNavigate()
    let [apiTeams,setApiTeams] = useState([])
    let [fantasyIndex,setFantasyIndex] = useState([0,0,0,0,0,0])
    let fantasyName=['Dream11','MyFab11','BatBall11','MyTeam11','My11Circle','MPL']

    let [tossIndex,setTossIndex] = useState([0,0])
    let tossName=['Predicted11', 'Playing11']

    let [typeIndex,setTypeIndex] = useState([0,0,0,0])
    let typeName = ['MegaGL','MiniGL','SL','H2H']

    useEffect(()=>{
        if(type === 0)
        {
            if(props.softwareTeams.length>0)
            {
               setApiTeams(props.softwareTeams)
            }
            else 
            {
                toast.error('Failed to Attach the teams!',{position:'top-center'})
                return;
            }
        }
        else if(type === 1) 
        {
            if(props.humanTeams.length>0)
            {
                setApiTeams(props.humanTeams)
            }
            else 
            {
                toast.error('Failed to Attach the teams!',{position:'top-center'})
                return;
            }
        }
    },[])
    
    let handleFantasy = (index)=>{
        let temp=[]
        for(let i=0;i<fantasyIndex.length;i++)
            temp.push(0)
        temp[index] = 1;
        setFantasyIndex(temp)
    }

    let handleToss = (index)=>{
        let temp=[]
        for(let i=0;i<tossIndex.length;i++)
            temp.push(0)
        temp[index] = 1;
        setTossIndex(temp)
    }

    let handleType = (index)=>{
        let temp=[]
        for(let i=0;i<typeIndex.length;i++)
            temp.push(0)
        temp[index] = 1;
        setTypeIndex(temp)
    }

    let handleContinue = ()=>{
        //validations here 
        

        // calling api here 

    }
    return (
        <React.Fragment>
            <NavBarTwo navigate={navigate} />
            <div className='continue-container' style={{padding:5}}>
                <div className='card text-center' >
                    <div className='card-header'> Expert Teams  </div>
                    <div className='card-body'>
                        <h5 className='card-title mb-4'>Fill the Data to Post Teams</h5>
                            <div className="expert-block">
                                <div className="expert-label">Teams Attached</div>
                                <div className='expert-content'>
                                    <div className='expert-box' style={{padding:10,fontWeight:400,fontSize:18,display:'flex',alignItems:'center',justifyContent:'center'}}><MdOfflinePin size={24} style={{color:'green'}}/> <span>&nbsp;Total 5 Teams Added</span></div>
                                </div>
                            </div>
                            <div className="expert-block">
                                <div className="expert-label">Player data taken from</div>
                                    <div className='smart-container'>
                                        {fantasyName.map((text,index)=>{

                                            return (<div onClick={()=> handleFantasy(index)} className={fantasyIndex[index]===1?'smart-item player-orange': 'smart-item'} style={{display:'flex',alignItems:'center',flexGrow:1,flexBasis:0,margin:'4px 6px 4px 6px'}}>
                                                <span>{text}&nbsp;</span>
                                                {fantasyIndex[index]===1?
                                                    <MdRemoveCircleOutline style={{color:'red'}} size={20} />
                                                    :
                                                    <MdAddCircleOutline style={{color:'green'}} size={20} />
                                                }
                                            </div>);
                                            }
                                            )}
                                        </div>
                                    </div>
                                
                                <div className="expert-block">
                                <div className="expert-label">Teams created with Lineups?</div>
                                <div className='smart-container'>
                              
                                        {tossName.map((text,index)=>{

                                        return (<div onClick={()=> handleToss(index)} className={tossIndex[index]===1?'smart-item player-orange': 'smart-item'} style={{display:'flex',alignItems:'center',flexGrow:1,flexBasis:0,margin:'4px 6px 4px 6px'}}>
                                            <span>{text}&nbsp;</span>
                                            {tossIndex[index]===1?
                                                <MdRemoveCircleOutline style={{color:'red'}} size={20} />
                                                :
                                                <MdAddCircleOutline style={{color:'green'}} size={20} />
                                            }
                                        </div>);
                                        }
                                        )}
                                </div>
                                </div>

                                <div className="expert-block">
                                <div className="expert-label">Teams are Suitable For?</div>
                                <div className='smart-container'>
                              
                                        {typeName.map((text,index)=>{

                                        return (<div onClick={()=> handleType(index)} className={typeIndex[index]===1?'smart-item player-orange': 'smart-item'} style={{display:'flex',alignItems:'center',flexGrow:1,flexBasis:0,margin:'4px 6px 4px 6px'}}>
                                            <span>{text}&nbsp;</span>
                                            {typeIndex[index]===1?
                                                <MdRemoveCircleOutline style={{color:'red'}} size={20} />
                                                :
                                                <MdAddCircleOutline style={{color:'green'}} size={20} />
                                            }
                                        </div>);
                                        }
                                        )}
                                </div>
                                </div>


                                    
                                
                                
                    </div>
                </div>
            </div>
            <PropFooter label="Post Teams" handleContinue={handleContinue} />
        </React.Fragment>
    );
}

export default StoreExpertTeams;