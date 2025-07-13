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
            style={{ color: "#fff", fontSize: 14, margin: 0, paddingLeft: 19, paddingRight: 8, cursor: "pointer", textDecoration: "none" }}
            onClick={e => {
              e.preventDefault();
              navigate("/legal", { state: { prevPage: "/seite1" } });
            }}
          >{t.legal}</a>
          <div style={{ position: "relative", display: "flex", alignItems: "center" }}>
            <a
              href="#"
              style={{ color: "#fff", fontSize: 14, margin: 0, paddingLeft: 19, paddingRight: 19, cursor: "pointer", textDecoration: "none" }}
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

function LegalPage({ language, setLanguage }) {
  const location = useLocation();
  const navigate = useNavigate();
  const t = useTranslation(language);
  const [langDropdown, setLangDropdown] = useState(false);

  const handleBack = () => {
      navigate("/", { replace: true });
  };

  // Deutscher Text
  const legalDe = (
    <div style={{ color: "#fff", fontSize: 14, lineHeight: 1.6, width: "100%", userSelect: "none" }}>
      <h3 style={{ marginBottom: 16 }}>Impressum</h3>
      <div style={{ marginBottom: 16 }}>
        Kaj Friedmann<br/>
        Natürliche Person<br/>
        Einzelunternehmer (nicht im Firmenbuch eingetragen)<br/>
        Gewerbe: IT- und Datenverarbeitungsdienstleistungen<br/>
        Magistrat der Stadt Wien, Bezirksamt für den 22. Bezirk<br/>
        <span style={{ textDecoration: 'none', borderBottom: 'none' }}>Nauschgasse 4/3/2 1220 Wien, Österreich</span>
      </div>
      <h3>Kontakt</h3>
      <div style={{ marginBottom: 16 }}>
        <a href="mailto:hi@dalalala.com" style={{ color: '#fff', textDecoration: 'none', borderBottom: 'none' }}>hi@dalalala.com</a>
      </div>
      <h3>Vertretungsberechtigte</h3>
      <div style={{ marginBottom: 16 }}>Kaj Friedmann</div>
      <h3>Mitgliedschaften</h3>
      <div style={{ marginBottom: 16 }}>Mitglied der WKÖ</div>
      <h3>Inhaltlich Verantwortlicher</h3>
      <div style={{ marginBottom: 16 }}>Kaj Friedmann (Adresse wie oben)</div>
      <h3>Streitbeilegung</h3>
      <div style={{ marginBottom: 16 }}>
        Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit:<br/>
        <a href="https://ec.europa.eu/consumers/odr/" style={{ color: '#fff', textDecoration: 'none', borderBottom: 'none' }}>https://ec.europa.eu/consumers/odr/</a> Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.
      </div>
    </div>
  );

  // Englischer Text (wie bisher)
  const legalEn = (
    <div style={{ color: "#fff", fontSize: 14, lineHeight: 1.6, width: "100%", userSelect: "none" }}>
      <h3 style={{ marginBottom: 16 }}>Imprint</h3>
      <div style={{ marginBottom: 16 }}>
        Kaj Friedmann<br/>
        Natural person<br/>
        Sole proprietor (not registered in the commercial register)<br/>
        Business: IT and data processing services<br/>
        Municipal authority of the City of Vienna, District Office for the 22. District<br/>
        <span style={{ textDecoration: 'none', borderBottom: 'none' }}>Nauschgasse 4/3/2 1220 Vienna, Austria</span>
      </div>
      <h3>Contact</h3>
      <div style={{ marginBottom: 16 }}>
        <a href="mailto:hi@dalalala.com" style={{ color: '#fff', textDecoration: 'none', borderBottom: 'none' }}>hi@dalalala.com</a>
      </div>
      <h3>Authorized Representatives</h3>
      <div style={{ marginBottom: 16 }}>Kaj Friedmann</div>
      <h3>Trade Register</h3>
      <div style={{ marginBottom: 16 }}>Member of WKÖ</div>
      <h3>Responsible for Content</h3>
      <div style={{ marginBottom: 16 }}>Kaj Friedmann (address as above)</div>
      <h3>Dispute Resolution</h3>
      <div style={{ marginBottom: 16 }}>
        The European Commission provides a platform for online dispute resolution (ODR):<br/>
        <a href="https://ec.europa.eu/consumers/odr/" style={{ color: '#fff', textDecoration: 'none', borderBottom: 'none' }}>https://ec.europa.eu/consumers/odr/</a> We are not willing or obliged to participate in dispute resolution proceedings before a consumer arbitration board.
      </div>
    </div>
  );

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
        {language === "de" ? legalDe : legalEn}
      </div>
    </div>
  );
}

function NotFound() {
  return (
    <div style={{
      minHeight: "100vh",
      width: "100vw",
      background: "#000",
      display: "flex",
      alignItems: "center",
      justifyContent: "center"
    }}>
      <span style={{ color: "#fff", fontSize: 22, fontWeight: 400 }}>404</span>
    </div>
  );
}

function App() {
  const [language, setLanguage] = useState("en");
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Seite1 language={language} setLanguage={setLanguage} />} />
        <Route path="/legal" element={<LegalPage language={language} setLanguage={setLanguage} />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;