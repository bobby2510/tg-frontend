import React from 'react' 



const GenericFooter = ()=>{
   
    return (
        <React.Fragment>
        <div className="d-flex flex-column align-items-center justify-content-center" style={{backgroundColor:'white',maxWidth:600,padding:5}}>
            <span style={{fontWeight:500,fontSize:15}}>Developed By Believer01</span>
            <span style={{color:'grey'}}>Refer your friends for benefits</span>
        </div>
        </React.Fragment>
    );
}

export default GenericFooter;