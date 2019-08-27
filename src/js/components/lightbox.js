UIkit.util.on(document, 'itemshown', '.uk-lightbox.uk-open', function (e) {
  var previews = e.current.children[0].children;
  var thumbs = document.createElement("ul")
  thumbs.classList.add('uk-thumbnav');
  e.current.children[0].classList.add('uk-slideshow-items');
  [].forEach.call(previews, function(li, index) {
    var img = li.children[0].currentSrc;
    var newLi = `
    <li uk-slideshow-item="${index}">
      <a href="#">
        <img src="${img}" width="100" alt="">
      </a>
    </li>
    `;
    thumbs.innerHTML += newLi;
  });
  
  e.current.appendChild(thumbs);

});