import ProductTable from "./components/ProductTable";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="h-screen bg-slate-50">
      <Navbar/>
      <ProductTable />
    </div>
  );
}

export default App;
