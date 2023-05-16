import React, { useContext } from 'react'
import { glabaldata } from './contextApi/context'
import Tasklist from './Tasklist'

const Home = () => {


    const { value, setvalue, data, setdata,seteditBtn, editBtn,seteditinputData,editinputData } = useContext(glabaldata)
        
    const addTask=()=>{
        if(!value){
            alert("enter data")
        }else if(value && !editBtn){
            setdata(data.map((ele)=>{
                    if(ele.id === editinputData){
                       return {...ele,value:value}
                    }
                    return ele;
            }))
           
            setvalue("")
            seteditBtn(true)
            seteditinputData(null)
        }else{
            setdata([...data, { value: value, id: Date.now(), complete:false }]);
            setvalue("")
        }
        // console.log(data)
       
    }
    return (
        <>


            <div className="input-group  flex-nowrap">
                <span className="input-group-text" id="addon-wrapping">Enter your task here</span>
                <input type="text" className="form-control" aria-label="Username" aria-describedby="addon-wrapping" value={ value } onChange={ (e) => {
                    setvalue(e.target.value);
                } } />

            </div>
            {
                editBtn ? (<button type="button" className="btn btn-outline-primary" id='btn' onClick={ addTask}>Add task</button>) : (<button type="button" className="btn btn-outline-primary" id='btn' onClick= {addTask}>update task</button>)
            }


            <Tasklist />
        </>
    )
}

export default Home;
