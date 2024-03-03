$('.grid-custom').isotope({
  itemSelector: '.grid-item',
  layoutMode: 'fitRows',
})

$(document).ready(function () {
  $('.filter-group').find('li').get(0).click();
})

$('.filter-group').on('click', 'li', function () {
  $('.filter-button').removeClass('text-green-600 border-b-green-600').addClass('border-b-neutral-900');
  $(this).addClass('text-green-600 border-b-green-600').removeClass('border-b-neutral-900');
  var filterValue = $(this).attr('data-filter') || '*';
  filterValue = filterValue == '*' ? filterValue : '.' + filterValue
  $('.grid-custom').isotope({ filter: filterValue });
});

$('.portfolio-item').on('click', function (e) {
  e.preventDefault();
  var imgElement = $(this).find('img').get(0).src;
  document.body.style.overflow = "hidden";
  $('.img-item').get(0).src = imgElement;
  $('.container-item').removeClass('hidden');
  $('.img-item').removeClass('animate-zoom-out-img');
  $('.img-item').addClass('animate-zoom-in-img')
})

$('#close-zoom-img').on('click', function () {
  closeZoomImg()
})


const closeZoomImg = () => {
  $('.img-item').removeClass('animate-zoom-in-img')
  $('.img-item').addClass('animate-zoom-out-img')
  setTimeout(() => {
    $('.container-item').addClass('hidden');
    document.body.style.overflow = "auto"
  }, 100);
}