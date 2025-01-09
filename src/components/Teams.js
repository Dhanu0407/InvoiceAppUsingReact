import React, { useState } from "react";
import "./teams.css";

// Importing static images
import charulPhoto from "../assets/charul_jagtap.png";
import jessicaPhoto from "../assets/Jesica.png";
import pavanPhoto from "../assets/pavan sonar.jpeg";
import shubhamPhoto from "../assets/Shubham C.jpeg";
import shrutiPhoto from "../assets/Shruti.png";
import chaitaliPhoto from "../assets/chaitali payghan.png";
import sahilPhoto from "../assets/Sahil Salunke.jpg";
import aryaPhoto from "../assets/Arya tandale.jpeg";
import sanketPhoto from "../assets/Sanket Mane.jpeg";
import harshaPhoto from "../assets/Harsha Borkhade.png";
import vishalPhoto from "../assets/vishal bhosale.jpeg";
import samrudhdiPhoto from "../assets/Samruddhi kore.png";

const teamMembers = [
  {
    name: "Charul Jagtap",
    title: "Director & CEO",
    photo: charulPhoto,
  },
  {
    name: "Jessica Antony",
    title: "Client Success",
    photo: jessicaPhoto,
  },
  {
    name: "Pavan Sonar",
    title: "Project Head",
    photo: pavanPhoto,
  },
  {
    name: "Shubham Chaudhari",
    title: "Project Manager",
    photo: shubhamPhoto,
  },
  {
    name: "Shruti Khune",
    title: "Senior Developer",
    photo: shrutiPhoto,
  },
  {
    name: "Chaitali Payghan",
    title: "Process Consultant",
    photo: chaitaliPhoto,
  },
  {
    name: "Sahil Salunke",
    title: "Fullstack Developer",
    photo: sahilPhoto,
  },
  {
    name: "Arya Tandale",
    title: "Software Developer",
    photo: aryaPhoto,
  },
  {
    name: "Sanket Mane",
    title: "AWS Cloud Engineer",
    photo: sanketPhoto,
  },
  {
    name: "Harsha Borkhade",
    title: "Software Developer",
    photo: harshaPhoto,
  },
  {
    name: "Vishal Bhosale",
    title: "Fullstack Developer",
    photo: vishalPhoto,
  },
  {
    name: "Samrudhdi Kore",
    title: "Data Analyst",
    photo: samrudhdiPhoto,
  },
];

const Teams = () => {
  const [teamData, setTeamData] = useState(teamMembers);
  const [newName, setNewName] = useState("");
  const [newTitle, setNewTitle] = useState("");
  const [newPhoto, setNewPhoto] = useState(null);
  const [showForm, setShowForm] = useState(false);

  const handleAddMember = () => {
    if (newName && newTitle && newPhoto) {
      const newMember = {
        name: newName,
        title: newTitle,
        photo: URL.createObjectURL(newPhoto),
      };

      setTeamData([...teamData, newMember]);
      setNewName("");
      setNewTitle("");
      setNewPhoto(null);
      setShowForm(false);
    } else {
      alert("Please fill in all fields.");
    }
  };

  const handlePhotoChange = (event) => {
    setNewPhoto(event.target.files[0]);
  };

  const toggleForm = () => {
    setShowForm(!showForm);
  };

  return (
    <div className="app">
      {/* Hero Section */}
      <div className="hero-section2">
        <div className="hero-background2"></div>
        <div className="hero-text2">Explore our team.</div>
      </div>

      {/* Main Content */}
      <main>
        {/* Team Section */}
        <section className="team2">
          <h2>
            Meet Our <span className="highlight2">Management</span>
          </h2>
          <div className="team-members2">
            {teamData.map((member, index) => (
              <div key={index} className="team-member2">
                <img src={member.photo} alt={member.name} />
                <h3>{member.name}</h3>
                <p>{member.title}</p>
              </div>
            ))}
          </div>
          <div className="buttons">
            <button className="add-member-button2" onClick={toggleForm}>
              {showForm ? "Cancel" : "Add Member"}
            </button>
          </div>
          {showForm && (
            <div className="add-member-form2">
              <input
                type="text"
                id="newMemberName2"
                placeholder="Name"
                value={newName}
                onChange={(e) => setNewName(e.target.value)}
              />
              <input
                type="text"
                id="newMemberTitle2"
                placeholder="Title"
                value={newTitle}
                onChange={(e) => setNewTitle(e.target.value)}
              />
              <input
                type="file"
                id="newMemberPhoto2"
                accept="image/*"
                onChange={handlePhotoChange}
              />
              <button onClick={handleAddMember}>Add Member</button>
            </div>
          )}
        </section>
      </main>
    </div>
  );
};

export default Teams;
