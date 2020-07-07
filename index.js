'use strict';
function shoppingList() {
  // add items to list when you have text and you click add item
  // should inherit css properties defined by li 
  $('form').on('submit', function (event) {
    event.preventDefault();
    // need to wrap in if statment when done
    let currentInput = $('#shopping-list-entry').val();
    // {} run function of adding to list
    if (currentInput !== '') {
      $(".shopping-list").append(renderItem(currentInput));
    } else {
      alert('Enter shopping item!')
    }
  });

  // alternatively have a render function to style item added to list
  function renderItem(text) {
    return `<li>
    <span class="shopping-item">${text}</span>
    <div class="shopping-item-controls">
      <button class="shopping-item-toggle">
        <span class="button-label">check</span>
      </button>
      <button class="shopping-item-delete">
        <span class="button-label">delete</span>
      </button>
    </div>
  </li>`
  };

  // toggle  item between strike through and no text decoration when button 'check' is clicked
  $('ul').on('click', '.shopping-item-toggle', function (event) {
    // if first list item with class shopping item class doesn't have "shopping-item__checked" add 
    //else if it does have "shopping-item__checked" remove this class 
    $(event.target).closest('li').find('.shopping-item').toggleClass('shopping-item__checked');
  });

  // should delete item from list when delete button clicked 
  $('ul').on('click', '.shopping-item-delete', function (event) {
    $(this).closest('li').remove();
  });


}

$(shoppingList);