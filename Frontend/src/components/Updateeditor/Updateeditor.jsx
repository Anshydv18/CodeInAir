import JoditEditor from "jodit-react";
import React, { useEffect, useState, useRef } from "react";
import toast from "react-hot-toast";
import { useLocation } from "react-router-dom";

function Updateeditor() {
    const location = useLocation();
    const [post, setPost] = useState({});
    const [content, setContent] = useState('');
    const [title, setTitle] = useState('');
    const [company, setCompany] = useState('');

    useEffect(() => {
        const data = location.state?.data || {};
        setPost(data);
        setTitle(data.title || '');
        setCompany(data.company || '');
        setContent(data.content || '');
    }, [location.state]);

    const handlesubmit = async (id) => {
        try {
            const response = await fetch(`http://localhost:3000/api/blog/update/${id}`, {
                method: "POST",
                headers: { "Content-Type": 'application/json' },
                credentials: "include",
                body: JSON.stringify({ title, content, company })
            });
            if (!response.ok) {
                throw new Error(response.statusText);
            }
            toast.success('Updated successfully ✌️');
        } catch (error) {
            toast.error(error.message);
        }
    };

    return (
        <div>
            <div className="px-16">
                <div className="flex flex-row-reverse justify-around">
                    <div>Instructions</div>
                    <div>
                        <label>Title :</label>
                        <input
                            type="text"
                            className="border mx-2 my-2 px-1 w-96 rounded-lg"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                        />
                        <JoditEditor
                            ref={useRef(null)}
                            value={content}
                            onBlur={(newContent) => setContent(newContent)}
                            onChange={(newContent) => {}}
                        />
                        <label>Company :</label>
                        <input
                            type="text"
                            className="border mx-2 my-2 px-1 w-96 rounded-lg"
                            value={company}
                            onChange={(e) => setCompany(e.target.value)}
                        />
                        <button onClick={() => handlesubmit(post._id)} className="px-4 py-2 rounded-md">
                            Update
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Updateeditor;
