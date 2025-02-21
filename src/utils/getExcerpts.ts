export const getExcerpts = (text: string, length = 20) => {
  const words = text.split(/\s+/);
  return words.slice(0, length).join(" ");
};
