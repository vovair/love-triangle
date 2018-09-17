/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
  if (preferences.length == 0) return 0;
  const isValid = index => {
    return index > 0 && index <= preferences.length;
  };
  const isTriangle = first => {
    const second = preferences[first - 1];
    if (!isValid(second) || second == first) return false;
    const third = preferences[second - 1];
    if (!isValid(third) || third == second) return false;
    return preferences[third - 1] == first;
  };
  let count = 0;
  for (let i = 1; i <= preferences.length; i++) if (isTriangle(i)) count++;
  return count / 3;
};
