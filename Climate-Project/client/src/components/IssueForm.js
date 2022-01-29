import { useState } from "react";

const initInputs = {
    title: "",
    issue: "",
    imgUrl: "",
}

export default function IssueForm({addIssue}){
    const [inputs, setInput] = useState(initInputs)
    const { title, issue, imgUrl } = inputs

    const handleChange = (e) => {
        const {name, value} = e.target
        setInput(prevInput => ({
            ...prevInput,
            [name]: value
        }))
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        addIssue(inputs)
        setInput(initInputs)
    }

    return(
        <div>
            <form onSubmit={ handleSubmit }>
                <input 
                    type="text"
                    name="title"
                    value={title}
                    onChange={handleChange}
                    placeholder="Title of Issue"
                />
                <input 
                    type="text"
                    name="issue"
                    value={issue}
                    onChange={handleChange}
                    placeholder="What type of issue?"
                />
                <input 
                    type='text'
                    name="imgUrl"
                    value={imgUrl}
                    onChange={handleChange}
                    placeholder="Image"
                />
                <button>Add Issue</button>
            </form>
        </div>
    )
}