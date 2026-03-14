import { Helmet } from "react-helmet-async";
import { useTranslation } from "react-i18next";

export default function SEO() {
  const { t } = useTranslation();

  return (
    <Helmet>
      <title>{t("data.personalInfo.name")} | {t("data.personalInfo.title")}</title>
      <meta name="description" content={t("data.personalInfo.summary")} />
      <meta name="keywords" content="Software Engineer, PHP Laravel, React, Next.js, Web Developer, Morocco, Casablanca, Portfolio" />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content={`${t("data.personalInfo.name")} | ${t("data.personalInfo.title")}`} />
      <meta property="og:description" content={t("data.personalInfo.summary")} />
      <meta property="og:image" content="/images/hero-image.png" />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:title" content={`${t("data.personalInfo.name")} | ${t("data.personalInfo.title")}`} />
      <meta property="twitter:description" content={t("data.personalInfo.summary")} />
      <meta property="twitter:image" content="/images/hero-image.png" />

      <link rel="canonical" href={window.location.origin} />
    </Helmet>
  );
}
