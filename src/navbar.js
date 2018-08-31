const renderNav = () => {  
  const mainNav = document.createElement('nav');

  mainNav.className = "navbar navbar-light bg-light";
  mainNav.style.justifyContent = 'flex-end';  

  const tabsContainer = document.createElement('ul');
  tabsContainer.style.margin = '0';

  const homeTab = document.createElement('li');
  const menuTab = document.createElement('li');
  const contactTab = document.createElement('li');

  homeTab.id = 'home';
  menuTab.id = 'menu';
  contactTab.id = 'contact';

  homeTab.className = 'nav-tab active';
  menuTab.className = 'nav-tab';
  contactTab.className = 'nav-tab';

  homeTab.innerHTML = 'HOME';
  menuTab.innerHTML = 'MENU';
  contactTab.innerHTML = 'CONTACT US';

  tabsContainer.appendChild(homeTab);
  tabsContainer.appendChild(menuTab);
  tabsContainer.appendChild(contactTab);

  mainNav.appendChild(tabsContainer);

  document.body.prepend(mainNav);
}

export default renderNav