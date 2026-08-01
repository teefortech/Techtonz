(function () {
  let pyodideReady = null;

  function loadPyodideOnce() {
    if (pyodideReady) return pyodideReady;
    pyodideReady = loadPyodide({
      indexURL: "https://cdn.jsdelivr.net/pyodide/v0.27.2/full/"
    }).then(async (py) => {
      // Optional common packages — comment out if you want a faster first load
      // await py.loadPackage(["numpy"]);
      return py;
    });
    return pyodideReady;
  }

  function initEditor(block) {
    const source = block.querySelector("textarea.py-source");
    const output = block.querySelector(".py-output");
    const runBtn = block.querySelector(".py-run");
    const status = block.querySelector(".py-status");

    const editor = CodeMirror.fromTextArea(source, {
      mode: "python",
      theme: "material-darker",
      lineNumbers: true,
      indentUnit: 4,
      tabSize: 4,
      lineWrapping: true,
      viewportMargin: Infinity
    });

    runBtn.addEventListener("click", async () => {
      output.textContent = "";
      status.textContent = "Loading Python…";
      runBtn.disabled = true;
      try {
        const py = await loadPyodideOnce();
        status.textContent = "Running…";
        py.setStdout({ batched: (s) => { output.textContent += s + "\n"; } });
        py.setStderr({ batched: (s) => { output.textContent += s + "\n"; } });
        const result = await py.runPythonAsync(editor.getValue());
        if (result !== undefined && result !== null) {
          output.textContent += String(result) + "\n";
        }
        status.textContent = "Done";
      } catch (err) {
        output.textContent += "Error: " + err + "\n";
        status.textContent = "Error";
      } finally {
        runBtn.disabled = false;
      }
    });
  }

  document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll(".py-editor").forEach(initEditor);
  });
})();
