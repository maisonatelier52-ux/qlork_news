export const sortByDate = (articles: any[]) => {
  return [...articles].sort((a, b) => {
    const dateA = new Date(a.date.replace(/([A-Z][a-z]+)\./, '$1')).getTime();
    const dateB = new Date(b.date.replace(/([A-Z][a-z]+)\./, '$1')).getTime();
    return dateB - dateA;
  });
};