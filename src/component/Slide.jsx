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
        "https://previews.dropbox.com/p/thumb/ACgGxCw1mUPEAA3osF2cgvtk8ciYOTwqsk09AEoR-ztPADvsZs2EInXbZB5J7EMvBDjG3OnAoFH0hvoqeZ43z1xIjRKWMI4k6VPymNPcFv0lrE-oaDq-YDfCBS5CuBUXemwX8ToNLEYZBMqRffyFK9HeOIFI8hJjctrFk5qEhrdbhmrT86Vas9seoo09DQ9hROBe1kOYjYiaoDt-_UmRxKp7Fe-wjChE61wFjpRde8CjJx2XtGtRYTu-69Pq8OeXVOf8KoCO2ZcSL4XPlfXphiesaXjUWHKlvdv3Cxuzf1OTvoBkYXcvuxO2tPHLnPegCjE/p.jpeg",
      caption:
        "ถึงแม้ปีนี้เราจะทะเลาะกันบ้างตีกันบ้างด่ากันบ้างแต่ก็ด่ากันต่อไปเถอะ แค่ในรูปก็พร้อมบวกละ✊✊ (หยอกๆๆ)",
    },
    {
      id: 3,
      image:
        "https://previews.dropbox.com/p/thumb/ACh4TmsNbCLYOkMGbQChhvo3J98SZ-o7pMENJ_ZcCwUMhGvea1FDQbJIT9O285PJrap2PloKD-vQahfEw99ve96aAEP-EsLbvikQVPPK8idIEPzCudFFelkVu2yuezobInHPC3E3m8corKuo9CltLfZMmz86krYP8IRJH50BY02KL61UfH2WNhhDAPMF7fpaEWIomaBC0ukrSWCfUTt5K5qzkv9cFwQdzawKPfy2z2jEKtZCcBB6WWou8Fyg07Ao91DZ8TxzY8yGprjJk6h92g6YMMLtfFIvT672x6IKXfRSu6PZlI3LOptZLn1nWOqNWdw/p.jpeg",

      caption:
        "แต่เราก็รักกันดีนะ ปีนี้ก็ผ่านอะไรมาเยอะก็ขอบคุณมากๆที่อยู่ด้วยกันมาตลอดนะค้าบ น่ารักขนาดไหนดูตอนเด็กๆสิ 😍",
    },
    {
      id: 4,
      image:
        "https://previews.dropbox.com/p/thumb/AChf8szUbJBwNOpMuFv4eyvgfM5UxEH7s7oUOrKtjitIMIoyYhdREMOrId1oP72-d21CHawVbu6nd1H15gk0b_34nks50KI3FFuHR65cbJESwWA7X6fu_mu3_UPx25XN_puAA1-Q7EZP7TUu9WEgRa9uNVN8MAn4AUFbxd-839Ld86X-3wjekcZ74DDa6PjyUpj3-ziRUJOPU8XuV9eh2Ix9m-5gpfNDwAMhFFxmEDX2K0x3tbM28Z6kD--JXobP0rEuvgYl738hWQct0a9c-Innq1bgVCuGiGo-7rHG09qwMb0exNaV6oHKfCh-ZHJaRKQ/p.jpeg",
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
        "https://previews.dropbox.com/p/thumb/ACjI_l9GNdhUsLpdc7SrzUv0AUyfWnhliNMgvG2_aSYI_nv34grEGpkMp7VFy3jLELsNKMr6tkIfH4v-S0oD5P1MzGWXhSkd3J68q6ds9nel4gAw6yWJb1qbZe5Yz7sxEboa8xrC_F_CYgGYEGXS1XkWj7Iv1XG4mh8uZAMYcs0iIQytgLrv4bxG39bqRAWxUf16G_61H6aFBI87saw09DSGl5SUGBkxZH9o-AnaUrVWmKgLF04lUsfNTP2A1LvGrErf7zuD5aqyIKZoGXCsFRBSq9PPQqPnUry1LiedlTcvoXuFIDU8oMYqw_GZFi6K8MU/p.jpeg",
      caption:
        "มันเขียนโค้ดบีบภาพให้เห็นทุกคนไม่ได้อร๊ะ แต่เราได้ไปสวนสยามด้วยกันแหล่ะะะ",
    },
    {
      id: 7,
      image:
        "https://previews.dropbox.com/p/thumb/ACj70WH1jMUvXms5TCiG2HRiWJ1A8ArGs7jpI9u7c01MhdHLf3OyvVou7TBDoYxIq7LsWSdOeSKWkocy5dOxjEXpi34B9fL7sNPx0cMcFWFKviay_6Jm4rmYcAoBtSNxaSl-GY-MVgWyWsvE0onzrBY950kVs1OrpP6TtV6XeMGQuLnx7ge1sFmIRAcEe7KwJpnQxQkk_tzcD_b-MxmbtcJ_6Hq4XE8AdW96VobiUF-Tb8pGvgK6ZNJdPPrTmuo5FfcMdkqFO_q8OwklKWaBU81vn8gyvQL8l-xTESPF1Zn-uW2e7Zot8Ry8JhTN-LiEZjY/p.jpeg",
      caption:
        "เมื่อกี้แม่หายเติมให้แล้วนะๆๆๆ เราได้ไปด้วยกันทั้งครอบครัวเลยย ดีจุย",
    },
    {
      id: 8,
      image:
        "https://previews.dropbox.com/p/thumb/ACgx3Bu4FYAV5swdQ8ldP-DMazUzvUPw46aB8456VDXX24U2qdSct85htPPT6FGSEX5FikT0Ggmoed-cTBtwjM9d2ofIHDmPXGzP70rJsUNK7apD7Q26XOV6ciJV900UZjmUhKMJYBLN3iyFdw9uFCOMmNKXz2dfKV6fhbegfVt5Mx-yLUv0WVRZal12cDSYOjqXMTog1PkCkzltaLJQ0V9HTsmiIO9-Rm5PLSpEsBVsoX-G4FZv_f1cp0oWfkQxyPtbFbmY_mhpV9WcAJbMg3ELrCAfIdqHyKdwY35Bt4KRILCiUP0fgPdC_TJHxcUlnTM/p.jpeg",
      caption: "บรรทัดทองรอบที่ล้าน อั้มๆๆ งั่มๆๆ หร่อยม้าย",
    },
    {
      id: 9,
      image:
        "https://previews.dropbox.com/p/thumb/ACie8Q3SOW6VR9gWVylmqlap54aF68cLzGDY6PfPCsSESIWv15gEHkAjJhf8h-U2GZy5PqL-mBEWM5wMpBsTMEE_S0fqeIWjGL2rOZgpWHlFW0oBEBfuGtd9wmoSNKig2IKXBvLNvzX_89DRwe-jNYZU19RW0ONCa-Qvs4wfU0JDkZK2FwDVeYASpBZyGXn9UP5f5WiDXLhB7kBD3WcUyQQzO3MxFLIeGlK0T7i3Q3G419gZyaQ-n8o833PG64-Nd4TBtR4Y6ZslDYL4NFv0fjCKarQsT95VWZQgwisHqzI_eJf4CLBCWx-Xu8cOxH_NgaA/p.jpeg",
      caption: "กุ้งเผาที่เหมือนโดนเผาแทนกุ้ง (จากเตาพ่อ 5555)",
    },
    {
      id: 10,
      image:
        "https://previews.dropbox.com/p/thumb/AChfBgn3Q6OaWx1NJlGxr8SROsyNq8aR0Z96_Hli2MEImcSihC6JgT1r42Xk9Ktmih6ae2ygoq6v_46wL5x9aTkSNpxqKOpbptxupF4RpA77qFdPH5XlmGbyudUFuFYKuHbksh3AQLRLq3QKzUn3NhYj2NY9qam_X5MRd4uxy0xZLLXFPSXLMERp_8IhcQkwD-wg8PpjoAhxQXo5FrlX9h7L6KEcufOv5YlFD-UPmwUV1aDyd2U7uPJB43a_aflpokHCX1vJQp6MmUHMXPpMopAJn0a2VWCKLaG0d_9iQo5F73ZADvze9QlhABqKTbsP3Ns/p.png",
      caption:
        "และงานรับปริญญายังไงล๊าาา ขอบคุณนะค้าบที่มาหามาแสดงความยินดี ต่อไปตาแกนะ สู้ๆ!!",
    },
    {
      id: 11,
      image:
        "https://previews.dropbox.com/p/thumb/ACgw7lm-k1xhRMeZ7BijI_g_iplKK9CbREZ2v9j4M5TOiWUfBRmsTCqzb6bkt4wiJIelEGZqF0flWaZr_9eoZmKIUs00FxYLnnpcVb-bSg7gK4Y03xip431wmaH9KMtBhINaSTFvLHGYzGenq0kCmRVoV0eieNqowTXZTCCq6BPsi6jU9qAP9JSNNf3JbxPzheaKgx8UrUkN804UYUpuy-aG1889vK-JnN3mT6tPJQBmIOE5HZj2R9iCKfhCVrv7W05EmVjBZF8XEv2y-d1rpaLT86OCQn72-v1w3aR4hrNYMjoT3rMlyX4K3_EJp4qOXA0/p.png",
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
