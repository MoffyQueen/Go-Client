import React, { useState, useEffect } from "react";
import Goal from "../components/Goal";
import goals from "../data/goals";
import GoalHeader from "../components/GoalHeader";
import Loading from "../components/Loading";
import { useFetch } from "../Hooks/useFetch";

const Ongoing = () => {
  const {isLoading, data: { goals }, } = useFetch("https://go-server-2htl.onrender.com/api/goals");
  const Goals = isLoading ? [] : goals.filter((g) => g.progress < 100);
  return (
    <div className="container mt-2">
      <GoalHeader heading="Ongoing" />
      {isLoading && <Loading />}
      <div>
        {Goals &&
         Goals.map((g) => {
          return <Goal key={g._id} {...g} />;
        })}
      </div>
    </div>
  );
};

export default Ongoing;
