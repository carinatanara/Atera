import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';

const AboutPage: React.FC = () => {
	return (
		<main role="main">
			<section className="py-5">
				<Container fluid className='container-fluid px-4'>
					<header className="text-center mb-5">
						<h1 className="display-5 fw-bold text-success mb-3 mx-auto" style={{ maxWidth: 900 }}>
							Kami percaya bahwa resep terbaik adalah resep yang diciptakan dengan hati
						</h1>
						<p className="text-muted mx-auto" style={{ maxWidth: 950, fontSize: '0.8rem' }}>
							Selamat datang di Atera, rumah bagi para pecinta kuliner, juru masak rumahan, dan siapa pun yang percaya pada kekuatan makanan untuk menyatukan. Kami didirikan dengan satu keyakinan sederhana: memasak yang luar biasa seharusnya dapat diakses oleh semua orang.
						</p>
					</header>

					<figure className="mb-5">
						<Image
							src="https://images.unsplash.com/photo-1504754524776-8f4f37790ca0?q=80&w=1600&auto=format&fit=crop"
							alt="Cooking together in the kitchen"
							fluid
							className="rounded-3 shadow-sm"
						/>
					</figure>

					<Row as="section" className="gy-4 mb-5">
						<Col md={6} as="article">
							<h6 className="text-success d-inline-flex align-items-center gap-2">
								<i className="bi bi-eye"></i>
								Vision
							</h6>
							<p className="text-muted">
								Menjadi Destinasi Digital Utama dan Paling Tepercaya di Indonesia untuk resep, inspirasi kuliner, dan pengetahuan dapur. Kami bercita-cita untuk menumbuhkan budaya memasak yang percaya diri di setiap rumah, di mana proses menciptakan hidangan lezat dan otentik menjadi sumber kebahagiaan, kesehatan, dan kebersamaan, hari ini dan untuk generasi mendatang.
							</p>
						</Col>
						<Col md={6} as="article">
							<h6 className="text-success d-inline-flex align-items-center gap-2">
								<i className="bi bi-bullseye"></i>
								Mission
							</h6>
							<p className="text-muted">
								Kami berkomitmen untuk menyediakan resep otentik yang teruji dan mudah diakses oleh semua orang, didukung oleh instruksi yang jelas dan penggunaan bahan lokal yang praktis. Misi kami adalah membangun komunitas kuliner yang hangat dan suportif, sekaligus meningkatkan pengetahuan dapur pengguna melalui konten informatif, sehingga setiap pengalaman memasak di Atera menjadi sumber inspirasi dan keberhasilan.
							</p>
						</Col>
					</Row>

					<section className="mb-5">
						<header className="text-center mb-4">
							<h2 className="h4 text-success fw-bold">My Team</h2>
						</header>
						<Row className="g-4 justify-content-center">
							<Col sm={6} md={4} lg={3} className="text-center">
								<figure className="m-0">
									<Image src="https://images.unsplash.com/photo-1531123414780-f742cb0c07cc?q=80&w=600&auto=format&fit=crop" alt="Aditya" rounded className="w-100" />
									<figcaption className="mt-2 small">
										<strong>Aditya</strong>
										<div className="text-muted">co-Founder</div>
									</figcaption>
								</figure>
							</Col>
							<Col sm={6} md={4} lg={3} className="text-center">
								<figure className="m-0">
									<Image src="https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=600&auto=format&fit=crop" alt="Carina" rounded className="w-100" />
									<figcaption className="mt-2 small">
										<strong>Carina</strong>
										<div className="text-muted">CEO</div>
									</figcaption>
								</figure>
							</Col>
							<Col sm={6} md={4} lg={3} className="text-center">
								<figure className="m-0">
									<Image src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=600&auto=format&fit=crop" alt="Cella" rounded className="w-100" />
									<figcaption className="mt-2 small">
										<strong>Cella</strong>
										<div className="text-muted">CTO</div>
									</figcaption>
								</figure>
							</Col>
						</Row>
						<p className="text-center text-muted mt-4" style={{ maxWidth: 900, margin: '0 auto', fontSize: '0.8rem' }}>
							“Atera tidak dimulai di ruang rapat yang mewah, melainkan di dapur kecil pada suatu malam yang berantakan di tahun 2025. Tiga sahabat, yang kini menjadi tim inti Atera: Juru Masak, Praktisi Cepat, dan Pengarsip Digital selalu punya tradisi masak bersama setiap akhir pekan.”
						</p>
					</section>

					
				</Container>
			</section>
		</main>
	);
};

export default AboutPage;
