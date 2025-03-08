import { Rating } from "@mui/material";
import React, { useEffect, useState } from "react";
import { v4 as uuidv4 } from 'uuid';

const TaskInput_List = ({sidebarToggle}) => {

  const [todo,setTodo] = useState("")
  const [todos,setTodos] = useState([])
  const [ctodo,setCtodo] = useState([])

  const saveToLS = (params)=>{
    localStorage.setItem("todos",JSON.stringify(todos));
  }

  useEffect(()=>{
    let todoString = localStorage.getItem("todos")
    if(todoString){
      let todos = JSON.parse(localStorage.getItem("todos"))
      setTodos(todos)
    }
  },[])

  const handleAdd = ()=>{
     setTodos([...todos, {id:uuidv4(),todo,isCompleted:false}])
     setTodo("")
     saveToLS();
     
  }
  const handleChange = (e)=>{
     setTodo(e.target.value);
  }
  const handleCheckbox = (e)=>{
    let id = e.target.name;
    let index = todos.findIndex(item=>{
      return item.id ===id;
    })
    let newTodos = [...todos];
    newTodos[index].isCompleted = !newTodos[index].isCompleted;
    setCtodo(newTodos)
    saveToLS();
  }
  const handleDelete = (e,id)=>{
    let newTodos = todos.filter(item=>{
      return item.id!== id;
    });
    setTodos(newTodos)
    localStorage.removeItem(item.id);
    saveToLS();
  }

  return (
    <div >
      <div className={`${sidebarToggle ? "ml-14" : "ml-96" } mt-4 flex items-center gap-1`}>
        <p className="text-xs font-semibold text-gray-700">To Do</p>
        <svg
          width="10"
          height="6"
          viewBox="0 0 10 6"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M2.86274 0C1.65111 0 1.04529 0 0.764766 0.239594C0.521356 0.447486 0.392181 0.759341 0.417296 1.07846C0.446241 1.44624 0.874618 1.87462 1.73137 2.73137L3.86863 4.86863C4.26465 5.26465 4.46265 5.46265 4.69098 5.53684C4.89183 5.6021 5.10817 5.6021 5.30902 5.53684C5.53735 5.46265 5.73535 5.26465 6.13137 4.86863L8.26863 2.73137C9.12538 1.87462 9.55376 1.44624 9.5827 1.07846C9.60782 0.759341 9.47864 0.447486 9.23523 0.239594C8.95471 0 8.34889 0 7.13726 0H2.86274Z"
            fill="#142E15"
            fill-opacity="0.62"
          />
        </svg>
      </div>
      <hr className={`${sidebarToggle ? "ml-14" : "ml-96" } mr-16`} />
      <div className={`${sidebarToggle ? "ml-14" : "ml-96" } pt-10 px-8 mr-16 mt-2 bg-violet-100 shadow-lg`}>
        <input
          type="text"
          name=""
          id=""
          onChange={handleChange}
          value={todo}
          placeholder="Add A Task"
          className="pb-14 w-full bg-violet-100 text-base text-gray-600 outline-none"
        />
        <div className="flex pb-5 pt-2 justify-between">
          <div className="flex gap-7 items-center">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clip-path="url(#clip0_5_2269)">
              <path
                d="M21.6734 18.5534C21.0306 17.9802 20.4677 17.3232 20.0001 16.6C19.4891 15.6019 19.1831 14.5116 19.1001 13.3934V10.1C19.1045 8.34376 18.4675 6.64633 17.3086 5.32666C16.1498 4.007 14.5489 3.15592 12.8068 2.93335V2.07335C12.8068 1.83731 12.713 1.61093 12.5461 1.44402C12.3792 1.27712 12.1528 1.18335 11.9168 1.18335C11.6807 1.18335 11.4544 1.27712 11.2875 1.44402C11.1205 1.61093 11.0268 1.83731 11.0268 2.07335V2.94668C9.30029 3.1853 7.71876 4.04152 6.57513 5.35675C5.4315 6.67199 4.80327 8.35711 4.80678 10.1V13.3934C4.72382 14.5116 4.4178 15.6019 3.90678 16.6C3.44737 17.3216 2.89358 17.9785 2.26011 18.5534C2.189 18.6158 2.13201 18.6927 2.09293 18.7789C2.05384 18.8651 2.03357 18.9587 2.03345 19.0534V19.96C2.03345 20.1368 2.10369 20.3064 2.22871 20.4314C2.35373 20.5564 2.5233 20.6267 2.70011 20.6267H21.2334C21.4103 20.6267 21.5798 20.5564 21.7049 20.4314C21.8299 20.3064 21.9001 20.1368 21.9001 19.96V19.0534C21.9 18.9587 21.8797 18.8651 21.8406 18.7789C21.8016 18.6927 21.7446 18.6158 21.6734 18.5534ZM3.42011 19.2934C4.04024 18.694 4.58636 18.0226 5.04678 17.2934C5.69064 16.088 6.0659 14.7575 6.14678 13.3934V10.1C6.12034 9.31871 6.2514 8.54007 6.53214 7.81046C6.81289 7.08086 7.23759 6.41521 7.78095 5.85315C8.3243 5.2911 8.97521 4.84413 9.6949 4.53887C10.4146 4.2336 11.1884 4.07629 11.9701 4.07629C12.7519 4.07629 13.5256 4.2336 14.2453 4.53887C14.965 4.84413 15.6159 5.2911 16.1593 5.85315C16.7026 6.41521 17.1273 7.08086 17.4081 7.81046C17.6888 8.54007 17.8199 9.31871 17.7934 10.1V13.3934C17.8743 14.7575 18.2496 16.088 18.8934 17.2934C19.3539 18.0226 19.9 18.694 20.5201 19.2934H3.42011Z"
                fill="#1B281B"
              />
              <path
                d="M12 22.8533C12.42 22.8436 12.823 22.6858 13.1378 22.4076C13.4525 22.1294 13.6588 21.7489 13.72 21.3333H10.2134C10.2764 21.7602 10.4923 22.1497 10.8209 22.4293C11.1496 22.7089 11.5686 22.8595 12 22.8533Z"
                fill="#1B281B"
              />
            </g>
            <defs>
              <clipPath id="clip0_5_2269">
                <rect width="24" height="24" fill="white" />
              </clipPath>
            </defs>
          </svg>
          <svg
            width="24"
            height="22"
            viewBox="0 0 24 22"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M16.5001 7.19901V5.00001H7.50008C6.47897 4.99991 5.47473 5.26041 4.58243 5.75685C3.69012 6.25329 2.93928 6.96924 2.40097 7.83693C1.86267 8.70462 1.55471 9.69533 1.50626 10.7153C1.4578 11.7352 1.67045 12.7507 2.12408 13.6655C2.16801 13.7538 2.19412 13.8498 2.20093 13.9481C2.20775 14.0465 2.19512 14.1452 2.16378 14.2387C2.13244 14.3321 2.083 14.4185 2.01828 14.4928C1.95356 14.5672 1.87483 14.6281 1.78658 14.672C1.69833 14.7159 1.60229 14.742 1.50395 14.7489C1.40561 14.7557 1.30689 14.743 1.21343 14.7117C1.11997 14.6804 1.03359 14.6309 0.95924 14.5662C0.884885 14.5015 0.824006 14.4228 0.780079 14.3345C0.212439 13.1909 -0.0538583 11.9213 0.00640834 10.646C0.066675 9.37066 0.451511 8.13184 1.12447 7.04685C1.79742 5.96186 2.73621 5.06663 3.85193 4.44594C4.96764 3.82525 6.22334 3.49966 7.50008 3.50001H16.5001V1.30101C16.5001 1.22975 16.5204 1.15998 16.5587 1.09986C16.5969 1.03974 16.6515 0.99176 16.716 0.961541C16.7806 0.931322 16.8524 0.920114 16.923 0.929228C16.9937 0.938343 17.0603 0.967404 17.1151 1.01301L20.6551 3.96201C20.8351 4.11201 20.8351 4.38801 20.6551 4.53801L17.1151 7.48701C17.0603 7.53261 16.9937 7.56167 16.923 7.57079C16.8524 7.5799 16.7806 7.56869 16.716 7.53847C16.6515 7.50825 16.5969 7.46028 16.5587 7.40016C16.5204 7.34004 16.5001 7.27026 16.5001 7.19901ZM22.2151 7.32801C22.3931 7.23959 22.599 7.22547 22.7874 7.28875C22.9759 7.35204 23.1315 7.48755 23.2201 7.66551C23.7877 8.80912 24.054 10.0787 23.9937 11.354C23.9335 12.6294 23.5486 13.8682 22.8757 14.9532C22.2027 16.0382 21.2639 16.9334 20.1482 17.5541C19.0325 18.1748 17.7768 18.5004 16.5001 18.5H7.50008V20.699C7.50005 20.7703 7.47972 20.84 7.44148 20.9002C7.40323 20.9603 7.34864 21.0083 7.28411 21.0385C7.21958 21.0687 7.14778 21.0799 7.07711 21.0708C7.00644 21.0617 6.93983 21.0326 6.88508 20.987L3.34508 18.038C3.30288 18.0028 3.26892 17.9588 3.24562 17.909C3.22232 17.8592 3.21025 17.805 3.21025 17.75C3.21025 17.6951 3.22232 17.6408 3.24562 17.591C3.26892 17.5412 3.30288 17.4972 3.34508 17.462L6.88508 14.513C6.93983 14.4674 7.00644 14.4383 7.07711 14.4292C7.14778 14.4201 7.21958 14.4313 7.28411 14.4615C7.34864 14.4918 7.40323 14.5397 7.44148 14.5999C7.47972 14.66 7.50005 14.7298 7.50008 14.801V17H16.5001C17.5213 17.0004 18.5257 16.74 19.4182 16.2437C20.3108 15.7474 21.0618 15.0315 21.6003 14.1637C22.1388 13.296 22.4469 12.3052 22.4954 11.2851C22.5439 10.265 22.3313 9.24943 21.8776 8.33451C21.7892 8.15646 21.775 7.9506 21.8383 7.76216C21.9016 7.57371 22.0371 7.41659 22.2151 7.32801Z"
              fill="#1B281B"
            />
          </svg>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M15 4V2M15 4V6M15 4H10.5M3 10V19C3 19.5304 3.21071 20.0391 3.58579 20.4142C3.96086 20.7893 4.46957 21 5 21H19C19.5304 21 20.0391 20.7893 20.4142 20.4142C20.7893 20.0391 21 19.5304 21 19V10M3 10H21M3 10V6C3 5.46957 3.21071 4.96086 3.58579 4.58579C3.96086 4.21071 4.46957 4 5 4H7M21 10V6C21 5.46957 20.7893 4.96086 20.4142 4.58579C20.0391 4.21071 19.5304 4 19 4H18.5M7 2V6"
              stroke="#1B281B"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
          </div>
          <div className="">
          <button onClick={handleAdd} className="px-5 pb py-2 rounded-xl text-green-700 font-semibold bg-gray-300">ADD TASK</button>
          </div>   
        </div>
      </div>
    <div className="mytodos">
      {todos.map(item=>{
          return <div key={item.id}>
          {item.isCompleted?"":<div className={`${sidebarToggle ? "ml-14" : "ml-96" } pb-3 justify-between px-8 flex mt-8 items-center gap-6`}>
            <div className="flex items-center gap-6">
            <input className="size-5" onChange={handleCheckbox} value={item.isCompleted} type="checkbox" name={item.id} id="" />
            <div className="">{item.todo}</div>
            </div>
            <div className="flex gap-4 pr-20">
            <img onClick={(e)=>handleDelete(e,item.id)} src="./delete.png" alt="" />
            <Rating name="size-large" defaultValue={0} max={1} size="large" />
            </div>
        </div>}  
      <hr className={`${sidebarToggle ? "ml-14" : "ml-96" } mr-16`} /> 
      </div>
      })}
    </div>
      <h1 className={`${sidebarToggle ? "ml-14" : "ml-96" } mt-6 pl-1 font-semibold pb-6`}>Completed</h1>
      <hr className={`${sidebarToggle ? "ml-14" : "ml-96" } mr-16`} /> 
      <div className="mytodos">
        {ctodo.map(item=>{
          return <div key={item.id}>
          {item.isCompleted?<div className={`${sidebarToggle ? "ml-14" : "ml-96" } pb-3 justify-between px-8 flex mt-8 items-center gap-6`}>
            <div className="flex items-center gap-6">
            <input className="size-5" checked="true" onChange={handleCheckbox} value={item.isCompleted} type="checkbox" name={item.id} id="" />
            <div className={item.isCompleted?"line-through":""}>{item.todo}</div>
            </div>
            <div className="pr-20">
            <Rating name="size-large" defaultValue={0} max={1} size="large" />
            </div>
        </div>:<div></div>}  
        <hr className={`${sidebarToggle ? "ml-14" : "ml-96" } mr-16`} /> 
        </div>
        })}
      </div>
    </div>
  );
};

export default TaskInput_List;
