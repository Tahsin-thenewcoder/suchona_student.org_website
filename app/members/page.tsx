import Image from "next/image";
import Link from "next/link";

const members = [
  {
    name: "সালমান মাহমুদ তাহসিন",
    role: "উপদেষ্টা",
    image: "/members/advisor.jpg",
  },
  {
    name: "মোনতাসিরুল ইসলাম জিহান",
    role: "সভাপতি",
    image: "/members/president.jpg",
  },
  {
    name: "শফি উল্লাহ জামি",
    role: "সাধারণ সম্পাদক",
    image: "/members/secretary.jpg",
  },
  {
    name: "জাহেদুল ইসলাম",
    role: "সাংগঠনিক সম্পাদক ও অর্থ সম্পাদক",
    image: "/members/organizer.jpeg",
  },
  {
    name: "হাবিবুল মোস্তফা",
    role: "প্রচার ও প্রকাশনা",
    image: "/members/prochar.jpg",
  },

  // ↓ বাকিদের এখান থেকে add করবি

  {
    name: "আহমদ উল্লাহ",
    role: "সদস্য ও সাবেক সভাপতি",
    image: "/members/member-01.jpg",
  },
  {
    name: "আরশেদুল ইসলাম শাকিল",
    role: "সদস্য ও সাবেক সাধারণ সম্পাদক",
    image: "/members/member-02.jpg",
  },
  {
    name: "আব্দুল্লাহ পারভেজ",
    role: "সদস্য ও সাবেক অর্থ সম্পাদক",
    image: "/members/member-03.jpg",
  },
  {
    name: "মোহাম্মদ নেজাম উদ্দিন",
    role: "সদস্য ও সাবেক প্রচার সম্পাদক",
    image: "/members/member-04.jpg",
  },
  
  {
    name: "ইয়াছিন আরফাত আব্দুল্লাহ",
    role: "সদস্য",
    image: "/members/member-05.jpg",
  },

  {
    name: "সায়েদুর রহমান জিহান",
    role: "সদস্য",
    image: "/members/member-06.jpg",
  },
  {
    name: "মোহাম্মদ সোহেল",
    role: "সদস্য",
    image: "/members/member-07.jpg",
  },
  {
    name: "ওমর ফারুক",
    role: "সদস্য",
    image: "/members/member-08.jpg",
  },
  {
    name: "ইসফাতুল ইসলাম আসিফ",
    role: "সদস্য",
    image: "/members/member-09.jpg",
  },
  {
    name: "ইয়াছিন আরফাত",
    role: "সদস্য",
    image: "/members/member-10.jpg",
  },
  {
    name: "নাজমুল হুদা আসিফ",
    role: "সদস্য",
    image: "/members/member-11.jpg",
  },
  {
    name: "নাছিয়াতুল রায়ন",
    role: "সদস্য",
    image: "/members/member-12.jpg",
  },
  {
    name: "রাকিবুল ইসলাম আরফাত",
    role: "সদস্য",
    image: "/members/member-12.jpg",
  },
  {
    name: "হুমায়ুন কবির তুহিন",
    role: "সদস্য",
    image: "/members/member-13.jpg",
  },
  {
    name: "মোহাম্মদ মুবিন",
    role: "সদস্য",
    image: "/members/member-14.jpg",
  },
  {
    name: "মোহাম্মদ ইমন",
    role: "সদস্য",
    image: "/members/member-15.jpg",
  },
  {
    name: "মোহাম্মদ ইয়াছিন",
    role: "সদস্য",
    image: "/members/member-16.jpg",
  },
  {
    name: "শহিদুল ইসলাম",
    role: "সদস্য",
    image: "/members/member-17.jpg",
  },

  {
    name: "মোশাররফুজ্জামান নুর",
    role: "সদস্য",
    image: "/members/member-18.jpg",
  },

  {
    name: "ওসমান গণি জিসান",
    role: "সদস্য",
    image: "/members/member-19.jpg",
  },

  {
    name: "মোহাম্মদ রুবেজ মিয়া",
    role: "সদস্য",
    image: "/members/member-20.jpg",
  },
 {
    name: "মোহাম্মদ ইলিয়াস",
    role: "সদস্য",
    image: "/members/member-21.jpg",
  },
 {
    name: "মোহাম্মদ হামেদ",
    role: "সদস্য",
    image: "/members/member-22.jpg",
  },
 
  {
    name: "মোহাম্মদ মুবিনুল হক",
    role: "সদস্য",
    image: "/members/member-23.jpg",
  },

  {
    name: "মোহাম্মদ রাসেল",
    role: "সদস্য",
    image: "/members/member-24.jpg",
  },

  {
    name: "Jahedul Islam Chy",
    role: "সদস্য",
    image: "/members/member-25.jpg",
  },
{
    name: "শেফায়েত মোহাম্মদ মেহেদী",
    role: "সদস্য",
    image: "/members/member-26.jpg",
  },

];

export default function MembersPage() {
  return (
    <main className="members-page">
      {/* Header */}
      <header className="members-header">
        <Link href="/" className="members-brand">
          <Image
            src="/logo.png"
            alt="সূচনা ছাত্র সংগঠন"
            width={46}
            height={46}
            className="members-logo"
          />

          <div>
            <h2>সূচনা ছাত্র সংগঠন</h2>
            <span>ভালো কিছু শুরু হোক</span>
          </div>
        </Link>

        <nav className="members-nav">
          <Link href="/">হোম</Link>
          <Link href="/#about">আমাদের সম্পর্কে</Link>
          <Link href="/#programs">কার্যক্রম</Link>
          <Link href="/bangla-utsob">বাংলা উৎসব</Link>
          <Link href="/members">সদস্যবৃন্দ</Link>
          <Link href="/#gallery">গ্যালারি</Link>
        </nav>

        <Link href="/#contact" className="members-contact">
          যোগাযোগ ↗
        </Link>
      </header>

      {/* Intro */}
      <section className="members-intro">
        <div>
          <span className="members-eyebrow">আমাদের মানুষ</span>

          <h1>
            সূচনার সাথে
            <br />
            <em>যাঁদের পথচলা।</em>
          </h1>
        </div>

        <div className="members-intro-text">
          <p>
            সংগঠনের প্রতিটি উদ্যোগ, আয়োজন ও পথচলার সঙ্গে জড়িয়ে আছেন
            আমাদের সদস্যরা। তাঁদের সম্মিলিত প্রচেষ্টাতেই এগিয়ে চলে
            সূচনা ছাত্র সংগঠন।
          </p>
        </div>
      </section>

      {/* Members */}
      <section className="members-content">
        <div className="members-section-top">
          <span>সদস্যবৃন্দ</span>
          <span>{members.length.toString().padStart(2, "0")} জন</span>
        </div>

        <div className="members-grid">
          {members.map((member, index) => (
            <article className="member-card" key={`${member.name}-${index}`}>
              <div className="member-image-wrap">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  sizes="(max-width: 600px) 50vw, (max-width: 1000px) 33vw, 20vw"
                  className="member-image"
                />

                <span className="member-number">
                  {(index + 1).toString().padStart(2, "0")}
                </span>
              </div>

              <div className="member-info">
                <span>{member.role}</span>
                <h3>{member.name}</h3>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="members-footer">
        <div>
          <strong>সূচনা ছাত্র সংগঠন</strong>
          <p>ভালো কিছু শুরু হোক</p>
        </div>

        <Link href="/">← হোমে ফিরে যান</Link>
      </footer>
    </main>
  );
}