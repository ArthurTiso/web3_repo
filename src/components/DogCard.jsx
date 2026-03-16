import Image from "next/image";

export default function DogCard({ imagem, legenda }) {
  return (
    <div>
      <Image
        src={imagem}
        width={250}
        height={250}
        alt={legenda}
      />

      <p>{legenda}</p>
    </div>
  );
}