
export const getStatusColor = (status: string) => {
  switch (status) {
    case "new":
      return "bg-blue-500";
    case "qualified":
      return "bg-green-500";
    case "contacted":
      return "bg-yellow-500";
    case "converted":
      return "bg-purple-500";
    case "lost":
      return "bg-red-500";
    default:
      return "bg-gray-500";
  }
};

export const formatDate = (dateString: string) => {
  return new Date(dateString).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
};
