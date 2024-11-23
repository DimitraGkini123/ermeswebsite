import React from 'react';
import './WhoWeAre.css';

const employees = [

  {
    id: 1,
    name: "Dimitra Gkini",
    title: "Head of Manufacturing ",
    photo: "path-to-bob-photo.jpg",
    bio: "Dimitra ensures our production runs smoothly and at its best!",
  },
  {
    id: 2,
    name: "Paraskevi Thanou",
    title: " Head of Business Analytics & Marketing",
    photo: "path-to-carol-photo.jpg",
    bio: "Paraskevi aka Vivian is the creative mind behind our strategies to keep us ahead of the curve!",
  },
  {
    id: 3,
    name: "Ioannis Tsantilas",
    title: " Head of Accounting and Finance & Marketing ",
    photo: "path-to-david-photo.jpg",
    bio: "Ioannis aka Juan keeps our finances in check while also driving growth!",
  },
  {
    id: 4,
    name: "Evangelia Samara",
    title: "Head of Human Resources",
    photo: "path-to-emma-photo.jpg",
    bio: "Evangelia aka Valia makes sure we have the right talent and a great workplace culture!",
  },
  {
    id: 5,
    name: "Maria Sampani",
    title: "Head of Sales Management",
    photo: "path-to-alice-photo.jpg",
    bio: "Maria leads our sales team to new heights!",
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
