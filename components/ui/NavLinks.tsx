
import { cn } from '@/lib/utils';
import Link from 'next/link';
import React from 'react';
interface LinkProps {
    href: string;
    children: React.ReactNode;
    className?: string
}

const NavLink = ({ href, children, className }: LinkProps) => {
    return (
        <Link href={href} className={cn("px-[8px] py-[10px] my-[4px] mx-3 hover:bg-gray-600 hover:rounded-md", className)}>
            {children}
        </Link>
    )
}

export default NavLink