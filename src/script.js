$('.grid').isotope({
  itemSelector: '.grid-item',
  layoutMode: 'fitRows',
})

$('.filter-group').on('click', 'li', function () {
  $('.filter-button').removeClass('text-green-600 border-b-green-600');
  $(this).addClass('text-green-600 border-b-green-600');
  var filterValue = $(this).attr('data-filter')  || '*';
  filterValue = filterValue == '*' ? filterValue : '.' + filterValue 
  $('.grid').isotope({ filter: filterValue });
});