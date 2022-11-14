var index = 0;

function changeColors() {
    var colors = ["brown","gold","purple","bej","orange","maroon"];

    document.getElementsByTagName("body")[0].
    style.background = colors[index++];

    if (index > colors.length - 1)
      index = 0;
}