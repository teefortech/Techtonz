---
layout: page
title: Free Resources
permalink: /resources/
eyebrow: LEARN FASTER
---

<p class="resources-intro">
  Practical cheat sheets, roadmaps, and exercises for Python, data science, SQL, and AI —
  free to use, built for learners who want clarity over noise.
</p>

<div class="resources-grid">
  {% for item in site.data.resources %}
  <a href="{{ item.permalink | relative_url }}" class="resource-card {% if item.status == 'coming-soon' %}is-soon{% endif %}">
    <div class="resource-card-top">
      <span class="resource-type mono">{{ item.type }}</span>
      {% if item.status == 'coming-soon' %}
      <span class="resource-soon">Coming soon</span>
      {% else %}
      <span class="resource-free">Free</span>
      {% endif %}
    </div>
    <h2>{{ item.title }}</h2>
    <p>{{ item.tagline }}</p>
    <span class="resource-cat mono">{{ item.category }}</span>
  </a>
  {% endfor %}
</div>

<section class="resources-note">
  <h2>How to use these</h2>
  <p>
    Download a resource, keep it beside your editor, and pair it with the related tutorials on Techtonz.
    New sheets and roadmaps are added regularly.
  </p>
  <p>
    <a class="btn-ghost" href="{{ '/blog/' | relative_url }}">Browse the blog →</a>
  </p>
</section>
