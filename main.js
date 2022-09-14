// option = document.querySelector('.option')
// navbar = document.querySelector('.navbar')
// navList = document.querySelector('.nav-list')
// search = document.querySelector('.searchbar')

// // displaying user name in website 
// let name = prompt("What is your name?");
// user = name.toUpperCase();
// document.getElementById('logo').innerHTML = "Hello !" + ' ' + user;


// alerting

function myFunction(){

   response = confirm("Are you sure want to submit?");
   if(response){
    document.getElementById('submitted').innerHTML = "Submitted";
    
   }

   else{
    document.getElementById('submitted').innerHTML = "Not Submitted";
   }
}


// Inserting Date and Time in Website 

// function to format 1 in 01

const zeroFill = n => {
    return('0' + n). slice(-2);

}

// Creates interval
const interval = setInterval(() => {
    // Get current time 
    const now = new Date();

    // formate date as in mm/dd/yyyy hh:ii:ss 
    const dateTime = zeroFill((now.getMonth() + 1)) + '/' + zeroFill(now.getUTCDate()) + '/' +now.getFullYear() + '      '+ zeroFill(now.getHours()) + ':' + zeroFill(now.getMinutes()) + ':' + zeroFill(now.getSeconds());

    // Display the date and time on the screen  using div#date-time 

    document.getElementById('date-time').innerHTML = dateTime;
}, 1000);




// option.addEventListener('click', () => {
//     navbar.classList.toggle('h-nav-resp')
//     navList.classList.toggle('v-opacity-resp')
//     search.classList.toggle('v-opacity-resp')






// });
// let whenClicked = () => {
//         Links.classList.remove("show")}