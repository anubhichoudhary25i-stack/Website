import { useState } from 'react';
import { useActiveSection } from '@/hooks/useActiveSection';
import { ChevronDown } from 'lucide-react';

export interface NavLink {
  id: string;
  label: string;
  children?: NavLink[];
}

interface NavLinksProps {
  links: NavLink[];
  className?: string;
  onLinkClick?: () => void;
}

const NavLinks: React.FC<NavLinksProps> = ({ links, className = '', onLinkClick }) => {
  const allIds = links.flatMap(link => link.children ? [link.id, ...link.children.map(c => c.id)] : [link.id]);
  const activeSection = useActiveSection(allIds);
  
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      if (onLinkClick) onLinkClick();
    }
  };
  
  return (
    <nav className={`flex gap-6 ${className}`}>
      {links.map((link) => (
        link.children ? (
          <div key={link.id} className="relative group flex flex-col md:block w-full md:w-auto">
            <div className="flex items-center justify-between w-full">
              <button
                className={`text-sm transition-colors px-1 py-1 relative ${
                  activeSection === link.id || link.children.some(c => c.id === activeSection)
                    ? 'text-primary font-medium'
                    : 'hover:text-primary'
                }`}
                onClick={() => scrollToSection(link.id)}
              >
                {link.label}
                {(activeSection === link.id || link.children.some(c => c.id === activeSection)) && (
                  <span 
                    className="absolute bottom-0 left-0 h-0.5 w-full bg-primary hidden md:block" 
                    aria-hidden="true"
                  />
                )}
              </button>
              <ChevronDown size={16} className="ml-1 md:group-hover:rotate-180 transition-transform duration-200 hidden md:block" />
            </div>
            
            <div className="md:absolute md:left-0 md:top-full md:mt-2 md:w-48 md:bg-card md:border md:border-border md:rounded-md md:shadow-lg md:opacity-0 md:invisible md:group-hover:opacity-100 md:group-hover:visible transition-all duration-200 z-50 flex flex-col py-2 pl-4 md:pl-0 mt-2 md:mt-0 border-l-2 border-border md:border-l-0 ml-2 md:ml-0">
              {link.children.map(child => (
                <button
                  key={child.id}
                  className={`text-left px-4 py-2 text-sm transition-colors ${
                    activeSection === child.id ? 'text-primary font-medium bg-muted/50' : 'hover:bg-muted hover:text-primary'
                  }`}
                  onClick={() => scrollToSection(child.id)}
                >
                  {child.label}
                </button>
              ))}
            </div>
          </div>
        ) : (
          <button
            key={link.id}
            className={`text-sm transition-colors px-1 py-1 relative text-left ${
              activeSection === link.id
                ? 'text-primary font-medium'
                : 'hover:text-primary'
            }`}
            onClick={() => scrollToSection(link.id)}
            aria-current={activeSection === link.id ? 'page' : undefined}
          >
            {link.label}
            {activeSection === link.id && (
              <span 
                className="absolute bottom-0 left-0 h-0.5 w-full bg-primary hidden md:block" 
                aria-hidden="true"
              />
            )}
          </button>
        )
      ))}
    </nav>
  );
};

export default NavLinks;
