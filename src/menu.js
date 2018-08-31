const renderMenuSkeleton = () => {
  const display = document.getElementById('content');
  const displayText = document.createElement('h1');
  const menuWrapper = document.createElement('div');
  const column = document.createElement('div');
  const h1Span = document.createElement('span');

  column.className = 'col-md-8 d-flex justify-content-center';
  column.id = 'menu-container';

  menuWrapper.className = 'row justify-content-center';
  menuWrapper.id = 'menu-wrapper';

  displayText.className = 'display-1 text-center';
  displayText.id = 'menu-display';

  h1Span.innerHTML = 'Oh! We actually have <span style="text-decoration: line-through; text-decoration-color: red;">junk</span> food'

  displayText.appendChild(h1Span);

  display.appendChild(displayText);
  menuWrapper.appendChild(column);
  display.appendChild(menuWrapper);

  display.style.background = 'url("menu.jpg")';
  display.style.backgroundSize = 'cover';
}

const renderMenu = (foodName, foodDescription, foodImgUrl) => {
  const menuContainer = document.getElementById('menu-container');
  const card = document.createElement('div');
  const cardBody = document.createElement('div');
  const img = document.createElement('img');
  const title = document.createElement('h5');
  const description = document.createElement('p');

  card.className = 'card food-card';
  card.style.width = '18rem';
  card.style.height = '19rem';

  cardBody.className = 'card-body';

  title.className = 'card-title';
  title.innerHTML = foodName;

  description.className = 'card-text';
  description.innerHTML = foodDescription;
  
  img.className = 'card-img-top';
  img.src = foodImgUrl;

  cardBody.appendChild(title);
  cardBody.appendChild(description);

  card.appendChild(img);
  card.appendChild(cardBody);

  menuContainer.appendChild(card);
}

export { renderMenuSkeleton , renderMenu };