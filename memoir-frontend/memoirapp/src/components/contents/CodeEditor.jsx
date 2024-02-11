import React from 'react';
import MonacoEditor from 'react-monaco-editor';

const CodeEditor = ({language,code,onChange}) => {

  const options={
    selectOnLineNumbers:true
  }  

  return (
    <React.Fragment>
    <div >
    <MonacoEditor
       language={language}
       theme="vs-dark" // You can choose a different theme
      value={code}
      options={options}
      onChange={onChange}
      width={"450px"}
      height={"550px"}
      className="w-3/4 mx-auto"
      />
    </div>
    </React.Fragment>
  )
}

export default CodeEditor;
