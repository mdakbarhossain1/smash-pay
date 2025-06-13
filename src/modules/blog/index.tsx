import BlogContainer from './components/BlogContainer';
import BlogHeroSection from './components/BlogHeroSection';
import CustomerStories from './components/CustomerStories';
import NewsletterSection from './components/NewsletterSection ';

const BlogSection = () => {
  return (
    <>
      <BlogHeroSection />
      <BlogContainer />
      <CustomerStories />
      <NewsletterSection />
    </>
  );
};

export default BlogSection;
