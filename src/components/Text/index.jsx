import React from "react";

const sizeClasses = {
  txtGilroySemiBold24: "font-gilroy font-semibold",
  txtGilroySemiBold20: "font-gilroy font-semibold",
  txtGilroyMedium18Red700: "font-gilroy font-medium",
  txtUrbanistItalicThin24: "font-hairline font-urbanist italic",
  txtGilroyMedium14Amber700: "font-gilroy font-medium",
  txtGilroyMedium16BlueA700: "font-gilroy font-medium",
  txtGilroyRegular18: "font-gilroy font-normal",
  txtOpenSansMedium18: "font-medium font-opensans",
  txtOpenSansMedium14: "font-medium font-opensans",
  txtOpenSansMedium16: "font-medium font-opensans",
  txtGilroyMedium12Bluegray400: "font-gilroy font-medium",
  txtGilroyMedium18Gray700: "font-gilroy font-medium",
  txtGilroyMedium18Black90002: "font-gilroy font-medium",
  txtGilroySemiBold32: "font-gilroy font-semibold",
  txtGilroyBold24: "font-bold font-gilroy",
  txtGilroyMedium20BlueA700: "font-gilroy font-medium",
  txtPoppinsRegular18: "font-normal font-poppins",
  txtGilroyMedium16Bluegray900: "font-gilroy font-medium",
  txtGilroyRegular15Gray500: "font-gilroy font-normal",
  txtGilroySemiBold16Green600: "font-gilroy font-semibold",
  txtGilroySemiBold36: "font-gilroy font-semibold",
  txtGilroyMedium18Bluegray900: "font-gilroy font-medium",
  txtGilroySemiBold16Black900: "font-gilroy font-semibold",
  txtChivoBold50: "font-chivo font-normal",
  txtOpenSansMedium24: "font-medium font-opensans",
  txtGilroySemiBold16BlueA700: "font-gilroy font-semibold",
  txtOpenSansMedium20: "font-medium font-opensans",
  txtGilroyMedium24Green600: "font-gilroy font-medium",
  txtGilroyBold18: "font-bold font-gilroy",
  txtGilroyMedium16Black900: "font-gilroy font-medium",
  txtGilroyRegular18Bluegray500: "font-gilroy font-normal",
  txtGilroyMedium18Black900: "font-gilroy font-medium",
  txtGilroySemiBold16Red700: "font-gilroy font-semibold",
  txtGilroyMedium20: "font-gilroy font-medium",
  txtGilroyMedium20Bluegray400: "font-gilroy font-medium",
  txtGilroyMedium18Green600: "font-gilroy font-medium",
  txtGilroyMedium24: "font-gilroy font-medium",
  txtGilroySemiBold16Bluegray200: "font-gilroy font-semibold",
  txtGilroyMedium24Bluegray900: "font-gilroy font-medium",
  txtGilroySemiBold24Bluegray900: "font-gilroy font-semibold",
  txtGilroyMedium24Black90001: "font-gilroy font-medium",
  txtPoppinsRegular12: "font-normal font-poppins",
  txtGilroySemiBold24BlueA700: "font-gilroy font-semibold",
  txtOpenSansMedium24Bluegray900: "font-medium font-opensans",
  txtGilroyMedium16Bluegray400: "font-gilroy font-medium",
  txtOpenSansMedium18Bluegray400: "font-medium font-opensans",
  txtOpenSansRomanSemiBold16: "font-opensans font-semibold",
  txtGilroyMedium14: "font-gilroy font-medium",
  txtGilroyMedium18BlueA700: "font-gilroy font-medium",
  txtGilroyMedium12: "font-gilroy font-medium",
  txtGilroySemiBold18: "font-gilroy font-semibold",
  txtGilroyMedium18: "font-gilroy font-medium",
  txtGilroyRegular15: "font-gilroy font-normal",
  txtGilroyRegular15Gray90001: "font-gilroy font-normal",
  txtGilroySemiBold16: "font-gilroy font-semibold",
  txtGilroyRegular16: "font-gilroy font-normal",
  txtGilroyMedium16: "font-gilroy font-medium",
  txtGilroySemiBold15: "font-gilroy font-semibold",
  txtGilroyRegular14: "font-gilroy font-normal",
  txtOpenSansRomanSemiBold12: "font-opensans font-semibold",
  txtGilroySemiBold16Bluegray700: "font-gilroy font-semibold",
  txtGilroySemiBold16Bluegray900: "font-gilroy font-semibold",
};

const Text = ({ children, className = "", size, as, ...restProps }) => {
  const Component = as || "p";

  return (
    <Component
      className={`text-left ${className} ${size && sizeClasses[size]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Text };
