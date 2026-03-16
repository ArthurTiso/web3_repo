import CardProduct from "@/components/CardProduct";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";

export default function Home() {
  return (
    <div>
      <Header />
      <section style={styles.section}>
        <Sidebar />
        <main>
          <h1>Produtos</h1>
          <p>Confira a lista de produtos:</p>
          <div style={styles.products}>
            <CardProduct
            photo="https://assets.pokemon.com/static-assets/content-assets/cms2-pt-br/img/cards/web/ME01/ME01_PT-BR_60.png"
           name = "Produto 1"
           category = "Coisas lindas"
           price={199.99}
           ></CardProduct>
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
  products: {
    display: "flex",
    flexDirection: "column",
    gap: 20
  }
};
