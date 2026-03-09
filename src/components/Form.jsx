import { useState } from 'react';

function Form({ onSubmit }) {
    const [name, setName] = useState("");
    const [url, setUrl] = useState("");

    const handleNameChange = (event) => {
        setName(event.target.value);
    }

    const handleUrlChange = (event) => {
        setUrl(event.target.value);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        onSubmit({ name, url });
        setName("");
        setUrl("");
    }

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="linkName">Name:</label>
            <input type="text" id="linkName" value={name} onChange={handleNameChange} />
            <br />
            <br />
            <label htmlFor="linkUrl">URL:</label>
            <input type="url" id="linkUrl" value={url} onChange={handleUrlChange} />
            <br />
            <br />
            <input type="submit" value="Submit" />
        </form>
    );
}

export default Form;