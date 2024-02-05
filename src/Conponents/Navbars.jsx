
"use client";

import React, { useEffect, useState } from 'react'
import { useTheme } from "next-themes";
import { Switch, Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, useDisclosure, Checkbox, Input, Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button, DropdownItem, DropdownTrigger, Dropdown, DropdownMenu } from "@nextui-org/react";
import { ChevronDown, Lock, Activity, Flash, Server, TagUser, Scale } from "../Icons.jsx";

import { MailIcon } from "../Icons/MailIcons.jsx"
import { LockIcon } from '../Icons/LockIcon.jsx';
import { MoonIcon } from '../Icons/MoonIcon.jsx';
import { SunIcon } from '../Icons/SunIcon.jsx';


const Navbars = () => {

    const { isOpen, onOpen, onOpenChange } = useDisclosure();
    const { theme, setTheme } = useTheme()
    const [mounted, setMounted] = useState(false)

    const [test, setTest] = useState(localStorage.getItem("theme"))

    const icons = {
        chevron: <ChevronDown fill="currentColor" size={16} />,
        scale: <Scale className="text-warning" fill="currentColor" size={30} />,
        lock: <Lock className="text-success" fill="currentColor" size={30} />,
        activity: <Activity className="text-secondary" fill="currentColor" size={30} />,
        flash: <Flash className="text-primary" fill="currentColor" size={30} />,
        server: <Server className="text-success" fill="currentColor" size={30} />,
        user: <TagUser className="text-danger" fill="currentColor" size={30} />,
    };

    useEffect(() => {
        setMounted(true)

    }, [])

    if (!mounted) return null

    return (
        <Navbar>
            <NavbarBrand>
                <p className="font-bold text-inherit text-[25px]">Sniper Pod</p>
            </NavbarBrand>
            <NavbarContent className="hidden sm:flex gap-4" justify="center">
                <Dropdown>
                    <NavbarItem>
                        <DropdownTrigger>
                            <Button
                                disableRipple
                                className="p-0 bg-transparent data-[hover=true]:bg-transparent"
                                endContent={icons.chevron}
                                radius="sm"
                                variant="light"
                            >
                                Features
                            </Button>

                        </DropdownTrigger>
                    </NavbarItem>
                    <DropdownMenu
                        aria-label="ACME features"
                        className="w-[340px]"
                        itemClasses={{
                            base: "gap-4",
                        }}
                    >
                        <DropdownItem
                            key="autoscaling"
                            description="ACME scales apps to meet user demand, automagically, based on load."
                            startContent={icons.scale}
                        >
                            Autoscaling
                        </DropdownItem>
                        <DropdownItem
                            key="usage_metrics"
                            description="Real-time metrics to debug issues. Slow query added? We’ll show you exactly where."
                            startContent={icons.activity}
                        >
                            Usage Metrics
                        </DropdownItem>
                        <DropdownItem
                            key="production_ready"
                            description="ACME runs on ACME, join us and others serving requests at web scale."
                            startContent={icons.flash}
                        >
                            Production Ready
                        </DropdownItem>
                        <DropdownItem
                            key="99_uptime"
                            description="Applications stay on the grid with high availability and high uptime guarantees."
                            startContent={icons.server}
                        >
                            +99% Uptime
                        </DropdownItem>
                        <DropdownItem
                            key="supreme_support"
                            description="Overcome any challenge with a supporting team ready to respond."
                            startContent={icons.user}
                        >
                            +Supreme Support
                        </DropdownItem>
                    </DropdownMenu>
                </Dropdown>
                <NavbarItem isActive>
                    <Link href="#" aria-current="page">
                        Customers
                    </Link>
                </NavbarItem>
                <NavbarItem>
                    <Link color="foreground" href="#">
                        Integrations
                    </Link>
                </NavbarItem>
            </NavbarContent>
            <NavbarContent justify="end">
                <NavbarItem className="hidden lg:flex">
                    <div>
                        <Button
                            onPress={onOpen}
                        >Login
                        </Button>
                        <Modal
                            isOpen={isOpen}
                            onOpenChange={onOpenChange}
                            placement="top-center"
                        >
                            <ModalContent>
                                {(onClose) => (
                                    <>
                                        <ModalHeader className="flex flex-col gap-1">Log in</ModalHeader>
                                        <ModalBody>
                                            <Input
                                                autoFocus
                                                endContent={
                                                    <MailIcon className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
                                                }
                                                label="Email"
                                                placeholder="Enter your email"
                                                variant="bordered"
                                            />
                                            <Input
                                                endContent={
                                                    <LockIcon className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
                                                }
                                                label="Password"
                                                placeholder="Enter your password"
                                                type="password"
                                                variant="bordered"
                                            />
                                            <div className="flex py-2 px-1 justify-between">
                                                <Checkbox
                                                    classNames={{
                                                        label: "text-small",
                                                    }}
                                                >
                                                    Remember me
                                                </Checkbox>
                                                <Link color="primary" href="#" size="sm">
                                                    Forgot password?
                                                </Link>
                                            </div>
                                        </ModalBody>
                                        <ModalFooter>
                                            <Button color="danger" variant="flat" onPress={onClose}>
                                                Close
                                            </Button>
                                            <Button color="primary" onPress={onClose}>
                                                Sign in
                                            </Button>
                                        </ModalFooter>
                                    </>
                                )}
                            </ModalContent>
                        </Modal>

                    </div>
                </NavbarItem>
                <NavbarItem>
                    <Button as={Link} color="primary" href="#" variant="flat">
                        Sign Up
                    </Button>
                </NavbarItem>
                <NavbarItem>
                    <div className='flex items-center justify-center'>
                        <button onClick={() => setTheme('light')}>
                            <MoonIcon className={theme == "light" ? "hidden" : ""} />
                        </button>
                        <button onClick={() => setTheme('dark')}>
                            <SunIcon className={theme == "light" ? "" : "hidden"} />
                        </button>
                    </div>
                </NavbarItem>
            </NavbarContent>
        </Navbar>
    )
}

export default Navbars