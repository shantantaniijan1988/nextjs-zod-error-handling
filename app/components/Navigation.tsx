"use client";

import { type FC } from "react";
import Link from "next/link";

export const Navigation: FC = () => {
  return (
    <header>
      <nav className="font-medium flex items-center gap-x-6">
        <Link href="/signup">Signup</Link>
        <Link href="/signup2">Signup2</Link>
      </nav>
    </header>
  );
};
