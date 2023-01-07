//===================NAVBAR========================

var navLinks = document.getElementById("navLinks")

    function showMenu(){
        navLinks.style.right = "0"
    }

    function hideMenu(){
        navLinks.style.right = "-100px"
    }

// ==================== Code for getting the pay rate input field when hiring option is chosen ====================
let hiringRadioButton = document.getElementById('hiring');
let questionRadioButton = document.getElementById('question');
let commentRadioButton = document.getElementById('comment');
let messageLabel = document.getElementById('message_label');

var check = 0;

// Adding event listeners
hiringRadioButton.addEventListener('click', function() {
    if (check == 0) {
        messageLabel.innerHTML= "Please explain the nature of job: ";
        generatePayRateInput();
        check++;
    }
});

questionRadioButton.addEventListener('click', function() {
    messageLabel.innerHTML= "Please Ask a Question: ";
    if (check > 0) {
        deletePayRateInput();
        check = 0;
    }
});

commentRadioButton.addEventListener('click', function() {
    messageLabel.innerHTML= "Message for me: ";
    if (check > 0) {
        deletePayRateInput();
        check = 0;
    }
});

// Function to generate the pay rate input field
function generatePayRateInput() {
    let break1 = document.createElement('br');
    break1.id = 'b1';
    let break2 = document.createElement('br');
    break2.id = 'b2';
    let break3 = document.createElement('br');
    break3.id = 'b3';

    // Creating a label
    const node1 = document.createElement("label");
    const textNode = document.createTextNode("Expected Hourly Rate: ");
    node1.appendChild(textNode);
    node1.id = 'hiring-rate-label';

    // Creating the input Field
    const node2 = document.createElement("input");
    node2.id = 'hiring-rate-input';
    node2.name = 'payRate';
    node2.type = 'number';
    node2.step = '0.1';
    node2.placeholder = 'Hourly Pay';
    node2.classList.add('format')

    document.querySelector(".radio-btns").appendChild(break1);
    document.querySelector(".radio-btns").appendChild(break2);
    document.querySelector(".radio-btns").appendChild(node1);
    document.querySelector(".radio-btns").appendChild(break3);
    document.querySelector(".radio-btns").appendChild(node2);

    var comment = document.querySelector(".message");
    comment.classList.add("message-short");
}

// Function to delete the pay rate input field
function deletePayRateInput() {
    let label = document.getElementById('hiring-rate-label');
    let input = document.getElementById('hiring-rate-input');
    let div = document.querySelector(".radio-btns");
    let b1 = document.getElementById('b1');
    let b2 = document.getElementById('b2');
    let b3 = document.getElementById('b3');

    div.removeChild(b1);
    div.removeChild(b2);
    div.removeChild(b3);
    div.removeChild(input);
    div.removeChild(label);

    var comment = document.querySelector(".message");
    comment.classList.remove("message-short");
}

// ==================== Form Validation Code ====================
let messages = [];
const form = document.getElementById('contact-form');
const errorElement = document.getElementById('error');

form.addEventListener('submit', (e) => {
    messages = [];

    // Calling all the validation functions
    validateName();
    // validateEmail();
    // validateAddress();
    // validateCity();
    validatePostalCode();
    validateMessage();

    // Only validating the pay rate if hiring option was check
    if (check > 0) {
        payRateValidation();
    }

    // Displaying the errors
    if (messages.length > 0) {
        e.preventDefault();
        errorElement.innerHTML = `
        <h3>Incorrect Inputs Provided:</h3>
        <pre>${messages.join('\r\n')}</pre>
        `;
    }
})

form.addEventListener('reset', (e) => {
    messages = [];
    errorElement.innerHTML = '';
})

function reset(){
    messages = [];
    errorElement.innerHTML = '';
}


// Validation for the name input
function validateName() {
    const inputName = document.getElementById('name');
    if(nullChecker(inputName, 'Name')) {
        areAlphabets(inputName, '- Name should be valid - All characters should be alphabetical');
    }
}

// Validation for email input
// function validateEmail() {
//     const email = document.getElementById('email');
//     if (nullChecker(email, 'Email')) {
//         let validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
//         if (!(email.value.match(validRegex))) {
//             messages.push("- Email Address is Invalid");
//         }
//     }    
// }

// Validation for address
// function validateAddress() {
//     const address = document.getElementById('address');
//     if (nullChecker(address, 'Address')) {
//         if (address.value.length < 10) {
//             messages.push("- Address should be atleast 10 characters long");
//         }
//     }
// }

// Validation for city
// function validateCity() {
//     const city = document.getElementById('city');
//     if(nullChecker(city, 'City')) {
//         areAlphabets(city, '- City should be valid - All characters should be alphabetical');
//     }
// }

// Validation for postal code
function validatePostalCode() {
    let postalCode = document.getElementById('pCode');
    let validRegex = /^[A-Za-z]\d[A-Za-z][ -]?\d[A-Za-z]\d$/;
    if (!(postalCode.value.match(validRegex))) {
        messages.push("- Invalid Postal Code");
    }
}

// Validation for message
function validateMessage() {
    const message = document.getElementById('message');
    if (nullChecker(message, 'Message')) {
        if (address.value.length < 10) {
            messages.push("- Message should be atleast 5 characters long");
        }
    }
}

// Validation for the pay rate input field
function payRateValidation() {
    let payRateInput = document.getElementById('hiring-rate-input');
    if (payRateInput.value <= 0) {
        messages.push("- Enter an appropriate expected hourly pay rate")
    }
}

// Ensures that the element is not empty
function nullChecker(element, elementName) {
    result = true;
    if (element.value === '' || element.value == null) {
        messages.push(`- ${elementName} is required`);
        result = false;
    }
    return result;
}

// Ensures that all the characters in the input field are alphabets
function areAlphabets(element, message) {
    let validRegex = /^[A-Za-z\s]+$/;
    if (!(element.value.match(validRegex))) {
        messages.push(message);
    }
}