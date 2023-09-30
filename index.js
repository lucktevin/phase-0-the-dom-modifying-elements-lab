// Write your code here!function addingEventListener() {
    const input = document.getElementById('input');

    function clickAlert() {
        alert('I was clicked!');
    }

    input.addEventListener('click', clickAlert);
}

addingEventListener(); // Call the outer function to activate the event listener

const newHeader =document.getElementById("victory")