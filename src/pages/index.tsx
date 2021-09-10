import Head from 'next/head'

import styles from './home.module.scss';

export default function Home() {
  return (
    <>
      <Head>
        <title>Página em manutenção</title>
      </Head>
      <main className={styles.contentContainer}>
        <section className={styles.hero}>
          <span>👏 Olá, bem-vindo.</span>
          <h1>
            Está página está em <span>manutenção</span>.
          </h1>
          <p>Em breve retornamos...</p>
        </section>
        <img className={styles.image} src="/images/home.svg" />
      </main>
    </>
  );
}
