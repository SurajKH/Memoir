import React, { useState, useEffect } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { collection, addDoc, serverTimestamp, getDocs } from 'firebase/firestore';
import { getFirestore } from 'firebase/firestore';
import Footer from '../common/Footer';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';

const TextEditor = () => {
  const [content, setContent] = useState('');
  const [previewContent, setPreviewContent] = useState('');

  var modules = {
    toolbar: [
      [{ size: ["small", false, "large", "huge"] }],
      ["bold", "italic", "underline", "strike", "blockquote"],
      [{ list: "ordered" }, { list: "bullet" }],
      ["link", "image"],
      [
        { list: "ordered" },
        { list: "bullet" },
        { indent: "-1" },
        { indent: "+1" },
        { align: [] }
      ],
      [{ "color": ["#000000", "#e60000", "#ff9900", "#ffff00", "#008a00", "#0066cc", "#9933ff", "#ffffff", "#facccc", "#ffebcc", "#ffffcc", "#cce8cc", "#cce0f5", "#ebd6ff", "#bbbbbb", "#f06666", "#ffc266", "#ffff66", "#66b966", "#66a3e0", "#c285ff", "#888888", "#a10000", "#b26b00", "#b2b200", "#006100", "#0047b2", "#6b24b2", "#444444", "#5c0000", "#663d00", "#666600", "#003700", "#002966", "#3d1466", 'custom-color'] }],
    ]
  };

  var formats = [
    "header", "height", "bold", "italic",
    "underline", "strike", "blockquote",
    "list", "color", "bullet", "indent",
    "link", "image", "align", "size",
  ];

  const handleProcedureContentChange = (newContent) => {
    setContent(newContent);
    setPreviewContent(newContent);
  };

  const handleBlogSubmit = async () => {
    const firestore = getFirestore();
    const blogsRef = collection(firestore, 'blogs');

    await addDoc(blogsRef, {
      content,
      timestamp: serverTimestamp(),
    });
    toast.success('Blog updated successfully!', { position: 'top-right' });
    setContent('');
    setPreviewContent('');
  };

  useEffect(() => {
    const checkData = async () => {
      const firestore = getFirestore();
      const blogsRef = collection(firestore, 'blogs');
      const snapshot = await getDocs(blogsRef);

      snapshot.forEach((doc) => {
        console.log('Blog Document ID:', doc.id);
        console.log('Blog Content:', doc.data().content);
        console.log('Timestamp:', doc.data().timestamp.toDate());
      });
    };

    checkData();
  }, []);

  return (
    <div style={{ padding: '1rem' }} className='w-full lg:w-3/4 mx-auto'>
      <div className="mb-4 flex justify-end">
        <button onClick={handleBlogSubmit} className="bg-blue-500 text-white px-4 py-2 rounded">
          Submit Your Blog.
        </button>
        
      </div>
      
      <div className='grid grid-cols-1 lg:grid-cols-2 gap-4'>
        <div className='mb-4 lg:mb-0'>
          <h1 style={{ textAlign: "center" }} className='text-2xl p-2'>Your Blog contents</h1>
          
          <ReactQuill
            theme="snow"
            modules={modules}
            formats={formats}
            placeholder="Write your content ..."
            onChange={handleProcedureContentChange}
            value={content}
            style={{ height: "450px", marginBottom:"70px" }}
            
          />
        </div>
        <div className='border border-orange-950 p-4 rounded mt-12 bg-black'>
          <h2 className='text-3xl mb-4 text-center lg:text-left text-white'>Text Preview (Basic Styling)</h2>
          <div className='whitespace-pre-line break-words text-white' dangerouslySetInnerHTML={{ __html: previewContent }} />
        </div>
      </div>
      <ToastContainer position="top-right" autoClose={3000} hideProgressBar={false} closeOnClick pauseOnHover draggable />
      {/* <Footer/> */}
    </div>

  );
}

export default TextEditor;
