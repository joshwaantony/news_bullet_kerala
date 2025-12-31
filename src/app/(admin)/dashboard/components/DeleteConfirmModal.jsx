"use client";

export default function DeleteConfirmModal({
  open,
  onClose,
  onConfirm,
  loading,
}) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-6">
        <h2 className="text-xl font-semibold text-[#231A15] mb-3">
          Delete News
        </h2>

        <p className="text-sm text-gray-600 mb-6">
          Are you sure you want to delete this news?
          <br />
          <span className="text-red-500 font-medium">
            This action cannot be undone.
          </span>
        </p>

        <div className="flex justify-end gap-3">
          <button
            onClick={onClose}
            disabled={loading}
            className="px-4 py-2 rounded-lg border text-sm"
          >
            Cancel
          </button>

          <button
            onClick={onConfirm}
            disabled={loading}
            className="px-4 py-2 rounded-lg bg-red-600 hover:bg-red-700
            text-white text-sm disabled:opacity-60"
          >
            {loading ? "Deleting..." : "Delete"}
          </button>
        </div>
      </div>
    </div>
  );
}
