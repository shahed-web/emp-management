import ContentPage from './ContentPage';
import styles from '../page.module.css';
interface PageProps {
  searchParams: Record<string, string | string[] | undefined>;
}

const page: React.FC<PageProps> = async ({searchParams}) => {
  return(
    <div className={styles.page}>
    <ContentPage />
    </div>
)};

export default page;