import CardUser from "@/components/CardUser";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Header />
      <section style={styles.section}>
        <Sidebar />
        <main>
          <h1>Home</h1>
          <p>Conteúdo da página Home</p>
         
          <div style={styles.users}>
            <CardUser
              avatar="https://github.com/ArthurTiso.png"
              name="ArthurTiso"
              email="arthurdemorais2012@gmail.com"
            />
          </div>
          
        </main>
      </section>
      <Footer />
    </div>
  );
}

const styles = {
  section: {
    display: "flex",
    gap: 20,
    padding: 20,
  },
  users: {
    display: "flex",
    flexDirection: "row",
    gap: 20
  }
};
