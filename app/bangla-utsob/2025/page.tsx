import Image from "next/image";
import Link from "next/link";

export default function BanglaUtsob2026() {
  return (
    <main className="archive2026">

      {/* ================= HEADER ================= */}
      <header className="archiveNav">
        <Link href="/" className="archiveBrand">
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

        <Link href="/bangla-utsob" className="archiveBack">
          <span>←</span>
          সব আয়োজনে ফিরুন
        </Link>
      </header>


      {/* ================= HERO ================= */}
      <section className="archiveHero">

        <div className="archiveHeroContent">

          <div className="archiveEditionLabel">
            <span>03</span>
            <p>বাংলা উৎসব</p>
          </div>

          <h1>
            ৩য় বাংলা
            <br />
            <span>উৎসব ১৪৩২</span>
          </h1>

          <p className="archiveIntro">
            বাংলা ভাষা ও সাহিত্যের প্রতি ভালোবাসা ছড়িয়ে দিতে
            শিক্ষার্থীদের অংশগ্রহণে আয়োজিত আমাদের তৃতীয় বাংলা উৎসব।
          </p>

          <div className="archiveEventInfo">

            <div>
              <small>তারিখ</small>
              <strong>৩০ আগস্ট ২০২৫</strong>
            </div>

            <div>
              <small>ভেন্যু</small>
              <strong>বহদ্দারকাটা উচ্চ বিদ্যালয়</strong>
            </div>

          </div>

        </div>


        {/* HERO PHOTO */}
        <div className="archiveHeroVisual">

          <div className="archiveHeroPhoto">
            <Image
              src="/events/bangla-utsob/2025/hero.jpeg"
              alt="৩য় বাংলা উৎসব ১৪৩২"
              fill
              priority
              sizes="(max-width: 800px) 100vw, 50vw"
            />

            <div className="archivePhotoOverlay"></div>

            <div className="archivePhotoCaption">
              <span>৩য় বাংলা উৎসব</span>
              <strong>কলমে হোক বিপ্লব, ভাষায় হোক উৎসব</strong>
            </div>
          </div>

          <div className="archiveYearBadge">
            <small>বঙ্গাব্দ</small>
            <strong>১৪৩২</strong>
          </div>

        </div>

      </section>


      {/* ================= QUICK STATS ================= */}
    <section className="archiveStats archiveStatsCompact">

  <div className="archiveStat">
    <span>01</span>
    <strong>৩০০+</strong>
    <p>নিবন্ধিত প্রতিযোগী</p>
  </div>

  <div className="archiveStat archiveCompetitionStat">
    <span>02</span>
    <strong>০৩</strong>
    <p>প্রতিযোগিতা</p>

    <div className="competitionNames">
      <b>বাংলা অলিম্পিয়াড</b>
      <b>গল্পলিখন</b>
      <b>উপস্থিত বক্তৃতা</b>
    </div>
  </div>

  <div className="archiveStat">
    <span>03</span>
    <strong>০১</strong>
    <p>দিনব্যাপী আয়োজন</p>
  </div>

</section>
{/* ================= KHUDE BANGLABID ================= */}
<section className="khudeBanglabid">

  <div className="khudeContent">

    <p className="khudeLabel">
      <span>✦</span> বিশেষ স্বীকৃতি
    </p>

    <h2>
      ক্ষুদে
      <br />
      <span>বাংলাবিদ ১৪৩২</span>
    </h2>

    <p className="khudeDescription">
      বাংলা ভাষা ও সাহিত্য বিষয়ে জ্ঞান, মেধা ও দক্ষতার স্বীকৃতিস্বরূপ
      ৩য় বাংলা উৎসবের সর্বোচ্চ সম্মাননা।
    </p>

    <div className="khudeWinner">
      <small>ক্ষুদে বাংলাবিদ</small>
      <h3>বিজয়ীর নাম</h3>
      <p>বিদ্যালয়ের নাম · শ্রেণি</p>
    </div>

  </div>


  <div className="khudePhotoWrap">

    <div className="khudePhoto">
      <Image
        src="/events/bangla-utsob/2025/khude-banglabid.2025.1.jpeg"
        alt="ক্ষুদে বাংলাবিদ ১৪৩২"
        fill
        sizes="(max-width: 700px) 100vw, 45vw"
      />
    </div>

    <div className="khudeBadge">
      <span>ক্ষুদে</span>
      <strong>বাংলাবিদ</strong>
      <small>১৪৩২</small>
    </div>

  </div>

</section>
{/* ================= RESULT ================= */}
<section className="utsobResult">

  <div className="resultTop">
    <div>
      <p className="resultLabel">ফলাফল · ৩য় বাংলা উৎসব</p>

      <h2>
        সেরাদের
        <br />
        <span>অভিনন্দন।</span>
      </h2>
    </div>

    <p className="resultIntro">
      বাংলা অলিম্পিয়াড, গল্পলিখন ও উপস্থিত বক্তৃতা প্রতিযোগিতার
      পূর্ণাঙ্গ ফলাফল।
    </p>
  </div>

  <div className="resultAction">
    <div>
      <span>১৪৩২ বঙ্গাব্দ</span>
      <strong>পূর্ণাঙ্গ ফলাফল</strong>
    </div>

    <a
      href="https://www.facebook.com/share/p/1C3LKB4qcL/"
      target="_blank"
      rel="noopener noreferrer"
      className="resultButton"
    >
      ফলাফল দেখুন <span>↗</span>
    </a>
  </div>

</section>
{/* ================= GALLERY ================= */}
<section className="archiveGallery">

  <div className="archiveGalleryHead">
    <div>
      <p>স্মৃতির পাতায়</p>

      <h2>
        ছবিতে ৩য়
        <br />
        <span>বাংলা উৎসব।</span>
      </h2>
    </div>

    <p className="archiveGalleryIntro">
      প্রতিযোগিতা, আনন্দ, পুরস্কার আর কিছু স্মরণীয় মুহূর্ত—
      এক ফ্রেমে আমাদের ৩য় বাংলা উৎসব।
    </p>
  </div>


  <div className="archiveGalleryGrid">

    <div className="archiveGalleryItem archiveGalleryMain">
      <Image
        src="/events/bangla-utsob/2025/gallery-01.jpg"
        alt="৩য় বাংলা উৎসবের মুহূর্ত"
        fill
        sizes="(max-width: 700px) 100vw, 60vw"
      />
    </div>

    <div className="archiveGalleryItem">
      <Image
        src="/events/bangla-utsob/2025/gallery-02.jpg"
        alt="৩য় বাংলা উৎসবের মুহূর্ত"
        fill
        sizes="(max-width: 700px) 50vw, 30vw"
      />
    </div>

    <div className="archiveGalleryItem">
      <Image
        src="/events/bangla-utsob/2025/gallery-03.jpg"
        alt="৩য় বাংলা উৎসবের মুহূর্ত"
        fill
        sizes="(max-width: 700px) 50vw, 30vw"
      />
    </div>

    <div className="archiveGalleryItem">
      <Image
        src="/events/bangla-utsob/2025/gallery-04.jpg"
        alt="৩য় বাংলা উৎসবের মুহূর্ত"
        fill
        sizes="(max-width: 700px) 50vw, 30vw"
      />
    </div>

    <div className="archiveGalleryItem archiveGalleryWide">
      <Image
        src="/events/bangla-utsob/2025/gallery-05.jpg"
        alt="৩য় বাংলা উৎসবের মুহূর্ত"
        fill
        sizes="(max-width: 700px) 100vw, 60vw"
      />
    </div>

  </div>


  <div className="archiveGalleryBottom">
    <span>০৫টি নির্বাচিত মুহূর্ত</span>

    <a
      href="YOUR_FULL_GALLERY_LINK"
      target="_blank"
      rel="noopener noreferrer"
    >
      আরও ছবি দেখুন <b>↗</b>
    </a>
  </div>

</section>
{/* ================= ARCHIVE CLOSING ================= */}
<section className="archiveClosing">

  <div className="archiveClosingText">
    <span>৩য় বাংলা উৎসব · ১৪৩২</span>

    <h2>
      কলমে হোক বিপ্লব,<br />
      <strong>ভাষায় হোক উৎসব।</strong>
    </h2>

    <p>আয়োজনে — সূচনা ছাত্র সংগঠন</p>
  </div>

  <div className="archiveClosingLinks">
    <Link href="/bangla-utsob">
      <span>←</span>
      বাংলা উৎসব
    </Link>

    <Link href="/">
      সূচনার মূল পাতায় ফিরুন
      <span>↗</span>
    </Link>
  </div>

</section>
    </main>
  );
}

