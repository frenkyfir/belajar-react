import React from "react";
const Button = (props) =>{
  const {children="....",color="bg-black"}=props;
  return(
    
  <button className={`h-10 px-6 font-semibold rounded-md ${color} text-white`} 
        type="submit">
          {children}
        </button>
  );
};

function App() {

  return (
    <div className="flex justify-center bg-blue-600 min-h-screen items-center">
      <div className="flex gap-x-3">
        <Button color="bg-red-700">Halo</Button>
        <Button color="bg-red-700">dek</Button>
        <Button ></Button>
        </div>
    </div>
  );
}

export default App
