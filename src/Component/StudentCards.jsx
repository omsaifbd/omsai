import React from 'react'

export default function StudentCards({avatar,name,studentId,qualification,course}) {
  return (
    <div className="studentCard">
      <img
        src={`https://drive.google.com/uc?export=view&id=${avatar}`}
        alt="Click "
      />
      <p>{studentId}</p>
      <p>{name}</p>
      <p>{qualification}</p>
      <p>{course}</p>
    </div>
  );
}
