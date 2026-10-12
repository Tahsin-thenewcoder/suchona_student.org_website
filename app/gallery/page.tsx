
"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";

type GalleryPhoto = {
  src: string;
  caption: string;
};

type GalleryEvent = {
  id: number;
  date: string;
  title: string;
  description: string;
  photos: GalleryPhoto[];
};

const events: GalleryEvent[] = [
  {
    id: 1,
    date: "২৬ সেপ্টেম্বর ২০২৬",
    title: "৪র্থ বাংলা উৎসব ১৪৩৩",
    description: "বাংলা ভাষা, সাহিত্য ও সৃজনশীলতার এক দিনব্যাপী আয়োজন।",
    photos: [
      {
        src: "/gallery/full-view/bangla-utsob-2026-01.JPG",
        caption: "প্রতিযোগীদের অংশগ্রহণ",
      },
      {
        src: "/gallery/full-view/bangla-utsob-2026-02.JPG",
        caption: "প্রতিযোগীদের অংশগ্রহণ",
      },
      {
        src: "/gallery/full-view/bangla-utsob-2026-03.JPG",
        caption: "প্রতিযোগীদের অংশগ্রহণ",
      },
      {
        src: "/gallery/full-view/bangla-utsob-2026-04.JPG",
        caption: "প্রতিযোগীদের অংশগ্রহণ",
      },
      {
        src: "/gallery/full-view/bangla-utsob-2026-05.CR2",
        caption: "প্রতিযোগীদের অংশগ্রহণ",
      },
      {
        src: "/gallery/full-view/bangla-utsob-2026-06.JPG",
        caption: "কক্ষ পরিদর্শনে অতিথিবৃন্দ",
      },
      {
        src: "/gallery/full-view/bangla-utsob-2026-07.JPG",
        caption: "কক্ষ পরিদর্শনে অতিথিবৃন্দ ও আয়োজকবৃন্দ",
      },
      {
        src: "/gallery/full-view/bangla-utsob-2026-08.JPG",
        caption: "আগত শিক্ষার্থীদের একাংশ",
      },
      {
        src: "/gallery/full-view/bangla-utsob-2026-09.JPG",
        caption: "অংশগ্রহণ সনদ হাতে প্রতিযোগীরা",
      },
      {
        src: "/gallery/full-view/bangla-utsob-2026-10.JPG",
        caption: "সম্মানিত অভিভাবকবৃন্দ",
      },
      {
        src: "/gallery/full-view/bangla-utsob-2026-11.JPG",
        caption: "প্রধান অতিথি ও আমন্ত্রিত অতিথিবৃন্দ",
      },
      {
        src: "/gallery/full-view/bangla-utsob-2026-12.JPG",
        caption: "মঞ্চে প্রধান অতিথি ও আমন্ত্রিত অতিথিবৃন্দ",
      },
      {
        src: "/gallery/full-view/bangla-utsob-2026-13.JPG",
        caption: "প্রধান অতিথির বক্তব্য",
      },
      {
        src: "/gallery/full-view/bangla-utsob-2026-14.JPG",
        caption: "বিভিন্ন প্রতিযোগিতার বিজয়ীদের সংবর্ধনা",
      },
      {
        src: "/gallery/full-view/bangla-utsob-2026-15.JPG",
        caption: "বিভিন্ন প্রতিযোগিতার বিজয়ীদের সংবর্ধনা",
      },
      {
        src: "/gallery/full-view/bangla-utsob-2026-16.JPG",
        caption: "বিভিন্ন প্রতিযোগিতার বিজয়ীদের সংবর্ধনা",
      },
      {
        src: "/gallery/full-view/bangla-utsob-2026-17.JPG",
        caption: "বিভিন্ন প্রতিযোগিতার বিজয়ীদের সংবর্ধনা",
      },
      {
        src: "/gallery/full-view/bangla-utsob-2026-19.JPG",
        caption: "৪র্থ আসরের বিজয়ীরা",
      },
      {
        src: "/gallery/full-view/bangla-utsob-2026-20.JPG",
        caption: "আয়োজন শেষে অতিথিবৃন্দ ও আয়োজকবৃন্দ",
      },
      {
        src: "/gallery/full-view/bangla-utsob-2026-21.JPG",
        caption: "একটি সফল আয়োজন শেষে",
      },
    ],
  },
  {
    id: 2,
    date: "৩০ আগস্ট ২০২৫",
    title: "৩য় বাংলা উৎসব ১৪৩২",
    description: "শিক্ষার্থীদের অংশগ্রহণে বাংলা ভাষা ও সাহিত্যের উৎসব।",
    photos: [
      {
        src: "/gallery/bangla-utsob-2025-01.jpg",
        caption: "আয়োজনের স্মরণীয় মুহূর্ত",
      },
      {
        src: "/gallery/bangla-utsob-2025-02.jpg",
        caption: "প্রতিযোগিতা ও পুরস্কার",
      },
    ],
  },
];

export default function GalleryPage() {
  const [activePhotos, setActivePhotos] = useState<GalleryPhoto[]>([]);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const touchStartX = useRef<number | null>(null);

  const openLightbox = (photos: GalleryPhoto[], index: number) => {
    setActivePhotos(photos);
    setActiveIndex(index);
  };

  const closeLightbox = () => {
    setActiveIndex(null);
  };

  const nextPhoto = () => {
    setActiveIndex((prev) => {
      if (prev === null || activePhotos.length === 0) return null;
      return (prev + 1) % activePhotos.length;
    });
  };

  const prevPhoto = () => {
    setActiveIndex((prev) => {
      if (prev === null || activePhotos.length === 0) return null;
      return (prev - 1 + activePhotos.length) % activePhotos.length;
    });
  };

  useEffect(() => {
    if (activeIndex === null) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setActiveIndex(null);
      }

      if (e.key === "ArrowRight") {
        setActiveIndex((prev) =>
          prev === null
            ? null
            : (prev + 1) % activePhotos.length
        );
      }

      if (e.key === "ArrowLeft") {
        setActiveIndex((prev) =>
          prev === null
            ? null
            : (prev - 1 + activePhotos.length) % activePhotos.length
        );
      }
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [activeIndex, activePhotos.length]);

  return (
    <main className="timelineGallery">
      {/* ================= NAVBAR ================= */}
      <header className="timelineGalleryNav">
        <Link href="/" className="timelineGalleryBrand">
          <Image
            src="/logo.png"
            alt="সূচনা ছাত্র সংগঠন"
            width={42}
            height={42}
          />

          <div>
            <strong>সূচনা ছাত্র সংগঠন</strong>
            <span>ভালো কিছু শুরু হোক</span>
          </div>
        </Link>

        <Link href="/" className="timelineGalleryBack">
          ← মূল পাতায় ফিরুন
        </Link>
      </header>

      {/* ================= HERO ================= */}
      <section className="timelineGalleryHero">
        <span>স্মৃতির সংগ্রহশালা</span>

        <h1>
          আমাদের গ্যালারি<span>।</span>
        </h1>

        <p>
          সময়ের সঙ্গে জমে থাকা আমাদের আয়োজন, আনন্দ ও স্মরণীয়
          মুহূর্তগুলোর কিছু ছবি।
        </p>
      </section>

      {/* ================= TIMELINE ================= */}
      <section className="timelineEvents">
        {events.map((event) => (
          <article className="timelineEvent" key={event.id}>
            <div className="timelineEventDate">
              <span className="timelineDot" />
              <time>{event.date}</time>
            </div>

            <div className="timelineEventContent">
              <div className="timelineEventHeading">
                <h2>{event.title}</h2>
                <p>{event.description}</p>
              </div>

              <div className="timelinePhotoGrid">
                {event.photos.map((photo, index) => (
                  <figure className="timelinePhoto" key={photo.src}>
                    <button
                      type="button"
                      className="timelinePhotoImage timelinePhotoButton"
                      onClick={() =>
                        openLightbox(event.photos, index)
                      }
                      aria-label={`${photo.caption} বড় করে দেখুন`}
                    >
                      <Image
                        src={photo.src}
                        alt={photo.caption}
                        fill
                        sizes="(max-width: 700px) 50vw, 33vw"
                      />
                    </button>

                    <figcaption>{photo.caption}</figcaption>
                  </figure>
                ))}
              </div>
            </div>
          </article>
        ))}
      </section>

      {/* ================= FOOTER ================= */}
      <footer className="timelineGalleryFooter">
        <span>সূচনার পথচলার কিছু স্মৃতি</span>
        <Link href="/">মূল পাতায় ফিরুন ↗</Link>
      </footer>

      {/* ================= POPUP LIGHTBOX ================= */}
      {activeIndex !== null && activePhotos[activeIndex] && (
        <div
          className="galleryLightbox"
          role="dialog"
          aria-modal="true"
          aria-label="ছবির গ্যালারি"
          onClick={closeLightbox}
          onTouchStart={(e) => {
            touchStartX.current = e.touches[0].clientX;
          }}
          onTouchEnd={(e) => {
            if (touchStartX.current === null) return;

            const distance =
              e.changedTouches[0].clientX - touchStartX.current;

            if (distance < -50) nextPhoto();
            if (distance > 50) prevPhoto();

            touchStartX.current = null;
          }}
        >
          <button
            type="button"
            className="galleryLightboxClose"
            onClick={closeLightbox}
            aria-label="বন্ধ করুন"
          >
            ✕
          </button>

          <button
            type="button"
            className="galleryLightboxPrev"
            onClick={(e) => {
              e.stopPropagation();
              prevPhoto();
            }}
            aria-label="আগের ছবি"
          >
            ‹
          </button>

          <div
            className="galleryLightboxContent"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={activePhotos[activeIndex].src}
              alt={activePhotos[activeIndex].caption}
              width={1600}
              height={1000}
              sizes="(max-width: 700px) 95vw, 85vw"
              style={{
                width: "auto",
                height: "auto",
                maxWidth: "100%",
                maxHeight: "72vh",
                objectFit: "contain",
              }}
            />

            <p>{activePhotos[activeIndex].caption}</p>

            <span>
              {activeIndex + 1} / {activePhotos.length}
            </span>
          </div>

          <button
            type="button"
            className="galleryLightboxNext"
            onClick={(e) => {
              e.stopPropagation();
              nextPhoto();
            }}
            aria-label="পরের ছবি"
          >
            ›
          </button>
        </div>
      )}
    </main>
  );
}
