import { useTranslation } from 'react-i18next';
import { useTheme } from '../../app/providers/themeProvider/lib/useTheme';
import cls from './header.module.scss';

export const Header = () => {
  const { t, i18n } = useTranslation();
  const { changeTheme } = useTheme();

  const toggle = async (): Promise<void> => {
    void (await i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru'));
  };
  return (
    <header className={cls.header}>
      {t('Header')}
      <button onClick={toggle}>{t('Change language mather fucker')}</button>
      <button onClick={changeTheme}>Change theme</button>
    </header>
  );
};
