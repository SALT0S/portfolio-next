import type { NextPage } from "next";
import styles from "../styles/Home.module.css";
import { Layout } from "../components/Layout/Layout";

const HomePage: NextPage = () => {
  return (
    <Layout>
      <h2 className={styles.title}>Header Section</h2>
      <h2 className={styles.title}>Project Section</h2>
      <h2 className={styles.title}>Skillset Section</h2>
      <h2 className={styles.title}>Blog Section</h2>
      <h2 className={styles.title}>About Section</h2>
      <h2 className={styles.title}>Contact Section</h2>
    </Layout>
  );
};

export default HomePage;
