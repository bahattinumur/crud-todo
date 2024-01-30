const getStatus = (status) => {
  switch (status) {
    case "important":
      return <span className="badge p-2 bg-danger">Urgent</span>;
    case "job":
      return <span className="badge p-2 bg-warning">High</span>;
    case "daily":
      return <span className="badge p-2 bg-primary">Low</span>;
    default:
      return <span className="badge p-2 bg-secondary">Medium</span>;
  }
};

export default getStatus;
