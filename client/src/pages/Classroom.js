import React from "react";
import { Link } from "react-router-dom";
import Card from "../components/Card";
import { ClassRoomIcon } from "../assets/icons";
export function Classroom() {
  return (
    <>
      <div className="w-full h-screen">
        <div className="text-3xl text-white font-extralight mt-8 text-center">
          Classroom🎓
        </div>
        <div className="flex justify-around mt-16">
          <Link to="medical">
            <Card title="Medical" />
          </Link>
          <Link to="aerospacePage">
            <Card title="Aerospace Engineering" />
          </Link>
          <Link to="planets">
            <Card title="Planets" />
          </Link>
        </div>
        <div className="flex justify-around  mt-16 opacity-90">
          <Card title="Coming Soon ..." />
          <div className="opacity-60">
            <ClassRoomIcon />
          </div>
        </div>
      </div>
    </>
  );
}
