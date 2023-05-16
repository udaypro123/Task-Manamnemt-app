import React, { useContext, Fragment } from 'react'
import { glabaldata } from './contextApi/context'

const Tasklist = ({ complete }) => {

    const { setvalue, data, setdata, seteditBtn, seteditinputData } = useContext(glabaldata)

    const deletefunc = (id) => {
        const newlist = data.filter((ele) => {
            return ele.id !== id
        })
        setdata(newlist)
    }


    const editfunc = (id) => {
        const newEditdata = data.find((ele) => {
            return ele.id === id
        })
        console.log(newEditdata)
        seteditBtn(false)
        setvalue(newEditdata.value)
        seteditinputData(id)
    }


    const setvaluechange = (index) => {
        const newitem = [...data];
        newitem[index].complete = !newitem[index].complete;
        setdata(newitem);
    }


    return (
        <>
            {
                data.map((ele, id) => {

                    return (
                        <Fragment key={ id }>
                            <div className='maindiv'>
                                <div className='chechbox'>
                                    <input type="checkbox" value="" onChange={()=>setvaluechange(id)} />
                                </div>
                                {
                                   
                                    ele.complete ? <div className='completediv'>Complete <img src="https://img.icons8.com/?size=512&id=102545&format=png" alt="" /></div> : <div key={ id } className='elediv'>
                                        <p>{ ele.value }</p>
                                    </div>
                                }
                                <div className='editdiv' onClick={ () => { editfunc(ele.id) } }>
                                    <img src="https://cdn-icons-png.flaticon.com/512/1160/1160515.png" alt="" />
                                </div>
                                <div className='deletediv' onClick={ () => deletefunc(ele.id) }>
                                    <img src="https://cdn-icons-png.flaticon.com/512/6861/6861362.png" alt="" />
                                </div>
                            </div>
                        </Fragment>

                    )
                })
            }

        </>
    )
}

export default Tasklist;


