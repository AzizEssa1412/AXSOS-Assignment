import '../App.css'

function SaleItem(props) {

return (
    <>
    <div>
        <h1> {props.name}</h1>
        <h2> {props.age} </h2>
        <h3> {props.color} </h3>
    </div>
    </>
)
}

export default SaleItem
