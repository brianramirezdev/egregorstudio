'use client';

import { Button } from '@/components/ui/button';
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger } from '@/components/ui/navigation-menu';
import { cn } from '@/lib/utils';
import { LucideIcon } from 'lucide-react';
import Link from 'next/link';
import React, { ComponentProps } from 'react';
import { servicesMenu, companyMenu } from '@/config/navbar';

export const NavMenu = (props: ComponentProps<typeof NavigationMenu>) => (
    <NavigationMenu {...props}>
        <NavigationMenuList className="gap-1 space-x-0 text-sm">
            {/* HOME */}
            <NavigationMenuItem>
                <Button variant="ghost" asChild>
                    <Link href="#inicio">Inicio</Link>
                </Button>
            </NavigationMenuItem>

            {/* SERVICIOS */}
            <NavigationMenuItem>
                <NavigationMenuTrigger>Servicios</NavigationMenuTrigger>
                <NavigationMenuContent>
                    <ul className="grid w-[400px] gap-3 p-1 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                        {servicesMenu.map((item) => (
                            <ListItem key={item.title} title={item.title} icon={item.icon} href={item.href}>
                                {item.description}
                            </ListItem>
                        ))}
                    </ul>
                </NavigationMenuContent>
            </NavigationMenuItem>

            {/* EMPRESA */}
            <NavigationMenuItem>
                <NavigationMenuTrigger>Estudio</NavigationMenuTrigger>
                <NavigationMenuContent>
                    <ul className="grid w-[400px] gap-3 p-1 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                        {companyMenu.map((item) => (
                            <ListItem key={item.title} title={item.title} icon={item.icon} href={item.href}>
                                {item.description}
                            </ListItem>
                        ))}
                    </ul>
                </NavigationMenuContent>
            </NavigationMenuItem>

            {/* CONTACTO DIRECTO */}
            <NavigationMenuItem>
                <Button variant="ghost" asChild>
                    <Link href="#contacto">Contacto</Link>
                </Button>
            </NavigationMenuItem>
        </NavigationMenuList>
    </NavigationMenu>
);

const ListItem = React.forwardRef<React.ElementRef<typeof Link>, React.ComponentPropsWithoutRef<typeof Link> & { icon: LucideIcon }>(
    ({ className, title, children, ...props }, ref) => {
        return (
            <li>
                <NavigationMenuLink asChild>
                    <Link
                        ref={ref}
                        className={cn(
                            'block select-none space-y-2 rounded-md p-3 leading-none no-underline outline-hidden transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground',
                            className
                        )}
                        {...props}
                    >
                        <props.icon className="mb-4 size-6" />
                        <div className="text-sm font-semibold leading-none">{title}</div>
                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">{children}</p>
                    </Link>
                </NavigationMenuLink>
            </li>
        );
    }
);
ListItem.displayName = 'ListItem';
