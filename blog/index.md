---
layout: default
title: Blog
permalink: /blog/
---

<section class="content-page" style="max-width:980px;">
  <div class="eyebrow"><span class="ping"></span> ALL ARTICLES</div>
  <h1>The Techtonz Blog</h1>
  <p class="lead" style="margin-bottom:32px;">Artificial Intelligence, Data Science, Data Analytics, Python, and Machine Learning articles written to help you build, not just skim.</p>

  <div class="search-box">
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
      <circle cx="11" cy="11" r="8"></circle>
      <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
    </svg>
    <input type="text" id="blogSearch" placeholder="Search by title, category, or keyword..." autocomplete="off">
  </div>

  <div class="post-grid" id="postList">
    {% for post in site.posts %}
    {% assign words = post.content | number_of_words %}
    {% assign read_time = words | divided_by: 200 | plus: 1 %}
    <a href="{{ post.url | relative_url }}"
       class="post-card-modern"
       data-title="{{ post.title | downcase | escape }}"
       data-category="{{ post.category | default: 'article' | downcase | escape }}"
       data-tags="{{ post.tags | join: ' ' | downcase | escape }}"
       data-excerpt="{{ post.excerpt | strip_html | downcase | escape }}">
      <div class="post-card-image">
        {% if post.image %}
          <img src="{{ post.image | relative_url }}" alt="{{ post.title }}" loading="lazy">
        {% else %}
          <img src="https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=70" alt="" loading="lazy">
        {% endif %}
      </div>
      <div class="post-card-body">
        <div class="post-card-meta">
          <span class="badge">{{ post.category | default: "article" }}</span>
          <span class="dot-sep">·</span>
          <span>{{ post.date | date: "%b %-d, %Y" }}</span>
          <span class="dot-sep">·</span>
          <span>{{ read_time }} min read</span>
        </div>
        <h3>{{ post.title }}</h3>
        <p>{{ post.excerpt | strip_html | truncate: 130 }}</p>
      </div>
    </a>
    {% else %}
    <p class="prose">No articles published yet — check back soon.</p>
    {% endfor %}
  </div>
  <p class="prose" id="noResults" style="display:none; text-align:center; margin-top:32px;">No articles match your search.</p>
</section>

<script>
(function () {
  var input = document.getElementById('blogSearch');
  var cards = document.querySelectorAll('#postList .post-card-modern');
  var noResults = document.getElementById('noResults');
  if (!input || !cards.length) return;

  input.addEventListener('input', function () {
    var q = input.value.trim().toLowerCase();
    var visible = 0;

    cards.forEach(function (card) {
      var haystack = [
        card.getAttribute('data-title') || '',
        card.getAttribute('data-category') || '',
        card.getAttribute('data-tags') || '',
        card.getAttribute('data-excerpt') || ''
      ].join(' ');

      var match = !q || haystack.indexOf(q) !== -1;
      card.style.display = match ? '' : 'none';
      if (match) visible++;
    });

    if (noResults) {
      noResults.style.display = visible === 0 ? 'block' : 'none';
    }
  });
})();
</script>

<section class="about-section">
  <div class="about-section-inner">
    <div class="name-highlight" style="text-align: center;">
      <h2>Have something in mind?</h2>
      <p>A topic you'd like explained, a tool you'd like reviewed, or a project you'd like to see built? We'd love to hear from you.</p>
      <p style="margin-bottom: 28px;">Your suggestions help shape future articles and tutorials.</p>
      <a href="{{ '/contact/' | relative_url }}" class="btn-primary">Get in touch →</a>
    </div>
  </div>
</section>
