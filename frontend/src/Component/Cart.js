
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";

import { useState, useEffect } from "react";
import { authService } from "../authentication/authentication";

let cartTotal = 0;
let shippingTotal = 0;
let total = 0;

const Cart = () => {
  // const products = useSelector((state) => {
  //   return state.cart.products;
  // });

  const products = JSON.parse(localStorage.getItem("cart")); // Get cart items from local storage

  console.log("cart items,", products);

  // Use selector hook to get the count of items in the cart from the Redux store
  const cartCount = useSelector((state) => {
    console.log("this is nav state", state.cart.count);
    return state.cart.count;
  });
  const [currentUser, setCurrentUser] = useState(undefined); // State hook to get the current user from the authService
  console.log("currenttt", currentUser);

  // UseEffect hook to retrieve the current user and set it to the currentUser state
  useEffect(() => {
    const user = authService.getCurrentUser();
    console.log("userla", user);

    if (user) {
      setCurrentUser(user.currentUser);
    }
  }, []);

  return (
    <>
      <p className="text-[40px]">Cart Items({cartCount})</p>
      <div class="flex flex-col">
        <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div class="py-4 inline-block min-w-full sm:px-6 lg:px-8">
            <div class="overflow-hidden">
              <table class="min-w-full text-center">
                <thead class="border-b bg-gray-800">
                  <tr>
                    <th
                      scope="col"
                      class="text-sm font-medium text-white px-6 py-4"
                    >
                      Payment Details
                    </th>
                    <th
                      scope="col"
                      class="text-sm font-medium text-white px-6 py-4"
                    >
                      Payment Calculation
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr class="bg-white border-b">
                    <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      Sub Total:
                    </td>
                    <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                      {
                        (cartTotal = products.reduce((total, item) => {
                          return total + item.cartQuantity * item.price;
                        }, 0))
                      }
                    </td>
                  </tr>
                  <tr class="bg-white border-b">
                    <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      Shipping 10%:
                    </td>
                    <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                      {(shippingTotal = 0.1 * cartTotal)}
                    </td>
                  </tr>
                  <tr class="bg-white border-b">
                    <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      Total:
                    </td>

                    <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                      {(total = cartTotal + shippingTotal)}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
        {total === 0 ? (
          <h1> Please add to Cart</h1>
        ) : (
          <button class=" bg-gray-800 text-white  ">
            <Link to="/checkout">Click here to Proceed to Checkout</Link>
          </button>
        )}
      </div>

      <hr />

      <div className="flex flex-wrap">
        {products &&
          products.slice(0, 10).map((item) => {
            return (
              <>
                <Link to={`../products/${item._id}`}>
                  <div
                    key={item.id}
                    className="card h-[373] w-[234px] inline-block text-center shadow-xl m-[20px] hover:mt-[-0.5px]"
                  >
                    <img
                      src={item.images}
                      alt={item.id + "img"}
                      className="p-[10px] h-[233px] w-[233px]"
                    />
                    <span className="p-[10px] text-orange-500">
                      {item.name}
                    </span>
                    <span className="p-[10px] text-orange-500 text-end">
                      ({item.cartQuantity})
                    </span>
                    <p className="pb-[10px]">Rs.{item.price}</p>
                  </div>
                </Link>
              </>
            );
          })}
      </div>
    </>
  );
};

export default Cart;