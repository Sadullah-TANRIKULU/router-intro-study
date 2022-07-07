import { useState, useEffect } from "react";
import { useParams, useNavigate, useLocation } from "react-router-dom";

const InstructorDetail = () => {
  const [inst, setInst] = useState([]);
  const navigate = useNavigate();
//   const inst = useLocation();  // ara linkler gerekmiyorsa mantıklı
  const {id} = useParams();  // ara linkler lazımsa mantıklı

  const getInstructors = () => {
    fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then((res) => res.json())
      .then((data) => setInst(data))
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    getInstructors();

  }, [id]);
console.log(inst);// console.log(inst.state);   // useLocation kullanınca .state ile data yı alıyoruz
  return (
    <div className="instDetail">
      <h3> Instructor Detail </h3>
      <h4>{inst.name}</h4>
      <img src={`https://avatars.dicebear.com/v2/avataaars/${id}.svg`} alt="" />
      <h5>{inst.email}</h5>
      <h5>{inst.phone}</h5>
      <div className="btns flex gap-2">
        <button onClick={() => navigate("/")} className="bg-green-500 p-1 rounded-md" >Home</button>
        <button onClick={() => navigate(-1)} className="bg-yellow-500 p-1 rounded-md" >Go Back</button>
      </div>
    </div>
  );
};

export default InstructorDetail;
