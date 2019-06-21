$( document ).ready( onReady );

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
    // display inventory
}

function onReady(){
    console.log( 'JQ' );
    $( '#addItemButton' ).on( 'click', addItem );
}