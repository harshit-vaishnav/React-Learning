import React from "react";
import {Building2,UserRound} from "lucide-react" 

const Card = ({ user }) => {
  return (
    <div className="card">
      <div className="top">
        {user.available && <span className="available">Available</span>}
        <h2>${user.price}/hr</h2>
      </div>
      <div className="images">
        <img src={user.image} alt={user.name} />
      </div>

      <div className="center">
        <h2>{user.name}</h2>
        <p>{user.job}</p>
        <div className={user.freelancer ? "freelancer-info" : "company-info"}>
          {user.freelancer ? <UserRound size={14} /> : <Building2 size={14} />}
          <span>{user.company}</span>
        </div>
        <div className="skills">
          <span>{user.skills[0]}</span>
          <span>{user.skills[1]}</span>
          <span>{user.skills[2]}</span>
          <span className="more">{user.skills[3]}</span>
        </div>
      </div>
      <div className="bottom">
        <p>{user.description}</p>
      </div>
      <button>View Profile</button>
    </div>
  );
};

export default Card;
