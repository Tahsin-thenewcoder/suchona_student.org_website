"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const editions = [
  {
    year: "2019",
    yearBn: "২০১৯",
    edition: "১ম বাংলা উৎসব",
    date: "মার্চ ২০১৯",
    note: "যেখান থেকে শুরু",
  },
  {
    year: "2023",
    yearBn: "২০২৩",
    edition: "২য় বাংলা উৎসব",
    date: "সেপ্টেম্বর ২০২৩",
    note: "ফিরে আসার আয়োজন",
  },
  {
    year: "2025",
    yearBn: "২০২৫",
    edition: "৩য় বাংলা উৎসব",
    date: "৩০ আগস্ট ২০২৫",
    note: "আরও বড় পরিসরে",
  },
  {
    year: "2026",
    yearBn: "২০২৬",
    edition: "৪র্থ বাংলা উৎসব",
    date: "২৬ সেপ্টেম্বর ২০২৬",
    note: "সর্বশেষ আয়োজন",
  },
];

export default function BanglaUtsobPage() {
  const [utsobMenuOpen, setUtsobMenuOpen] = useState(false);

const closeUtsobMenu = () => setUtsobMenuOpen(false);
  return (
    <main className="utsobPage">

      {/* ================= TOP BAR ================= */}
<header className="utsobNav">
  <Link href="/" className="utsobBrand">
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

  {/* DESKTOP NAV */}
  <nav className="utsobNavLinks">
    <Link href="#notice">নোটিশ</Link>
    <Link href="#syllabus">সিলেবাস</Link>
    <Link href="#questions">বিগত বছরের প্রশ্ন</Link>
    <Link href="#mock-test">মক টেস্ট</Link>
    <Link href="#editions">আয়োজনসমূহ</Link>
  </nav>

  <Link href="/" className="backHome">
    <span>←</span>
    মূল পাতায় ফিরুন
  </Link>

  {/* MOBILE BUTTON */}
  <button
    className={`utsobMenuButton ${utsobMenuOpen ? "active" : ""}`}
    onClick={() => setUtsobMenuOpen(!utsobMenuOpen)}
    aria-label="মেনু"
  >
    <span></span>
    <span></span>
    <span></span>
  </button>

  {/* MOBILE MENU */}
  <div
    className={`utsobMobileMenu ${
      utsobMenuOpen ? "utsobMobileMenuOpen" : ""
    }`}
  >
    <div className="utsobMobileMenuTitle">
      <span>বাংলা উৎসব</span>
      <small>প্রতিযোগীদের প্রয়োজনীয় তথ্য</small>
    </div>

    <nav>
      <Link href="#notice" onClick={closeUtsobMenu}>
        <span>নোটিশ</span>
        <b>→</b>
      </Link>

      <Link href="#syllabus" onClick={closeUtsobMenu}>
        <span>সিলেবাস</span>
        <b>→</b>
      </Link>

      <Link href="#questions" onClick={closeUtsobMenu}>
        <span>বিগত বছরের প্রশ্ন</span>
        <b>→</b>
      </Link>

      <Link href="#mock-test" onClick={closeUtsobMenu}>
        <span>মক টেস্ট</span>
        <b>↗</b>
      </Link>

      <Link href="#editions" onClick={closeUtsobMenu}>
        <span>আয়োজনসমূহ</span>
        <b>↓</b>
      </Link>
    </nav>

    <Link
      href="/"
      className="utsobMobileHome"
      onClick={closeUtsobMenu}
    >
      ← মূল পাতায় ফিরুন
    </Link>
  </div>
</header>
{/* ================= IMPORTANT NOTICE ================= */}
<section className="utsobImportantNotice" id="notice">
  <div className="utsobNoticeInner">

    <div className="utsobNoticeIcon">
      <span>!</span>
    </div>

    <div className="utsobNoticeContent">
      <div className="utsobNoticeTop">
        <span className="utsobNoticeBadge">ফলাফল প্রকাশিত</span>
        <span className="utsobNoticeDate">৪র্থ বাংলা উৎসব ১৪৩৩</span>
      </div>

      <h3>৪র্থ বাংলা উৎসবের ফলাফল প্রকাশ করা হয়েছে</h3>

      <p>
        প্রতিযোগিতার ফলাফল দেখতে আমাদের ফেসবুক পেজের ফলাফল পোস্টটি দেখুন।
      </p>
    </div>

    <a
      href="https://m.facebook.com/story.php?story_fbid=pfbid0jzZyddrzg8TYbUSrZGvL2LyeBsjamyzjR9mjrpvKQKubxYYasW9wHffEANpgUuSQl&id=61578114187247&mibextid=Nif5oz"
      target="_blank"
      rel="noopener noreferrer"
      className="utsobNoticeButton"
    >
      ফলাফল দেখুন
      <span>↗</span>
    </a>

  </div>
</section>

      {/* ================= HERO ================= */}
      <section className="utsobHero">
        <div className="utsobHeroText">

          <div className="utsobEyebrow">
            <span />
            সূচনা ছাত্র সংগঠনের প্রধান আয়োজন
          </div>

          <h1>
            বাংলা
            <br />
            <span>উৎসব</span>
          </h1>

          <p>
            বাংলা ভাষা, সাহিত্য ও সৃজনশীল চর্চার প্রতি নতুন প্রজন্মের
            আগ্রহ বাড়ানোর লক্ষ্যে আমাদের একটি ধারাবাহিক আয়োজন।
          </p>

          <a href="#editions" className="exploreUtsob">
            আয়োজনগুলো দেখুন
            <span>↓</span>
          </a>

        </div>


        <div className="utsobHeroVisual">

          <div className="utsobImageBox">
            <Image
              src="/hero/bangla-utsob.png"
              alt="বাংলা উৎসব"
              fill
              priority
              sizes="(max-width: 768px) 100vw, 50vw"
              className="utsobHeroImage"
            />

            <div className="utsobImageOverlay" />

            <div className="utsobImageBottom">
              <span>EST.</span>
              <strong>২০১৯</strong>
            </div>
          </div>


          <div className="utsobFour">
            <strong>৪</strong>

            <span>
              টি আয়োজন
              <br />
              ২০১৯—২০২৬
            </span>
          </div>

        </div>
      </section>


      {/* ================= INTRO ================= */}
      <section className="utsobAbout">

        <div className="utsobSectionNumber">
          01
        </div>


        <div className="utsobAboutTitle">

          <span>
            বাংলা উৎসব কী?
          </span>

          <h2>
            ভাষাকে জানা,
            <br />
            সাহিত্যকে ভালোবাসা।
          </h2>

        </div>


        <div className="utsobAboutText">

          <p className="utsobAboutLead">
            বাংলা উৎসব শুধু একটি প্রতিযোগিতা নয়—এটি বাংলা ভাষা ও
            সাহিত্যের সঙ্গে শিক্ষার্থীদের আরও গভীরভাবে পরিচিত করার
            একটি প্রয়াস।
          </p>

          <p>
            বিভিন্ন আয়োজন ও প্রতিযোগিতার মাধ্যমে শিক্ষার্থীদের জ্ঞান,
            সৃজনশীলতা ও ভাষার প্রতি ভালোবাসা প্রকাশের একটি সুন্দর
            ক্ষেত্র তৈরি করাই এই আয়োজনের উদ্দেশ্য।
          </p>

        </div>
      </section>


      {/* ================= EDITIONS ================= */}
      <section
        className="editionsSection"
        id="editions"
      >

        <div className="editionsHeading">

          <div>

            <p className="utsobMiniLabel">
              আমাদের পথচলা
            </p>

            <h2>
              চারটি আয়োজন।
              <br />
              <span>
                চারটি গল্প।
              </span>
            </h2>

          </div>


          <p>
            প্রথম আয়োজন থেকে সর্বশেষ আয়োজন পর্যন্ত বাংলা উৎসবের
            স্মৃতি, তথ্য ও অর্জন ঘুরে দেখুন।
          </p>

        </div>


        <div className="editionList">

          {editions.map((item, index) => (

            <Link
              href={`/bangla-utsob/${item.year}`}
              className="editionRow"
              key={item.year}
            >

              <div className="editionNo">
                {String(index + 1).padStart(2, "0")}
              </div>


              <div className="editionName">

                <span>
                  {item.edition}
                </span>

                <strong>
                  {item.yearBn}
                </strong>

              </div>


              <div className="editionMeta">

                <strong>
                  {item.date}
                </strong>

                <span>
                  {item.note}
                </span>

              </div>


              <div className="editionOpen">

                <span>
                  বিস্তারিত
                </span>

                <b>
                  ↗
                </b>

              </div>

            </Link>

          ))}

        </div>
      </section>


      {/* ================= BOTTOM CTA ================= */}
      <section className="utsobBottom">

        <span>
          ২০১৯ — ২০২৬
        </span>


        <h2>
          হৃদয়ে বাংলা,
          <br />

          <strong>
            সাহিত্য ও সৃজনে।
          </strong>
        </h2>


        <Link
          href="/"
          className="bottomHome"
        >
          সূচনা ছাত্র সংগঠন
          <span>↗</span>
        </Link>


        {/* SOCIAL */}
        <div className="footer-social">

          <span>
            সামাজিক যোগাযোগ
          </span>

          <p>
            আমাদের সঙ্গে যুক্ত থাকুন
          </p>

          <a
            href="https://www.facebook.com/share/1MCJ469CX2/"
            className="facebook-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            Facebook
            <b>↗</b>
          </a>

        </div>

      </section>

    </main>
  );
}