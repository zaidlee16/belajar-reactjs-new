import React from "react";
import NewsCard from "./NewsCard";
import "./styles.css";

const newsData = [
  {
    title:
      "Spanyol & Sejumlah Anggota Uni Eropa Akan Akui Kemerdekaan Palestina",
    description: `Kepala Kebijakan Luar negeri Uni Eropa (UE) Josep Borrell menyebut Spanyol, Irlandia dan sejumlah negara anggota UE lainnya berencana untuk mengakui negara Palestina pada tanggal 21 Mei mendatang. Hal ini disampaikan Borrell pada Kamis (9/5/2024) malam menjelang pemungutan suara mengenai upaya Palestina untuk menjadi anggota penuh PBB pada Jumat (10/5/2024).`,
    link: "#",
    imageUrl:
      "https://akcdn.detik.net.id/visual/2024/04/18/bendera-uni-eropa-reutersjohanna-geron_169.jpeg?w=715&q=90",
  },
  {
    title: "Kapal Tanker Minyak Tenggelam, 1,4 Juta Liter BBM Tumpah",
    description: `Komando Penerbangan Penjaga Pantai melakukan patroli udara setelah Sebuah kapal tanker berbendera Filipina yang membawa 1,4 juta liter bahan bakar minyak (BBM) industri terbalik dan tenggelam di lepas pantai Manila Kamis (25/7/2024). Tumpahan minyak dilaporkan membentang sekitar 3,7 kilometer (km), terbawa arus kuat ke arah timur perairan dekat RI tersebut. (Philippine Coast Guard via AP)`,
    link: "#",
    imageUrl:
      "https://akcdn.detik.net.id/visual/2024/07/26/sebuah-kapal-tanker-berbendera-filipina-yang-membawa-14-juta-liter-bahan-bakar-minyak-bbm-industri-terbalik-dan-tenggelam-di-l-1_169.png?w=800&q=90",
  },
  {
    title: "Jelang Olimpiade, Ramai-Ramai Gelandangan 'Serbu' Paris",
    description: `Belasan keluarga tunawisma, di mana sebagian besar perempuan dengan anak kecil, berkemah di depan balai kota distrik 18 Paris pada Kamis (25/7/2024), mereka menuntut perumahan dan mengatakan situasi mereka semakin memburuk selama pembersihan lahan menjelang Olimpiade Paris 2024. (REUTERS/Sarah Meyssonnier)`,
    link: "#",
    imageUrl:
      "https://akcdn.detik.net.id/visual/2024/07/25/olympics-2024protest-homeless-7_169.jpeg?w=800&q=90",
  },
  {
    title: "Panas Perang Gaza, Patung Wajah Netanyahu Hangus Dibakar Massa",
    description: `Demonstran pro-Palestina membakar patung Perdana Menteri (PM) Israel Benjamin Netanyahu, di luar Union Station. Ini bertepatan dengan pidato Netanyahu di Kongres AS, Rabu waktu setempat. (REUTERS/Nathan Howard)`,
    link: "#",
    imageUrl:
      "https://akcdn.detik.net.id/visual/2024/07/25/israel-palestiniansusa-netanyahu-protests-3_169.jpeg?w=800&q=90",
  },
  // Tambahkan objek berita lainnya di sini jika diperlukan
];

function NewsList() {
  return (
    <div className="news-list">
      {newsData.map((news, index) => (
        <NewsCard
          key={index}
          title={news.title}
          description={news.description}
          link={news.link}
          imageUrl={news.imageUrl}
        />
      ))}
    </div>
  );
}

export default NewsList;
