import React from "react";

const CardBody = ({ name, companyName, catchPhrase }) => (
    <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <h6 className="card-subtitle mb-2 text-muted">{companyName}</h6>
        <p className="card-text">{catchPhrase}</p>
    </div>
);

const Card = ({ user }) => {
    const { name } = user;
    const { name: companyName, catchPhrase } = user.company;

    return (
        <div className="card">
            <CardBody name={name} companyName={companyName} catchPhrase={catchPhrase} />
        </div>
    );
};

export default Card;