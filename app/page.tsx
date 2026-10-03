"use client";

declare global {
  interface Window {
    botpress?: {
      open: () => void;
    };
  }
}
import Image from "next/image";
import Link from "next/link";


export default function Home() {
  return (
    <main>
      {/* NAVBAR */}
      <header className="navbar">
        <Link href="/" className="brand">
          <Image
            src="/logo.png"
            alt="সূচনা ছাত্র সংগঠন"
            width={48}
            height={48}
            className="logo"
            priority
          />

          <div className="brandText">
            <strong>সূচনা ছাত্র সংগঠন</strong>
            <span>ভালো কিছু শুরু হোক</span>
          </div>
        </Link>

        <nav className="navLinks">
          <a href="#home">হোম</a>
          <a href="#about">আমাদের সম্পর্কে</a>
          <a href="#activities">কার্যক্রম</a>
          <Link href="/bangla-utsob">বাংলা উৎসব</Link>
          <Link href="/members">সদস্যবৃন্দ</Link>
          <a href="#gallery">গ্যালারি</a>
        </nav>

        <a href="#contact" className="navButton">
          যোগাযোগ <span>↗</span>
        </a>
      </header>
   {/* LATEST NOTICE */}
<section className="latest-notice">
  <div className="latest-notice-inner">
    <div className="notice-badge">
      <span>📢</span>
      সর্বশেষ নোটিশ:
    </div>

    <div className="notice-track">
      <p className="notice-moving-text">
         ‘৪র্থ বাংলা উৎসব
        ১৪৩৩ বঙ্গাব্দ’-এর পর্দা নামল।
      </p>
    </div>
  </div>
</section>

      {/* HERO */}
      <section className="hero" id="home">
        <div className="heroLeft">
          <div className="heroLabel">
            <span className="labelDot"></span>
            বহদ্দারকাটা উচ্চ বিদ্যালয় • এসএসসি ব্যাচ ২০২০
          </div>

          <h1>
            ভালো কিছু
            <span>শুরু হোক</span>
          </h1>

          <p className="heroDescription">
            শিক্ষা, সৃজনশীলতা ও সামাজিক দায়বদ্ধতাকে সঙ্গে নিয়ে মানুষের
            জন্য কাজ করার একটি সম্মিলিত উদ্যোগ—সূচনা ছাত্র সংগঠন।
          </p>

          <div className="heroButtons">
            <a href="#about" className="primaryBtn">
              আমাদের সম্পর্কে <span>→</span>
            </a>

            <Link href="/bangla-utsob" className="outlineBtn">
              বাংলা উৎসব <span>↗</span>
            </Link>
          </div>

          <div className="since">
            <span className="sinceLine"></span>
            <p>২০১৯-এর উদ্যোগ থেকে আজও পথচলা অব্যাহত</p>
          </div>
        </div>

        {/* HERO RIGHT */}
        <div className="heroRight">
          <div className="greenShape"></div>

          <div className="photoCard">
            <Image
              src="/hero/bangla-utsob.png"
              alt="বাংলা উৎসব"
              fill
              priority
              className="heroPhoto"
            />

            <div className="photoShade"></div>

            <div className="photoBadge">
              <span></span>
              আমাদের প্রধান আয়োজন
            </div>

            <div className="photoContent">
              <p>বাংলা ভাষা ও সাহিত্য বিষয়ক আয়োজন</p>
              <h2>বাংলা উৎসব</h2>

              <Link href="/bangla-utsob">
                বিস্তারিত দেখুন <span>↗</span>
              </Link>
            </div>
          </div>

          <div className="yearCard">
            <small>প্রথম আয়োজন</small>
            <strong>২০১৯</strong>
            <span>১৪ মার্চ</span>
          </div>

          <div className="editionCard">
            <strong>৪</strong>

            <div>
              <b>টি আয়োজন</b>
              <span>বাংলা উৎসব</span>
            </div>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="stats">
        <div className="statsIntro">
          <span>আমাদের পথচলা</span>
          <p>ছোট একটি উদ্যোগ থেকে ধারাবাহিকভাবে এগিয়ে চলা।</p>
        </div>

        <div className="statItem">
          <strong>২০১৯</strong>
          <span>প্রথম উদ্যোগ</span>
        </div>

        <div className="statItem">
          <strong>৪</strong>
          <span>বাংলা উৎসব</span>
        </div>

        

        <div className="statItem">
          <strong>৩০+</strong>
          <span>সদস্য</span>
        </div>
      </section>

      {/* ABOUT */}
      <section className="aboutSection" id="about">
        <div className="aboutNumber">01</div>

        <div className="aboutHeading">
          <p className="sectionLabel">আমাদের সম্পর্কে</p>

          <h2>
            একটি ব্যাচ থেকে
            <br />
            <span>একটি সম্মিলিত উদ্যোগ।</span>
          </h2>
        </div>

        <div className="aboutContent">
          <p className="aboutLead">
            বহদ্দারকাটা উচ্চ বিদ্যালয়ের এসএসসি ব্যাচ ২০২০-এর শিক্ষার্থীদের
            হাত ধরে গড়ে ওঠা সূচনা ছাত্র সংগঠন।
          </p>

          <p>
            শিক্ষা, সৃজনশীলতা ও সামাজিক দায়বদ্ধতার জায়গা থেকে ভালো কিছু করার
            প্রত্যয় নিয়েই আমাদের পথচলা। নিজেদের ছোট ছোট উদ্যোগের মাধ্যমে
            শিক্ষার্থী ও সমাজের মানুষের পাশে দাঁড়ানোই আমাদের মূল লক্ষ্য।
          </p>

          <div className="quoteBox">
            <span>আমাদের বিশ্বাস</span>
            <strong>“ভালো কিছু শুরু হোক”</strong>
            <p>
              পরিবর্তনের শুরুটা খুব বড় হতে হয় না। একটি সুন্দর উদ্যোগই হতে
              পারে আরও অনেক ভালো কাজের সূচনা।
            </p>
          </div>
        </div>
      </section>

      {/* ACTIVITIES */}
      <section className="activitiesSection" id="activities">
        <div className="activitiesHeader">
          <div>
            <p className="sectionLabel">আমাদের কার্যক্রম</p>

            <h2>
              কাজগুলোই বলে দেয়
              <br />
              <span>আমরা কারা।</span>
            </h2>
          </div>

          <p className="activitiesIntro">
            শিক্ষা, সৃজনশীলতা ও সামাজিক দায়িত্ব—এই তিনটি জায়গাকে কেন্দ্র করে
            আমাদের বিভিন্ন উদ্যোগ ও আয়োজন।
          </p>
        </div>

        <div className="activityGrid">
          {/* BANGLA UTSOB */}
          <Link href="/bangla-utsob" className="activityFeatured">
            <div className="activityImageWrap">
              <Image
                src="/hero/bangla-utsob.png"
                alt="বাংলা উৎসব"
                fill
                className="activityImage"
              />

              <div className="activityOverlay"></div>

              <span className="featuredTag">প্রধান আয়োজন</span>

              <div className="featuredContent">
                <p>বাংলা ভাষা ও সাহিত্য</p>
                <h3>বাংলা উৎসব</h3>

                <div className="activityLink">
                  আয়োজনের পথচলা দেখুন <span>↗</span>
                </div>
              </div>
            </div>
          </Link>

          {/* EDUCATION */}
          <article className="activityCard">
            <div className="activityIcon">অ</div>

            <div>
              <span className="activityIndex">০২</span>

              <h3>
                শিক্ষা উপকরণ
                <br />
                বিতরণ
              </h3>

              <p>
                শিক্ষার্থীদের প্রয়োজনীয় শিক্ষা উপকরণ দিয়ে তাদের পড়াশোনার
                পথকে একটু সহজ করার ছোট্ট প্রচেষ্টা।
              </p>
            </div>

            <button className="textButton">
              বিস্তারিত <span>→</span>
            </button>
          </article>

          {/* SOCIAL */}
          <article className="activityCard darkActivity">
            <div className="activityIcon darkIcon">স</div>

            <div>
              <span className="activityIndex">০৩</span>

              <h3>
                সামাজিক
                <br />
                কার্যক্রম
              </h3>

              <p>
                সমাজ ও মানুষের প্রয়োজনে সময়োপযোগী উদ্যোগ গ্রহণ এবং সম্মিলিতভাবে
                মানুষের পাশে থাকার চেষ্টা।
              </p>
            </div>

            <button className="textButton">
              বিস্তারিত <span>→</span>
            </button>
          </article>
        </div>
      </section>

      {/* MEMBERS PREVIEW */}
      <section className="membersPreview" id="members">
        <div className="membersHead">
          <div>
            <p className="sectionLabel">আমরা</p>

            <h2>
              যাদের হাত ধরে
              <br />
              <span>এগিয়ে চলে সূচনা।</span>
            </h2>
          </div>

          <div className="membersHeadRight">
            <p>
              সংগঠনের পরিকল্পনা, আয়োজন ও প্রতিটি উদ্যোগের পেছনে রয়েছে আমাদের
              সদস্যদের সম্মিলিত প্রচেষ্টা।
            </p>

            <Link href="/members" className="allMembersLink">
              সকল সদস্য দেখুন <span>↗</span>
            </Link>
          </div>
        </div>

        <div className="membersGrid">
          {/* ADVISOR - FIRST */}
          <Link href="/members" className="memberCard">
            <div className="memberPhoto">
              <Image
                src="/members/advisor.jpg"
                alt="উপদেষ্টা"
                fill
                className="memberImage"
              />
            </div>

            <div className="memberInfo">
              <div>
                <span>উপদেষ্টা</span>
                <h3>সালমান মাহমুদ তাহসিন</h3>
              </div>
              <b>↗</b>
            </div>
          </Link>

          {/* PRESIDENT */}
          <Link href="/members" className="memberCard">
            <div className="memberPhoto">
              <Image
                src="/members/president.jpg"
                alt="সভাপতি"
                fill
                className="memberImage"
              />
            </div>

            <div className="memberInfo">
              <div>
                <span>সভাপতি</span>
                <h3>মোনতাসিরুল ইসলাম জিহান</h3>
              </div>
              <b>↗</b>
            </div>
          </Link>

          {/* SECRETARY */}
          <Link href="/members" className="memberCard">
            <div className="memberPhoto">
              <Image
                src="/members/secretary.jpg"
                alt="সাধারণ সম্পাদক"
                fill
                className="memberImage"
              />
            </div>

            <div className="memberInfo">
              <div>
                <span>সাধারণ সম্পাদক</span>
                <h3>শফি উল্লাহ জামি</h3>
              </div>
              <b>↗</b>
            </div>
          </Link>

          {/* ORGANIZER */}
          <Link href="/members" className="memberCard">
            <div className="memberPhoto">
              <Image
                src="/members/organizer.jpeg"
                alt="সাংগঠনিক সম্পাদক ও অর্থ সম্পাদক"
                fill
                className="memberImage"
              />
            </div>

            <div className="memberInfo">
              <div>
                <span>সাংগঠনিক সম্পাদক ও অর্থ সম্পাদক</span>
                <h3>জাহেদুল ইসলাম</h3>
              </div>
              <b>↗</b>
            </div>
          </Link>

          {/* PUBLICITY */}
          <Link href="/members" className="memberCard">
            <div className="memberPhoto">
              <Image
                src="/members/prochar.jpg"
                alt="প্রচার ও প্রকাশনা"
                fill
                className="memberImage"
              />
            </div>

            <div className="memberInfo">
              <div>
                <span>প্রচার সম্পাদক</span>
                <h3>হাবিবুল মোস্তফা</h3>
              </div>
              <b>↗</b>
            </div>
          </Link>
        </div>
        <div className="all-members-link-wrap">
  <a href="/members" className="all-members-link">
    সকল সদস্য দেখুন
    <span>↗</span>
  </a>
</div>
      </section>
      {/* ================= GALLERY ================= */}
<section className="gallery-preview" id="gallery">
  <div className="gallery-preview-head">
    <span>স্মৃতিময় মুহূর্ত</span>
    <h2>
      ছবিতে <em>সূচনা</em>
    </h2>
    <p>
      আমাদের বিভিন্ন আয়োজন, উদ্যোগ ও স্মরণীয় মুহূর্তের কিছু অংশ।
    </p>
  </div>

  <div className="gallery-preview-grid">

    {/* বাংলা উৎসব */}
    <a href="/gallery" className="gallery-feature-card">
      <div className="gallery-collage-card">
        <img
          src="/gallery/image1.jpeg"
          alt="বাংলা উৎসব"
          className="gallery-img gallery-img-main"
        />

        <img
          src="/gallery/image2.jpeg"
          alt="বাংলা উৎসব"
          className="gallery-img gallery-img-top"
        />

        <img
          src="/gallery/image5.jpeg"
          alt="বাংলা উৎসব"
          className="gallery-img gallery-img-bottom"
        />
      </div>

      <div className="gallery-card-overlay">
        <span>আমাদের প্রধান আয়োজন</span>
        <h3>বাংলা উৎসব</h3>
        <p>সব ছবি দেখুন <b>↗</b></p>
      </div>
    </a>


    {/* অন্যান্য কার্যক্রম */}
    <a href="/gallery" className="gallery-feature-card">
      <div className="gallery-collage-card">
        <img
          src="/gallery/image6.jpeg"
          alt="আমাদের কার্যক্রম"
          className="gallery-img gallery-img-main"
        />

        <img
          src="/gallery/image9.jpeg"
          alt="আমাদের কার্যক্রম"
          className="gallery-img gallery-img-top"
        />

        <img
          src="/gallery/image11.jpeg"
          alt="আমাদের কার্যক্রম"
          className="gallery-img gallery-img-bottom"
        />
      </div>

      <div className="gallery-card-overlay">
        <span>শিক্ষা ও সামাজিক উদ্যোগ</span>
        <h3>আমাদের কার্যক্রম</h3>
        <p>সব ছবি দেখুন <b>↗</b></p>
      </div>
    </a>

  </div>
</section>
{/* ================= JOIN / CTA ================= */}
<section className="join-section">
  <div className="join-inner">
    <span className="join-label">আমাদের সঙ্গে</span>

    <h2>
      ভালো কিছুর শুরুতে
      <br />
      <em>আপনিও থাকুন।</em>
    </h2>

    <p>
      শিক্ষা, সৃজনশীলতা ও সামাজিক দায়বদ্ধতাকে সঙ্গে নিয়ে
      আমাদের পথচলায় যুক্ত হোন।
    </p>

    <a href="#contact" className="join-btn">
      যোগাযোগ করুন <span>↗</span>
    </a>
  </div>
</section>


{/* ================= CONTACT ================= */}
<section className="contact-section" id="contact">
  <div className="contact-wrap">

    <div className="contact-heading">
      <span className="contact-kicker">যোগাযোগ</span>

      <h2>
        আমাদের সঙ্গে <em>কথা বলুন।</em>
      </h2>

      <p>
        সূচনা ছাত্র সংগঠন সম্পর্কে জানতে, আমাদের কার্যক্রমে যুক্ত হতে
        কিংবা যেকোনো প্রয়োজনে সরাসরি আমাদের সঙ্গে যোগাযোগ করুন।
      </p>

      <div className="contact-actions">
        <a
          href="https://www.facebook.com/share/14vQRHBiRvu/"
          target="_blank"
          rel="noopener noreferrer"
          className="contact-btn contact-btn-primary"
        >
          Facebook-এ মেসেজ করুন
          <span>↗</span>
        </a>

     <button
  type="button"
  className="contact-ai-button"
  onClick={() => {
    if (window.botpress) {
      window.botpress.open();
    }
  }}
>
  AI সহায়তা নিন <span>↗</span>
</button>
      </div>
    </div>

    <div className="contact-details">

      <div className="contact-detail">
        <span className="contact-number">01</span>
        <div>
          <p>ঠিকানা</p>
          <h3>
            বহদ্দারকাটা, মাতামুহুরী<br />
            কক্সবাজার
          </h3>
        </div>
      </div>

      <div className="contact-detail">
        <span className="contact-number">02</span>
        <div>
          <p>মোবাইল</p>
          <h3>
            <a href="tel:+8801603660933">+880 1603-660933</a>
            <br />
            <a href="tel:+8801305569727">+880 1305-569727</a>
          </h3>
        </div>
      </div>

      <div className="contact-detail">
        <span className="contact-number">03</span>
        <div>
          <p>যোগাযোগের সময়</p>
          <h3>
            আমাদের কোনো স্থায়ী কার্যালয় নেই।
            <br />
            Facebook অথবা মোবাইলে যোগাযোগ করুন।
          </h3>
        </div>
      </div>

    </div>

  </div>
</section>

{/* ================= FOOTER ================= */}
<footer className="site-footer">
  <div className="footer-main">

    <div className="footer-brand">
      <h2>সূচনা ছাত্র সংগঠন</h2>
      <p>ভালো কিছু শুরু হোক</p>
    </div>

    <div className="footer-nav">
      <span>দ্রুত লিংক</span>

      <a href="/">হোম</a>
      <a href="#about">আমাদের সম্পর্কে</a>
      <a href="#activities">কার্যক্রম</a>
      <a href="/bangla-utsob">বাংলা উৎসব</a>
      <a href="/members">সদস্যবৃন্দ</a>
      <a href="/gallery">গ্যালারি</a>
    </div>

    <div className="footer-social">
      <span>সামাজিক যোগাযোগ</span>

      <p>আমাদের সঙ্গে যুক্ত থাকুন</p>

      <a
        href="https://www.facebook.com/share/14vQRHBiRvu/"
        className="facebook-link"
        target="_blank"
        rel="noopener noreferrer"
      >
        Facebook <b>↗</b>
      </a>
    </div>

  </div>

  <div className="footer-bottom">
    <p>© ২০২৬ সূচনা ছাত্র সংগঠন</p>

    <p>
      এসএসসি ব্যাচ ২০২০ · বহদ্দারকাটা উচ্চ বিদ্যালয়
    </p>
  </div>
</footer>
    </main>
  );
}