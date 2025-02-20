"use client";

import { Button } from "@/components/ui/button";
import { useState } from "react";

export function DownloadButton() {
  const [loading, setLoading] = useState(false);

  const handleDownload = async () => {
    try {
      setLoading(true);
      const response = await fetch("/Dee%20CV.pdf");
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = "Dee_Pabst_CV.pdf";
      document.body.appendChild(a);
      a.click();
      window.URL.revokeObjectURL(url);
    } catch (error) {
      console.error("Download failed:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Button
      variant="outline"
      className="ml-auto"
      onClick={handleDownload}
      disabled={loading}
      aria-live="polite"
    >
      {loading ? "Downloading..." : "Resume"}
    </Button>
  );
}
