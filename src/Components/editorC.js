import React, { useEffect, useRef } from "react";
import CodeMirror from "codemirror";
import "codemirror/lib/codemirror.css"; // Base CSS for CodeMirror
import "codemirror/mode/javascript/javascript"; // JavaScript mode
import "codemirror/theme/dracula.css"; // Dracula theme
import "codemirror/addon/edit/closetag"; // Addon for auto-closing tags
import "codemirror/addon/edit/closebrackets"; // Addon for auto-closing brackets

const EditorC = () => {
  const textareaRef = useRef(null); // Reference to the <textarea>
  const editorRef = useRef(null); // Reference to the CodeMirror instance

  useEffect(() => {
    // Check if CodeMirror instance already exists
    if (!editorRef.current && textareaRef.current) {
      editorRef.current = CodeMirror.fromTextArea(textareaRef.current, {
        mode: { name: "javascript", json: true }, // JavaScript mode with JSON support
        theme: "dracula", // Apply Dracula theme
        lineNumbers: true, // Display line numbers
        autoCloseTags: true, // Automatically close HTML tags
        autoCloseBrackets: true, // Automatically close brackets
      });
    }

    // Cleanup CodeMirror instance on component unmount or refresh
    return () => {
      if (editorRef.current) {
        editorRef.current.toTextArea(); // Revert back to original textarea
        editorRef.current = null; // Reset the editor reference
      }
    };
  }, []);

  return (
    <div>
      {/* The original <textarea> is used by CodeMirror */}
      <textarea ref={textareaRef} />
    </div>
  );
};

export default EditorC;
