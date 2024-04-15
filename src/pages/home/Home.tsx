import { DropDownList } from "../../shared/ui/dropDownList/dropDownList";
import { PageWrapper } from "../../shared/ui/PageWrapper/PageWrapper";

export const Home = () => {
  return (
    <PageWrapper>
      <div>
        Home
        <DropDownList />
        <DropDownList />
        <DropDownList />
      </div>
    </PageWrapper>
  );
};
