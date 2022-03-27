import React from 'react' 

const ExpertTeamCard = (props)=>{
    //#DE4839
    return (
        <React.Fragment>
        <div className="match-card" >
                <div onClick={() => {}}>
                    <div className="card-start-part" style={{display:"flex",alignItems:"center",justifyContent:"space-between,marginTop:5,marginBottom:5"}}>
                        <br/>
                    </div>
                    <div className="card-middle" style={{marginLeft:10,marginRight:10}}>
                            Some Stuff
                            lot of data will be here 
                            we will definitely rock to do that 
                    </div>
                </div>
                <div className="card-start-part-bottom" style={{display:"flex",alignItems:"center",justifyContent:"space-between",backgroundImage:'linear-gradient(to right,#56ab2f ,   #a8e063)'}}>
                    <br/>
                </div>
            </div>
        </React.Fragment>
    );
}

export default ExpertTeamCard;