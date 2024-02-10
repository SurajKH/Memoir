import React from 'react';
import MonacoEditor from 'react-monaco-editor';

const CodeEditor = ({language,code,onChange}) => {

  const options={
    selectOnLineNumbers:true
  }  

  return (
    <React.Fragment>
    <div className='w-1/2 mx-auto'>
    <MonacoEditor
       language={language}
       theme="vs-dark" // You can choose a different theme
      value={code}
      options={options}
      onChange={onChange}
      width={"650px"}
      height={"500px"}
      />
    </div>
    </React.Fragment>
  )
}

export default CodeEditor;
