import { render, screen } from "@testing-library/react";
import ShopHeader from "../components/ShopHeader";

describe("Shopheader tests", () => {
  let cart;
  let setCart;
  beforeEach(() => {
    cart = [{
      _id: "620410019119f03eeb6c771a",
      title: "gummy bears",
      price: "5.45",
      quantity: "2",
      productId: "62040ed79119f03eeb6c7719",
      createdAt: "1644433409000",
      updatedAt: "1644433463039"
    }];
    render(<ShopHeader cart={cart} />);
  });

  it("ShopHeader renders", () => {
    const heading = screen.getByRole("heading", {
      level: 2,
      name: "Your Cart"
    });
    expect(heading).toBeInTheDocument();

  });

  it("Checkout button empties cart", () => {
    const checkoutButton = screen.getByRole("")
  })

  it.skip("Checkout button disabled when cart is empty", () => {

  })
});