<script>
  import { onMount } from "svelte";
  import CodeMirror from "codemirror";
  import "codemirror/addon/mode/loadmode";
  import "codemirror/mode/javascript/javascript";

  let code = "";
  let value = "";
  let mode = "javascript";
  let theme = "dracula";
  let editorRef;
  let editor;

  const setUpCodeMirror = () => {
    editor = CodeMirror.fromTextArea(editorRef, {
      lineNumbers: true,
      lineWrapping: true,
      tabSize: 2,
      value,
      mode,
      theme,
    });

    const charWidth = editor.defaultCharWidth(),
      basePadding = 4;
    editor.on("renderLine", function (cm, line, elt) {
      const off =
        CodeMirror.countColumn(line.text, null, cm.getOption("tabSize")) *
        charWidth;
      elt.style.textIndent = "-" + off + "px";
      elt.style.paddingLeft = basePadding + off + "px";
    });

    editor.refresh();

    editor.on("changes", () => {
      value = editor.getValue();
    });
  };

  onMount(async () => {
    setUpCodeMirror();
  });

  const handleLangChange = async (event) => {
    const value = event.target.value;

    mode = value;

    import(`codemirror/mode/${mode}/${mode}`).then(() => {
      editor.setOption("mode", mode);
    });

    editor.refresh();
  };
</script>

<style lang="scss">
  .editor {
    max-width: var(--editor-width);
    flex: 1;
    position: relative;
    height: 100%;
  }

  .editor__mode-select {
    z-index: 999;
    position: absolute;
    top: 0;
    right: 0;
  }
</style>

<section class="editor">
  <textarea bind:this={editorRef} />
  <select on:change={handleLangChange} class="editor__mode-select">
    <option value="javascript">js</option>
    <option value="htmlmixed">html</option>
  </select>
</section>
