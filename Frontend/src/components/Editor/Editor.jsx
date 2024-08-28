import React, { useRef, useState } from 'react'
import JoditEditor from 'jodit-react'
function Editor() {
  const editor = useRef(null);
	const [content, setContent] = useState('');


	return (
		<div>



      <JoditEditor
			ref={editor}
			value={content}
			
			onBlur={newContent => setContent(newContent)} // preferred to use only this option to update the content for performance reasons
			onChange={newContent => {}}
		/>
    </div>
	);
}

export default Editor
