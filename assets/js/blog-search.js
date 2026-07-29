document.addEventListener('DOMContentLoaded', function () {
  var searchInput = document.getElementById('blogSearch');
  var cards = document.querySelectorAll('#postList .post-card');
  var noResults = document.getElementById('noResults');
  if (!searchInput) return;

  searchInput.addEventListener('input', function () {
    var q = searchInput.value.trim().toLowerCase();
    var visibleCount = 0;
    cards.forEach(function (card) {
      var matches = card.dataset.title.includes(q) ||
        card.dataset.tags.includes(q) ||
        card.dataset.category.includes(q);
      card.classList.toggle('hidden', !matches);
      if (matches) visibleCount++;
    });
    if (noResults) {
      noResults.style.display = visibleCount === 0 ? 'block' : 'none';
    }
  });
});
