import React from "react";

const sectionStyle = {
  padding: "2rem",
  maxWidth: "900px",
  margin: "1rem auto",
  backgroundColor: "white",
  borderRadius: "8px",
  boxShadow: "0 0 10px rgba(0,0,0,0.1)",
};

function HomePage() {
  return (
    <div>
      <header style={{ backgroundColor: "#1a4d2e", padding: "1rem", color: "white" }}>
        <h1 style={{ margin: 0 }}>金源金属株式会社</h1>
      </header>

      <section style={sectionStyle}>
        <h2 style={{ color: "#1a4d2e" }}>営業時間</h2>
        <p>月曜日〜土曜日：08:00〜17:00<br />日曜・祝日：定休日</p>
      </section>

      <section style={sectionStyle}>
        <h2 style={{ color: "#1a4d2e" }}>お問い合わせ</h2>
        <div style={{ lineHeight: 1.8 }}>
          <p>電話番号：053-867-8366<br />FAX：053-867-8365<br />住所：〒437-1103 静岡県袋井市豊住417番地</p>
        </div>
      </section>

      <section style={sectionStyle}>
        <h2 style={{ color: "#1a4d2e" }}>サービス内容</h2>
        <ul>
          <li>各種金属・回線・機械・工具の買取および販売</li>
          <li>建物の解体作業</li>
          <li>廃屋の片付け・清掃</li>
        </ul>
      </section>

      <footer style={{ backgroundColor: "#1a4d2e", color: "white", textAlign: "center", padding: "1rem" }}>
        &copy; 2025 金源金属株式会社
      </footer>
    </div>
  );
}

export default HomePage;

