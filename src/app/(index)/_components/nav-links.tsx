import { usePathname } from 'next/navigation';
import { motion } from 'motion/react';
import Link from 'next/link';

const links = [
  {
    name: 'Products',
    href: '/',
  },
  {
    name: 'Cart',
    href: '/cart',
  },
];

interface Props {
  className?: string;
}

export default function NavLinks({ className }: Props) {
  const pathname = usePathname();
  return (
    <nav className={`navbar ${className}`}>
      <div className="flex items-center gap-[10px] md:gap-5">
        <ul className="flex items-end justify-between gap-5 overflow-hidden flex-nowrap md:gap-10 px-5">
          {links.map((link) => {
            const isActive = pathname === link.href;
            return (
              <motion.li
                key={link.name}
                whileHover={{ y: -28.5 }}
                transition={{ duration: 0.4 }}
                className="h-[20px]"
              >
                <Link
                  href={link.href}
                  className={`flex flex-col justify-between gap-2 text-sm ${
                    isActive
                      ? 'font-bold text-primarycolor'
                      : 'font-normal text-black'
                  }`}
                >
                  <span>{link.name}</span>
                  <span>{link.name}</span>
                </Link>
              </motion.li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
}
