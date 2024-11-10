import Card from "./Card"


const CardBox = () => {
    const flex = {
        display: 'flex',
        gap: '20px'
    }
    return (
        <div style={flex}>
            <Card />
            <Card />
            <Card />
            <Card />
        </div>
    )
}

export default CardBox;