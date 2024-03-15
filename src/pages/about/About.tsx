import { Outlet } from 'react-router-dom';
import { PageWrapper } from '../../shared/ui/PageWrapper/PageWrapper';

export const About = () => {
  return (
    <PageWrapper>
      <div>
        About
        <Outlet />
      </div>
    </PageWrapper>
  );
};
