// import CodeMirror from "@uiw/react-codemirror";
import ReactQuill from "react-quill";

type OnChangeType =
    | ((value: string) => void)
    | ((content: any, delta: any, source: any, editor: any) => void);

interface IQuillEditorCoreProps {
  value?: string;
  onChange?: OnChangeType;
  placeholder?: string;
}

const modules = {
  toolbar: {
    container: [
      [{ header: [1, 2, 3, false] }],
      ["bold", "italic", "underline", "strike", "blockquote"],
      [{ color: [] }, { background: [] }],
      [
        { align: "" },
        { align: "center" },
        { align: "right" },
        { align: "justify" }
      ],
      [{ list: "ordered" }, { list: "bullet" }, { indent: "-1" }, { indent: "+1" }],
      ["link", "image"],
    ],
  },
};

const formats = [
  "header",
  "bold",
  "italic",
  "underline",
  "strike",
  "blockquote",
  "color",
  "background",
  "align",
  "list",
  "bullet",
  "indent",
  "link",
  "image",
];

const QuillEditorCore = ({ value, onChange, placeholder }: IQuillEditorCoreProps) => {
  return (
    <>
      <ReactQuill
        theme="snow"
        value={value || ""}
        modules={modules}
        formats={formats}
        onChange={onChange}
        placeholder={placeholder}
      />
    </>
  );
};

export default QuillEditorCore;
