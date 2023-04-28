import React, { useEffect } from "react";
// import ReactQuill, { Quill } from "react-quill";
import "react-quill/dist/quill.snow.css";
import styles from "@/styles/components/Blog/text.editor.module.css";
import { useQuill } from "react-quilljs";

const TextEditor = () => {

  const { quill, quillRef } = useQuill();

  useEffect(() => {
    if (quill) quill.setText("Hello світ манери крутять світ")
  })

  return (
    <div className={styles["text-editor"]}>
      <div ref={quillRef} />
    </div>
  );
};

export default TextEditor;