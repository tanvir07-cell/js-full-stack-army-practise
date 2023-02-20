import Layout from "../components/layout/Layout";
import Section from "../components/section/Section";
const families = ["Arafat", "Mizan", "Rabeya"];

function Home() {
  return (
    <Layout>
      <h1>This is the home</h1>
      <Section title="Familia's" peoples={families}></Section>
    </Layout>
  );
}

export default Home;
