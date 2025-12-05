import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import '../styles/App.css';

const AboutPage: React.FC = () => {
  return (
    <div className="about-page-bg">
      <main role="main">
        <section className="py-5">
          <Container className='px-0'>
            
            {/* HEADER */}
            <header className="text-center mb-5 pt-4">
              <h1 className="display-5 fw-bold text-success mb-4 mx-auto" style={{ maxWidth: 800 }}>
                Kami percaya bahwa resep terbaik adalah resep yang diciptakan dengan hati
              </h1>
              <p className="mx-auto text-dark" style={{ maxWidth: 800, fontSize: '0.9rem', lineHeight: '1.6' }}>
                Selamat datang di Atera, rumah bagi para pecinta kuliner, juru masak rumahan, dan siapa pun yang percaya pada kekuatan makanan untuk menyatukan. Kami didirikan dengan satu keyakinan sederhana: memasak yang luar biasa seharusnya dapat diakses oleh semua orang.
              </p>
            </header>

            {/* HERO IMAGE */}
            <figure className="mb-5">
              <Image
                src="https://images.unsplash.com/photo-1504754524776-8f4f37790ca0?q=80&w=1600&auto=format&fit=crop"
                alt="Cooking together"
                fluid
                className="shadow-sm w-100"
                style={{ borderRadius: '30px', maxHeight: '600px', objectFit: 'cover' }}
              />
            </figure>

            {/* VISION & MISSION */}
            <Row as="section" className="gy-5 mb-5 justify-content-center justify-content-lg-between">
              <Col md={6} lg={5} as="article">
                <div className="vision-pill">
                  <i className="bi bi-eye"></i>
                  Vision
                </div>
                <p className="fw-bold" style={{ color: '#2F4F4F', fontSize: '0.95rem', lineHeight: '1.7' }}>
                  Menjadi Destinasi Digital Utama dan Paling Tepercaya di Indonesia untuk resep, inspirasi kuliner, dan pengetahuan dapur. 
                  Kami bercita-cita untuk menumbuhkan budaya memasak yang percaya diri di setiap rumah, di mana proses menciptakan 
                  hidangan lezat dan otentik menjadi sumber kebahagiaan, kesehatan, dan kebersamaan, hari ini dan untuk generasi mendatang.
                </p>
              </Col>
              
              <Col md={6} lg={5} as="article">
                <div className="vision-pill">
                  <i className="bi bi-bullseye"></i>
                  Mission
                </div>
                <p className="fw-bold" style={{ color: '#2F4F4F', fontSize: '0.95rem', lineHeight: '1.7' }}>
                  Kami berkomitmen untuk menyediakan resep otentik yang teruji dan mudah diakses oleh semua orang, 
                  didukung oleh instruksi yang jelas dan penggunaan bahan lokal yang praktis. Misi kami adalah membangun 
                  komunitas kuliner yang hangat dan suportif, sekaligus meningkatkan pengetahuan dapur pengguna melalui 
                  konten informatif, sehingga setiap pengalaman memasak di Atera menjadi sumber inspirasi dan keberhasilan.
                </p>
              </Col>
            </Row>

            {/* TEAM SECTION */}
            <section className="mb-5">
              <div className="team-header-container">
                <div className="team-header-line"></div>
                <h2 className="team-header-text">Our Team</h2>
                <div className="team-header-line"></div>
              </div>
              
              <Row className="g-4 justify-content-center">
                <Col xs={10} sm={6} md={4} className="text-center">
                  <div className="team-card-wrapper">
                    <img src="https://images.unsplash.com/photo-1531123414780-f742cb0c07cc?q=80&w=600&auto=format&fit=crop" alt="Aditya" className="team-img-custom" />
                    <div className="team-card-overlay"></div>
                    <div className="team-info-overlay">
                      <div className="fw-bold fs-5">Aditya</div>
                      <div className="small text-white-50">co-Founder</div>
                    </div>
                  </div>
                </Col>

                <Col xs={10} sm={6} md={4} className="text-center">
                   <div className="team-card-wrapper">
                    <img src="https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=600&auto=format&fit=crop" alt="Carina" className="team-img-custom" />
                    <div className="team-card-overlay"></div>
                    <div className="team-info-overlay">
                      <div className="fw-bold fs-5">Carina</div>
                      <div className="small text-white-50">CEO</div>
                    </div>
                  </div>
                </Col>

                <Col xs={10} sm={6} md={4} className="text-center">
                   <div className="team-card-wrapper">
                    <img src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=600&auto=format&fit=crop" alt="Cella" className="team-img-custom" />
                    <div className="team-card-overlay"></div>
                    <div className="team-info-overlay">
                      <div className="fw-bold fs-5">Cella</div>
                      <div className="small text-white-50">CTO</div>
                    </div>
                  </div>
                </Col>
              </Row>

              <p className="text-center text-muted mt-5 pt-3 fst-italic px-3" style={{ maxWidth: 800, margin: '0 auto', fontSize: '0.8rem' }}>
                “Atera tidak dimulai di ruang rapat yang mewah, melainkan di dapur kecil pada suatu malam yang berantakan di tahun 2025. Tiga sahabat, yang kini menjadi tim inti Atera Juru Masak, Praktisi Cepat, dan Pengarsip Digital selalu punya tradisi masak bersama setiap akhir pekan.”
              </p>
            </section>

          </Container>
        </section>
      </main>
    </div>
  );
};

export default AboutPage;
