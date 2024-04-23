/* JavaScript for sidebar */
function hideSidebar() {
    const menu = document.querySelector(".sidebar");
    menu.style.display = "none";
    console.log('Sidebar closed');
}

function showSidebar() {
    const menu = document.querySelector(".sidebar");
    menu.style.display = "flex";
    console.log('Sidebar opened');
}

/* JavaScript for feedback form */
function showFeedbackForm() {
    document.getElementById("feedback-overlay").style.display = "flex";
    console.log('Feedback form shown');
}

function closeFeedbackForm() {
    document.getElementById("feedback-overlay").style.display = "none";
    console.log('Feedback form closed');
}

var addItemId = 0;
function addtoCart() {
    var item = document.getElementById('currentPackage');
    localStorage.setItem('item', item);
    console.log(localStorage.item);
    localStorage.setItem('img', item.children[0].getAttribute('alt'));
    localStorage.setItem('price', item.children[0].getAttribute('price'));
    console.log(localStorage.getItem('img'));

    //var url = '@Url.Action("bookings", "Home")'; // Generate the URL using ASP.NET Core Tag Helper
   // window.location.replace('/bookings');    


    let currentUrl = window.location.href;
    console.log(currentUrl);
//    window.alert(currentUrl);
    // Add a new parameter to the URL
    let newParam = '/bookings'; // Change this to your desired parameter and value
    let lastIndex = currentUrl.lastIndexOf("/");
    let result = currentUrl.substring(0,lastIndex);
    console.log(result);
    let updatedUrl = result + newParam;

    // Update the browser's URL
    window.history.pushState({ path: updatedUrl }, '', updatedUrl);
    window.location.reload();

}
