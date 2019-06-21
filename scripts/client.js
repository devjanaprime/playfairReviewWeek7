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

function filter(){
    console.log( 'in filter' );
    // capture user input
    const colorSearch = $( '#colorSearchIn' ).val();
    const sizeSearch = $( '#sizeSearchIn' ).val();
    // loop through inventory
    for( let i = 0; i<inventory.length; i++ ){
        // display matches
        if( inventory[ i ].size === sizeSearch && inventory[ i ].color === colorSearch ){
            console.log( 'match:', inventory[ i ] );
        } //end match
    } // end for
}

function onReady(){
    console.log( 'JQ' );
    $( '#addItemButton' ).on( 'click', addItem );
    $( '#filterButton' ).on( 'click', filter );
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