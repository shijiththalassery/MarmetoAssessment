// Get the elements
document.addEventListener('DOMContentLoaded', function() {
    const countElement = document.querySelector('.count');
    const minusButton = document.querySelector('.minus');
    const incButton = document.querySelector('.inc');

    minusButton.addEventListener('click', function() {
        let count = parseInt(countElement.textContent);
        if (count > 1) {
            count--;
            countElement.textContent = count;
        }
    });

    incButton.addEventListener('click', function() {
        let count = parseInt(countElement.textContent);
        count++;
        countElement.textContent = count;
    });
});




///////////////////////////////////////////////////////////////
function showNotification() {
    const element = document.getElementById('myElement');
    console.log(name)
    let selectedItem 
    var notification = document.querySelector('.notification');
    
    const selectedOption = document.querySelector('input[name="size"]:checked');
    if (selectedOption) {
        selectedItem = selectedOption.value
        let message = `${element} with Color Yellow and Size ${selectedItem} added to cart`
        document.getElementById("messageId").innerHTML = message
        notification.style.display = 'block';
    } else {
        alert("Please select an option.");
    }

}