import React from 'react';
import { Logo } from './Logo';
import { Link, useLocation } from 'react-router-dom';
import { FileText, Search, Menu, X } from 'lucide-react';
import { useTranslation } from '../hooks/useTranslation';
import { useState } from 'react';

export const Header: React.FC = () => {
  const location = useLocation();
  const { t } = useTranslation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const isActive = (path: string) => location.pathname === path;

  const NavLink = ({ to, icon: Icon, text }: { to: string; icon: React.ElementType; text: string }) => (
    <Link 
      to={to}
      className={`
        flex items-center gap-2 px-4 py-2.5 rounded-lg font-medium
        transition-all duration-200 text-base w-full
        ${isActive(to)
          ? 'bg-teal-50 text-teal-700'
          : 'text-gray-600 hover:bg-gray-50 hover:text-teal-600'
        }
      `}
      onClick={() => setIsMenuOpen(false)}
    >
      <Icon className="h-5 w-5" />
      <span>{text}</span>
    </Link>
  );

  return (
    <header className="bg-white border-b sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Logo />

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-lg hover:bg-gray-100"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="h-6 w-6 text-gray-600" />
            ) : (
              <Menu className="h-6 w-6 text-gray-600" />
            )}
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-2">
            <NavLink to="/new-complaint" icon={FileText} text={t.header.newComplaint} />
            <NavLink to="/track-complaint" icon={Search} text={t.header.trackComplaint} />
          </nav>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden border-t py-4 space-y-2">
            <NavLink to="/new-complaint" icon={FileText} text={t.header.newComplaint} />
            <NavLink to="/track-complaint" icon={Search} text={t.header.trackComplaint} />
          </div>
        )}
      </div>
    </header>
  );
};
