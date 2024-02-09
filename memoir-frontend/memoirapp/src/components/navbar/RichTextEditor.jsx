// // src/RichTextEditor.jsx
import React,{useState,useEffect} from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { collection, addDoc, serverTimestamp,getDocs } from 'firebase/firestore';
import { getFirestore } from 'firebase/firestore';

const RichTextEditor = () => {

    const [content, setContent] = useState('');
    const formats = [
        'bold',
        'italic',
        'underline',
        'strike',
        'blockquote',
        'list',
        'bullet',
        'indent',
        'link',
      ];
    
      const modules = {
        toolbar: [
          [{ header: '1' }, { header: '2' }, { font: [] }],
          [{ size: [] }],
          ['bold', 'italic', 'underline', 'strike', 'blockquote'],
          [{ list: 'ordered' }, { list: 'bullet' }, { indent: '-1' }, { indent: '+1' }],
          ['link'],
          ['clean'],
        ],
      };
  const handleBlogSubmit = async () => {
    const firestore = getFirestore();
    const blogsRef = collection(firestore, 'blogs');

    await addDoc(blogsRef, {
      content,
      timestamp: serverTimestamp(),
    });

    setContent('');
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
  }, []); // Run only once on component mount

  return (
    <div style={{ padding: '1rem', minHeight: '100vh' }}>
      <div className="mb-4 flex justify-end">
        <button onClick={handleBlogSubmit} className="bg-blue-500 text-white px-4 py-2 rounded">
          Submit Blog
        </button>
      </div>
      <ReactQuill
        theme="snow"
        formats={formats}
        modules={modules}
        value={content}
        className='w-3/4 mx-auto'
        onChange={(value) => setContent(value)}
      />
    </div>
  );
};

export default RichTextEditor;
