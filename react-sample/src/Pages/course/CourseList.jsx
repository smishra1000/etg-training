function CourseList({courseList}) {
    return (
        <div className="users-container">
            {courseList.map((item) => {
                return (
                    <div className="user">
                        <h4>Course name: {item.cname}</h4>
                        <h4>description:{item.cdesc}</h4>
                        <h4>Trainer:{item.trainer}</h4>
                    </div>
                )
            })}

        </div>

    )
}
export default CourseList