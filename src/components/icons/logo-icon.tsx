import React from "react";
import Image from 'next/image';

export const LogoIcon = ({ className }: { className?: string }) => {
  return (
    <div>
      <Image
        src="/images/logo.png"
        alt="logo"
        width={50}
        height={50}
        className={className}
      />
    </div>
  );
};

export default LogoIcon;
