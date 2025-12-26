"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
    Leaf,
    Menu,
    Phone,
    Flower2,
    TreePine,
    Sprout,
    Building2,
    Waves,
    Trees,
    FlowerIcon,
    Droplets,
} from "lucide-react";

import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import {
    Sheet,
    SheetContent,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet";

interface MenuItem {
    title: string;
    url: string;
    description?: string;
    icon?: React.ReactNode;
    items?: MenuItem[];
}

interface GardenNavbarProps {
    logo?: {
        url: string;
        title: string;
    };
    menu?: MenuItem[];
    mobileExtraLinks?: {
        name: string;
        url: string;
    }[];
    cta?: {
        phone: {
            text: string;
            url: string;
        };
        quote: {
            text: string;
            url: string;
        };
    };
}

const GardenNavbar = ({
    logo = {
        url: "/",
        title: "My Garden Space",
    },
    menu = [
        { title: "Home", url: "/" },
        { title: "About", url: "/about" },
        {
            title: "Services",
            url: "/services",
            items: [
                {
                    title: "Gardening & Maintenance",
                    description: "Regular garden care, pruning, and plant health management",
                    icon: <Flower2 className="size-5 shrink-0 text-[var(--primary-600)]" />,
                    url: "/services/gardening-maintenance",
                },
                {
                    title: "Landscaping & Outdoor",
                    description: "Transform your outdoor spaces with professional design",
                    icon: <TreePine className="size-5 shrink-0 text-[var(--primary-600)]" />,
                    url: "/services/landscaping",
                },
                {
                    title: "Lawn & Ground Solutions",
                    description: "Lush lawns and ground cover installations",
                    icon: <Sprout className="size-5 shrink-0 text-[var(--primary-600)]" />,
                    url: "/services/lawn-ground",
                },
                {
                    title: "Structural & Decorative",
                    description: "Pergolas, gazebos, and decorative garden structures",
                    icon: <Building2 className="size-5 shrink-0 text-[var(--primary-600)]" />,
                    url: "/services/structural-decorative",
                },
                {
                    title: "Water Features",
                    description: "Fountains, ponds, and water garden installations",
                    icon: <Waves className="size-5 shrink-0 text-[var(--primary-600)]" />,
                    url: "/services/water-features",
                },
                {
                    title: "Vertical Gardens",
                    description: "Green walls and vertical planting solutions",
                    icon: <Trees className="size-5 shrink-0 text-[var(--primary-600)]" />,
                    url: "/services/vertical-green",
                },
                {
                    title: "Pots & Accessories",
                    description: "Premium planters, pots, and garden accessories",
                    icon: <FlowerIcon className="size-5 shrink-0 text-[var(--primary-600)]" />,
                    url: "/services/pots-accessories",
                },
                {
                    title: "Irrigation & Smart",
                    description: "Automated irrigation and smart garden systems",
                    icon: <Droplets className="size-5 shrink-0 text-[var(--primary-600)]" />,
                    url: "/services/irrigation-smart",
                },
            ],
        },
        { title: "Plant Rental", url: "/plant-rental" },
        { title: "Gallery", url: "/gallery" },
        { title: "Contact", url: "/contact" },
    ],
    mobileExtraLinks = [
        { name: "Testimonials", url: "/testimonials" },
        { name: "FAQ", url: "/faq" },
    ],
    cta = {
        phone: { text: "+91 98802 20257", url: "tel:+919880220257" },
        quote: { text: "Get Quote", url: "/contact" },
    },
}: GardenNavbarProps) => {
    const pathname = usePathname();

    return (
        <section className="py-4 fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md shadow-sm">
            <div className="container mx-auto px-4 lg:px-8">
                <nav className="hidden justify-between lg:flex">
                    <div className="flex items-center gap-6">
                        <Link href={logo.url} className="flex items-center gap-3">
                            <div className="w-11 h-11 rounded-full bg-[var(--primary-600)] flex items-center justify-center">
                                <Leaf className="w-6 h-6 text-white" />
                            </div>
                            <span className="text-xl font-semibold text-[var(--text-primary)]">
                                {logo.title}
                            </span>
                        </Link>
                        <div className="flex items-center">
                            <NavigationMenu>
                                <NavigationMenuList>
                                    {menu.map((item) => renderMenuItem(item, pathname))}
                                </NavigationMenuList>
                            </NavigationMenu>
                        </div>
                    </div>
                    <div className="flex items-center gap-4">
                        <a
                            href={cta.phone.url}
                            className="flex items-center gap-2 text-[var(--text-secondary)] hover:text-[var(--primary-600)] transition-colors"
                        >
                            <Phone className="w-4 h-4" />
                            <span className="text-sm font-medium">{cta.phone.text}</span>
                        </a>
                        <Button
                            asChild
                            className="bg-[var(--primary-600)] hover:bg-[var(--primary-700)] text-white rounded-full px-6"
                        >
                            <Link href={cta.quote.url}>{cta.quote.text}</Link>
                        </Button>
                    </div>
                </nav>
                <div className="block lg:hidden">
                    <div className="flex items-center justify-between">
                        <Link href={logo.url} className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-full bg-[var(--primary-600)] flex items-center justify-center">
                                <Leaf className="w-5 h-5 text-white" />
                            </div>
                            <span className="text-lg font-semibold text-[var(--text-primary)]">
                                {logo.title}
                            </span>
                        </Link>
                        <Sheet>
                            <SheetTrigger asChild>
                                <Button variant="outline" size="icon" className="rounded-full">
                                    <Menu className="size-5" />
                                </Button>
                            </SheetTrigger>
                            <SheetContent className="overflow-y-auto bg-white">
                                <SheetHeader>
                                    <SheetTitle>
                                        <Link href={logo.url} className="flex items-center gap-3">
                                            <div className="w-10 h-10 rounded-full bg-[var(--primary-600)] flex items-center justify-center">
                                                <Leaf className="w-5 h-5 text-white" />
                                            </div>
                                            <span className="text-lg font-semibold text-[var(--text-primary)]">
                                                {logo.title}
                                            </span>
                                        </Link>
                                    </SheetTitle>
                                </SheetHeader>
                                <div className="my-6 flex flex-col gap-6">
                                    <Accordion
                                        type="single"
                                        collapsible
                                        className="flex w-full flex-col gap-4"
                                    >
                                        {menu.map((item) => renderMobileMenuItem(item, pathname))}
                                    </Accordion>
                                    <div className="border-t py-4">
                                        <div className="grid grid-cols-2 justify-start">
                                            {mobileExtraLinks.map((link, idx) => (
                                                <Link
                                                    key={idx}
                                                    className="inline-flex h-10 items-center gap-2 whitespace-nowrap rounded-md px-4 py-2 text-sm font-medium text-[var(--text-secondary)] transition-colors hover:bg-[var(--neutral-100)] hover:text-[var(--primary-600)]"
                                                    href={link.url}
                                                >
                                                    {link.name}
                                                </Link>
                                            ))}
                                        </div>
                                    </div>
                                    <div className="flex flex-col gap-3">
                                        <a
                                            href={cta.phone.url}
                                            className="flex items-center justify-center gap-2 py-3 rounded-full bg-[var(--neutral-100)] text-[var(--text-primary)] font-medium"
                                        >
                                            <Phone className="w-4 h-4 text-[var(--primary-600)]" />
                                            {cta.phone.text}
                                        </a>
                                        <Button
                                            asChild
                                            className="bg-[var(--primary-600)] hover:bg-[var(--primary-700)] text-white rounded-full"
                                        >
                                            <Link href={cta.quote.url}>{cta.quote.text}</Link>
                                        </Button>
                                    </div>
                                </div>
                            </SheetContent>
                        </Sheet>
                    </div>
                </div>
            </div>
        </section>
    );
};

const renderMenuItem = (item: MenuItem, pathname: string) => {
    const isActive = pathname === item.url || (item.items && pathname.startsWith("/services"));

    if (item.items) {
        return (
            <NavigationMenuItem key={item.title} className="text-[var(--text-secondary)]">
                <NavigationMenuTrigger
                    className={`${isActive
                        ? "text-[var(--primary-600)] bg-[var(--primary-50)]"
                        : "text-[var(--text-secondary)] hover:text-[var(--primary-600)]"
                        } rounded-full px-4`}
                >
                    {item.title}
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                    <ul className="w-[420px] p-4 grid gap-1">
                        <NavigationMenuLink>
                            {item.items.map((subItem) => (
                                <li key={subItem.title}>
                                    <Link
                                        className="flex select-none gap-4 rounded-xl p-3 leading-none no-underline outline-none transition-colors hover:bg-[var(--neutral-50)]"
                                        href={subItem.url}
                                    >
                                        {subItem.icon}
                                        <div>
                                            <div className="text-sm font-semibold text-[var(--text-primary)]">
                                                {subItem.title}
                                            </div>
                                            {subItem.description && (
                                                <p className="text-sm leading-snug text-[var(--text-secondary)] mt-1">
                                                    {subItem.description}
                                                </p>
                                            )}
                                        </div>
                                    </Link>
                                </li>
                            ))}
                        </NavigationMenuLink>
                    </ul>
                </NavigationMenuContent>
            </NavigationMenuItem>
        );
    }

    return (
        <Link
            key={item.title}
            className={`group inline-flex h-10 w-max items-center justify-center rounded-full px-4 py-2 text-sm font-medium transition-colors ${isActive
                ? "text-[var(--primary-600)] bg-[var(--primary-50)]"
                : "text-[var(--text-secondary)] hover:bg-[var(--neutral-100)] hover:text-[var(--primary-600)]"
                }`}
            href={item.url}
        >
            {item.title}
        </Link>
    );
};

const renderMobileMenuItem = (item: MenuItem, pathname: string) => {
    const isActive = pathname === item.url || (item.items && pathname.startsWith("/services"));

    if (item.items) {
        return (
            <AccordionItem key={item.title} value={item.title} className="border-b-0">
                <AccordionTrigger
                    className={`py-0 font-semibold hover:no-underline ${isActive ? "text-[var(--primary-600)]" : "text-[var(--text-primary)]"
                        }`}
                >
                    {item.title}
                </AccordionTrigger>
                <AccordionContent className="mt-2">
                    {item.items.map((subItem) => (
                        <Link
                            key={subItem.title}
                            className="flex select-none gap-4 rounded-xl p-3 leading-none outline-none transition-colors hover:bg-[var(--neutral-50)]"
                            href={subItem.url}
                        >
                            {subItem.icon}
                            <div>
                                <div className="text-sm font-semibold text-[var(--text-primary)]">
                                    {subItem.title}
                                </div>
                                {subItem.description && (
                                    <p className="text-sm leading-snug text-[var(--text-secondary)] mt-1">
                                        {subItem.description}
                                    </p>
                                )}
                            </div>
                        </Link>
                    ))}
                </AccordionContent>
            </AccordionItem>
        );
    }

    return (
        <Link
            key={item.title}
            href={item.url}
            className={`font-semibold py-2 ${isActive ? "text-[var(--primary-600)]" : "text-[var(--text-primary)]"
                }`}
        >
            {item.title}
        </Link>
    );
};

export { GardenNavbar };
