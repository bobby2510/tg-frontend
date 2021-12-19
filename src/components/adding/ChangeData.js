import React,{useEffect,useState} from 'react'  
import {useNavigate} from 'react-router-dom' 
import NavBarTwo from '../navbar/NavBarTwo'
import ContinueFooter from '../footer/ContinueFooter'
import { toast } from 'react-toastify';
import PlayerChange from './PlayerChange';


const ChangeData = (props)=>{
    let navigate = useNavigate()
    let [leftTeam,setLeftTeam] = useState(null)
    let [rightTeam,setRightTeam] = useState(null)
    useEffect(()=>{
        if(props.reload === null)
        {
            navigate('/')
            return
        }
        let team_left = []
        let team_right = []
        for(let i=0;i<props.playerList.length;i++)
        {
            for(let j=0;j<props.playerList[i].length;j++)
            {
                let p = props.playerList[i][j]
                if(p.team_index===0)
                    team_left.push({...p})
                else 
                    team_right.push({...p})
            }
        }
        setLeftTeam(team_left)
        setRightTeam(team_right)

    },[])

    let handlePlayer = (pi,ti,credits,role) =>{
        if(ti===0)
        {
            let temp = [...leftTeam]
            temp = temp.map(player => {
                if(player.player_index===pi)
                {
                    player.credits= Number(credits)
                    player.role = Number(role)
                }
                return player 
            })
            setLeftTeam(temp)
        }
        else 
        {
            let temp = [...rightTeam]
             temp =   temp.map(player => {
                if(player.player_index===pi)
                {
                    player.credits= Number(credits)
                    player.role = Number(role)
                }
                
                return player 
            })
            setRightTeam(temp)
        }
    }

    let handleContinue = ()=>{
        let player_credits = []
        let player_role = []
        for(let i=0;i<70;i++)
        {
            player_credits.push(0)
            player_role.push(0)
        }
        for(let i=0;i<leftTeam.length;i++)
        {
            let p = leftTeam[i] 
            if(p.credits === null || p.credits === '')
                player_credits[p.player_index] = 0
            else 
                player_credits[p.player_index] = Number(p.credits) 
            if(p.role === null || p.role === '')
                player_role[p.player_index] = 0
            else 
                player_role[p.player_index] = Number(p.role) 
        }
        for(let i=0;i<rightTeam.length;i++)
        {
            let p = rightTeam[i] 
            if(p.credits === null || p.credits === '')
                player_credits[p.player_index] = 0
            else 
                player_credits[p.player_index] = Number(p.credits) 
            if(p.role === null || p.role === '')
                player_role[p.player_index] = 0
            else 
                player_role[p.player_index] = Number(p.role) 
        }
        // now the drama 
        let new_list = [...props.playerList]
        let final_list = props.sportIndex === 2  ? [[],[],[],[],[]] : [[],[],[],[]]
        for(let i=0;i<new_list.length;i++)
        {
            for(let j=0;j<new_list[i].length;j++)
            {
                let p = new_list[i][j]
                p.credits = player_credits[p.player_index]
                p.role = player_role[p.player_index]
                final_list[p.role].push(p)
            }
        }
        props.setPlayerList(final_list)
        toast.success('Players Data Updated Successfully!',{position:'top-center'})
        navigate(-1)
        return 
    }

    return (
        <React.Fragment>
        <NavBarTwo navigate={navigate} /> 
        <div className='continue-container'>
        <div className="section-info">
            <span className='section-primary'>Change Player Data</span>
            <span className='section-secondary'>If Any Miss match in the data change here</span>
        </div>
        <div className='section-info'>
            <span className='section-primary'>Team - {props.leftName}</span>
        </div>
        {leftTeam && leftTeam.map((player)=> <PlayerChange player={player} handlePlayer={handlePlayer} index={0} sportIndex={props.sportIndex}   /> )}
        <div className='section-info'>
            <span className='section-primary'>Team - {props.rightName}</span>
        </div>
        {rightTeam && rightTeam.map((player)=> <PlayerChange player={player} handlePlayer={handlePlayer} index={1} sportIndex={props.sportIndex} /> )}
        </div>
        <ContinueFooter handleContinue ={()=>handleContinue()}  />
        </React.Fragment>
    );
}

export default ChangeData;