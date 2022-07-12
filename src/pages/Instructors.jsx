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
    <div className="instructors-main ">
      <h3 className="text-center" > Instructors </h3>
      <div className="instructors-list grid grid-cols-4 ">
        {instructors?.map((inst) => {
            const {id, name} = inst;
            return (
                // onClick={() => navigate(`/instructors/${id}`, { state: inst }) useLocation ile kullanım için
                
                <div 
                className="avatar cursor-pointer " 
                onClick={() => navigate(`/instructors/${id}`) } >
                    <img src={`https://avatars.dicebear.com/v2/avataaars/${id}.svg`} alt="" />
                    <h6 className="text-center" >{name}</h6>
                </div>
            )
        })}
      </div>
    </div>
  );
};

export default Instructors;
