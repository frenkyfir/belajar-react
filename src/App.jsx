import React from "react";
const Button = (props) =>{
  return(
  <button className={`h-10 px-6 font-semibold rounded-md ${props.color} text-white`} 
        type="submit">
          halo
        </button>
  );
};

function App() {

  return (
    <div className="flex justify-center bg-blue-600 min-h-screen items-center">
      <div className="flex gap-x-3">
        <Button color="bg-red-700"></Button>
        <Button color="bg-slate-700"></Button>
        </div>
    </div>
  );
}

export default App
