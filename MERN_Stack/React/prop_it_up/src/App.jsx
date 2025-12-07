import './App.css'
import SaleItem from './components/Saleitem'

function App() {

  return (
    <>
    <div>
        <SaleItem name={"Doe , Jane"} age={45} color={"black"} />
        <SaleItem name={"Smith , John"} age={88} color={"brown"} />
        <SaleItem name={"Fillmore , Millard"} age={50} color={"green"} />
        <SaleItem name={"Smith , Maria"} age={62} color={"yellow"} />

    </div>
    </>
  )
}

export default App
