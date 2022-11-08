//Sort array of strings alphabetically
const sortArray = (arr: string[]) => {
  return arr.sort();
};

//Sort array of objects by property
const sortArrayByProperty = (arr: any[], property: string) => {
  return arr.sort((a, b) => {
    if (a[property] < b[property]) {
      return -1;
    }
    if (a[property] > b[property]) {
      return 1;
    }
    return 0;
  });
};

export { sortArray, sortArrayByProperty };
