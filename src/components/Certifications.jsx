import { useState } from "react";
import ScrambleParagraph from "../ScrambleParagraph";
import cysaLogo from "../assets/images/comptia-cysa-plus.png";
import splunkLogo from "../assets/images/splunk-core-user.png";
import "../Certifications.css";

const certifications = [
  { name: "CompTIA CySA+", image: cysaLogo, verifyUrl: "https://www.credly.com/badges/c3410bf8-7541-4ee5-8827-d7f1e06049f1" },
  { name: "Splunk Core Certified User", image: splunkLogo, verifyUrl: "https://www.credly.com/badges/ec849572-4266-4fea-a88b-6c9ccdc557c6" },
];

export default function Certifications() {
  const [triggerCount, setTriggerCount] = useState({});

  const handleEnter = (name) => {
    setTriggerCount((prev) => ({ ...prev, [name]: (prev[name] || 0) + 1 }));
  };

  return (
    <div className="cert-row">
      {certifications.map((cert) => (
        <a
          key={cert.name}
          href={cert.verifyUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="cert-badge"
          aria-label={cert.name}
          onMouseEnter={() => handleEnter(cert.name)}
        >
          <img src={cert.image} alt={cert.name} />
          <div className="cert-tip">
            <ScrambleParagraph
              key={`${cert.name}-${triggerCount[cert.name] || 0}`}
              text={`[ ${cert.name} ]`}
              hoverEffect={false}
              className="cert-tip-text"
            />
          </div>
        </a>
      ))}
    </div>
  );
}