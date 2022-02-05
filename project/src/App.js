
import './App.css';
import './style/header.css'
import anh from './asset/logo2.png'
import { useCookies } from 'react-cookie';
import {useEffect,useState} from 'react'

import {getvotebyname} from './redux/actionvotes';
import {useDispatch,useSelector} from 'react-redux'
import axios from 'axios'
function App() {
      const [index,setindex]=useState(0);
      const [count, setcount] = useState(0);
      const [notcount, setnotcount] = useState(0);
      const dispatch=useDispatch();

      const allvote=useSelector(state=>state.getvotesByname);
      const votes=allvote.allvote
     

     useEffect(() => {
       console.log({count});
       dispatch(getvotebyname());
   //    dispatch(getdetailsvote(`joke1`));
       
     }, [count,dispatch]);
      const hadleNotFun=async ()=>{
            try {
                
                  setnotcount((prevState)=>{
                        setNotfunny("notfunny",prevState+1,{path:'/api/v1/getcookie'});
                        
                        return prevState+1;
                  });
                  setCookie("index",index+1,{path:'/api/v1/getcookie'});
                   setindex(index+1);
                
                  
                 await axios.get(`/api/v1/getcookie?action=notfunny`);
                 
            } catch (error) {
                  
            }
          
           

      }
     
      //function
      const handleClick=async()=>{
            try {
                 setcount((prevState)=>{
                  setCookie("funny",prevState+1,{path:'/api/v1/getcookie'});
                        return prevState+1;
                  });
                  setCookie("index",index+1,{path:'/api/v1/getcookie'});
            
                   setindex(index+1);

                
               
                   await axios.get(`/api/v1/getcookie?action=funny`);
                 
                 
            } catch (error) {
                  
            }
          
           
      }
      const [cookies, setCookie] = useCookies(['funny','index'])
      const [notfunny, setNotfunny] = useCookies(['notfunny'])
    
      
  return (
    <div className="App">
    
        <div className='header'>
              <div className='header-logo'>
                    <img src={anh} alt='anhlogo'/>
              </div>
              <div className='header-account'>
                  <p><i>Hanicrafted by</i></p>
                  <span>Jim HLS</span>
                    <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqEwgUHXlcKq_eCbtvmgpHKWV_uWTJgZtfsg&usqp=CAU' alt='anhlogo'/>
              </div>
        </div>
        <div className='banner'>
              <h1> A joke a day keeps the doctor a day</h1><br/>
              <span>if you joke wrong way . your teech have to pay. (Serious)</span>
        </div>
        <div className='content-jokes'>
            <div className='content'>
                  <p>
                         {/* {index<4? db[index].content:"That's all the jokes for today! Come back another day!"} */}
                         {index<4?(votes.filter((item,key)=> key===index).map((items)=>items.content)):"That's all the jokes for today! Come back another day!"}
                  </p>
                  
            </div>
            <div className='button'>
              <button type="button" onClick={handleClick} className="btn btn-primary" data-toggle="button" aria-pressed="false" autocomplete="off">This is Funny!</button>
              <button type="button" onClick={hadleNotFun} className="btn btn-success" data-toggle="button" aria-pressed="false" autocomplete="off">This is not Funny!</button>
            </div>
        </div>
        <div className='footer'>
            <p>This website is created as part of Hisolutions program. The materials contained on this website are provided for general
            information only and do not consibute and form of advice. HLS assumes  no responsibility for the accouracy of any particular
            staments and accept no liability for any loss or damage which may arise from reliance on the information contained on this site</p>
            <span>Copyright 2021 HLS</span>
        </div>

    </div>
  );
}

export default App;
