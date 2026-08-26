import { useState } from "react";

export default function CaptionExportPanel({ edits, clearAll }) {
  const [copied, setCopied] = useState(false);
  const count = Object.keys(edits).length;

  async function copyJSON() {
    const json = JSON.stringify(edits, null, 2);
    try {
      await navigator.clipboard.writeText(json);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      window.prompt("Copy this JSON and paste it back to Claude:", json);
    }
  }

  return (
    <div className="caption-panel">
      <div className="caption-panel__inner">
        <div>
          <strong>Caption Edit Mode</strong>
          <span>{count} photo{count === 1 ? "" : "s"} edited · saved to this browser only</span>
        </div>
        <div className="caption-panel__actions">
          <button className="btn btn-outline" onClick={clearAll} disabled={count === 0}>
            Clear All
          </button>
          <button className="btn btn-navy" onClick={copyJSON} disabled={count === 0}>
            {copied ? "Copied!" : "Copy JSON"}
          </button>
        </div>
      </div>
    </div>
  );
}
