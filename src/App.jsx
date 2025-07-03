import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, useNavigate, useLocation } from "react-router-dom";

const translations = {
  en: { legal: "Legal", deutsch: "Deutsch", english: "English" },
  de: { legal: "Rechtliches", deutsch: "Deutsch", english: "English" }
};

function useTranslation(language) {
  return translations[language] || translations.en;
}

function Seite1({ language, setLanguage }) {
  const t = useTranslation(language);
  const [langDropdown, setLangDropdown] = useState(false);
  const navigate = useNavigate();

  return (
    <div style={{
      minHeight: "100vh",
      width: "100vw",
      background: "#000",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      position: "relative",
      padding: 0
    }}>
      <div style={{
        color: "#fff",
        fontSize: 32,
        fontWeight: 600,
        textAlign: "center",
        maxWidth: 480,
        width: "100%"
      }}>
        dalalala
      </div>
      <div style={{
        position: "fixed",
        left: 0,
        bottom: 11,
        width: "100vw",
        display: "flex",
        justifyContent: "center",
        padding: 0
      }}>
        <div style={{
          width: "100%",
          maxWidth: 480,
          margin: "0 auto",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center"
        }}>
          <a
            href="#"
            style={{ color: "#fff", fontSize: 14, margin: 0, paddingLeft: 19, paddingRight: 8, cursor: "pointer" }}
            onClick={e => {
              e.preventDefault();
              navigate("/legal", { state: { prevPage: "/seite1" } });
            }}
          >{t.legal}</a>
          <div style={{ position: "relative", display: "flex", alignItems: "center" }}>
            <a
              href="#"
              style={{ color: "#fff", fontSize: 14, margin: 0, paddingLeft: 19, paddingRight: 19, cursor: "pointer" }}
              onClick={e => { e.preventDefault(); setLangDropdown(!langDropdown); }}
            >
              {language === "en" ? t.english : t.deutsch}
            </a>
            {langDropdown && (
              <div style={{
                position: "absolute",
                right: 0,
                bottom: 24,
                background: "#17181d",
                borderRadius: 8,
                boxShadow: "0 2px 8px rgba(0,0,0,0.2)",
                zIndex: 10
              }}>
                {language === "en" ? (
                  <div style={{ padding: "8px 19px", cursor: "pointer", color: "#bdbdbd", fontSize: 14 }}
                    onClick={() => { setLanguage("de"); setLangDropdown(false); }}>
                    {t.deutsch}
                  </div>
                ) : (
                  <div style={{ padding: "8px 19px", cursor: "pointer", color: "#bdbdbd", fontSize: 14 }}
                    onClick={() => { setLanguage("en"); setLangDropdown(false); }}>
                    {t.english}
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

function LegalPage() {
  const location = useLocation();
  const navigate = useNavigate();
  const [language, setLanguage] = useState("en");
  const t = useTranslation(language);
  const [langDropdown, setLangDropdown] = useState(false);

  const handleBack = () => {
    if (location.state && location.state.prevPage) {
      navigate(location.state.prevPage, { replace: true });
    } else {
      navigate("/", { replace: true });
    }
  };

  return (
    <div style={{
      minHeight: "100vh",
      width: "100vw",
      background: "#000",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "flex-start",
      padding: 0
    }}>
      <div style={{
        width: "100%",
        maxWidth: 480,
        margin: "0 auto",
        paddingLeft: 17,
        paddingRight: 17,
        paddingTop: 7,
        display: "flex",
        flexDirection: "column",
        alignItems: "center"
      }}>
        <div style={{ display: "flex", alignItems: "center", width: "100%", marginBottom: 32 }}>
          <span style={{ fontSize: 32, color: "#fff", cursor: "pointer", marginRight: 17 }} onClick={handleBack}>{"\u2190"}</span>
          <span style={{ color: "#fff", fontSize: 22, fontWeight: 600 }}>{t.legal}</span>
        </div>
        <div style={{ color: "#fff", fontSize: 14, lineHeight: 1.6, width: "100%" }}>
          <h3 style={{ marginBottom: 16 }}>Imprint</h3>
          <div style={{ marginBottom: 16 }}>
            Demo LegalPage<br />
            Your Address<br />
            Your Contact Info
          </div>
          <h3 style={{ marginTop: 64, marginBottom: 16 }}>Privacy Policy</h3>
          <div style={{ marginBottom: 16 }}>Your privacy is important to us. This is a demo privacy statement.</div>
        </div>
      </div>
    </div>
  );
}

function App() {
  const [language, setLanguage] = useState("en");
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Seite1 language={language} setLanguage={setLanguage} />} />
        <Route path="/seite1" element={<Seite1 language={language} setLanguage={setLanguage} />} />
        <Route path="/legal" element={<LegalPage />} />
      </Routes>
    </Router>
  );
}

export default App;