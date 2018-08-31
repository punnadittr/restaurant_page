import renderHome from "./home";
import clearContent from "./clearcontent";
import { renderMenu, renderMenuSkeleton } from "./menu";
import renderContact from "./contact";

const switchTab = () => {
  const tabItems = document.getElementsByClassName('nav-tab');
  for (let i = 0; i < tabItems.length; i++) {
    tabItems[i].addEventListener('click', (e) => {
      // Remove all actives before adding it
      for (let j = 0; j < tabItems.length; j++) {
        tabItems[j].classList.remove('active');
      }
      tabItems[i].classList.add('active');
      if (e.target.id == 'menu') {
        clearContent();
        renderMenuSkeleton();
        renderMenu('Hamburger', 'Makes you feel full, still junk food', 'food/burger.jpg');
        renderMenu('Pizza', 'Tastes good, still junk food', 'food/pizza.jpg');
        renderMenu('Cookies', 'Makes you feel good, still junk food', 'food/cookies.jpg');
        renderMenu('Sweets', 'Lets your blood flow, still junk food', 'food/sweets.jpg');
        renderMenu('French Fries', 'Is technically vegetables, still junk food', 'food/fries.jpg');
        renderMenu('Donuts', 'Fulfills your holes in life, still junk food', 'food/donuts.jpg');
        renderMenu('Ice-Cream', 'Cools you down, still junk food', 'food/icecream.jpg');
        renderMenu('Whatever', "I don't actually know what this is, still junk food" , 'food/sandwich.jpg');
       
      } else if (e.target.id == 'home') {
        clearContent();
        renderHome();
      } else {
        clearContent();
        renderContact();
      }
    });
  }
}
export default switchTab;