import React from "react";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <div className="dhiwise-navigation">
      <h1>Homepage</h1>
      <p className="headline">
        This project was generated By{" "}
        <a href="https://www.dhiwise.com">Dhiwise</a>. Quickly use below links
        to navigate through all pages.
      </p>
      <ul>
        <li>
          <Link to="/itemavailability">ItemAvailability</Link>
        </li>
        <li>
          <Link to="/ordertracking">OrderTracking</Link>
        </li>
        <li>
          <Link to="/invoicebilling">InvoiceBilling</Link>
        </li>
        <li>
          <Link to="/discountsoffers">DiscountsOffers</Link>
        </li>
        <li>
          <Link to="/orderdetailview">Orderdetailview</Link>
        </li>
        <li>
          <Link to="/pricingengine">PricingEngine</Link>
        </li>
        <li>
          <Link to="/qrcode">QRCode</Link>
        </li>
        <li>
          <Link to="/notifications">Notifications</Link>
        </li>
        <li>
          <Link to="/payments">Payments</Link>
        </li>
        <li>
          <Link to="/guestlogin">GuestLogin</Link>
        </li>
        <li>
          <Link to="/pushnotifications">PushNotifications</Link>
        </li>
        <li>
          <Link to="/refundmanagement">RefundManagement</Link>
        </li>
        <li>
          <Link to="/reorderpurchase">ReorderPurchase</Link>
        </li>
        <li>
          <Link to="/productquickview">ProductQuickview</Link>
        </li>
        <li>
          <Link to="/shoppingcart">ShoppingCart</Link>
        </li>
        <li>
          <Link to="/helpcenter">HelpCenter</Link>
        </li>
        <li>
          <Link to="/wishlist">Wishlist</Link>
        </li>
        <li>
          <Link to="/forgotpassword">ForgotPassword</Link>
        </li>
        <li>
          <Link to="/passwordstrength">PasswordStrength</Link>
        </li>
        <li>
          <Link to="/phoneverification">PhoneVerification</Link>
        </li>
        <li>
          <Link to="/editprofile">EditProfile</Link>
        </li>
        <li>
          <Link to="/signup">SignUp</Link>
        </li>
      </ul>
    </div>
  );
};
export default Home;
