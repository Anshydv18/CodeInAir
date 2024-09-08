import React, { useRef, useState } from 'react'
import JoditEditor from 'jodit-react'
 import { useCreatePost } from '../../Hooks/useCreatePost.js';

function Editor() {
    const editor = useRef(null);
	const [content, setContent] = useState('');
	const [title,settitle]=useState('');
	const [company,setcompany]=useState('');
	const {create,loading} = useCreatePost();
  const handlesubmit = async()=>{

	const res = await create({title,content,company})
  }
	return (
		<div className='px-16'>

      <div className='flex flex-row-reverse justify-around'>
		<div>
			instructions
		</div>
		<div>
			{/* ye hamara editor hai , 1->title 2->content 3->company name */}
			<label>
				Title : 
			</label>
			<input type='text' 
			className=' border mx-2 my-2 px-1 w-96 rounded-lg'
			value={title}
			onChange={(e)=>{settitle(e.target.value)}}
			/>
		<JoditEditor
			ref={editor}
			value={content}
			
			onBlur={newContent => setContent(newContent)}
			onChange={newContent => {}}
			
		/>
		<label>
				Company : 
			</label>
			<input type='text' 
			className=' border mx-2 my-2 px-1 w-96 rounded-lg'
			value={company}
			onChange={(e)=>{setcompany(e.target.value)}}
		/>
  
      <button onClick={handlesubmit} className='px-4 py-2 rounded-md bg-purple-900 text-white text-shadow-sm hover:bg-purple-700'>Submit</button>
		</div>
	  </div>
    </div>
	);
}

export default Editor
