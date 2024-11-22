// script.js

// Function to add 2 list items
function addItems() {
  const list = document.getElementById('infi-list');
  
  // Create 2 new list items
  for (let i = 0; i < 2; i++) {
    const listItem = document.createElement('li');
    listItem.textContent = `List item ${list.children.length + 1}`;
    list.appendChild(listItem);
  }
}

// Function to detect when the user has scrolled near the bottom of the list
function checkScroll() {
  const list = document.getElementById('infi-list');
  
  // If the user has scrolled to the bottom or near it
  if (list.scrollHeight - list.scrollTop === list.clientHeight) {
    addItems();  // Add 2 more list items
  }
}

// Add initial 10 list items
for (let i = 0; i < 10; i++) {
  addItems();
}

// Listen for scroll events on the main list
document.getElementById('infi-list').addEventListener('scroll', checkScroll);

// Optional: Add a small delay to simulate a more "realistic" infinite scroll feel
function addItemsWithDelay() {
  setTimeout(() => {
    addItems();
  }, 200);  // Add items every 200ms for smoother transition
}
