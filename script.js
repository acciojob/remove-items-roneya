 var colorSelect = document.getElementById("colorSelect");
    var removeButton = document.getElementById("removeButton");
    removeButton.addEventListener("click", function() {
      var selectedOption = colorSelect.options[colorSelect.selectedIndex];
      colorSelect.removeChild(selectedOption);
    });
