import { useTranslation } from 'react-i18next';
import { useTheme } from '../../../app/providers/themeProvider/lib/useTheme';
import cls from './header.module.scss';
import { useState } from 'react';

export const Header = () => {
  const { t, i18n } = useTranslation();
  const languagesArray = ['ru', 'en', 'cn'];

  const [counter, setCounter] = useState(0);

  const { changeTheme } = useTheme();

  if (counter === languagesArray.length) {
    setCounter(0);
  }

  const toggle = async (): Promise<void> => {
    void (await i18n.changeLanguage(languagesArray[counter]));
  };

  return (
    <header className={cls.header}>
     <div className={cls.text}>
       {t('Header')}
      </div>
      <button
        onClick={() => {
          toggle();
          setCounter((prev) => prev + 1);
        }}
      >
        {t('Change language mather fucker')}
      </button>

      <button onClick={changeTheme}>{t('Change theme')}</button>
    </header>
  );
};
