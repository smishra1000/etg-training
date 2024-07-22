import { useState } from "react"
import CourseList from "./CourseList"

function AddCourse() {
    const [course, setCourse] = useState({ cname: '', cdesc: "", trainer: "" })
    const [courseList,setCourseList] = useState([])

    // const onCourseNameChange = (e)=>{
    //         setCourse({...course,cname:e.target.value})
    // }

    // const onCourseDescChange = (e)=>{
    //     setCourse({...course,cdesc:e.target.value})
    // }
    // const onTrainerChange = (e)=>{
    //     setCourse({...course,trainer:e.target.value})
    //  }

     const onChangeFiled = (e)=>{
        console.log(e.target.name,e.target.value)
        setCourse({...course,[e.target.name]:e.target.value})
     }
     const createCourse = (e)=>{
        e.preventDefault();
        console.log(course)
        setCourseList([...courseList,{...course}])
        reset();
     }

     const reset = ()=>{
        setCourse({...course,cname:'',cdesc:"",trainer:''})
     }
    return (
        <div style={{padding:'10px',margin:'20px'}}>
            <form onSubmit={createCourse}>
                <label>Course Name</label>
                <input type="text" value={course.cname} onChange={(e) => onChangeFiled(e)} name="cname"/>
                <label>Course Description</label>
                <input type="text" value={course.cdesc} onChange={(e) => onChangeFiled(e)} name="cdesc"/>
                <label>Trainer</label>
                <input type="text" value={course.trainer} onChange={(e) => onChangeFiled(e)} name="trainer"/>
                <button type="submit">create Course</button>
            </form>
            <CourseList courseList={courseList}/>
        </div>
    )
}

export default AddCourse