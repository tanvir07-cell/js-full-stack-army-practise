import Layout from "../components/layout/Layout";
import Section from "../components/section/Section";
const friends = ["Gazi", "Rajin", "Rafi", "Shovon"];
function About() {
  return (
    <Layout>
      <h1>This is the About</h1>
      <Section title="Friend's" peoples={friends}></Section>
    </Layout>
  );
}

export default About;
