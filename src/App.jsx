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
    <div style={{ color: "#fff", fontSize: 14, lineHeight: 1.6, width: "100%" }}>
      <h3 style={{ marginBottom: 16 }}>Impressum</h3>
      <div style={{ marginBottom: 16 }}>
        Kaj Friedmann<br/>
        Natürliche Person<br/>
        Einzelunternehmer (nicht im Firmenbuch eingetragen)<br/>
        Gewerbe: IT- und Datenverarbeitungsdienstleistungen<br/>
        Magistrat der Stadt Wien, Bezirksamt für den 22. Bezirk<br/>
        <span style={{ textDecoration: 'none', borderBottom: 'none' }}>Nauschgasse 4/3/2 1220 Wien, Österreich</span>
      </div>
      <h3>Gegenstand</h3>
      <div style={{ marginBottom: 16 }}>Web-App zum gleichzeitigen Lernen mehrerer Sprachen</div>
      <h3>Kontakt</h3>
      <div style={{ marginBottom: 16 }}>
        E-Mail: <a href="mailto:hi@dalalala.com" style={{ color: '#fff', textDecoration: 'none', borderBottom: 'none' }}>hi@dalalala.com</a><br/>
        <a href="mailto:kaj.friedmann@gmail.com" style={{ color: '#fff', textDecoration: 'none', borderBottom: 'none' }}>kaj.friedmann@gmail.com</a>
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
      <h3 style={{ marginTop: 64, marginBottom: 16 }}>Allgemeine Geschäftsbedingungen</h3>
      <div style={{ marginBottom: 16 }}>Stand: 14.03.2025</div>
      <h4 style={{ marginBottom: 4 }}>1. Geltungsbereich</h4>
      <div style={{ marginBottom: 16 }}>Diese AGB gelten für die Nutzung unserer Vokabel-Lern-App. Mit der Registrierung oder Nutzung unserer App akzeptierst du diese Bedingungen.</div>
      <h4 style={{ marginBottom: 4 }}>2. Leistungsbeschreibung</h4>
      <div style={{ marginBottom: 16 }}>Unsere App bietet Funktionen zum Erstellen, Speichern und Lernen von Vokabeln in verschiedenen Sprachen. Die Nutzung kann kostenpflichtige Premium-Funktionen umfassen.</div>
      <h4 style={{ marginBottom: 4 }}>3. Registrierung und Konto</h4>
      <div style={{ marginBottom: 16 }}>Für die Nutzung ist eine Registrierung erforderlich. Du bist verpflichtet, wahrheitsgemäße Angaben zu machen und deine Zugangsdaten geheim zu halten. Du bist für alle Aktivitäten unter deinem Konto verantwortlich.</div>
      <h4 style={{ marginBottom: 4 }}>4. Preise und Zahlungsbedingungen</h4>
      <div style={{ marginBottom: 16 }}>Die App kann nur mit einer Zahlung von 0,99 € pro Monat genutzt werden. Die Zahlung kann als Monatspass oder als Abonnement erfolgen. Abonnements verlängern sich automatisch, sofern sie nicht gekündigt werden.</div>
      <h4 style={{ marginBottom: 4 }}>5. Widerrufsrecht</h4>
      <div style={{ marginBottom: 16 }}>Als Verbraucher hast du ein 14-tägiges Widerrufsrecht. Dieses erlischt bei digitalen Inhalten vorzeitig, wenn du ausdrücklich der Ausführung vor Ablauf der Widerrufsfrist zugestimmt hast.</div>
      <h4 style={{ marginBottom: 4 }}>6. Nutzungsrechte</h4>
      <div style={{ marginBottom: 16 }}></div>
      <h4 style={{ marginBottom: 4 }}>7. Datenschutz</h4>
      <div style={{ marginBottom: 16 }}>Die Erhebung und Nutzung deiner Daten erfolgt gemäß unserer Datenschutzerklärung, die Bestandteil dieser AGB ist.</div>
      <h4 style={{ marginBottom: 4 }}>8. Haftung</h4>
      <div style={{ marginBottom: 16 }}>Wir haften uneingeschränkt für Vorsatz oder grobe Fahrlässigkeit sowie für Personenschäden. Im Übrigen ist unsere Haftung auf vorhersehbare, vertragstypische Schäden begrenzt.</div>
      <h4 style={{ marginBottom: 4 }}>9. Laufzeit und Kündigung</h4>
      <div style={{ marginBottom: 16 }}>Du kannst dein Konto jederzeit löschen. Kostenpflichtige Abonnements können mit einer Frist von 7 Tagen zum Ende der Laufzeit gekündigt werden.</div>
      <h4 style={{ marginBottom: 4 }}>10. Schlussbestimmungen</h4>
      <div style={{ marginBottom: 16 }}>Es gilt österreichisches Recht unter Ausschluss des UN-Kaufrechts. Gerichtsstand ist, soweit gesetzlich zulässig, unser Sitz.</div>
      <h3 style={{ marginTop: 64, marginBottom: 16 }}>Datenschutzerklärung</h3>
      <div style={{ marginBottom: 16 }}>Deine Privatsphäre ist uns wichtig. Diese Datenschutzerklärung erläutert, welche personenbezogenen Daten wir verarbeiten, wie wir sie verarbeiten und zu welchen Zwecken.</div>
      <h4 style={{ marginBottom: 4 }}>Erhobene Daten</h4>
      <div style={{ marginBottom: 16 }}>Welche Daten wir erheben, hängt vom Kontext deiner Interaktionen mit uns und deinen Einstellungen ab, einschließlich deiner Privatsphäre-Einstellungen und der von dir genutzten Produkte und Funktionen. Wir erheben Daten aus deinen Interaktionen mit uns und über unsere Produkte. Wir erhalten auch Daten über dich von Dritten.</div>
      <h4 style={{ marginBottom: 4 }}>Vercel Analytics</h4>
      <div style={{ marginBottom: 16 }}>Diese App verwendet Vercel Analytics, einen Webanalysedienst der Vercel Inc. ("Vercel"), um Nutzungsdaten zur Verbesserung unseres Dienstes zu erheben. Vercel Analytics ist datenschutzfreundlich und erhebt keine personenbezogenen Daten (PII) und verwendet keine Cookies. Es werden aggregierte Daten über Seitenaufrufe und Besuche erfasst, wie z.B. die von dir besuchten Seiten, das Land, in dem du dich befindest, und das von dir verwendete Gerät. Diese Informationen helfen uns zu verstehen, wie unsere App genutzt wird, damit wir sie verbessern können.</div>
    </div>
  );

  // Englischer Text (wie bisher)
  const legalEn = (
    <div style={{ color: "#fff", fontSize: 14, lineHeight: 1.6, width: "100%" }}>
      <h3 style={{ marginBottom: 16 }}>Imprint</h3>
      <div style={{ marginBottom: 16 }}>
        Kaj Friedmann<br/>
        Natural person<br/>
        Sole proprietor (not registered in the commercial register)<br/>
        Business: IT and data processing services<br/>
        Municipal authority of the City of Vienna, District Office for the 22nd District<br/>
        <span style={{ textDecoration: 'none', borderBottom: 'none' }}>Nauschgasse 4/3/2 1220 Vienna, Austria</span>
      </div>
      <h3>Subject</h3>
      <div style={{ marginBottom: 16 }}>Web app for learning multiple languages at the same time</div>
      <h3>Contact</h3>
      <div style={{ marginBottom: 16 }}>
        E-Mail: <a href="mailto:hi@dalalala.com" style={{ color: '#fff', textDecoration: 'none', borderBottom: 'none' }}>hi@dalalala.com</a><br/>
        <a href="mailto:kaj.friedmann@gmail.com" style={{ color: '#fff', textDecoration: 'none', borderBottom: 'none' }}>kaj.friedmann@gmail.com</a>
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
      <h3 style={{ marginTop: 64, marginBottom: 16 }}>Terms and Conditions</h3>
      <div style={{ marginBottom: 16 }}>As of: 14.03.2025</div>
      <h4 style={{ marginBottom: 4 }}>1. Scope</h4>
      <div style={{ marginBottom: 16 }}>These Terms and Conditions apply to the use of our Vocabulary Learning App. By registering or using our app, you accept these terms.</div>
      <h4 style={{ marginBottom: 4 }}>2. Service Description</h4>
      <div style={{ marginBottom: 16 }}>Our app provides features for creating, saving, and learning vocabulary in different languages. Usage may include premium features for a fee.</div>
      <h4 style={{ marginBottom: 4 }}>3. Registration and Account</h4>
      <div style={{ marginBottom: 16 }}>Registration is required for usage. You are obligated to provide truthful information and keep your login credentials confidential. You are responsible for all activities under your account.</div>
      <h4 style={{ marginBottom: 4 }}>4. Prices and Payment Terms</h4>
      <div style={{ marginBottom: 16 }}>The app can only be used with a payment of €0.99 per month. Payment can be made as a monthly pass or as a subscription. Subscriptions renew automatically unless canceled.</div>
      <h4 style={{ marginBottom: 4 }}>5. Right of Withdrawal</h4>
      <div style={{ marginBottom: 16 }}>As a consumer, you have a 14-day right of withdrawal. This right expires prematurely for digital content if you have expressly agreed to the execution before the withdrawal period expires.</div>
      <h4 style={{ marginBottom: 4 }}>6. Usage Rights</h4>
      <div style={{ marginBottom: 16 }}></div>
      <h4 style={{ marginBottom: 4 }}>7. Data Protection</h4>
      <div style={{ marginBottom: 16 }}>The collection and use of your data is in accordance with our Privacy Policy, which is part of these Terms and Conditions.</div>
      <h4 style={{ marginBottom: 4 }}>8. Liability</h4>
      <div style={{ marginBottom: 16 }}>We are liable without limitation for intent or gross negligence as well as for personal injury. Otherwise, our liability is limited to foreseeable, contract-typical damages.</div>
      <h4 style={{ marginBottom: 4 }}>9. Term and Cancellation</h4>
      <div style={{ marginBottom: 16 }}>You can delete your account at any time. Paid subscriptions can be canceled with a 7-day notice period to the end of the term.</div>
      <h4 style={{ marginBottom: 4 }}>10. Final Provisions</h4>
      <div style={{ marginBottom: 16 }}>German law applies, excluding the UN Convention on Contracts for the International Sale of Goods. The place of jurisdiction is, as far as legally permissible, our headquarters.</div>
      <h3 style={{ marginTop: 64, marginBottom: 16 }}>Privacy Policy</h3>
      <div style={{ marginBottom: 16 }}>Your privacy is important to us. This privacy statement explains the personal data we process, how we process it, and for what purposes.</div>
      <h4 style={{ marginBottom: 4 }}>Data We Collect</h4>
      <div style={{ marginBottom: 16 }}>The data we collect depends on the context of your interactions with us and the choices you make, including your privacy settings and the products and features you use. We collect data from your interactions with us and through our products. We also obtain data about you from third parties.</div>
      <h4 style={{ marginBottom: 4 }}>Vercel Analytics</h4>
      <div style={{ marginBottom: 16 }}>This app uses Vercel Analytics, a web analytics service provided by Vercel Inc. ('Vercel'), to collect usage data for the purpose of improving our service. Vercel Analytics is designed to be privacy-friendly and does not collect personally identifiable information (PII) or use cookies. It collects aggregated data about page views and visits, such as the pages you visit, the country you are in, and the device you are using. This information helps us understand how our app is being used so we can improve it.</div>
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