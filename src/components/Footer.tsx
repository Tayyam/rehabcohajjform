import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin } from 'lucide-react';
import { useTranslation } from '../hooks/useTranslation';

export const Footer: React.FC = () => {
  const { t } = useTranslation();

  return (
    <footer className="bg-gray-50 border-t mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">{t.footer.quickLinks}</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/new-complaint" className="text-gray-600 hover:text-teal-600">
                  {t.footer.newComplaint}
                </Link>
              </li>
              <li>
                <Link to="/track-complaint" className="text-gray-600 hover:text-teal-600">
                  {t.footer.trackComplaint}
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">{t.footer.contactUs}</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-gray-600">
                <Phone className="h-5 w-5 flex-shrink-0" />
                <span className="break-all">{t.footer.phone}</span>
              </li>
              <li className="flex items-center gap-2 text-gray-600">
                <Mail className="h-5 w-5 flex-shrink-0" />
                <span className="break-all">{t.footer.email}</span>
              </li>
              <li className="flex items-center gap-2 text-gray-600">
                <MapPin className="h-5 w-5 flex-shrink-0" />
                <span>{t.footer.location}</span>
              </li>
            </ul>
          </div>
          
          <div className="sm:col-span-2 lg:col-span-1">
            <h3 className="text-lg font-semibold mb-4">{t.footer.about}</h3>
            <p className="text-gray-600 leading-relaxed">
              {t.footer.aboutText}
            </p>
          </div>
        </div>
        
        <div className="border-t mt-8 pt-8 text-center text-gray-600 text-sm">
          {t.footer.rightsReserved} © {new Date().getFullYear()} {t.footer.brandName}
        </div>
      </div>
    </footer>
  );
};