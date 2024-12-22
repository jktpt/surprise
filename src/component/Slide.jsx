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
        "https://previews.dropbox.com/p/thumb/ACcAAMIpRl7AmxC99bQlkvQ6ltaYfs19HuvJBLYofaJGblFaHdXU8gPifzTIjeCQLEGp6dyPrb1TeSHWnclMUUxr-giDOwX-mVbPi50sl9uG-oX5pQKgtNk9zGm1OMYll1U2kKH6C13IWBsuLaaTq9xQ-QlT6qRLKu8Rq-HOIFZFhiXmw8lenNJpYPXjJz2l5hLHAVY375PPtQ3S78p1qA-c914me3FDFhu3fQJQYQvniDRZor8fSQZ_o0JOfPWUewB3e4WB7NbY9GogW2VnowTI0ULGZkXmzHPO_dDr_x1C6YWk5Cv6609DK5WDJsvvnjOSW6SAEy584P6AF7nOHaTR/p.jpeg?is_prewarmed=true",
      caption:
        "สวัสดีค้าบชาวโลก🎄 ปีใหม่อีกแล้ววว ปีนี้ก็เป็นปี 2567 ก็ขอบคุณที่อยู่ด้วยกันมาตลอด 5-6 ปีนะค้าบ👩‍🦰🧑",
    },
    {
      id: 2,
      image:
        "https://previews.dropbox.com/p/thumb/ACf1zFwVwfw3spnI2hImDe1beJgMgxhG-QkqEDwuahBdT-TTz-tp1eNzaEkkAfMDrEqHor-etFnM50WhLd_BTKZCLgm2QmVyzL75sAIUl_WUnfcFHYpa95XYqMnfr0b3tnkMnH3wm_oePlBBJVU-gp7CjCtY6ceh0zzmeKSe19kjJPHwZaoQH-ldelk3xt3AWSPDgHpjFKNYwdnZ6TETvHAj7sfFVqxtiwKQuf3jbk6CtyLJJbJwop8dl8P2IHUGJ90hBeMpjRGs3yoITOxSe5NbWPCnRuEbbSC8VEpxU8NWjVJa1Pe2EYKf5HQzSyzJ-IUdpD1k_h1Xa-Jyb1qTeRIO/p.jpeg?is_prewarmed=true",
      caption:
        "ถึงแม้ปีนี้เราจะทะเลาะกันบ้างตีกันบ้างด่ากันบ้างแต่ก็ด่ากันต่อไปเถอะ แค่ในรูปก็พร้อมบวกละ✊✊ (หยอกๆๆ)",
    },
    {
      id: 3,
      image:
        "https://previews.dropbox.com/p/thumb/ACeFpWBmS2JJpy85Lf68zVXwz5RRMSESWcFktsFPRzZXj0tK7CKW4YHXrNCqFPhX77jaLMqd5SKO_s3CuzXqDD_7tk_8R7k8ij1mzajaSULaqhVY9P07ssWoG3U3wtdm_zdRoEbBufdx4ssGl72rwmcFa-XQVNvh2CCzMSQu-YXxNDVPWiUWUy7NSHUuwXRIAB1PpTo_ehUHkaolNxtLPhFs-AZzuiKpkAY4hx2QgNBBvBRVfAERX2Zygb6lMMHQ00UK7XuQrvCPEreYiKHaMCbzPWJp9TB6QqkGkfekvJQ6IiIQiXkHDpED7V8Ccr02QYAP5rIIuoHeIP6GMuz6cZFP/p.jpeg?is_prewarmed=true",
      caption:
        "แต่เราก็รักกันดีนะ ปีนี้ก็ผ่านอะไรมาเยอะก็ขอบคุณมากๆที่อยู่ด้วยกันมาตลอดนะค้าบ น่ารักขนาดไหนดูตอนเด็กๆสิ 😍",
    },
    {
      id: 4,
      image:
        "https://previews.dropbox.com/p/thumb/ACeOtNL0bMbfk6UxHQjwYGnIZhmcQHuSLXz4s9IZ8zdhZy4lq1-A1jQCmsMMtAjSaZBq6zZ6T0DZZt1x0b9f-TTtYU0_KZj6LA0pEDR5UW84J19VU1TOWQLm_BLd6Ysgq5-fegeb2p9nCHGQKrJRrqzCxZn9qqVvAhUEI9VwH8E3wSS4jYFHvScvWChxw1Gs6NwocDkXsFnI6zIUiBvMQHEg55l-R7EjqRhMplmp4iUPQcgcKdylDCuyZBwaaNF00LEW-HeEMbwiBk0nTNQg8sA293k0HVYDHABmPCSDTaOtY4Kbp4DkLj07KDO5evlWMacWLDOJEvSIObbWpL-X697U/p.jpeg?is_prewarmed=true",
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
        "https://previews.dropbox.com/p/thumb/ACcmM9KC_Vhgp2Q8yOaJXoUmxPBJ7MlRjm-fGAB1F4y17_gSm3M-SoZJbAjxGllJ42tP2HaLk5UUhj72RLylCBzoVxpgEc4yeuRouBk7Z_06lauKsxxbnp5_Ru5mXfz7lBfU0qF4uT_iN3C7pJZTtW_7gKRE2dSncfJjysmxojRqw82rwCsxieX_9uHI5HbrP0WR55rYk-2HonfNk20iXl2gH4SGd72kNExHzvM6Udj4Ap_pV8SUVn0wr_tGfuD_8lBHG37L_rhcDhUSWlfPihxfUMa2ANZSvMNyZRGzhBLKy_s6beeuty1tcIwSIxO1vkbh_ipoGDuS7-OxXQybMWNT/p.jpeg?is_prewarmed=true",
      caption:
        "มันเขียนโค้ดบีบภาพให้เห็นทุกคนไม่ได้อร๊ะ แต่เราได้ไปสวนสยามด้วยกันแหล่ะะะ",
    },
    {
      id: 7,
      image:
        "https://previews.dropbox.com/p/thumb/ACeJpLeRqJYLiILdXOxBBy9omNQALZfrG-xrzkcvqvfqkxRDIiYqU0sdxHSmGjIhXJKBCl34riFC_kkmjOLqy-oDnhHALf3zU3pTHjJxijl2r_v9dj81x-HulCEOd_D6Xom6zg5rTS61q6JSFJaORqmgPGoD4No5hz_oongJWuzQLd7WvzsuhmJXocJo9ogHzaQ8sDS0xe-xh5Hy2kP-EK3cd0_POkWE6_wdk3jcipzr1qG4a-vgyx1verXQTnORoAAJ9tuQMnppvBGGtWnrY1emJiutNdU1za6e3cvxEsHcbOp4nv0t-68k5wIRyhLW2RkeDo8o8edou0JTeXHtKowt/p.jpeg?is_prewarmed=true",
      caption:
        "เมื่อกี้แม่หายเติมให้แล้วนะๆๆๆ เราได้ไปด้วยกันทั้งครอบครัวเลยย ดีจุย",
    },
    {
      id: 8,
      image:
        "https://previews.dropbox.com/p/thumb/ACelY5t_x_AhvDJFe9A0JFUQc0zsL0gP1njfZ4Q7SE6p5jXJRShtEwvz4tiGARzqdBoRosdsefL2WRLEVhCZEWctj8108ocy0HtNJaxaur8Sgq2wxmSn6wgjmLRjd_J7Y1eadto4kdvIgzx7IPpb1nziI0CPp6xlcnF9v0wHbso2I8gIVxGzlzeNwh56p8YFkbdhZ3e8FNwUQPDmmqkpxw_VzfZsB4TANSEXoZAMDW_zcME6cpSI2jz-fq3e_UCwvBBhEhZUiUnxNhav08CdoQn0Yj1n740ImL-TG_dXKO66UiwhB5zItFBl9lj0UzBMPtbB0zkRcbO8VzxQNm6xWhto/p.jpeg?is_prewarmed=true",
      caption:
        "บรรทัดทองรอบที่ล้าน อั้มๆๆ งั่มๆๆ หร่อยม้าย",
    },
    {
      id: 9,
      image:
        "https://previews.dropbox.com/p/thumb/ACcp9gpZIuKYMtXrz5kZbCVSTIJOb842vpeRbFb3Bs2X42zVTn2KB2jtWwmo_B7Wl0-zsH10FCF8wM_ZfNF1kMLL1Fatu_70DUCpoTxE1GyStaCgarSy7Eiqzp_a9ygIpKeoGdJtrjtbxM8qXmu3bJy4lFzkb-AAxp5VFsEKT2_-nVaX9EueujYrszUlNeaBqg5D2FuZcTCRW92AzIbSS82VBWqsXqXLZryl4T8pvoeCt5M6umQqg3goKP_kmFGqEK5Boets-hZT5XvEOD0iSb3Q8qBqj1EtpcHrMGAqCzhvx_82WIIiclIJSOaWLOVxWchEcntVQK5W_yMQ6MNPjD0e/p.jpeg?is_prewarmed=true",
      caption:
        "กุ้งเผาที่เหมือนโดนเผาแทนกุ้ง (จากเตาพ่อ 5555)",
    },
    {
        id: 10,
        image:"https://previews.dropbox.com/p/thumb/ACcXyZ9NpPCTlt8J1EUtoTeZTCzKuuDJJsIWhIL9wwi8bbqr0X4uHzxFzQpuDueGkUmiHJkFyxp1Xc9YIHUm_q4Fj2nIOnTJcsQv3nr-x3F87lqK_nvHZXw6lRQvSFHhzEwezT2uPb56GP1l7yPV2bRVnekK8ZimpAfxwBOaYvWc56FMURxSj9LJ3R0hYKaGFXX5D7jTKvYeNK4zilj0NStS2aJdDO4mEXqUMmY5XhY8MtPcSiJ1HE5WS9Nv0-dveq_bM-Oc9_WRGP9helZyFztcARjW1F0pS6NH_rKVqvcSHk-F4BZlZEdlx5FXytFq6pi-MpJMhG8NnbshPPHEZ8ci/p.png?is_prewarmed=true",
        caption:"และงานรับปริญญายังไงล๊าาา ขอบคุณนะค้าบที่มาหามาแสดงความยินดี ต่อไปตาแกนะ สู้ๆ!!"
    },
    {
        id: 11,
        image:"https://previews.dropbox.com/p/thumb/ACeeiHN9eAQq9znNKQ8VF-uj9AfJ_GzZToMCtziXu01dGDTVOvJBBPR4PI7wNxHanzKVukZwCOhH5P79W0Y8sQAg50nsr9n_7pe9-Hj59uUOEnieiAf7tshLpRX1PN1dMPfaCos88zF3_OLZ_PTvbsAcfm37-FOmpV3-NaOCCRf5_yloGXURcCeH9ch-LUknF946F9hi2yl2T8yvmGjzWvNomme0vrjymYdSchR41qJHmvl6341LOOOa_nmBCjvg1CmRZ7BtV0teC4mnUxBGg0kUVVjxcuoO7ul7l2luu5aAA8mNWEPloKFthYPk7iWu24pjYpjCLWINaeSr6ufiVERT/p.png?is_prewarmed=true",
        caption:"สุดท้ายนี้ก็ขอให้คุณพระศรีรัตนตรัย อวยพรให้ปีหน้าของหนูมีแต่ความสุขความเจริญในชีวิตคิดอะไรก็สมหวังสมมาตรปราถนา คิดเงินให้ได้เงิน คิดทองให้ได้ทอง สาธุ~~ เห้ย!! จะบ้าหรอไม่ใช่พระแล้วนะ "
    }
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
