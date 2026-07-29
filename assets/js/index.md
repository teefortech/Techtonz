---
layout: default
title: Blog
permalink: /blog/
---
<section class="content-page" style="max-width:980px;">
  <div class="eyebrow"><span class="ping"></span> ALL ARTICLES</div>
  <h1>The Techtonz Blog</h1>
  <p class="lead" style="margin-bottom:32px;">AI, data, Python, and web development — written to help you build, not just skim.</p>

  <div class="search-box">
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
    <input type="text" id="blogSearch" placeholder="Search articles by title or tag...">
  </div>

  <div class="post-list" id="postList">
    {% for post in site.posts %}
    <a href="{{ post.url | relative_url }}" class="post-card" style="display:block;" data-title="{{ post.title | downcase }}" data-tags="{{ post.tags | join: ' ' | downcase }}" data-category="{{ post.category | downcase }}">
      <div class="meta"><span class="tag">{{ post.category | default: "article" }}</span> · {{ post.date | date: "%b %-d, %Y" }}</div>
      <h3>{{ post.title }}</h3>
      <p>{{ post.excerpt | strip_html | truncate: 150 }}</p>
    </a>
    {% else %}
    <p class="prose">No articles published yet — check back soon.</p>
    {% endfor %}
  </div>
  <p class="prose" id="noResults" style="display:none;">No articles match your search.</p>
</section>

<script src="{{ '/assets/js/blog-search.js' | relative_url }}"></script>
