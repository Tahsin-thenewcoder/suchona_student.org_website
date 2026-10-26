
import Image from "next/image";
import Link from "next/link";
import styles from "./dreams.module.css";

const dreams = [
  {
    number: "01",
    title: "সূচনা এডুকেশন অ্যাক্সেলারেশন প্রজেক্ট ",
    english: "Suchona Education Acceleration Project",
    category: "শিক্ষা সহায়তা ও বৃত্তি",
    description:
      "মেধা ও সম্ভাবনা থাকা সত্ত্বেও আর্থিক সীমাবদ্ধতার কারণে যেন কোনো শিক্ষার্থীর শিক্ষাযাত্রা থেমে না যায়—সেই লক্ষ্যেই আমাদের এই পরিকল্পনা।",
    points: [
      "মেধাবী ও আর্থিকভাবে অসচ্ছল শিক্ষার্থীদের শিক্ষাবৃত্তি প্রদান।",
      "প্রয়োজনীয় বই, শিক্ষা উপকরণ ও অন্যান্য শিক্ষাসহায়তার ব্যবস্থা।",
      "শিক্ষার্থীদের উচ্চশিক্ষা ও ভবিষ্যৎ পরিকল্পনায় দিকনির্দেশনা।",
    ],
  },
  {
    number: "02",
    title: "সহশিক্ষা কার্যক্রমের বিকাশ",
    english: "School Co-curricular Development Project",
    category: "দক্ষতা, সৃজনশীলতা ও নেতৃত্ব",
    description:
      "পাঠ্যবইয়ের বাইরেও শিক্ষার্থীদের রয়েছে অসংখ্য সম্ভাবনা। বিদ্যালয়ে বিভিন্ন সহশিক্ষা ক্লাব গড়ে তোলা এবং সেগুলোকে কার্যকরভাবে পরিচালনায় সহযোগিতা করাই আমাদের স্বপ্ন।",
    points: [
      "বিজ্ঞান, সাহিত্য, বিতর্ক ও প্রযুক্তিবিষয়ক ক্লাব প্রতিষ্ঠায় সহায়তা।",
      "ক্লাবগুলোর কার্যক্রম পরিচালনায় প্রয়োজনীয় কারিগরি ও সাংগঠনিক সহযোগিতা।",
      "কর্মশালা, প্রশিক্ষণ ও প্রতিযোগিতার মাধ্যমে দক্ষতা বিকাশের সুযোগ সৃষ্টি।",
    ],
  },
  {
    number: "03",
    title: "সূচনা পাবলিক লাইব্রেরি",
    english: "Suchona Public Library Project",
    category: "পাঠাভ্যাস ও জ্ঞানচর্চা",
    description:
      "বইয়ের সঙ্গে মানুষের সম্পর্ক আরও গভীর করতে এবং শিক্ষার্থীসহ সকল বয়সের পাঠকের জন্য জ্ঞানচর্চার একটি উন্মুক্ত পরিবেশ গড়ে তুলতে আমরা একটি পাবলিক লাইব্রেরি প্রতিষ্ঠার স্বপ্ন দেখি।",
    points: [
      "সবার জন্য বই পড়া ও জ্ঞানচর্চার সুযোগ তৈরি।",
      "সাহিত্য, বিজ্ঞান, ইতিহাসসহ বিভিন্ন বিষয়ের বইয়ের সংগ্রহ গড়ে তোলা।",
      "পাঠচক্র, বই আলোচনা ও সৃজনশীল কার্যক্রম আয়োজনের পরিবেশ সৃষ্টি।",
    ],
  },
];

export default function DreamsPage() {
  return (
    <main className={styles.page}>
      <header className={styles.nav}>
        <Link href="/" className={styles.brand}>
          <Image src="/logo.png" alt="সূচনা ছাত্র সংগঠন" width={44} height={44} />
          <div>
            <strong>সূচনা ছাত্র সংগঠন</strong>
            <span>ভালো কিছু শুরু হোক</span>
          </div>
        </Link>
        <Link href="/" className={styles.back}>← মূল পাতায় ফিরুন</Link>
      </header>

      <section className={styles.hero}>
        <div className={styles.heroInner}>
          <p className={styles.eyebrow}>আগামী দিনের পরিকল্পনা</p>
          <h1>আমাদের <span>স্বপ্ন।</span></h1>
          <p className={styles.heroDescription}>
            প্রতিটি শিক্ষার্থীর সম্ভাবনাকে এগিয়ে নেওয়া, জ্ঞানচর্চার সুযোগ
            বাড়ানো এবং একটি সুন্দর আগামী গড়ে তোলার প্রত্যয়ে আমাদের কিছু স্বপ্ন।
          </p>
          <div className={styles.tags}>
            <span>০৩টি স্বপ্ন</span>
            <span>পরিকল্পিত উদ্যোগ</span>
          </div>
        </div>
      </section>

      <section className={styles.intro}>
        <p className={styles.eyebrow}>আমাদের ভাবনা</p>
        <h2>স্বপ্ন দেখি, একদিন<br />বাস্তবায়নও করব। ইনশাআল্লাহ</h2>
        <p>
          সূচনা শুধু কিছু অনুষ্ঠান আয়োজনের মধ্যে সীমাবদ্ধ থাকতে চায় না।
          শিক্ষার্থীদের পাশে দাঁড়ানো, নতুন কিছু শেখার সুযোগ তৈরি করা
          এবং সমাজে জ্ঞানচর্চার পরিসর বাড়ানোই আমাদের দীর্ঘমেয়াদি লক্ষ্য।
          সেই ভাবনা থেকেই নিচের উদ্যোগগুলোর পরিকল্পনা।
        </p>
      </section>

      <section className={styles.projects}>
        {dreams.map((dream) => (
          <article key={dream.number} className={styles.project}>
            <div className={styles.projectSide}>
              <span>পরিকল্পিত উদ্যোগ / {dream.number}</span>
              <strong>{dream.number}</strong>
              <p>{dream.category}</p>
            </div>
            <div className={styles.projectContent}>
              <p className={styles.english}>{dream.english}</p>
              <h3>{dream.title}</h3>
              <p className={styles.description}>{dream.description}</p>
              <div className={styles.plan}>
                <h4>আমাদের পরিকল্পনা</h4>
                <ul>
                  {dream.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              </div>
            </div>
          </article>
        ))}
      </section>

      <section className={styles.closing}>
        <p className={styles.eyebrow}>ভালো কিছু শুরু হোক</p>
        <h2>স্বপ্ন দেখা এবং তা বাস্তবায়নে ছোট ছোট উদ্যোগ=<br />আগামী দিনের বড় পরিবর্তন।</h2>
        <p>
          পরিকল্পনাগুলো বাস্তবায়নে প্রয়োজন সময়, সহযোগিতা এবং সম্মিলিত প্রচেষ্টা।
          আমরা সেই পথেই এগিয়ে যেতে চাই।
        </p>
        <Link href="/#contact">আমাদের সঙ্গে যুক্ত হোন ↗</Link>
      </section>

      <footer className={styles.footer}>
        © সূচনা ছাত্র সংগঠন · ভালো কিছু শুরু হোক
      </footer>
    </main>
  );
}
