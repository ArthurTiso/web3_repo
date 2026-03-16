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
           name = "Gardevoir EX"
           category = "Coisas lindas"
           price={199.99}
           ></CardProduct>

      <CardProduct
            photo="https://pocket.pokemongohub.net/_next/image?url=%2Ftcg-pocket%2Fcards%2Fa4b%2Fwebp%2F357.webp&w=640&q=75"
           name = "Gardevoir"
           category = "Coisas lindas"
           price={9.99}
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
 products: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 20
  }
};
