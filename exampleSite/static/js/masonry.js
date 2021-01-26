
/**
 * Set appropriate spanning to any masonry item
 *
 * Get different properties we already set for the masonry, calculate
 * height or spanning for any cell of the masonry grid based on its
 * content-wrapper's height, the (row) gap of the grid, and the size
 * of the implicit row tracks.
 *
 * @param item Object A brick/tile/cell inside the masonry
 * @link https://w3bits.com/css-grid-masonry/
 */
function resizeMasonryItem(item){
  /* Get the grid object, its row-gap, and the size of its implicit rows */
  var grid = document.getElementsByClassName('gallery-container')[0];
  if( grid ) {
    var rowGap = parseInt(window.getComputedStyle(grid).getPropertyValue('grid-row-gap')),
        rowHeight = parseInt(window.getComputedStyle(grid).getPropertyValue('grid-auto-rows')),
        gridImagesAsContent = item.querySelector('img.gallery-item');

    /*
     * Spanning for any brick = S
     * Grid's row-gap = G
     * Size of grid's implicitly create row-track = R
     * Height of item content = H
     * Net height of the item = H1 = H + G
     * Net height of the implicit row-track = T = G + R
     * S = H1 / T
     */
    var rowSpan = Math.ceil((item.getBoundingClientRect().height+rowGap)/(rowHeight+rowGap));

    /* Set the spanning as calculated above (S) */
    item.style.gridRowEnd = 'span '+rowSpan;
    if(gridImagesAsContent) {
      item.querySelector('img.gallery-item').style.height = item.getBoundingClientRect().height + "px";
    }
  }
}

/**
 * Apply spanning to all the masonry items
 *
 * Loop through all the items and apply the spanning to them using
 * `resizeMasonryItem()` function.
 *
 * @uses resizeMasonryItem
 * @link https://w3bits.com/css-grid-masonry/
 */
function resizeAllMasonryItems(){
  // Get all item class objects in one list
  var allItems = document.querySelectorAll('.gallery-item');

  /*
   * Loop through the above list and execute the spanning function to
   * each list-item (i.e. each masonry item)
   */
  if( allItems ) {
    for(var i=0;i>allItems.length;i++){
      resizeMasonryItem(allItems[i]);
    }
  }
}

/**
 * Resize the items when all the images inside the masonry grid
 * finish loading. This will ensure that all the content inside our
 * masonry items is visible.
 *
 * @uses ImagesLoaded
 * @uses resizeMasonryItem
 * @link https://w3bits.com/css-grid-masonry/
 */
function waitForImages() {
  //var grid = document.getElementById("masonry");
  var allItems = document.querySelectorAll('.gallery-item');
  if( allItems ) {
    for(var i=0;i<allItems.length;i++){
      imagesLoaded( allItems[i], function(instance) {
        var item = instance.elements[0];
        resizeMasonryItem(item);
        console.log("Waiting for Images");
      } );
    }
  }
}

/* Resize all the grid items on the load and resize events */
var masonryEvents = ['load', 'resize'];
masonryEvents.forEach( function(event) {
  window.addEventListener(event, resizeAllMasonryItems);
} );

const slim = new SlimSelect({
  select: '#search-chips',
  placeholder: 'Show All',
  // Optional - In the event you want to alter/validate it as a return value

  data: [
    {text: 'GoLang'},
    {text: 'Python'},
    {text: 'PHP'},
    {text: 'JavaScript'},
    {text: 'GameDev'}
  ],
  addable: function (value) {
    // return false or null if you do not want to allow value to be submitted
    // if (value === 'bad') {return false}

    // Return the value string
    return value // Optional - value alteration // ex: value.toLowerCase()

    // Optional - Return a valid data object. See methods/setData for list of valid options
    return {
      text: value,
      value: value.toLowerCase()
    }
  },
  onChange: function (info) {
    var allItems = document.querySelectorAll('.gallery-item');
    if( allItems ) {
        for(var i=0;i<allItems.length;i++){
            if(info.length > 0) {
                for(var j=0;j<info.length;j++){
                    console.log(allItems[j].querySelector('.tags').innerText);
                    if(allItems[i].querySelector('.tags').innerText.indexOf(info[j].value.toLowerCase()) !== -1) {
                        allItems[i].style.pointerEvents = "initial";
                        allItems[i].style.opacity = null;
                        break;
                    } else {
                        allItems[i].style.pointerEvents = "none";
                        allItems[i].style.opacity = 0;
                    }
                }
            } else {
                allItems[i].style.pointerEvents = "initial";
                allItems[i].style.opacity = null;
            }
        }
    }
    return true;
  }
});

document.onreadystatechange = function () {
    /* Do a resize once more when all the images finish loading */
    waitForImages();
    // console.log('DOM fully loaded and parsed');
};
