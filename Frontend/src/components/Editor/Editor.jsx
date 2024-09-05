import React, { useRef, useState } from 'react'
import JoditEditor from 'jodit-react'

function Editor() {
  const editor = useRef(null);
	const [content, setContent] = useState('');

	const [title,settitle]=useState('');
	const [company,setcompany]=useState('');
  const handlesubmit = ()=>{
	// send data to tha backend from here
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
			
			onBlur={newContent => setContent(newContent)} // preferred to use only this option to update the content for performance reasons
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
   {/* submit ka button dena hai */}
      <button onClick={handlesubmit} className='px-4 py-2 rounded-md'>Submit</button>
		</div>
	  </div>
    </div>
	);
}

export default Editor
