import React from 'react'  
import {MdRemoveCircleOutline,MdAddCircleOutline} from 'react-icons/md'

const Player = (props)=>{

    let shortcutName = (n)=>{
        let arr = n.split(' ')
        let name =''
        if(arr.length>=3)
            name = arr[0][0]+' '+arr[1][0]+' '+arr[2]
        else if(arr.length===2)
            name = arr[0][0]+' '+arr[1]
        else 
            name = arr[0]
        name = name + '          '
        name = name.substring(0,10)
        let temp = 0
        for(let i=name.length-1;i>=0;i--)
        {
            if(name[i]===' ')
            temp++
            else 
                break; 
        }
        if (temp === 6)
        return (<span>{name}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>);
        else if(temp === 5)
        return (<span>{name}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>);
        else if(temp === 4)
        return (<span>{name}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>);
        else if(temp === 3)
        return (<span>{name}&nbsp;&nbsp;&nbsp;&nbsp;</span>);
        else if(temp === 2)
        return (<span>{name}&nbsp;&nbsp;&nbsp;</span>);
        else if(temp === 1)
        return (<span>{name}&nbsp;</span>);
        else 
        return (<span>{name}</span>);
    }
    // color:#eca048;
    return (
        <React.Fragment>
        <div onClick={ ()=> props.handlePlayer(props.player.role,props.player.player_index) } className={ props.player.selected===1 ? "player-container player-orange" : "player-container"}>
            <div className="player-item-one d-flex justify-content-start align-items-center">
                <div  style={{position:'relative'}}>
                <img className="player-image" src={props.player.image} alt="player" />   
                <span className={ props.player.team_index === 0? "badge badge-left-team p-team" : "badge badge-right-team p-team"}>{props.player.team_name}</span>  
                </div>
                <div className="d-flex flex-column align-items-start justify-content-center">
                    <span className="bobby-name">{shortcutName(props.player.name)}</span>
                    <span className="bobby-percentage">Sel by {props.player.selected_by}%</span>
                    <span className="bobby-percentage" style={{color:"green"}}>{props.player.playing === 1? '??? Playing' : ''}</span>
                </div>
            </div>
            <div className="player-item-two kvp-padding" style={{fontWeight:400,color:'grey'}}> {props.player.points} </div>
            <div className="player-item-two" style={{fontWeight:500}}> {props.player.credits} </div>
            <div  style={{fontWeight:500,flexGrow:1}}>{ props.player.selected === 1? <MdRemoveCircleOutline size={20} style={{color:'orange'}}/> : <MdAddCircleOutline size={20} style={{color:'green'}} /> } 
            </div>
        </div>
        </React.Fragment>
    );
}

export default Player;