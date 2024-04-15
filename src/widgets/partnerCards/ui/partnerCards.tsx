import { partnersItems } from "../lib/items";
import cls from "./partnerCard.module.scss";

export const PartnerCards = () => {
  return (
    <ul className={cls.partnerCard}>
      {partnersItems.map(({ partner, url }, index) => (
        <li key={index}>
          <a href={url}>
            <img src={partner} alt="" />
          </a>
        </li>
      ))}
    </ul>
  );
};
