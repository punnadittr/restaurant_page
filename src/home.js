const renderHome = () => {
  const mainContent = document.getElementById('content');
  mainContent.style.background = 'url("restaurant.jpg")'
  mainContent.style.backgroundSize = 'cover';

  const mainRow = document.createElement('div');
  mainRow.className = "row justify-content-center align-items-center";
  mainRow.id = "main-content";

  const main_h1 = document.createElement('h1');
  main_h1.className = "display-1";

  const main_span = document.createElement('span');
  main_span.innerHTML = "COME AND GET DRUNK";

  main_h1.appendChild(main_span);
  mainRow.appendChild(main_h1);
  mainContent.appendChild(mainRow);
}

export default renderHome