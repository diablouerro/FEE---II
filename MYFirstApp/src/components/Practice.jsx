
const Practice = ({name, age, gender}) => {
    const border = {
        display: 'inline-block',
        margin: '20px',
        border: '2px solid black',
        padding: '30px',
        flex: 1,
    }
    return (
        <div className = 'practice' style={border}>
            <h1>Name: {name}</h1>
            <h2>Age: {age}</h2>
            <h3>Gender: {gender}</h3>
        </div>
    )
}

export default Practice