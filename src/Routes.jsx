import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "pages/Home";
import NotFound from "pages/NotFound";
const SignUp = React.lazy(() => import("pages/SignUp"));
const EditProfile = React.lazy(() => import("pages/EditProfile"));
const PhoneVerification = React.lazy(() => import("pages/PhoneVerification"));
const PasswordStrength = React.lazy(() => import("pages/PasswordStrength"));
const ForgotPassword = React.lazy(() => import("pages/ForgotPassword"));
const Wishlist = React.lazy(() => import("pages/Wishlist"));
const HelpCenter = React.lazy(() => import("pages/HelpCenter"));
const ShoppingCart = React.lazy(() => import("pages/ShoppingCart"));
const ProductQuickview = React.lazy(() => import("pages/ProductQuickview"));
const ReorderPurchase = React.lazy(() => import("pages/ReorderPurchase"));
const RefundManagement = React.lazy(() => import("pages/RefundManagement"));
const PushNotifications = React.lazy(() => import("pages/PushNotifications"));
const GuestLogin = React.lazy(() => import("pages/GuestLogin"));
const Payments = React.lazy(() => import("pages/Payments"));
const Notifications = React.lazy(() => import("pages/Notifications"));
const QRCode = React.lazy(() => import("pages/QRCode"));
const PricingEngine = React.lazy(() => import("pages/PricingEngine"));
const Orderdetailview = React.lazy(() => import("pages/Orderdetailview"));
const DiscountsOffers = React.lazy(() => import("pages/DiscountsOffers"));
const InvoiceBilling = React.lazy(() => import("pages/InvoiceBilling"));
const OrderTracking = React.lazy(() => import("pages/OrderTracking"));
const ItemAvailability = React.lazy(() => import("pages/ItemAvailability"));
const ProjectRoutes = () => {
  return (
    <React.Suspense fallback={<>Loading...</>}>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/itemavailability" element={<ItemAvailability />} />
          <Route path="/ordertracking" element={<OrderTracking />} />
          <Route path="/invoicebilling" element={<InvoiceBilling />} />
          <Route path="/discountsoffers" element={<DiscountsOffers />} />
          <Route path="/orderdetailview" element={<Orderdetailview />} />
          <Route path="/pricingengine" element={<PricingEngine />} />
          <Route path="/qrcode" element={<QRCode />} />
          <Route path="/notifications" element={<Notifications />} />
          <Route path="/payments" element={<Payments />} />
          <Route path="/guestlogin" element={<GuestLogin />} />
          <Route path="/pushnotifications" element={<PushNotifications />} />
          <Route path="/refundmanagement" element={<RefundManagement />} />
          <Route path="/reorderpurchase" element={<ReorderPurchase />} />
          <Route path="/productquickview" element={<ProductQuickview />} />
          <Route path="/shoppingcart" element={<ShoppingCart />} />
          <Route path="/helpcenter" element={<HelpCenter />} />
          <Route path="/wishlist" element={<Wishlist />} />
          <Route path="/forgotpassword" element={<ForgotPassword />} />
          <Route path="/passwordstrength" element={<PasswordStrength />} />
          <Route path="/phoneverification" element={<PhoneVerification />} />
          <Route path="/editprofile" element={<EditProfile />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
      </Router>
    </React.Suspense>
  );
};
export default ProjectRoutes;
