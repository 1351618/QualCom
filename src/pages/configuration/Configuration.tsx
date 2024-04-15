import { DropDownList } from "../../shared/ui/dropDownList/dropDownList";
import { PageWrapper } from "../../shared/ui/PageWrapper/PageWrapper";

export const Configuration = () => {
  return (
    <PageWrapper>
      <div>
        Configurator
        <DropDownList />
        <DropDownList />
        <DropDownList />
        <DropDownList />
      </div>
      ;
    </PageWrapper>
  );
};
