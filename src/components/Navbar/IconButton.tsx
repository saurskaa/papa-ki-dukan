import Link from "next/link";

interface IconButtonProps {
  href: string;
  icon: React.ReactNode;
  badgeCount?: number;
  badgeColor?: string; // optional for red/indigo
  className?: string;
}

export default function IconButton({ href, icon, badgeCount = 0, badgeColor = "bg-red-500", className = "" }: IconButtonProps) {
  return (
    <Link href={href} className={`relative text-gray-700 hover:text-indigo-600 transition ${className}`}>
      {icon}
      {badgeCount > 0 && (
        <span className={`absolute -top-2 -right-2 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center ${badgeColor}`}>
          {badgeCount}
        </span>
      )}
    </Link>
  );
}
