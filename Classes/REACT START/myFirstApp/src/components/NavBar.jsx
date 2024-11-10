const NavBar = () => {
    const border = {
        border: "2px solid",
        display: 'flex',
        gap: '20px'
    }
    return (
        <ul style={border}>
            <li>Name</li>
            <li>Group</li>
            <li>Roll</li>
        </ul>
    )
}

export default NavBar;