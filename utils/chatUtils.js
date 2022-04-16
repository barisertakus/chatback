export const generatePrivateChatId = (id, id2) => {
  return id > id2 ? id + "-" + id2 : id2 + "-" + id;
};
