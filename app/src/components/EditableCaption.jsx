export default function EditableCaption({ item, getValue, updateField }) {
  const key = item.image ?? item.label;
  return (
    <div className="caption-edit">
      <label className="caption-edit__field">
        <span>Label</span>
        <input
          type="text"
          value={getValue(item, "label")}
          onChange={(e) => updateField(key, "label", e.target.value)}
        />
      </label>
      <label className="caption-edit__field">
        <span>Caption</span>
        <textarea
          rows={2}
          value={getValue(item, "caption")}
          onChange={(e) => updateField(key, "caption", e.target.value)}
        />
      </label>
    </div>
  );
}
