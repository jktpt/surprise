import React, { useState } from "react";
import "./slide.css"; // สำหรับการตกแต่ง CSS

const EnvelopeIntro = ({ onNext }) => {
  const [isTorn, setIsTorn] = useState(false);

  const handleTear = () => {
    setIsTorn(true);
    setTimeout(onNext, 1000); // รอ 1 วินาทีก่อนเปลี่ยนหน้า
  };

  return (
    <div
      className={`envelope-container ${isTorn ? "torn" : ""}`}
      onClick={handleTear}
    >
      <div className="envelope">
        <div className="flap"></div>
        <div className="content">
          <p>ฉีกซองจดหมายสิๆๆๆ (จิ้มทีนึงนะ) </p>
        </div>
        <div className="envelope-design">
          <div className="stamp">🎄</div>
          <div className="border"></div>
        </div>
      </div>
    </div>
  );
};

const Slideshow = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [showSlideshow, setShowSlideshow] = useState(false);

  const slides = [
    {
      id: 1,
      image:
        "https://img2.pic.in.th/pic/IMG_10.jpg",
      caption:
        "สวัสดีค้าบชาวโลก🎄 ปีใหม่อีกแล้ววว ปีนี้ก็เป็นปี 2567 ก็ขอบคุณที่อยู่ด้วยกันมาตลอด 5-6 ปีนะค้าบ👩‍🦰🧑",
    },
    {
      id: 2,
      image:
        "https://img5.pic.in.th/file/secure-sv1/IMG_6.jpg",
      caption:
        "ถึงแม้ปีนี้เราจะทะเลาะกันบ้างตีกันบ้างด่ากันบ้างแต่ก็ด่ากันต่อไปเถอะ แค่ในรูปก็พร้อมบวกละ✊✊ (หยอกๆๆ)",
    },
    {
      id: 3,
      image:
        "https://img2.pic.in.th/pic/IMG_11.jpg",

      caption:
        "แต่เราก็รักกันดีนะ ปีนี้ก็ผ่านอะไรมาเยอะก็ขอบคุณมากๆที่อยู่ด้วยกันมาตลอดนะค้าบ น่ารักขนาดไหนดูตอนเด็กๆสิ 😍",
    },
    {
      id: 4,
      image:
        "https://img2.pic.in.th/pic/IMG_8.jpg",
      caption:
        "แล้วดูความแตกต่างของหุ่นก่อนแมร๊ แต่จากโรงเรียนจนมาจบมหาลัยมันจะไวเกินปุยมุ้ย 😱",
    },
    {
      id: 5,
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/A_black_image.jpg/640px-A_black_image.jpg",
      caption:
        "แต่ไม่เป็นไรปีนี้เรามา Recap หน่อยว่าเรามาผ่านอะไรไปบ้างน๊า แต่ก่อนไปก็ขอขอบคุณมากๆน้า แล้วก็ขอให้ปี 2568 ของเธอเป็นปีที่สดใสและสวยงามน้า เค้าจะคอยอยู่ข้างๆเธอเสมอ พาเธอไปเที่ยวบ่อยๆ หาเวลาให้เธอเยอะๆ แล้วก็จจะพยายามฟังเธอให้มากๆน๊าา อย่าไปเครียดบ่อยหล่ะ รู้แหล่ะว่าเรื่องเครียดมันเยอะแต่ก็อย่าพยายามเอามันมาใส่ใจเลยนะ เค้าเองก็จะพยายามไม่หาเรื่องเครียดให้เพิ่มละกาน แกจะได้สบายใจขึ้นอิอิ แก่แล้วเรื่องคิดมันเยอะก็งี้แหล่ะเรื่องธรรมดา (แอบสปอยไปมั้ย) แต่นั่นแหล่ะพอเราปล่อยวางได้สักเรื่องนึงเรื่องต่อไปก็จะง่ายขึ้นละแหล่ะๆ โอเคจบแระไป Recap กันๆ",
    },
    {
      id: 6,
      image:
        "https://img2.pic.in.th/pic/IMG_3.jpg",
      caption:
        "มันเขียนโค้ดบีบภาพให้เห็นทุกคนไม่ได้อร๊ะ แต่เราได้ไปสวนสยามด้วยกันแหล่ะะะ",
    },
    {
      id: 7,
      image:
        "https://img5.pic.in.th/file/secure-sv1/IMG_4.jpg",
      caption:
        "เมื่อกี้แม่หายเติมให้แล้วนะๆๆๆ เราได้ไปด้วยกันทั้งครอบครัวเลยย ดีจุย",
    },
    {
      id: 8,
      image:
        "https://img5.pic.in.th/file/secure-sv1/IMG_12.jpg",
      caption: "บรรทัดทองรอบที่ล้าน อั้มๆๆ งั่มๆๆ หร่อยม้าย",
    },
    {
      id: 9,
      image:
        "https://img5.pic.in.th/file/secure-sv1/IMG_13.jpg",
      caption: "กุ้งเผาที่เหมือนโดนเผาแทนกุ้ง (จากเตาพ่อ 5555)",
    },
    {
      id: 10,
      image:
        "https://img5.pic.in.th/file/secure-sv1/IMG_14.png",
      caption:
        "และงานรับปริญญายังไงล๊าาา ขอบคุณนะค้าบที่มาหามาแสดงความยินดี ต่อไปตาแกนะ สู้ๆ!!",
    },
    {
      id: 11,
      image:
        "https://img2.pic.in.th/pic/IMG_15.png",
      caption:
        "สุดท้ายนี้ก็ขอให้คุณพระศรีรัตนตรัย อวยพรให้ปีหน้าของหนูมีแต่ความสุขความเจริญในชีวิตคิดอะไรก็สมหวังสมมาตรปราถนา คิดเงินให้ได้เงิน คิดทองให้ได้ทอง สาธุ~~ เห้ย!! จะบ้าหรอไม่ใช่พระแล้วนะ ",
    },
  ];

  // ฟังก์ชั่นสำหรับไปยังรูปถัดไป
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  if (!showSlideshow) {
    return <EnvelopeIntro onNext={() => setShowSlideshow(true)} />;
  }

  return (
    <div className="slideshow-container" onClick={nextSlide}>
      <div className="snow-background">
        <div
          className="slide"
          style={{ backgroundImage: `url(${slides[currentSlide].image})` }}
        >
          <div className="caption">{slides[currentSlide].caption}</div>
        </div>
      </div>
    </div>
  );
};

export default Slideshow;
