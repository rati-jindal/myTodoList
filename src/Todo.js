import React, { useState } from 'react'

function Todo() {
    const [activity, setActivity]=useState("");
    const[listData, setlistData]= useState([]);


    function addActivity(){
        // setlistData([...listData,activity])
        // console.log(listData)

        setlistData((listData)=>{
            const updateList = [...listData,activity]
            console.log(updateList)
            setActivity('');
            return updateList
        })
    }

    function removeActivity(i){
        const updatedListData = listData.filter((elem, id)=>{
            return i!==id;
        })
        setlistData(updatedListData);
    }
    function removeAll(){
        setlistData([])
    }
  return (
    <>
        <div className='container'>
            <div className='main-content'>
                <div className='header'>TodoList</div>
                <input type='text' placeholder='Add Activity' value={activity} onChange={(e)=>setActivity(e.target.value)}/>
                <button onClick={addActivity}> Add Task </button>
                {/* <p className='list-Heading'>Here is your List</p> */}
                {listData!=[] && listData.map((data, i)=>{
                    return(
                        <>
                        <p key={i}>
                            <div className='listdata'>
                                {data}
                            </div>
                            <div className='btn-postion'>
                            <button onClick={()=>removeActivity(i)}>Remove Task</button>
                            </div>

                        </p>
                        </>
                    )
                })}
                {listData.length>=1 &&
                <button onClick={removeAll}>Remove All Tasks</button>
                }
            </div>
        </div>
    
    </>
  )
}

export default Todo
