import { Outlet } from "react-router-dom";
import { PageWrapper } from "../../shared/ui/PageWrapper/PageWrapper";
import { useTranslation } from "react-i18next";
import { PartnerCards } from "../../widgets/partnerCards/ui/partnerCards";
// import cls from "./partners.module.scss";

export const Partners = () => {
  const { t } = useTranslation("partners");

  return (
    <PageWrapper>
      <div>
        {t("partners")}
        <PartnerCards />
        <Outlet />
      </div>
    </PageWrapper>
  );
};
