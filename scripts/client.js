$( document ).ready( onReady );

let inventory = [];

function addItem(){
    console.log( 'in addItem' );
    // capture user input
    // place in a new object
    let newItem = {
        color: $( '#colorIn' ).val(),
        name: $( '#nameIn' ).val(),
        size: $( '#sizeIn' ).val()
    }
    console.log( 'adding:', newItem );
    // push object into an array
    inventory.push( newItem );
    // display inventory
    showInventory();
}

function onReady(){
    console.log( 'JQ' );
    $( '#addItemButton' ).on( 'click', addItem );
}

function showInventory(){
    console.log( 'in showInventory' );
    let el = $( '#inventoryOut' );
    // empty our output element
    el.empty();
    // loop through the inventory
    for( let i=0; i<inventory.length; i++ ){
        // append each item to the DOM
        el.append( `<li>${inventory[i].name}</li>` );
    } //end for
}