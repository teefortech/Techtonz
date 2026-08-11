---
layout: page
title: SQL Playground
permalink: /sql-playground/
eyebrow: PRACTICE
---

<div class="sql-page" markdown="0">

  <div class="sql-hero">
    <p class="sql-hero-lead">
      Write and run real SQL in your browser. No install, no server.
      Practice SELECT, JOIN, GROUP BY, and more on a sample database.
    </p>
  </div>

  <div class="sql-layout">
    <aside class="sql-sidebar">
      <h2 class="sql-side-title">Sample tables</h2>
      <ul class="sql-tables" id="sqlTableList">
        <li><button type="button" class="sql-table-btn" data-table="employees">employees</button></li>
        <li><button type="button" class="sql-table-btn" data-table="departments">departments</button></li>
        <li><button type="button" class="sql-table-btn" data-table="customers">customers</button></li>
        <li><button type="button" class="sql-table-btn" data-table="orders">orders</button></li>
        <li><button type="button" class="sql-table-btn" data-table="products">products</button></li>
      </ul>

      <h2 class="sql-side-title">Load example</h2>
      <div class="sql-examples" id="sqlExamples">
        <button type="button" class="sql-ex-btn" data-ex="select">SELECT</button>
        <button type="button" class="sql-ex-btn" data-ex="where">WHERE</button>
        <button type="button" class="sql-ex-btn" data-ex="order">ORDER BY</button>
        <button type="button" class="sql-ex-btn" data-ex="group">GROUP BY</button>
        <button type="button" class="sql-ex-btn" data-ex="join">JOIN</button>
        <button type="button" class="sql-ex-btn" data-ex="having">HAVING</button>
        <button type="button" class="sql-ex-btn" data-ex="agg">Aggregates</button>
        <button type="button" class="sql-ex-btn" data-ex="subquery">Subquery</button>
      </div>

      <div class="sql-side-actions">
        <button type="button" class="btn-ghost sql-reset" id="sqlReset">Reset database</button>
      </div>
    </aside>

    <div class="sql-main">
      <div class="sql-editor-wrap">
        <div class="sql-toolbar">
          <span class="sql-label mono">SQL</span>
          <div class="sql-toolbar-actions">
            <button type="button" class="btn-ghost sql-copy" id="sqlCopy">Copy</button>
            <button type="button" class="btn-primary sql-run" id="sqlRun">▶ Run Query</button>
          </div>
        </div>
        <textarea id="sqlSource" class="sql-source" spellcheck="false" rows="10">SELECT name, department, salary
FROM employees
WHERE salary > 50000
ORDER BY salary DESC;</textarea>
      </div>

      <div class="sql-results-wrap">
        <div class="sql-results-head">
          <span class="sql-label mono">Results</span>
          <span class="sql-status" id="sqlStatus">Ready</span>
        </div>
        <div class="sql-results" id="sqlResults">
          <p class="sql-placeholder">Run a query to see results here.</p>
        </div>
      </div>

      <div class="sql-schema" id="sqlSchema">
        <h2 class="sql-side-title">Schema preview</h2>
        <pre class="sql-schema-pre" id="sqlSchemaPre">Click a table name to preview its columns and sample rows.</pre>
      </div>
    </div>
  </div>

  <section class="sql-tips">
    <h2>Tips</h2>
    <ul>
      <li>Everything runs in your browser with SQLite, nothing is sent to a server.</li>
      <li>Use <strong>Reset database</strong> if you change data with INSERT/UPDATE/DELETE.</li>
      <li>On mobile, rotate to landscape for a wider editor, or scroll the result table sideways.</li>
      <li>Pair this with our guide: <a href="{{ '/blog/sql-for-data-science/' | relative_url }}">SQL for Data Science</a>.</li>
    </ul>
  </section>

</div>

<link rel="stylesheet" href="{{ '/assets/css/sql-playground.css' | relative_url }}">
<script src="https://cdnjs.cloudflare.com/ajax/libs/sql.js/1.10.3/sql-wasm.js"></script>
<script src="{{ '/assets/js/sql-playground.js' | relative_url }}"></script>
