import { useTheme } from "../../app/providers/themeProvider/lib/useTheme";
import cls from "./header.module.scss";

export const Header = () => {
  const { changeTheme } = useTheme();
  return (
    <header className={cls.header}>
      Header
      <button onClick={changeTheme}>Change theme</button>
    </header>
  );
};
