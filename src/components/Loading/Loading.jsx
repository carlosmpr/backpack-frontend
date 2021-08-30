import React from "react";

export default function Loading() {
  return (
    <button type="button" className="bg-primary" disabled>
      <svg class="animate-spin h-5 w-5 mr-3 ..." viewBox="0 0 24 24"></svg>
      Loading...
    </button>
  );
}
