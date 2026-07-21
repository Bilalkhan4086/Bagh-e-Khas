"use client";

import { useEffect } from "react";
import { trackViewItem } from "@/lib/analytics";

interface DetailViewTrackerProps {
  id: string;
  name: string;
  price: string;
  category: string;
}

export default function DetailViewTracker({
  id,
  name,
  price,
  category,
}: DetailViewTrackerProps) {
  useEffect(() => {
    trackViewItem({ id, name, price, category });
  }, [category, id, name, price]);

  return null;
}
