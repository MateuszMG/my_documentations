export const groupTitles = (titles: Title[]): GroupedTitles =>
  titles.reduce((acc: any, obj) => {
    const key = obj.mainTitle;

    if (!acc[key]) acc[key] = [];
    acc[key].push(obj);
    return acc;
  }, {});
