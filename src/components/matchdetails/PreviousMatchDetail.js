import React,{useState,useEffect,useRef} from 'react' 
import {useNavigate} from 'react-router-dom'
import {useParams} from 'react-router'
import GenericFooter from '../footer/GenericFooter';
import NavBarTwo from '../navbar/NavBarTwo';
import AttemptCard from './AttemptCard';

const PreviousMatchDetail = (props)=>{
    let [leftName,setLeftName]= useState(null)
    let [leftImage,setLeftImage]= useState(null)
    let [rightName,setRightName]= useState(null)
    let [rightImage,setRightImage]= useState(null)
    let [result,setResult] = useState(null)
    let [seriesName,setSeriesName] = useState(null)
    let [attemptData,setAttemptData] =useState(null)
    const {id} = useParams()
    const navigate = useNavigate()
    useEffect(()=>{
        if(props.reload === null)
        {
            navigate('/')
            return
        }

        let all_sports = JSON.parse(localStorage.getItem('tg_data'))
        let req_sport = all_sports[props.sportIndex]
        let req_match = null 
        for(let i=0;i<req_sport.length;i++)
        {
            if(id.toString() === req_sport[i].id.toString())
            {
                req_match = req_sport[i]
            }
        }
        if(req_match===null){navigator('/');return}
     
        setLeftName(req_match.left_name)
        setLeftImage(req_match.left_image)
        setRightName(req_match.right_name)
        setRightImage(req_match.right_image)
        setSeriesName(req_match.series_name)
        setResult(req_match.result)

        let temp_list = req_match.attempts 
        temp_list.sort((x,y)=>{
            if(x.time<y.time)
            return 1 
            else 
            return -1
        })
        setAttemptData(temp_list)
    },[])

    let handleAddPoint = ()=>{
        navigate(`/addpoint/${id}`)
    }

    return (
        <React.Fragment>
            <NavBarTwo navigate={navigate} />
            <div className='mini-container' style={{padding:0}}>
                <div className='p-match-header pb-2 mb-2'>
                    <h5>{seriesName}</h5>
                    <div className="card-middle" style={{marginLeft:10,marginRight:10}}>
                    <div className="combine-image">
                     <img className="team-image" src={leftImage} alt="left" />
                     <span className="left-team-name">{leftName}</span>
                     </div>
                     <div className="timer"> VS </div>
                    <div className="combine-image" >
                    <span className="right-team-name">{rightName}</span>
                     <img className="team-image" src={rightImage} alt="right" />
                    </div>
                    
                
                    </div>
                    {
                        result === true?
                        <span>Player points updated! check results now</span>
                        :
                        <span>Kindly Add Player points from your fantasy app to check result <button onClick={()=> handleAddPoint() } className='btn btn-success btn-sm' style={{fontWeight:500}}>Add Points</button></span>
                    }
                </div>
                <div className="d-flex flex-column" style={{paddingLeft:5,paddingRight:5}}>
                { attemptData &&  attemptData.map((attempt)=> <AttemptCard key={attempt.id}  attempt = {attempt} result={result} matchId={id} /> ) }
                </div> 
            </div>
            <GenericFooter />
        </React.Fragment>
    );
}

export default PreviousMatchDetail;