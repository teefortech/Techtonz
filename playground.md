---
layout: page
title: Python Playground
permalink: /playground/
eyebrow: EXPERIMENT
---

<section class="pg-hero">
  <div class="pg-hero-inner">
    <span class="pg-eyebrow">EXPERIMENT</span>
    <p class="pg-lead">
      Learn by doing. Write and run Python code instantly in your browser — no install, no setup.
    </p>
    <div class="pg-hero-actions">
      <a class="btn-primary" href="https://teefortech.github.io/techtonz-playground/lab/index.html" target="_blank" rel="noopener">
        Launch Full Playground →
      </a>
      <a class="btn-ghost" href="#challenges">Try a challenge</a>
    </div>
  </div>
</section>

<section class="pg-block">
  <div class="section-head">
    <h2>Live environment</h2>
    <span class="path mono">~/techtonz/playground</span>
  </div>
  <div class="pg-embed-card">
    <div class="pg-embed-bar">
      <span class="pg-dot"></span>
      <span class="pg-dot"></span>
      <span class="pg-dot"></span>
      <span class="pg-embed-title mono">jupyterlite · python</span>
    </div>
    <div class="pg-embed-body">
      <p>Open the full JupyterLab environment to write notebooks, run cells, and experiment freely.</p>
      <p class="pg-note">First load may take 10–20 seconds while Python downloads to your browser.</p>
      <a class="btn-primary" href="https://teefortech.github.io/techtonz-playground/lab/index.html" target="_blank" rel="noopener">
        Open JupyterLite →
      </a>
    </div>
  </div>
</section>

<section class="pg-block">
  <div class="section-head">
    <h2>Features</h2>
    <span class="path mono">~/what-you-get</span>
  </div>
  <div class="pg-feature-grid">
    <div class="pg-feature-card">
      <span class="pg-feature-icon">⚡</span>
      <h3>No installation</h3>
      <p>Python runs entirely in your browser. Nothing to download or configure.</p>
    </div>
    <div class="pg-feature-card">
      <span class="pg-feature-icon">📓</span>
      <h3>Jupyter notebooks</h3>
      <p>Use real notebooks with cells, markdown, and outputs — the same workflow pros use.</p>
    </div>
    <div class="pg-feature-card">
      <span class="pg-feature-icon">📊</span>
      <h3>Data analysis</h3>
      <p>Practice with lists, tables, and charts as you build data skills step by step.</p>
    </div>
    <div class="pg-feature-card">
      <span class="pg-feature-icon">🤖</span>
      <h3>Machine learning path</h3>
      <p>A foundation for future ML tutorials — start simple, grow into models later.</p>
    </div>
    <div class="pg-feature-card">
      <span class="pg-feature-icon">💾</span>
      <h3>Save locally</h3>
      <p>Download notebooks to your device so your work isn’t lost when you close the tab.</p>
    </div>
    <div class="pg-feature-card">
      <span class="pg-feature-icon">🔗</span>
      <h3>Tied to Techtonz</h3>
      <p>Copy examples from our tutorials and paste them here to practice immediately.</p>
    </div>
  </div>
</section>

<section class="pg-block" id="challenges">
  <div class="section-head">
    <h2>Beginner challenges</h2>
    <span class="path mono">~/try-these</span>
  </div>
  <p class="pg-intro">Copy a challenge into the playground, run it, then tweak it. Small wins build confidence fast.</p>

  <div class="pg-challenge-list">
    <article class="pg-challenge">
      <div class="pg-challenge-head">
        <span class="pg-challenge-num mono">01</span>
        <h3>Say hello</h3>
      </div>
      <p>Print a welcome message to the console.</p>
      <pre class="pg-code"><code>print("Hello, Techtonz!")</code></pre>
    </article>

    <article class="pg-challenge">
      <div class="pg-challenge-head">
        <span class="pg-challenge-num mono">02</span>
        <h3>Average of a list</h3>
      </div>
      <p>Calculate the average of a few numbers.</p>
      <pre class="pg-code"><code>numbers = [15, 22, 30, 18]
average = sum(numbers) / len(numbers)
print(average)</code></pre>
    </article>

    <article class="pg-challenge">
      <div class="pg-challenge-head">
        <span class="pg-challenge-num mono">03</span>
        <h3>Count with a loop</h3>
      </div>
      <p>Print the numbers 1 through 5 using a loop.</p>
      <pre class="pg-code"><code>for i in range(1, 6):
    print(i)</code></pre>
    </article>

    <article class="pg-challenge">
      <div class="pg-challenge-head">
        <span class="pg-challenge-num mono">04</span>
        <h3>Personal welcome</h3>
      </div>
      <p>Ask for a name and print a custom greeting. (In Jupyter, use a plain string if <code>input()</code> is limited.)</p>
      <pre class="pg-code"><code>name = "Ada"
print(f"Welcome to Techtonz, {name}!")</code></pre>
    </article>
  </div>

  <div class="pg-challenge-cta">
    <a class="btn-primary" href="https://teefortech.github.io/techtonz-playground/lab/index.html" target="_blank" rel="noopener">
      Open playground &amp; try one →
    </a>
  </div>
</section>

<section class="pg-block">
  <div class="section-head">
    <h2>Continue learning</h2>
    <span class="path mono">~/techtonz/blog</span>
  </div>
  <div class="pg-learn-grid">
    <a class="pg-learn-card" href="{{ 'https://techtonz.com/blog/getting-started-with-python-for-data-work/' | relative_url }}">
      <span class="badge">python</span>
      <h3>Getting Started with Python for Data Work</h3>
      <p>A practical entry point for using Python with data.</p>
    </a>
    <a class="pg-learn-card" href="{{ 'https://techtonz.com/blog/how-to-learn-python-fast/' | relative_url }}">
      <span class="badge">python</span>
      <h3>How to Learn Python Fast in 2026</h3>
      <p>A focused plan so you spend less time stuck and more time building.</p>
    </a>
    <a class="pg-learn-card" href="{{ '/blog/' | relative_url }}">
      <span class="badge">blog</span>
      <h3>Browse all Python articles</h3>
      <p>Tutorials, explainers, and career guides — updated regularly.</p>
    </a>
  </div>
</section>

<section class="pg-block">
  <div class="pg-tip">
    <span class="pg-tip-label mono">PRO TIP</span>
    <p>Every example in our Python tutorials can be copied into the playground. Read a concept, then run it yourself — that’s how it sticks.</p>
  </div>
</section>

<section class="pg-block pg-final">
  <h2>Ready to build?</h2>
  <p>Open the playground, paste a challenge, and take your first step.</p>
  <a class="btn-primary" href="https://teefortech.github.io/techtonz-playground/lab/index.html" target="_blank" rel="noopener">
    Launch Playground →
  </a>
</section>
