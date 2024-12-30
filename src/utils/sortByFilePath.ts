export const sortByFilePath = (a: string, b: string) => {
  const fileNameA = a.split("/").pop() || "";
  const fileNameB = b.split("/").pop() || "";
  const numA = parseInt(fileNameA.split("-")[0]) || 0;
  const numB = parseInt(fileNameB.split("-")[0]) || 0;
  return numA - numB;
};
