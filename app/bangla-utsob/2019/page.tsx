
import Image from "next/image";
import Link from "next/link";

const facts = [
  {
    id: "01",
    value: "০১",
    title: "প্রথম আয়োজন",
    description: "বাংলা উৎসবের পথচলার প্রথম অধ্যায় -বাংলা ভাষা ও ব্যাকরণ উৎসব",
  },
  {
    id: "02",
    value: "০১",
    title: "প্রতিযোগিতা",
    description: "বাংলা অলিম্পিয়াড",
  },
  {
    id: "03",
    value: "∞",
    title: "একটি দীর্ঘ যাত্রা",
    description: "সেই প্রথম পদক্ষেপ থেকে আজকের পথচলা",
  },
];

export default function BanglaUtsob2019() {
  return (
    <main className="originPage">
      <style>{`
        .originPage {
          --origin-green: #1d6b4f;
          --origin-dark: #123e31;
          --origin-mint: #a7e8c7;
          --origin-cream: #f4efe4;
          --origin-paper: #fffdf7;
          --origin-ink: #17201d;
          --origin-muted: #68736e;
          --origin-line: rgba(23, 32, 29, .14);
          box-sizing: border-box;
          min-height: 100vh;
          overflow: hidden;
          background: var(--origin-cream);
          color: var(--origin-ink);
        }

        .originPage *,
        .originPage *::before,
        .originPage *::after {
          box-sizing: border-box;
        }

        .originPage img {
          max-width: 100%;
        }

        .originPage a {
          -webkit-tap-highlight-color: transparent;
        }

        .originNav {
          width: min(1320px, calc(100% - 48px));
          min-height: 84px;
          margin: 0 auto;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 20px;
        }

        .originBrand,
        .originBack {
          color: inherit;
          text-decoration: none;
        }

        .originBrand {
          display: flex;
          align-items: center;
          gap: 12px;
          min-width: 0;
        }

        .originBrand img {
          border-radius: 50%;
          flex-shrink: 0;
        }

        .originBrand div {
          display: flex;
          flex-direction: column;
          gap: 3px;
        }

        .originBrand strong {
          font-size: 15px;
        }

        .originBrand span {
          color: var(--origin-muted);
          font-size: 12px;
        }

        .originBack {
          display: inline-flex;
          align-items: center;
          gap: 9px;
          font-size: 13px;
          font-weight: 750;
        }

        .originBack:hover,
        .originBrand:hover {
          color: var(--origin-green);
        }

        .originHero {
          width: min(1320px, calc(100% - 48px));
          margin: 0 auto;
        }

        .originHeroFrame {
          position: relative;
          isolation: isolate;
          min-height: 700px;
          overflow: hidden;
          border-radius: 28px;
          background: var(--origin-dark);
          color: white;
        }

        .originHeroImage {
          object-fit: cover;
          object-position: center 40%;
          filter: saturate(.76) contrast(1.06);
        }

        .originHeroOverlay {
          position: absolute;
          z-index: 1;
          inset: 0;
          background:
            linear-gradient(90deg,
              rgba(8, 24, 18, .94) 0%,
              rgba(8, 24, 18, .78) 43%,
              rgba(8, 24, 18, .20) 100%),
            linear-gradient(0deg,
              rgba(8, 24, 18, .48),
              transparent 50%);
        }

        .originHeroTop {
          position: absolute;
          z-index: 2;
          top: 28px;
          left: 30px;
          right: 30px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 16px;
        }

        .originFirstBadge {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          padding: 6px 14px 6px 6px;
          border: 1px solid rgba(255,255,255,.26);
          border-radius: 999px;
          background: rgba(255,255,255,.10);
          font-size: 12px;
          font-weight: 750;
          backdrop-filter: blur(8px);
        }

        .originFirstBadge b {
          display: grid;
          width: 32px;
          height: 32px;
          place-items: center;
          border-radius: 50%;
          background: var(--origin-mint);
          color: var(--origin-dark);
        }

        .originArchiveLabel {
          color: rgba(255,255,255,.76);
          font-size: 12px;
          letter-spacing: .04em;
        }

        .originHeroContent {
          position: absolute;
          z-index: 2;
          top: 50%;
          left: clamp(28px, 6.5vw, 88px);
          width: min(690px, calc(100% - 56px));
          transform: translateY(-43%);
        }

        .originEyebrow {
          margin: 0 0 22px;
          color: var(--origin-mint);
          font-size: 13px;
          font-weight: 800;
          letter-spacing: .03em;
        }

        .originHeroContent h1 {
          margin: 0;
          font-size: clamp(3.3rem, 6.4vw, 6.2rem);
          font-weight: 900;
          letter-spacing: -.055em;
          line-height: 1.04;
          overflow-wrap: anywhere;
        }

        .originHeroContent h1 span {
          color: var(--origin-mint);
        }

        .originHeroDescription {
          max-width: 570px;
          margin: 25px 0 0;
          color: rgba(255,255,255,.83);
          font-size: 16px;
          line-height: 1.9;
        }

        .originHeroMeta {
          display: flex;
          flex-wrap: wrap;
          gap: 30px;
          margin-top: 30px;
        }

        .originHeroMeta div {
          display: flex;
          flex-direction: column;
          gap: 6px;
        }

        .originHeroMeta small {
          color: rgba(255,255,255,.58);
          font-size: 11px;
        }

        .originHeroMeta strong {
          font-size: 13px;
          font-weight: 750;
        }

        .originYearMark {
          position: absolute;
          z-index: 1;
          right: 16px;
          bottom: -30px;
          color: rgba(255,255,255,.08);
          font: 900 clamp(8rem, 19vw, 16rem)/1 Arial, sans-serif;
          letter-spacing: -.09em;
          pointer-events: none;
        }

        .originIntro {
          position: relative;
          width: min(1160px, calc(100% - 48px));
          margin: 0 auto;
          padding: 130px 0;
          display: grid;
          grid-template-columns: 1fr .92fr;
          align-items: end;
          gap: clamp(40px, 8vw, 120px);
        }

        .originIntroNumber {
          position: absolute;
          top: 65px;
          left: -18px;
          color: rgba(29,107,79,.055);
          font: 900 clamp(11rem, 23vw, 20rem)/1 Arial, sans-serif;
          pointer-events: none;
        }

        .originIntroHeading,
        .originIntroCopy {
          position: relative;
          z-index: 1;
          min-width: 0;
        }

        .originSectionLabel {
          display: flex;
          align-items: center;
          gap: 9px;
          margin: 0 0 22px;
          color: var(--origin-green);
          font-size: 12px;
          font-weight: 850;
          letter-spacing: .04em;
        }

        .originIntroHeading h2,
        .originFactsHeading h2,
        .originMemoryHeading h2 {
          margin: 0;
          font-size: clamp(2.8rem, 5.4vw, 5rem);
          font-weight: 900;
          letter-spacing: -.055em;
          line-height: 1.08;
        }

        .originIntroHeading h2 span,
        .originFactsHeading h2 span,
        .originMemoryHeading h2 span {
          color: var(--origin-green);
        }

        .originIntroCopy p {
          margin: 0;
          color: #48534e;
          font-size: 16px;
          line-height: 2;
        }

        .originIntroCopy p + p {
          margin-top: 18px;
        }

        .originManifesto {
          padding: 125px 24px;
          background: var(--origin-dark);
          color: white;
          text-align: center;
        }

        .originManifestoLabel {
          margin: 0;
          color: var(--origin-mint);
          font-size: 12px;
          font-weight: 800;
          letter-spacing: .08em;
        }

        .originManifesto h2 {
          margin: 28px auto 0;
          font-size: clamp(2.8rem, 6vw, 5.8rem);
          font-weight: 900;
          letter-spacing: -.055em;
          line-height: 1.14;
        }

        .originManifesto h2 span {
          color: var(--origin-mint);
        }

        .originManifestoLine {
          width: 1px;
          height: 68px;
          margin: 42px auto 0;
          background: linear-gradient(var(--origin-mint), transparent);
        }

        .originFacts {
          width: min(1160px, calc(100% - 48px));
          margin: 0 auto;
          padding: 125px 0;
        }

        .originFactsHeading {
          margin-bottom: 46px;
        }

        .originFactGrid {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 18px;
        }

        .originFactCard {
          position: relative;
          min-height: 270px;
          padding: 26px;
          display: flex;
          flex-direction: column;
          justify-content: flex-end;
          border: 1px solid var(--origin-line);
          border-radius: 20px;
          background: rgba(255,255,255,.46);
        }

        .originFactIndex {
          position: absolute;
          top: 23px;
          right: 24px;
          color: var(--origin-muted);
          font-size: 12px;
        }

        .originFactValue {
          color: var(--origin-green);
          font: 900 clamp(3.7rem, 6vw, 5.6rem)/.95 Arial, sans-serif;
          letter-spacing: -.06em;
        }

        .originFactCard h3 {
          margin: 24px 0 8px;
          font-size: 20px;
          font-weight: 850;
        }

        .originFactCard p {
          margin: 0;
          color: var(--origin-muted);
          font-size: 13px;
          line-height: 1.8;
        }

        .originFactCardDark {
          border-color: transparent;
          background: var(--origin-dark);
          color: white;
        }

        .originFactCardDark .originFactValue {
          color: var(--origin-mint);
        }

        .originFactCardDark .originFactIndex,
        .originFactCardDark p {
          color: rgba(255,255,255,.68);
        }

        .originMemory {
          padding: 110px max(24px, calc((100% - 1160px) / 2));
          background: #e2dac9;
        }

        .originMemoryHeading {
          margin-bottom: 55px;
          display: grid;
          grid-template-columns: 1.1fr .9fr;
          align-items: end;
          gap: 60px;
        }

        .originMemoryIntro {
          margin: 0;
          color: #505852;
          font-size: 14px;
          line-height: 1.95;
        }

        .originPhotoCard {
          width: min(850px, 100%);
          margin: 0 auto;
          padding: 15px 15px 20px;
          background: var(--origin-paper);
          box-shadow: 0 28px 65px rgba(48,42,30,.17);
          transform: rotate(-.7deg);
        }

        .originPhotoFrame {
          position: relative;
          width: 100%;
          aspect-ratio: 4 / 3;
          overflow: hidden;
          background: #d4cbbb;
        }

        .originArchiveImage {
          object-fit: contain;
        }

        .originPhotoCaption {
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          justify-content: space-between;
          gap: 14px 24px;
          padding: 20px 5px 0;
        }

        .originPhotoCaption div {
          display: flex;
          flex-direction: column;
          gap: 4px;
        }

        .originPhotoCaption small {
          color: #85877d;
          font-size: 10px;
        }

        .originPhotoCaption strong {
          color: var(--origin-ink);
          font-size: 12px;
        }

        .originPhotoCaption > span {
          color: var(--origin-muted);
          font-size: 11px;
        }

        .originCommitment {
          width: min(1160px, calc(100% - 48px));
          margin: 0 auto;
          padding: 125px 0;
          display: grid;
          grid-template-columns: .65fr 1.35fr;
          align-items: center;
          gap: clamp(35px, 8vw, 100px);
        }

        .originCommitmentAside > span {
          color: var(--origin-muted);
          font-size: 12px;
          font-weight: 800;
        }

        .originCommitmentYear {
          display: block;
          margin: 12px 0 22px;
          color: var(--origin-green);
          font: 900 clamp(4rem, 8vw, 7rem)/1 Arial, sans-serif;
          letter-spacing: -.07em;
        }

        .originCommitmentAside p {
          max-width: 230px;
          margin: 0;
          color: var(--origin-muted);
          font-size: 13px;
          line-height: 1.8;
        }

        .originCommitmentPaper {
          position: relative;
          padding: clamp(30px, 6vw, 72px);
          border: 1px solid #ded6c4;
          background: var(--origin-paper);
          box-shadow: 0 22px 55px rgba(60,52,38,.08);
        }

        .originCommitmentStamp {
          position: absolute;
          top: 24px;
          right: 24px;
          width: 65px;
          height: 65px;
          display: grid;
          place-items: center;
          border: 1px solid rgba(29,107,79,.45);
          border-radius: 50%;
          color: var(--origin-green);
          font-size: 11px;
          font-weight: 850;
          text-align: center;
          transform: rotate(8deg);
        }

        .originCommitmentPaper h2 {
          max-width: 570px;
          margin: 0 0 28px;
          font-size: clamp(2rem, 4.5vw, 3.7rem);
          font-weight: 900;
          letter-spacing: -.045em;
          line-height: 1.18;
        }

        .originCommitmentPaper > p {
          margin: 0;
          color: #48534e;
          font-size: 14px;
          line-height: 2;
        }

        .originCommitmentPaper > p + p {
          margin-top: 16px;
        }

        .originCommitmentSign {
          margin-top: 35px;
          display: flex;
          flex-direction: column;
          gap: 6px;
          color: var(--origin-green);
          font-size: 13px;
        }

        .originClosing {
          position: relative;
          min-height: 600px;
          padding: 110px 24px 55px;
          display: grid;
          place-items: center;
          overflow: hidden;
          background: var(--origin-mint);
          color: var(--origin-dark);
          text-align: center;
        }

        .originClosingWatermark {
          position: absolute;
          bottom: -15px;
          left: 50%;
          color: rgba(18,62,49,.07);
          font: 900 clamp(11rem, 30vw, 27rem)/.85 Arial, sans-serif;
          letter-spacing: -.09em;
          transform: translateX(-50%);
          pointer-events: none;
        }

        .originClosingContent {
          position: relative;
          z-index: 1;
          width: min(900px, 100%);
        }

        .originClosingEyebrow {
          margin: 0;
          font-size: 12px;
          font-weight: 850;
        }

        .originClosingContent h2 {
          margin: 26px 0 0;
          font-size: clamp(3.3rem, 7.5vw, 7rem);
          font-weight: 900;
          letter-spacing: -.06em;
          line-height: 1.03;
        }

        .originClosingContent h2 span {
          color: var(--origin-green);
        }

        .originClosingQuote {
          max-width: 580px;
          margin: 30px auto 0;
          font-size: 15px;
          line-height: 1.9;
        }

        .originClosingLinks {
          margin-top: 65px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 20px;
        }

        .originClosingLinks a {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          color: var(--origin-dark);
          font-size: 13px;
          font-weight: 850;
          text-decoration: none;
        }

        .originClosingLinks a:hover {
          color: var(--origin-green);
        }

        @media (max-width: 850px) {
          .originHeroFrame {
            min-height: 660px;
          }

          .originHeroContent {
            top: auto;
            bottom: 55px;
            transform: none;
          }

          .originIntro,
          .originMemoryHeading,
          .originCommitment {
            grid-template-columns: 1fr;
          }

          .originIntro {
            gap: 28px;
            padding: 95px 0;
          }

          .originIntroNumber {
            top: 38px;
          }

          .originFactGrid {
            grid-template-columns: 1fr;
          }

          .originFactCard {
            min-height: 215px;
          }

          .originMemoryHeading {
            gap: 24px;
          }

          .originCommitment {
            gap: 30px;
          }
        }

        @media (max-width: 600px) {
          .originNav,
          .originHero,
          .originIntro,
          .originFacts,
          .originCommitment {
            width: calc(100% - 28px);
          }

          .originNav {
            min-height: 68px;
            gap: 10px;
          }

          .originBrand img {
            width: 36px;
            height: 36px;
          }

          .originBrand div {
            display: none;
          }

          .originBack {
            gap: 6px;
            font-size: 11px;
            white-space: nowrap;
          }

          .originHeroFrame {
            min-height: 610px;
            border-radius: 18px;
          }

          .originHeroImage {
            object-position: center;
          }

          .originHeroOverlay {
            background:
              linear-gradient(0deg,
                rgba(8,24,18,.97) 0%,
                rgba(8,24,18,.77) 50%,
                rgba(8,24,18,.22) 100%);
          }

          .originHeroTop {
            top: 16px;
            left: 15px;
            right: 15px;
            align-items: flex-start;
          }

          .originFirstBadge {
            gap: 7px;
            padding: 5px 10px 5px 5px;
            font-size: 11px;
          }

          .originFirstBadge b {
            width: 28px;
            height: 28px;
          }

          .originArchiveLabel {
            max-width: 115px;
            font-size: 10px;
            text-align: right;
          }

          .originHeroContent {
            right: 20px;
            bottom: 30px;
            left: 20px;
            width: auto;
          }

          .originEyebrow {
            margin-bottom: 15px;
            font-size: 11px;
          }

          .originHeroContent h1 {
            font-size: clamp(2.5rem, 10.6vw, 3.7rem);
            letter-spacing: -.045em;
            line-height: 1.09;
          }

          .originHeroDescription {
            margin-top: 18px;
            font-size: 13px;
            line-height: 1.8;
          }

          .originHeroMeta {
            gap: 12px 22px;
            margin-top: 22px;
          }

          .originHeroMeta small {
            font-size: 10px;
          }

          .originHeroMeta strong {
            font-size: 11px;
          }

          .originYearMark {
            right: 4px;
            bottom: -8px;
            font-size: 7rem;
          }

          .originIntro,
          .originFacts,
          .originCommitment {
            padding: 78px 0;
          }

          .originIntro {
            gap: 25px;
          }

          .originIntroNumber {
            top: 38px;
            left: 0;
            font-size: 8rem;
          }

          .originSectionLabel {
            margin-bottom: 16px;
            font-size: 10px;
          }

          .originIntroHeading h2,
          .originFactsHeading h2,
          .originMemoryHeading h2 {
            font-size: clamp(2.25rem, 9.5vw, 3.3rem);
            line-height: 1.12;
          }

          .originIntroCopy p {
            font-size: 14px;
            line-height: 1.9;
          }

          .originManifesto {
            padding: 82px 18px;
          }

          .originManifestoLabel {
            font-size: 10px;
          }

          .originManifesto h2 {
            margin-top: 22px;
            font-size: clamp(2.2rem, 9.4vw, 3.2rem);
            line-height: 1.18;
          }

          .originManifestoLine {
            height: 50px;
            margin-top: 30px;
          }

          .originFactsHeading {
            margin-bottom: 30px;
          }

          .originFactGrid {
            gap: 12px;
          }

          .originFactCard {
            min-height: 195px;
            padding: 23px;
            border-radius: 17px;
          }

          .originFactIndex {
            top: 18px;
            right: 20px;
          }

          .originFactValue {
            font-size: 3.6rem;
          }

          .originFactCard h3 {
            margin: 18px 0 7px;
            font-size: 18px;
          }

          .originFactCard p {
            font-size: 12px;
          }

          .originMemory {
            padding: 78px 14px;
          }

          .originMemoryHeading {
            margin-bottom: 32px;
          }

          .originMemoryIntro {
            font-size: 13px;
            line-height: 1.9;
          }

          .originPhotoCard {
            padding: 9px 9px 16px;
            transform: rotate(-.35deg);
          }

          .originPhotoFrame {
            aspect-ratio: 3 / 4;
          }

          .originPhotoCaption {
            align-items: flex-start;
            gap: 12px;
            padding: 15px 3px 0;
          }

          .originPhotoCaption strong {
            font-size: 11px;
          }

          .originPhotoCaption > span {
            width: 100%;
            font-size: 10px;
          }

          .originCommitmentAside > span {
            font-size: 11px;
          }

          .originCommitmentYear {
            margin: 8px 0 12px;
            font-size: 4.5rem;
          }

          .originCommitmentAside p {
            font-size: 12px;
          }

          .originCommitmentPaper {
            padding: 74px 22px 30px;
          }

          .originCommitmentStamp {
            top: 15px;
            right: 15px;
            width: 52px;
            height: 52px;
            font-size: 9px;
          }

          .originCommitmentPaper h2 {
            margin-bottom: 23px;
            font-size: clamp(1.9rem, 8.3vw, 2.6rem);
          }

          .originCommitmentPaper > p {
            font-size: 13px;
            line-height: 1.9;
          }

          .originCommitmentSign {
            margin-top: 28px;
            font-size: 12px;
          }

          .originClosing {
            min-height: 510px;
            padding: 78px 18px 35px;
          }

          .originClosingEyebrow {
            font-size: 10px;
          }

          .originClosingContent h2 {
            margin-top: 20px;
            font-size: clamp(2.7rem, 12vw, 4rem);
          }

          .originClosingQuote {
            margin-top: 23px;
            font-size: 13px;
          }

          .originClosingLinks {
            margin-top: 45px;
            flex-direction: column;
            align-items: center;
            gap: 18px;
          }

          .originClosingLinks a {
            font-size: 12px;
          }
        }

        @media (prefers-reduced-motion: no-preference) {
          .originPage a {
            transition: color .2s ease;
          }
        }
      `}</style>

      <header className="originNav">
        <Link href="/" className="originBrand">
          <Image
            src="/logo.png"
            alt="সূচনা ছাত্র সংগঠন"
            width={44}
            height={44}
          />
          <div>
            <strong>সূচনা ছাত্র সংগঠন</strong>
            <span>ভালো কিছু শুরু হোক</span>
          </div>
        </Link>

        <Link href="/bangla-utsob/#editions" className="originBack">
          <span aria-hidden="true">←</span>
          সব আয়োজনে ফিরুন
        </Link>
      </header>

      <section className="originHero">
        <div className="originHeroFrame">
          <Image
            src="/events/bangla-utsob/2019/bangla-utsob-2019-01.jpeg"
            alt="২০১৯ সালের প্রথম বাংলা উৎসবের সংরক্ষিত ছবি"
            fill
            priority
            sizes="(max-width: 600px) 100vw, 1320px"
            className="originHeroImage"
          />

          <div className="originHeroOverlay" aria-hidden="true" />

          <div className="originHeroTop">
            <span className="originFirstBadge">
              <b>01</b>
              প্রথম আয়োজন
            </span>
            <span className="originArchiveLabel">
              সংরক্ষিত স্মৃতি · ২০১৯
            </span>
          </div>

          <div className="originHeroContent">
            <p className="originEyebrow">
              প্রথম পদচিহ্ন · ১৪২৫ বঙ্গাব্দ
            </p>

            <h1>
              যেদিন শুরু হয়েছিল
              <br />
              <span>একটি নতুন গল্প।</span>
            </h1>

            <p className="originHeroDescription">
              বাংলা ভাষা ও ব্যাকরণকে ঘিরে একটি আয়োজন,
              একদল স্বপ্নবাজ মানুষ এবং ভবিষ্যতের জন্য
              একটি বড় স্বপ্ন। এখান থেকেই শুরু হয়েছিল
              বাংলা উৎসবের পথচলা।
            </p>

            <div className="originHeroMeta">
              <div>
                <small>সময়</small>
                <strong>মার্চ ২০১৯</strong>
              </div>
              <div>
                <small>স্থান</small>
                <strong>বহদ্দারকাটা উচ্চ বিদ্যালয়</strong>
              </div>
            </div>
          </div>

          <div className="originYearMark" aria-hidden="true">
            2019
          </div>
        </div>
      </section>

      <section className="originIntro">
        <div className="originIntroNumber" aria-hidden="true">
          ০১
        </div>

        <div className="originIntroHeading">
          <p className="originSectionLabel">
            <span aria-hidden="true">✦</span>
            সূচনার অধ্যায়
          </p>

          <h2>
            এখান থেকেই
            <br />
            <span>সবকিছুর শুরু।</span>
          </h2>
        </div>

        <div className="originIntroCopy">
          <p>
            সাল ২০১৯। 
তখন আমরা দশম শ্রেণিতে। ক্লাসে বসে আড্ডার ফাঁকে প্ল্যান হলো এমন কিছু একটা আয়োজন করার যা আগে কখনও হয়নি। যেই ভাবা সেই কাজ।
শ্রদ্ধেয় শিক্ষক এনামুল হক স্যারকে বললাম আমাদের পরিকল্পনার কথা। স্যার তখনই সায় দিলেন। এবং আমাদের বাংলা উৎসব এর শুভ সূচনা হলো। তৎকালীন প্রধান শিক্ষক  শ্রদ্ধেয় জিন্নাত সোলতানা ম্যামও আনুষ্ঠানিক অনুমতি দিলেন। এবং আমরা কাজ শুরু করলাম। প্রথমবার আয়োজন, পূর্ব অভিজ্ঞতা ছিল না, তাও ব্যাচের সকলে কাজ করে গেল। এ অবস্থায় এগিয়ে এলেন শ্রদ্ধেয় শিক্ষক আরিফুল ইসলাম স্যার। স্যার আমাদের পুরস্কার এবং যাবতীয় কেনাকাটায় সাথে থেকে সহযোগিতা করেছিলেন। প্রথম আয়োজন, নাম হলো বাংলা ভাষা ও ব্যাকরণ উৎসব। আয়োজনের পরিসর সীমিত হলেও, এর পেছনে ছিল
            বাংলা ভাষাকে ঘিরে একটি সুন্দর উদ্যোগের স্বপ্ন। আমাদের ছোট্ট আয়োজনে আমাদের প্রাণপ্রিয় শিক্ষদের উপস্থিতি সেদিন আমাদের মনে বড়কিছু করার সাহস এবং অনুপ্রেরণা জুগিয়েছিল।
          </p>
          <p>
            সেই প্রথম পদক্ষেপই বাংলা উৎসবের পরবর্তী
            আয়োজনগুলোর ভিত্তি তৈরি করে। আজকের পথচলায়
            ফিরে তাকালে, এই অধ্যায়টি তাই বিশেষভাবে
            স্মরণীয়।
          </p>
        </div>
      </section>

      <section className="originManifesto">
        <p className="originManifestoLabel">
           একটি দিন · একটি শুরু
        </p>

        <h2>
          তখন কেউ জানত না,
          <br />
          এই ছোট আয়োজনটি
          <br />
          <span>একদিন ঐতিহ্য হয়ে উঠবে।</span>
        </h2>

        <div className="originManifestoLine" aria-hidden="true" />
      </section>

      <section className="originFacts">
        <div className="originFactsHeading">
          <p className="originSectionLabel">
            <span aria-hidden="true">✦</span>
            প্রথম আয়োজনের পরিচয়
          </p>

          <h2>
            সংখ্যার চেয়েও
            <br />
            <span>বড় ছিল স্বপ্ন।</span>
          </h2>
        </div>

        <div className="originFactGrid">
          {facts.map((fact, index) => (
            <article
              key={fact.id}
              className={`originFactCard ${
                index === 2 ? "originFactCardDark" : ""
              }`}
            >
              <span className="originFactIndex">{fact.id}</span>
              <strong className="originFactValue">{fact.value}</strong>
              <h3>{fact.title}</h3>
              <p>{fact.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="originMemory">
        <div className="originMemoryHeading">
          <div>
            <p className="originSectionLabel">
              <span aria-hidden="true">✦</span>
              স্মৃতির ফ্রেম
            </p>

            <h2>
              একটি ছবি,
              <br />
              <span>অনেক গল্প।</span>
            </h2>
          </div>

          <p className="originMemoryIntro">
            সময়ের সঙ্গে অনেক স্মৃতি হারিয়ে যেতে পারে।
            তবু সংরক্ষিত এই ছবিটি আমাদের মনে করিয়ে দেয়
            বাংলা উৎসবের শুরুর সময়কে। ছবিটি কেবল একটি
            মুহূর্তের দলিল নয়—এটি আমাদের পথচলার
            ইতিহাসের একটি অংশ।
          </p>
        </div>

        <figure className="originPhotoCard">
          <div className="originPhotoFrame">
            <Image
              src="/events/bangla-utsob/2019/bangla-utsob-2019-01.jpeg"
              alt="প্রথম বাংলা উৎসবের সংরক্ষিত মুহূর্ত"
              fill
              sizes="(max-width: 600px) 94vw, 850px"
              className="originArchiveImage"
            />
          </div>

          <figcaption className="originPhotoCaption">
            <div>
              <small>আর্কাইভ</small>
              <strong>2019</strong>
            </div>
            <div>
              <small>সময়কাল</small>
              <strong>মার্চ ২০১৯</strong>
            </div>
            <span>মূল ছবি · সংরক্ষিত স্মৃতি</span>
          </figcaption>
        </figure>
      </section>

      <section className="originCommitment">
        <div className="originCommitmentAside">
          <span>প্রথম অধ্যায়</span>
          <strong className="originCommitmentYear">২০১৯</strong>
          <p>
            বাংলা ভাষা, জ্ঞান ও সৃজনশীলতাকে ঘিরে
            একটি দীর্ঘ পথচলার প্রথম পদক্ষেপ।
          </p>
        </div>

        <article className="originCommitmentPaper">
          <div className="originCommitmentStamp" aria-hidden="true">
            বাংলা
            <br />
            উৎসব
          </div>

          <p className="originSectionLabel">
            আমাদের অঙ্গীকার
          </p>

          <h2>
            আমাদের সামর্থ্য সীমিত,
            <br />
            কিন্তু স্বপ্ন সীমাহীন।
          </h2>

          <p>
            বাংলা ভাষা ও সাহিত্যকে ঘিরে শিক্ষার্থীদের
            জন্য জ্ঞানচর্চা, মেধা বিকাশ এবং সৃজনশীলতা
            প্রকাশের সুযোগ তৈরি করাই এই আয়োজনের
            মূল প্রেরণা।
          </p>

          <p>
            প্রথম আয়োজনের সেই ভাবনাকে সঙ্গে নিয়েই
            বাংলা উৎসবের পথচলা এগিয়ে চলুক—আরও
            বেশি শিক্ষার্থী, আরও নতুন ভাবনা এবং
            আরও সমৃদ্ধ আয়োজনের দিকে।
          </p>

          <div className="originCommitmentSign">
            <span>ভালো কিছু শুরু হোক</span>
            <strong>সূচনা ছাত্র সংগঠন</strong>
          </div>
        </article>
      </section>

      <section className="originClosing">
        <div className="originClosingWatermark" aria-hidden="true">
          2019
        </div>

        <div className="originClosingContent">
          <p className="originClosingEyebrow">
            ১ম বাংলা উৎসব · ১৪২৫ বঙ্গাব্দ
          </p>

          <h2>
            তখন ছিল কেবল
            <br />
            <span>একটি সূচনা।</span>
          </h2>

          <p className="originClosingQuote">
            আজকের প্রতিটি আয়োজনের শিকড় লুকিয়ে আছে
            সেই প্রথম দিনের সাহস ও স্বপ্নের মধ্যে।
          </p>

          <div className="originClosingLinks">
            <Link href="/bangla-utsob/#editions">
              <span aria-hidden="true">←</span>
              অন্য আয়োজনগুলো দেখুন
            </Link>

            <Link href="/">
              মূল পাতায় ফিরুন
              <span aria-hidden="true">↗</span>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
