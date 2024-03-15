import cls from './pageWrapper.module.scss';
import { ReactNode } from 'react';
import clsx from 'clsx';
import { useTheme } from '../../../app/providers/themeProvider/lib/useTheme';

export const PageWrapper = ({ children }: { children: ReactNode }) => {
  const { changeTheme } = useTheme();

  return (
    <div className={clsx(cls.cls, cls.app)}>
      <header className={cls.header__inner}>
        <button onClick={changeTheme}>Change theme</button>
        <div className='header__inner'></div>
      </header>
      <main className='main'></main>
      <footer>
        <div className='footer__inner'>{children}</div>
      </footer>
    </div>
  );
};
