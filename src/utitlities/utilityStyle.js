import toast from "react-hot-toast";

export const getStatusClasses = (status) => {
  switch (status) {
    case "Shipped":
      return "bg-blue-100 text-blue-800 text-xs font-semibold";
    case "Processing":
      return "bg-yellow-100 text-yellow-800 text-xs font-semibold";
    case "Cancelled":
      return "bg-red-100 text-red-800 text-xs font-semibold";
    default:
      return "bg-green-100 text-green-800 text-xs font-semibold";
  }
};

export const showToast = (message, type) => {
  const isSuccess = type === "success";
  const iconColor = isSuccess ? "#28a745" : "#ba0517";
  const toastBackground = isSuccess ? "#28a745" : "#ba0517";
  toast[type](message, {
    iconTheme: {
      primary: "white",
      secondary: iconColor,
    },
    style: {
      backgroundColor: toastBackground,
      color: "white",
    },
  });
};
