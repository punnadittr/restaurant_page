const renderContact = () => {
  const display = document.getElementById('content');
  const displayText = document.createElement('h1');
  const subDisplayText = document.createElement('h2');
  const contactWrapper = document.createElement('div');

  displayText.className = 'display-1 text-center';
  displayText.innerHTML = "Don't contact us";
  displayText.id = "contact-main-display";

  subDisplayText.className = 'display-4 text-center';
  subDisplayText.innerHTML = "We're closed forever :(";
  subDisplayText.id = 'contact-sub-display';

  contactWrapper.className = 'row justify-content-center align-items-center';
  contactWrapper.id = 'contact-container';

  contactWrapper.appendChild(displayText);
  contactWrapper.appendChild(subDisplayText);
  display.appendChild(contactWrapper);

  display.style.background = 'url("contact.jpg")';
  display.style.backgroundSize = 'cover';
}

export default renderContact;