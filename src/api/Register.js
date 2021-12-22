import React,{useState,useEffect} from 'react' 
import { useNavigate } from 'react-router-dom';
import GenericFooter from '../components/footer/GenericFooter';
import NavBarTwo from '../components/navbar/NavBarTwo';
import axios from 'axios';
import { toast } from 'react-toastify';

const Register = (props)=>{
   
    let navigate = useNavigate()
    let [phone,setPhone] = useState('')
    let [duration,setDuration] = useState('')
    let [password,setPassword] = useState('')
    useEffect(()=>{
        if(props.reload === null)
        {
            navigate('/')
            return 
        }
        if(props.userRole !== 'admin')
        {
            navigate('/')
            return 
        }
    },[])
    let handlePhone = (e)=>{
        setPhone(e.target.value)
    }
    let handlePassword = (e)=>{
        setPassword(e.target.value)
    }
    let handleDuration = (e)=>{
        setDuration(Number(e.target.value))
    }
    let handleSubmit = (e)=>{
        e.preventDefault()
       
        if(password.length<5)
        {
            toast.error('Password length should be more than 5',{position:'top-center'})
            return 
        }
       
        if(phone.length!==10)
        {
            toast.error('Enter Valid Phone Number',{position:'top-center'})
            return 
        }
        if(duration<1)
        {
            toast.error('Ener Valid Duration',{position:'top-center'})
            return 
        }
        axios.post('https://team-generation-api.herokuapp.com/api/auth/register4642',{
            phoneNumber:phone,
            duration:duration,
            password:password
        })
        .then(response =>{
                if(response.status === 200)
                {
                
                    toast.success('Accounted Created Successfully with duration :'+duration,{position:'top-center'})
                    navigate('/')
                }
                else if(response.status===201)
                {
                    toast.error(response.data.message !==null ? response.data.message : 'something went wrong',{position:'top-center'})
                    return
                }     
                else 
                {
                    toast.error('Something went Wrong!',{position:'top-center'})
                    return 
                }
            })
    }
    return (
        <React.Fragment>
        <NavBarTwo  navigate={navigate}  />
            <div className='mini-container' style={{padding:5}}>
            <div className='card mt-4'>
                <div className='card-header text-center'>Team Generation</div>
                <div className='card-body'>
                    <h3 className='text-center'>Register Here</h3>
                    <div className='text-center'>
                      
                    </div>
                    <form onSubmit={handleSubmit}>
                        <div class="form-group mt-3 mb-3">
                        <label for="exampleInputEmail1">Phone Number</label>
                        <input onChange={handlePhone} type="text" class="form-control" required id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Phone Number"/>
                        <small id="emailHelp" class="form-text text-muted">We'll never share your number with anyone else.</small>
                        </div>
                        <div class="form-group mt-3 mb-3">
                        <label for="exampleInputEmail1">Duration</label>
                        <input onChange={handleDuration} type="number" class="form-control" required id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Duration"/>
                        </div>
                        <div class="form-group mt-3 mb-3">
                        <label for="exampleInputPassword1">Password</label>
                        <input onChange={handlePassword} type="password" required class="form-control" id="exampleInputPassword1" placeholder="Password"/>
                        </div>
                    
                        <button type="submit" class="btn btn-primary">Register</button>
                  </form>
                </div>
            </div>
            </div>
            <GenericFooter /> 
        </React.Fragment>
    );
}

export default Register; 