import { useCallback, useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

const STORAGE_KEY = "ecca_caption_edits_v1";

function loadEdits() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : {};
  } catch {
    return {};
  }
}

// Edit mode only activates with ?edit=1 in the URL — never visible to normal visitors.
// Edits are stored per-browser in localStorage and never sent anywhere; use the
// "Copy JSON" export to hand corrected captions back for a permanent code update.
export default function useCaptionEdits() {
  const [searchParams] = useSearchParams();
  const isEditMode = searchParams.get("edit") === "1";
  const [edits, setEdits] = useState(loadEdits);

  useEffect(() => {
    if (isEditMode) localStorage.setItem(STORAGE_KEY, JSON.stringify(edits));
  }, [edits, isEditMode]);

  const updateField = useCallback((image, field, value) => {
    setEdits((prev) => ({
      ...prev,
      [image]: { ...prev[image], [field]: value },
    }));
  }, []);

  const getValue = useCallback(
    (item, field) => edits[item.image ?? item.label]?.[field] ?? item[field] ?? "",
    [edits]
  );

  const clearAll = useCallback(() => {
    setEdits({});
    localStorage.removeItem(STORAGE_KEY);
  }, []);

  return { isEditMode, edits, updateField, getValue, clearAll };
}
