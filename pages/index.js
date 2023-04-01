import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>Fala Dev 👋 </p>
        <p>
          Meu nome é Marcos e sou Desenvolvedor Front-End, criando soluções para a Web com a tecnologia mais morderna do mercado: {' '}<a href="https://nextjs.org">Next</a>
        </p>
        <p>
          (Este é um site padrão - você pode aprender a criar um assim na documentação do {' '}
          <a href="https://nextjs.org/learn">Next</a>.)
        </p>
      </section>
    </Layout>
  );
}
