---
layout: default
title: Blog
permalink: /blog/
---
<section class="content-page" style="max-width:980px;">
  <div class="eyebrow"><span class="ping"></span> ALL ARTICLES</div>
  <h1>The Techtonz Blog</h1>
  <p class="lead" style="margin-bottom:40px;">AI, data, Python, and web development — written to help you build, not just skim.</p>

  <div class="post-list">
    {% for post in site.posts %}
    <a href="{{ post.url | relative_url }}" class="post-card" style="display:block;">
      <div class="meta"><span class="tag">{{ post.category | default: "article" }}</span> · {{ post.date | date: "%b %-d, %Y" }}</div>
      <h3>{{ post.title }}</h3>
      <p>{{ post.excerpt | strip_html | truncate: 150 }}</p>
    </a>
    {% else %}
    <p class="prose">No articles published yet — check back soon.</p>
    {% endfor %}
  </div>
</section>
