import ShopHeader from "./ShopHeader";
import Products from "./Products";
import AddProductForm from "./AddProductForm";

const App = () => {
  return (
    <div id="app">
      <ShopHeader />

      <main>
        <Products />
        <AddProductForm />
      </main>
    </div>
  );
};

export default App;
