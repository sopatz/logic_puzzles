// Initialize currency and hints in localStorage if not already set
if (!localStorage.getItem('currency')) {
  localStorage.setItem('currency', '0'); // Default starting currency
}
if (!localStorage.getItem('hints')) {
  localStorage.setItem('hints', '0'); // Default starting hints
}

// Function to update the displayed currency count
function updateCurrencyDisplay() {
  const currency = parseInt(localStorage.getItem('currency')) || 0;
  const currencyDisplay = document.getElementById('currencyCount');
  if (currencyDisplay) {
    currencyDisplay.innerText = `${currency}`;
  }
}

// Function to update the displayed hints count
function updateHintsDisplay() {
  const hints = parseInt(localStorage.getItem('hints')) || 0;
  const hintDisplay = document.getElementById('hintCount');
  if (hintDisplay) {
    hintDisplay.innerText = `${hints}`;
  }
}

// Call functions to initialize the displays
updateCurrencyDisplay();
updateHintsDisplay();

// Function to add currency
function addCurrency(amount) {
  let currency = parseInt(localStorage.getItem('currency')) || 0;
  currency += amount;
  localStorage.setItem('currency', currency);
  updateCurrencyDisplay();
}

// Function to subtract hints (e.g., when using a hint)
function useHint() {
  let hints = parseInt(localStorage.getItem('hints')) || 0;
  if (hints > 0) {
    hints -= 1;
    localStorage.setItem('hints', hints);
    updateHintsDisplay();
  } else {
    alert("No hints available!");
  }
}

// Function to add hints (e.g., when buying hints with currency)
function buyHint(cost) {
  let currency = parseInt(localStorage.getItem('currency')) || 0;
  if (currency >= cost) {
    currency -= cost;
    let hints = parseInt(localStorage.getItem('hints')) || 0;
    hints += 1;
    localStorage.setItem('currency', currency);
    localStorage.setItem('hints', hints);
    updateCurrencyDisplay();
    updateHintsDisplay();
  } else {
    alert("Not enough currency to buy a hint!");
  }
}
