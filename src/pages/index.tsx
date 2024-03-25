import Head from "next/head";
import styles from "@/styles/Home.module.css";
import Navbar from "@/Components/Navbar/Navbar";
import Hero from "@/Sections/Hero/Hero";
import Skills from "@/Sections/Skills/Skills";
import Project from "@/Sections/Projects/Projects";
import Contact from "@/Sections/Contact/Contact";

export default function Home() {
  return (
    <>
      <Head>
        <title>Matheo Lang</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/logo.png" />
        {/* changer la favicon */}
      </Head>
      
      <div className={styles.container}>
        <Navbar />
        <Hero />
        <Skills />
        <Project />
        <Contact />
      </div>
    </>
  );
}
