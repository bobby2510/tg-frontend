import React ,{useEffect,useState} from 'react'
import NavBarOne from '../navbar/NavBarOne';
import Footer from '../footer/Footer';
import NavBarThree from '../navbar/NavBarThree';
import MatchCard from '../matchcards/MatchCard';
import axios from 'axios'
const Home = (props)=>{
    
    const [dataList,setDataList] = useState([])
    useEffect(()=>{
        props.setBottomIndex(0)
        if(props.sportIndex===2)
        {
            props.setPlayerList([[],[],[],[],[]])
            props.setSelectedPlayers([[],[],[],[],[]])
            props.setFixedPlayers([[],[],[],[],[]])
            props.setCaptainPlayers([[],[],[],[],[]])
            props.setVicecaptainPlayers([[],[],[],[],[]])
            props.setRight(0)
            props.setLeft(0)
            props.setRole([0,0,0,0,0])
        }
        else if(props.sportIndex===3)
        {
            props.setPlayerList([[],[],[]])
            props.setSelectedPlayers([[],[],[]])
            props.setFixedPlayers([[],[],[]])
            props.setCaptainPlayers([[],[],[]])
            props.setVicecaptainPlayers([[],[],[]])
            props.setRight(0)
            props.setLeft(0)
            props.setRole([0,0,0])
        }
        else{
            props.setPlayerList([[],[],[],[]])
            props.setSelectedPlayers([[],[],[],[]])
            props.setFixedPlayers([[],[],[],[]])
            props.setCaptainPlayers([[],[],[],[]])
            props.setVicecaptainPlayers([[],[],[],[]])
            props.setRight(0)
            props.setLeft(0)
            props.setRole([0,0,0,0])
        }

      
    },[props.sportIndex])

    useEffect(()=>{
           axios.get('https://team-generation-api.herokuapp.com/api/fantasy/matches')
            .then((response)=>{
                setDataList(response.data.data)
                console.log(response.data.data)
            })
            props.setReload('done')
    },[])

    return (
        <React.Fragment>
        <div className="content"> 
                <NavBarOne userRole={props.userRole}/>
                <NavBarThree 
                sportIndex = {props.sportIndex}
                setSportIndex = {props.setSportIndex}
                />

                {/* Done with the upper part */}
                <div className="sub-content">
                <h4 className="sub-heading">Upcoming Matches</h4>
                <div className="d-flex flex-column">
                { dataList[0] &&  dataList[props.sportIndex].map((match)=> <MatchCard key={match.id} setSeriesName={props.setSeriesName} match = {match} /> ) }
                </div>  
                </div>
               
            </div>
            <Footer
                bottomIndex = {props.bottomIndex}
                setBottomIndex = {props.setBottomIndex}
            />
        </React.Fragment>
    );
}

export default Home;