import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";


const Instructors = () => {
  const [instructors, setInstructors] = useState([]);
  const navigate = useNavigate();

  const getInstructors = () => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setInstructors(data))
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    getInstructors();
  }, []);

  return (
    <div className="instructors-main">
      <h3> Instructors </h3>
      <div className="instructors-list">
        {instructors?.map((inst) => {
            const {id, name} = inst;
            return (
                // onClick={() => navigate(`/instructors/${id}`)
                <div 
                className="avatar cursor-pointer " 
                onClick={() => navigate(`/instructors/${id}`, { state: inst }) } >
                    <img src={`https://avatars.dicebear.com/v2/avataaars/${id}.svg`} alt="" />
                    <h6>{name}</h6>
                </div>
            )
        })}
      </div>
    </div>
  );
};

export default Instructors;
