const clearContent = () => {
  const mainContent = document.getElementById('content');
  while (mainContent.firstChild) {
    mainContent.removeChild(mainContent.firstChild);
  }
}

export default clearContent