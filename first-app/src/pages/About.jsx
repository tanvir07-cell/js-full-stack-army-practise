import { useEffect, useState } from "react";
import Layout from "../components/layout/Layout";
import Section from "../components/section/Section";
const friends = ["Gazi", "Rajin", "Rafi", "Shovon"];
function About() {
  const [state, setState] = useState({});

  // eti mutable state object dekhe barbar call hocceh ei barbar call remove korar jonnei useEffect Hook ti use kora hoy:
  useEffect(() => {
    setTimeout(() => {
      setState({ name: "Tanvir Rifat" });
      console.log("Rerenderd because we use name mutable object");
    }, 2 * 1000);
  }, []);

  return (
    <Layout>
      <h1>Hello {state.name ? state.name : "Guest"} This is the About Page</h1>
      {/* shortCircuit using(&&) */}
      {/* {name && <h1>Hello {name} this is the about page</h1>} */}
      <Section title="Friend's" peoples={friends}></Section>
    </Layout>
  );
}

export default About;
