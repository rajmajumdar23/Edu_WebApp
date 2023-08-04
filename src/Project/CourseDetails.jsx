import React from 'react';
import { useParams } from 'react-router-dom';

const CourseDetails = ({ courses }) => {
  const { id } = useParams();
  const course = courses.find((item) => item.id.toString() === id);

  if (!course) {
    return <div>Course not found</div>;
  }

  return (
    <div>
      <h3>{course.title}</h3>
      <img src={course.img} alt={course.title} />
      <p>{course.description}</p>
      <p>{course.content}</p>
    </div>
  );
};

export default CourseDetails;
