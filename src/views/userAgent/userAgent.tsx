"use client";

import { BackToHome } from "@/components/backToHome/backToHome";
import { useUserAgentContext } from "@/components/providers/userAgentProvider";

export const UserAgent = () => {
  const { userAgent } = useUserAgentContext();
  const serverSideUserAgent = typeof window === 'undefined' ? process.env.USER_AGENT : null;

  return (
    <div>
      <BackToHome />

      {userAgent || serverSideUserAgent ? (
        <div className="flex font-mono font-semibold text-sm">
          <div className="border p-2">UserAgent</div>
          <div className="border p-2">{userAgent || serverSideUserAgent}</div>
        </div>
      ) : (
        <div>No user agent</div>
      )}
    </div>

  );
};
