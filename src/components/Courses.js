// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// function Courses() {
//     const [courses, setCourses] = useState([]);

//     useEffect(() => {
//         axios.get('http://localhost:5000/api/courses')
//             .then(response => {
//                 setCourses(response.data);
//             })
//             .catch(error => {
//                 console.error('There was an error fetching the courses!', error);
//             });
//     }, []);

//     return (
//         <div>
//             <h2>Courses</h2>
//             <ul>
//                 {courses.map((course, index) => (
//                     <li key={index}>
//                         <h3>{course.title}</h3>
//                         <p>{course.duration}</p>
//                     </li>
//                 ))}
//             </ul>
//         </div>
//     );
// }

// // export default Courses;

// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import './Courses.css'; // Ensure you create and style this CSS file

// function Courses() {
//     const [courses, setCourses] = useState([]);

//     useEffect(() => {
//         axios.get('http://localhost:5000/api/courses')
//             .then(response => {
//                 setCourses(response.data);
//             })
//             .catch(error => {
//                 console.error('There was an error fetching the courses!', error);
//             });
//     }, []);

//     return (
//         <div className="courses-container">
//             <h2>Courses</h2>
//             <div className="courses-list">
//                 {courses.map((course, index) => (
//                     <div key={index} className="course-card">
//                         <img src={course.imageUrl} alt={`${course.title} image`} className="course-image" />
//                         <div className="course-info">
//                             <h3>{course.title}</h3>
//                             <p>{course.duration}</p>
//                         </div>
//                     </div>
//                 ))}
//             </div>
//         </div>
//     );
// }

// export default Courses;


import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Courses.css'; // Ensure you create and style this CSS file

function Courses() {
    const [courses, setCourses] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:5000/api/courses')
            .then(response => {
                setCourses(response.data);
            })
            .catch(error => {
                console.error('There was an error fetching the courses!', error);
            });
    }, []);

    return (
        <div className="courses-container">
            <h2>Courses</h2>
            <div className="courses-list">
                {courses.map((course, index) => (
                    <div key={index} className="course-card">
                    <div>
                        <img src={course.imageUrl} alt={`${course.title} image`} className="course-image" />
                        </div>
                        <div className="course-info">
                            <h3>{course.title}</h3>
                            <p>{course.duration}</p>
                        </div>

                    </div>
                    
                ))}
            </div>
        </div>
    );
}

export default Courses;

