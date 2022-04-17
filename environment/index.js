export const URL =
  process.env.NODE_ENV === "production"
    ? "https://chat-back-node.herokuapp.com"
    : "http://localhost:4000";
