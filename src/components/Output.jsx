import React, { useState } from "react";
import { runCode } from "../api";

const Output = ({valueRef}) => {
  const [output, setOutput] = useState(); // State to manage output
   console.log(output)

  const handleRunCode = async() => {
    // Placeholder: Add logic to execute code and update output
    // console.log(valueRef); // Example output
    let sourceCode =valueRef.current.getValue();
     let data  = await runCode(sourceCode);

    setOutput(data.run.output)

     console.log(output.length)
  };



  return (
    <div className="h-[100%] w-full flex flex-col">
      {/* Run Code Button */}
      <div className=" text-white p-2 flex justify-between m-1 items-center">
        <button
          className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-1 px-4 rounded"
          onClick={handleRunCode}
        >
          Run Code
        </button>
      </div>

      {/* Output Display */}
      <div className="bg-gray-900 text-white h-full p-4 mt-2 rounded shadow-md overflow-auto">
        {output}
      </div>
    </div>
  );
};

export default Output;