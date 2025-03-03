
import React from 'react';
import { cn } from '@/lib/utils';

interface SectionProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
  id?: string;
  containerClassName?: string;
  as?: React.ElementType;
}

const Section = ({
  children,
  className,
  id,
  containerClassName,
  as: Component = 'section',
  ...props
}: SectionProps) => {
  return (
    <Component
      id={id}
      className={cn('section-padding scroll-mt-20', className)}
      {...props}
    >
      <div className={cn('container mx-auto px-4 md:px-6', containerClassName)}>
        {children}
      </div>
    </Component>
  );
};

export default Section;
