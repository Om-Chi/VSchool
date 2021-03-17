var counting= document.getElementById("demo"),
  count = 0;

document.addEventListener('click', function(here) {
  count += 1
  counting.innerHTML = "Count " + count
}, true); 