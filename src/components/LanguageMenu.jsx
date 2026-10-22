import { useState, useRef, useEffect } from 'react';
import { useI18n } from '../lib/i18n';
import { LOCALES, LOCALE_LABELS } from '../lib/i18n';

export default function LanguageMenu() {
  const { locale, setLocale, t } = useI18n();
  const [open, setOpen] = useState(false);
  const menuRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div
      ref={menuRef}
      className={`lang-menu ${open ? 'lang-menu--open' : ''}`}
    >
      <button
        type="button"
        className="lang-menu__trigger"
        onClick={() => setOpen(!open)}
        aria-expanded={open}
        aria-haspopup="listbox"
        aria-label={t('appViewCv') ? 'Idioma' : 'Language'}
      >
        {LOCALE_LABELS[locale]}
      </button>
      <ul className="lang-menu__list" role="listbox">
        {LOCALES.map((l) => (
          <li key={l} role="option" aria-selected={l === locale}>
            <button
              type="button"
              className={`lang-menu__item ${l === locale ? 'lang-menu__item--active' : ''}`}
              onClick={() => {
                setLocale(l);
                setOpen(false);
              }}
            >
              {LOCALE_LABELS[l]}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}