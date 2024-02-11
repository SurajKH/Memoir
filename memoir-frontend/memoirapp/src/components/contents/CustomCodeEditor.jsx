import React, { useState } from 'react';
import CodeEditor from './CodeEditor';
import Footer from '../common/Footer';

const CustomCodeEditor = () => {
    const [code, setCode] = useState('');
    const [language, setLanguage] = useState('javascript');
    const [outputs, setOutputs] = useState({
      javascript: 'Code is not Executed Yet.',
      python: 'Code is not Executed Yet.',
      java: 'Code is not Executed Yet.',
      cpp: 'Code is not Executed Yet.',
    });
  
    const handleLanguageChange = (newLanguage) => {
      setLanguage(newLanguage);
    };
  
    const handleExecute = async () => {
      try {
       // setLanguage('');
        const response = await fetch('http://localhost:3001/execute', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ code, language }),
        });
  
        if (!response.ok) {
          const { error } = await response.json();
          setOutputs((prevOutputs) => ({
            ...prevOutputs,
            [language]: `Error: ${error}`,
          }));
          return;
        }
  
        const { output, stderr } = await response.json();
        setOutputs((prevOutputs) => ({
          ...prevOutputs,
          [language]: output || stderr || 'No output',
        }));
      } catch (error) {
        console.error('Execution error:', error);
        setOutputs((prevOutputs) => ({
          ...prevOutputs,
          [language]: 'Error during code execution.',
        }));
      }
    };
  
    return (
      <>
      <div className='w-3/4 mx-auto mt-4 mb-5'>
        <p className='border bg-gray-200 border-black border-r-8 text-black p-12 text-2xl'>
          Note: Support for Languages apart from C++ coming Soon.
        </p>
      </div>
      <div className="flex flex-col items-center justify-center bg-gray-100 w-3/4 mx-auto">
        <h1 className="text-3xl font-bold mb-4">Code Editor</h1>
        <div className="mb-4">
          <label className="mr-2">
            Select Language:
            <select
              className="ml-2 p-2 border border-gray-300 rounded"
              onChange={(e) => handleLanguageChange(e.target.value)}
            >
              <option value="javascript">JavaScript</option>
              <option value="python">Python</option>
              <option value="java">Java</option>
              <option value="cpp">C++</option>
            </select>
          </label>
        </div>
        <CodeEditor language={language} code={code} onChange={setCode} />
        <button
          className="mt-4 p-2 bg-blue-500 text-white rounded shadow hover:bg-blue-700"
          onClick={handleExecute}
        >
          Execute Code
        </button>
        <div className="mt-4">
          <h2 className="text-2xl font-bold mb-2">Output:</h2>
          <pre className="p-4 bg-gray-200 border border-gray-300 rounded shadow">
            {outputs[language]}
          </pre>
        </div>
      </div>
      <Footer/>
</>
    );
  };
  
  export default CustomCodeEditor;
  