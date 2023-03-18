import { Container } from '@/styles/login.styles';
import { NextPage } from 'next';
import { FloatButton } from 'antd';

const LoginPage: NextPage = () => {
  return (
    <Container>
      Login
      <FloatButton onClick={() => console.log('click')} />
    </Container>
  );
};

export default LoginPage;
