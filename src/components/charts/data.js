export const barData = {
  labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
  datasets: [
    {
      label: "Sales",
      data: [4000, 3000, 5000, 4500, 6000, 5500],
      backgroundColor: "rgba(33, 150, 243, 0.6)",
      borderColor: "rgba(33, 150, 243, 1)",
      borderWidth: 1,
    },
  ],
};

export const pieData = {
  labels: ["Product A", "Product B", "Product C", "Product D"],
  datasets: [
    {
      label: "Product Distribution",
      data: [3000, 5000, 2000, 1000],
      backgroundColor: [
        "rgb(39 183 92)",
        "rgb(242 148 17)",
        "rgb(62 127 241)",
        "rgb(167 86 242)",
      ],
      borderWidth: 1,
    },
  ],
};

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top",
      labels: {
        color: "#333",
      },
    },
    title: {
      display: true,
      text: "Sales Overview",
      color: "#333",
    },
  },
};

export const pieOptions = {
  responsive: true,
  plugins: {
    legend: {
      position: "top",
      labels: {
        color: "#333",
      },
    },
    title: {
      display: true,
      text: "Product Distribution",
      color: "#333",
    },
  },
};
