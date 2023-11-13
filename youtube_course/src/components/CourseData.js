const CourseData=({ourse})=>{
    return (
        <>
            {
                ourse((curCourse)=>{
                    const {id,course,title}=curCourse;
                    return (
                        <tr>
                            <td>id</td>
                            <td>course</td>
                            <td>title</td>
                        </tr>
                    )
                })
            }
        </>
    )
}

export default CourseData;