
import AboutPage from '../../components/about/AboutPage';
import MainLayout from '@/components/layout/MainLayout';

export const metadata = {
  title: 'About Us - ShopHub',
  description: 'Learn about ShopHub - your trusted partner in quality products and exceptional shopping experiences.',
};

export default function About() {
  return (
    <MainLayout>
      <AboutPage />
    </MainLayout>
  );
}