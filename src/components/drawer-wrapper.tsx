"use client";

import React from "react";
import {
  Drawer,
  DrawerTrigger,
  DrawerContent,
  DrawerHeader,
  DrawerFooter,
  DrawerTitle,
  DrawerDescription,
  DrawerClose,
} from "../components/ui/drawer";

interface DrawerWrapperProps {
  trigger: React.ReactNode;
  title?: string;
  description?: string;
  footer?: React.ReactNode;
  children: React.ReactNode;
  className?: string;
}

const DrawerWrapper: React.FC<DrawerWrapperProps> = ({
  trigger,
  title,
  description,
  footer,
  children,
  className,
}) => {
  return (
    <Drawer>
      <DrawerTrigger>{trigger}</DrawerTrigger>
      <DrawerContent className={className}>
        <DrawerHeader>
          {title && <DrawerTitle>{title}</DrawerTitle>}
          {description && <DrawerDescription>{description}</DrawerDescription>}
        </DrawerHeader>
        <div className="p-4">{children}</div>
        {footer && <DrawerFooter>{footer}</DrawerFooter>}
        <DrawerClose className="absolute top-4 right-4">
          <span className="sr-only">Close</span>
          ✖️
        </DrawerClose>
      </DrawerContent>
    </Drawer>
  );
};

export default DrawerWrapper;
