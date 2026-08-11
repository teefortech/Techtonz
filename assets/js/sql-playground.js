(function () {
  'use strict';

  const SCHEMA_SQL = `
    DROP TABLE IF EXISTS orders;
    DROP TABLE IF EXISTS products;
    DROP TABLE IF EXISTS customers;
    DROP TABLE IF EXISTS employees;
    DROP TABLE IF EXISTS departments;

    CREATE TABLE departments (
      id INTEGER PRIMARY KEY,
      name TEXT NOT NULL
    );

    CREATE TABLE employees (
      id INTEGER PRIMARY KEY,
      name TEXT NOT NULL,
      department TEXT,
      salary INTEGER,
      hire_date TEXT
    );

    CREATE TABLE customers (
      id INTEGER PRIMARY KEY,
      name TEXT NOT NULL,
      country TEXT,
      email TEXT
    );

    CREATE TABLE products (
      id INTEGER PRIMARY KEY,
      name TEXT NOT NULL,
      category TEXT,
      price REAL
    );

    CREATE TABLE orders (
      id INTEGER PRIMARY KEY,
      customer_id INTEGER,
      product_id INTEGER,
      amount REAL,
      order_date TEXT,
      FOREIGN KEY (customer_id) REFERENCES customers(id),
      FOREIGN KEY (product_id) REFERENCES products(id)
    );

    INSERT INTO departments (id, name) VALUES
      (1, 'Engineering'),
      (2, 'Sales'),
      (3, 'HR'),
      (4, 'Marketing');

    INSERT INTO employees (id, name, department, salary, hire_date) VALUES
      (1, 'Ada Lovelace', 'Engineering', 95000, '2020-03-15'),
      (2, 'Alan Turing', 'Engineering', 88000, '2019-07-01'),
      (3, 'Grace Hopper', 'Engineering', 92000, '2021-01-20'),
      (4, 'John Smith', 'Sales', 65000, '2022-05-10'),
      (5, 'Sarah Chen', 'Sales', 72000, '2021-09-01'),
      (6, 'Mike Okonkwo', 'Sales', 58000, '2023-02-14'),
      (7, 'Nina Patel', 'HR', 61000, '2020-11-30'),
      (8, 'James Brown', 'Marketing', 70000, '2022-08-22'),
      (9, 'Amina Yusuf', 'Marketing', 68000, '2023-04-05'),
      (10, 'Chris Lee', 'Engineering', 78000, '2024-01-08');

    INSERT INTO customers (id, name, country, email) VALUES
      (1, 'Acme Corp', 'NG', 'ops@acme.example'),
      (2, 'Bright Foods', 'GH', 'hello@bright.example'),
      (3, 'Northwind', 'KE', 'buy@northwind.example'),
      (4, 'Contoso', 'NG', 'team@contoso.example'),
      (5, 'Fabrikam', 'ZA', 'info@fabrikam.example');

    INSERT INTO products (id, name, category, price) VALUES
      (1, 'Laptop Pro', 'Electronics', 1200),
      (2, 'Wireless Mouse', 'Electronics', 25),
      (3, 'Standing Desk', 'Furniture', 450),
      (4, 'Notebook Pack', 'Stationery', 12),
      (5, 'Monitor 27in', 'Electronics', 320);

    INSERT INTO orders (id, customer_id, product_id, amount, order_date) VALUES
      (101, 1, 1, 1200, '2025-11-02'),
      (102, 1, 2, 25, '2025-11-02'),
      (103, 2, 3, 450, '2025-12-10'),
      (104, 3, 5, 320, '2026-01-15'),
      (105, 3, 2, 50, '2026-01-15'),
      (106, 4, 1, 1200, '2026-02-01'),
      (107, 5, 4, 36, '2026-03-20'),
      (108, 2, 5, 320, '2026-04-08');
  `;

  const EXAMPLES = {
    select: `SELECT name, department, salary
FROM employees;`,
    where: `SELECT name, salary
FROM employees
WHERE salary > 50000;`,
    order: `SELECT name, salary
FROM employees
ORDER BY salary DESC;`,
    group: `SELECT department, COUNT(*) AS employees, AVG(salary) AS avg_salary
FROM employees
GROUP BY department
ORDER BY avg_salary DESC;`,
    join: `SELECT c.name AS customer, p.name AS product, o.amount, o.order_date
FROM orders o
INNER JOIN customers c ON o.customer_id = c.id
INNER JOIN products p ON o.product_id = p.id
ORDER BY o.order_date;`,
    having: `SELECT department, COUNT(*) AS n, AVG(salary) AS avg_salary
FROM employees
GROUP BY department
HAVING AVG(salary) >= 70000;`,
    agg: `SELECT
  COUNT(*) AS total_employees,
  MIN(salary) AS min_salary,
  MAX(salary) AS max_salary,
  ROUND(AVG(salary), 0) AS avg_salary
FROM employees;`,
    subquery: `SELECT name, salary
FROM employees
WHERE salary > (
  SELECT AVG(salary) FROM employees
)
ORDER BY salary DESC;`
  };

  let SQL = null;
  let db = null;

  const source = document.getElementById('sqlSource');
  const results = document.getElementById('sqlResults');
  const status = document.getElementById('sqlStatus');
  const schemaPre = document.getElementById('sqlSchemaPre');
  const runBtn = document.getElementById('sqlRun');
  const copyBtn = document.getElementById('sqlCopy');
  const resetBtn = document.getElementById('sqlReset');

  if (!source || !results) return;

  function setStatus(msg, kind) {
    if (!status) return;
    status.textContent = msg;
    status.classList.remove('is-ok', 'is-err');
    if (kind) status.classList.add(kind);
  }

  function initDb() {
    db = new SQL.Database();
    db.run(SCHEMA_SQL);
  }

  function renderTable(columns, values) {
    if (!columns || !columns.length) {
      results.innerHTML = '<p class="sql-placeholder">Query ran successfully (no rows returned).</p>';
      return;
    }
    let html = '<table class="sql-table"><thead><tr>';
    columns.forEach(function (c) {
      html += '<th>' + escapeHtml(c) + '</th>';
    });
    html += '</tr></thead><tbody>';
    values.forEach(function (row) {
      html += '<tr>';
      row.forEach(function (cell) {
        const v = cell === null || cell === undefined ? 'NULL' : String(cell);
        html += '<td>' + escapeHtml(v) + '</td>';
      });
      html += '</tr>';
    });
    html += '</tbody></table>';
    results.innerHTML = html;
  }

  function escapeHtml(s) {
    return s
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;');
  }

  function runQuery() {
    if (!db) {
      setStatus('Database not ready', 'is-err');
      return;
    }
    const sql = source.value.trim();
    if (!sql) {
      setStatus('Write a query first', 'is-err');
      return;
    }
    try {
      const start = performance.now();
      const res = db.exec(sql);
      const ms = Math.round(performance.now() - start);
      if (!res.length) {
        results.innerHTML = '<p class="sql-placeholder">Query ran successfully (no result set).</p>';
        setStatus('OK · ' + ms + ' ms', 'is-ok');
        return;
      }
      // Show first result set
      const first = res[0];
      renderTable(first.columns, first.values);
      const rows = first.values.length;
      setStatus(rows + ' row' + (rows === 1 ? '' : 's') + ' · ' + ms + ' ms', 'is-ok');
    } catch (err) {
      results.innerHTML = '<p class="sql-error">' + escapeHtml(err.message) + '</p>';
      setStatus('Error', 'is-err');
    }
  }

  function previewTable(name) {
    if (!db) return;
    try {
      const info = db.exec('PRAGMA table_info(' + name + ');');
      const sample = db.exec('SELECT * FROM ' + name + ' LIMIT 5;');
      let text = 'TABLE ' + name + '\n\nColumns:\n';
      if (info[0]) {
        info[0].values.forEach(function (row) {
          // cid, name, type, notnull, dflt, pk
          text += '  - ' + row[1] + ' (' + row[2] + ')' + (row[5] ? ' PK' : '') + '\n';
        });
      }
      text += '\nSample rows (up to 5):\n';
      if (sample[0]) {
        text += sample[0].columns.join(' | ') + '\n';
        sample[0].values.forEach(function (row) {
          text += row.map(function (c) {
            return c === null ? 'NULL' : String(c);
          }).join(' | ') + '\n';
        });
      }
      if (schemaPre) schemaPre.textContent = text;
      source.value = 'SELECT * FROM ' + name + ' LIMIT 20;';
    } catch (err) {
      if (schemaPre) schemaPre.textContent = err.message;
    }
  }

  function loadExample(key) {
    if (EXAMPLES[key]) {
      source.value = EXAMPLES[key];
      setStatus('Example loaded — press Run', '');
    }
  }

  // Events
  if (runBtn) runBtn.addEventListener('click', runQuery);
  if (copyBtn) {
    copyBtn.addEventListener('click', function () {
      navigator.clipboard.writeText(source.value).then(function () {
        setStatus('Copied', 'is-ok');
      }).catch(function () {
        source.select();
        setStatus('Select and copy manually', '');
      });
    });
  }
  if (resetBtn) {
    resetBtn.addEventListener('click', function () {
      initDb();
      results.innerHTML = '<p class="sql-placeholder">Database reset. Run a query to see results.</p>';
      setStatus('Database reset', 'is-ok');
      if (schemaPre) schemaPre.textContent = 'Click a table name to preview its columns and sample rows.';
    });
  }

  document.querySelectorAll('.sql-table-btn').forEach(function (btn) {
    btn.addEventListener('click', function () {
      previewTable(btn.getAttribute('data-table'));
    });
  });

  document.querySelectorAll('.sql-ex-btn').forEach(function (btn) {
    btn.addEventListener('click', function () {
      loadExample(btn.getAttribute('data-ex'));
    });
  });

  // Ctrl/Cmd + Enter to run
  source.addEventListener('keydown', function (e) {
    if ((e.ctrlKey || e.metaKey) && e.key === 'Enter') {
      e.preventDefault();
      runQuery();
    }
  });

  // Boot sql.js
  setStatus('Loading SQLite…', '');
  initSqlJs({
    locateFile: function (file) {
      return 'https://cdnjs.cloudflare.com/ajax/libs/sql.js/1.10.3/' + file;
    }
  }).then(function (sqlModule) {
    SQL = sqlModule;
    initDb();
    setStatus('Ready', 'is-ok');
  }).catch(function (err) {
    setStatus('Failed to load SQLite', 'is-err');
    results.innerHTML = '<p class="sql-error">Could not load SQL engine. Check your connection and refresh.</p>';
    console.error(err);
  });
})();
