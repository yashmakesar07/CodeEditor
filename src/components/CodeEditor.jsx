import React, { useState, useRef } from "react";
import { Editor } from "@monaco-editor/react";
import Output from "./Output";

const CodeEditor = () => {
  const [language, setLanguage] = useState("javascript");

  const valueRef = useRef(null);

  const handleLanguageChange = (e) => {
    setLanguage(e.target.value);
  };

  const handleonMount = (editor) => {
    valueRef.current = editor;
  };

  const showValue = () => {
    alert(valueRef.current.getValue());
  };

  return (
    <div className="h-full w-full flex flex-col gap-4 bg-gray-900 text-white p-4">
      {/* Top Bar */}
      <div className="flex justify-between items-centerp-2 rounded">
        <select
          id="language"
          className="bg-gray-700 text-white border border-gray-600 rounded p-1"
          value={language}
          onChange={handleLanguageChange}
        >
          <option value="javascript">JavaScript</option>
          <option value="python">Python</option>
          <option value="typescript">TypeScript</option>
          <option value="css">CSS</option>
          <option value="html">HTML</option>
        </select>
      </div>

      {/* Editor and Output Section */}
      <div className="flex flex-row gap-4 h-full">
        {/* Monaco Editor */}
        <div className="flex-1 h-full border border-gray-700 rounded overflow-hidden">
          <Editor
            height="100%"
            onMount={handleonMount}
            language={language}
            theme="vs-dark"
            defaultValue={`console.log("hello world ")`}
          />
        </div>

        {/* Output Component */}
        <div className="flex-1 h-full bg-gray-800 border border-gray-700 rounded p-4">
          <Output valueRef= {valueRef}/>
        </div>
      </div>
    </div>
  );
};

export default CodeEditor;