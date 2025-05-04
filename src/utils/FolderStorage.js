export const getSavedFolder = () => {
  const folderPath = localStorage.getItem("selectedFolder");
  return folderPath || null;
};

export const saveFolder = (path) => {
  if (typeof path !== "string") {
    console.warn("saveFolder: invalid path");
    return;
  }
  localStorage.setItem("selectedFolder", path);
};

export const clearFolder = () => {
  localStorage.removeItem("selectedFolder");
};
