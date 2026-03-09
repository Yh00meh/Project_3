import Table from "./Table";
import Form from "./Form";
import { useState } from 'react';

function LinkContainer() {
    const [favLinks, setFavLinks] = useState([])

    const handleRemove = (index) => {
        setFavLinks(favLinks.filter((_, i) => i !== index));
    }

    const handleSubmit = (favLink) => {
        setFavLinks([...favLinks, favLink]);
    }

  return (

    <div>
        <h1>My Favorite Links</h1>
        <p>Add a new link with a name and URL to the table!</p>
        <Table data={favLinks} prop2 prop3 removeLink={handleRemove} />

        <h1>Add new</h1>
        <Form onSubmit={handleSubmit} />
    </div>
  );
}

export default LinkContainer;