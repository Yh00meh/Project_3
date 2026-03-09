const  TableBody = (props) => {
    const rows = props.data.map((row, index) => {
    return (
        <tr key={index}>
          <td>{row.name}</td>
          <td>
            <a href={row.url}>{row.url}</a>
          </td>
          <td><button onClick={() => props.removeLink(index)}>Delete</button></td>
        </tr>
    )
    });

    return <tbody>{rows}</tbody>;
}


function TableHeader() {
  return (
    <thead>
        <tr>
            <th>Name</th>
            <th>URL</th>
            <th>Actions</th>
        </tr>
    </thead>
);
}
function Table(props) {

  return (
    <table>
        <TableHeader />
        <TableBody data={props.data}
        removeLink={props.removeLink} 
        />
    </table>
  );
}

export default Table;