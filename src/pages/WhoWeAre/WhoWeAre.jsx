import React from 'react';
import './WhoWeAre.css';

const employees = [

  {
    id: 1,
    name: "Dimitra Gkini",
    title: "Head of Manufacturing ",
    photo: "path-to-bob-photo.jpg",
    bio: "Bob is the creative mind behind our delicious menu.",
  },
  {
    id: 2,
    name: "Paraskevi Thanou",
    title: " Head of Business Analytics & Marketing",
    photo: "path-to-carol-photo.jpg",
    bio: "Carol manages our campaigns and ensures we reach the right audience.",
  },
  {
    id: 3,
    name: "Ioannis Tsantilas",
    title: " Head of Accounting and Finance & Marketing ",
    photo: "path-to-david-photo.jpg",
    bio: "David oversees day-to-day operations to ensure quality.",
  },
  {
    id: 4,
    name: "Evangelia Samara",
    title: "Head of Human Resources",
    photo: "path-to-emma-photo.jpg",
    bio: "Emma ensures customer satisfaction with her exceptional support skills.",
  },
  {
    id: 5,
    name: "Maria Sampani",
    title: "Head of Sales Management",
    photo: "path-to-alice-photo.jpg",
    bio: "Alice is a visionary leader with 10 years of experience in the food industry.",
  },
];

const WhoWeAre = () => {
  return (
    <div className="who-we-are">
      <h1>Who We Are</h1>
      <p>Meet the team behind the vision</p>
      <div className="employee-container">
        {employees.map((employee) => (
          <div className="employee-card" key={employee.id}>
            <div className="employee-photo">
              <img src={employee.photo} alt={employee.name} />
              <div className="employee-hover">
                <p>{employee.bio}</p>
              </div>
            </div>
            <h3>{employee.name}</h3>
            <p>{employee.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhoWeAre;
