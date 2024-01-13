// Get all the nav links
const navLinks = document.querySelectorAll(".nav-link");
const windowPathname = window.location.pathname;
// Add click event listeners to the links
navLinks.forEach((link) => {
  const navLinkPathname = new URL(link.href).pathname;
  if (
    windowPathname === navLinkPathname ||
    (windowPathname === "/index.html" && navLinkPathname === "/")
  ) {
    link.classList.add("active");
  }
  //  link.addEventListener('click', function (e) {
  //    // Remove the 'active' class from all links
  //    navLinks.forEach(link => link.classList.remove('active'));

  //    // Add the 'active' class to the clicked link
  //    this.classList.add('active');

  //  });
});
// Example starter JavaScript for disabling form submissions if there are invalid fields
(function () {
  "use strict";

  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  var forms = document.querySelectorAll(".needs-validation");

  // Loop over them and prevent submission
  Array.prototype.slice.call(forms).forEach(function (form) {
    form.addEventListener(
      "submit",
      function (event) {
        if (!form.checkValidity()) {
          event.preventDefault();
          event.stopPropagation();
        }

        form.classList.add("was-validated");
      },
      false
    );
  });
})();

function openNav() {
  document.getElementById("mySidebar").style.width = "350px";
  document.getElementById("main").style.marginLeft = "250px";
}

function closeNav() {
  document.getElementById("mySidebar").style.width = "0";
  document.getElementById("main").style.marginLeft = "0";
}
function showLoader() {
  document.getElementById("loader").style.display = "block";
}

function hideLoader() {
  document.getElementById("loader").style.display = "none";
}

// Simulate loading time
setTimeout(function () {
  hideLoader(); // Hide the loader when content is loaded
  document.getElementById("content").style.display = "block"; // Display the content
}, 3000); // Adjust the time as needed
