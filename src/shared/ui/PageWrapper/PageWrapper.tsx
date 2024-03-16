import cls from "./pageWrapper.module.scss";
import { ReactNode } from "react";
import clsx from "clsx";
import { Header } from "../../../components/header/header";

export const PageWrapper = ({ children }: { children: ReactNode }) => {
  return (
    <div className={clsx(cls.cls, cls.app)}>
      <header className={cls.header__inner}>
        <Header />
      </header>
      <main className="main">
        <div className="Home__inner">{children}</div>
      </main>
      <footer>footer</footer>
    </div>
  );
};
