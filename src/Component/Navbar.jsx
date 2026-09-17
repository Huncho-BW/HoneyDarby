import React from "react";
import { NavLink, useLocation } from "react-router";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import { Menu } from "lucide-react";

export default function Navbar() {
  const location = useLocation();
  const isHome = location.pathname === "/";

  const navItems = [
    { label: "Service", path: "service" },
    { label: "Menu", path: "menu" },
    { label: "Our Work", path: "OurWork" },
    { label: "About", path: "About" },
  ];

  return (
    <div className="navbar">
      {/* Logo */}
      <NavLink to={"/"}>
        <div>
          <h1
            className={`navbar-homePage ${
              isHome ? "text-[#fff9f0]" : "text-[#000000]"
            }`}
          >
            HoneyDaby
          </h1>
        </div>
      </NavLink>

      {/* Desktop Navigation */}
      <div className="desktop-navbar flex gap-[24px]">
        {navItems.map((item) => (
          <NavLink to={item.path} key={item.path}>
            {({ isActive }) => (
              <span
                className={`navbar-link navbar-text ${
                  isActive ? "navbar-link-active" : ""
                } ${isHome ? "text-[#fff9f0]" : "text-[#000000]"}`}
              >
                {item.label}
              </span>
            )}
          </NavLink>
        ))}
      </div>

      {/* Desktop Inquiry Button */}
      <div className="desktop-navbar">
        <NavLink to={"makeIq"}>
          {({ isActive }) => (
            <div
              className={`navbar-border ${
                isActive
                  ? "bg-[#E6D5BE]"
                  : isHome
                    ? "bg-[#fff9f0] hover:bg-[#E6D5BE]"
                    : "bg-[#000000] hover:bg-[#E6D5BE]"
              }`}
            >
              <button
                className={`navbar-text ${
                  isActive
                    ? "text-[#000000]"
                    : isHome
                      ? "text-[#2d211b] hover:text-[#000000]"
                      : "text-[#fff9f0] hover:text-[#000000]"
                }`}
              >
                Make an Inquiry
              </button>
            </div>
          )}
        </NavLink>
      </div>

      {/* Mobile Navigation */}
      <div className="mobile-navbar">
        <DropdownMenu.Root>
          <DropdownMenu.Trigger asChild>
            <button
              className={`mobile-menu-trigger ${
                isHome ? "text-[#fff9f0]" : "text-[#000000]"
              }`}
              aria-label="Open navigation menu"
            >
              <Menu size={28} strokeWidth={1.8} />
            </button>
          </DropdownMenu.Trigger>

          <DropdownMenu.Portal>
            <DropdownMenu.Content
              align="end"
              sideOffset={12}
              className={`mobile-menu-content ${
                isHome ? "mobile-menu-home" : "mobile-menu-default"
              }`}
            >
              {navItems.map((item) => (
                <DropdownMenu.Item
                  key={item.path}
                  asChild
                  className="mobile-menu-item"
                >
                  <NavLink to={item.path}>
                    {({ isActive }) => (
                      <span
                        className={`mobile-menu-link navbar-text ${
                          isActive ? "mobile-menu-link-active" : ""
                        }`}
                      >
                        {item.label}
                      </span>
                    )}
                  </NavLink>
                </DropdownMenu.Item>
              ))}

              <DropdownMenu.Separator className="mobile-menu-separator" />

              <DropdownMenu.Item asChild className="mobile-inquiry-item">
                <NavLink to="makeIq">
                  {({ isActive }) => (
                    <span
                      className={`mobile-inquiry-button ${
                        isActive
                          ? "bg-[#E6D5BE] text-[#000000]"
                          : "bg-[#2d211b] text-[#fff9f0] hover:bg-[#E6D5BE] hover:text-[#000000]"
                      }`}
                    >
                      Make an Inquiry
                    </span>
                  )}
                </NavLink>
              </DropdownMenu.Item>
            </DropdownMenu.Content>
          </DropdownMenu.Portal>
        </DropdownMenu.Root>
      </div>
    </div>
  );
}
