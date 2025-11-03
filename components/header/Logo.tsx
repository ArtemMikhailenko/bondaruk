import Link from 'next/link';
import Image from 'next/image';

interface LogoProps {
  mobile?: boolean;
}

export function Logo({ mobile = false }: LogoProps) {
  return (
    <Link href="/" className="flex items-center shrink-0">
      <Image
        src="/images/logo.png"
        alt="Bondaruk Partners"
        width={mobile ? 139 : 153}
        height={mobile ? 40 : 45}
        priority
        className="h-auto w-auto"
      />
    </Link>
  );
}
