import AboutTextSplit from '@/components/sections/about/AboutTextSplit';
import ContactCta from '@/components/sections/contact/ContactCta';
import FaqTwoColumn from '@/components/sections/faq/FaqTwoColumn';
import FeaturesTaggedCards from '@/components/sections/features/FeaturesTaggedCards';
import FooterSimpleCard from '@/components/sections/footer/FooterSimpleCard';
import HeroBillboardGallery from '@/components/sections/hero/HeroBillboardGallery';
import MetricsFeatureCards from '@/components/sections/metrics/MetricsFeatureCards';
import NavbarCentered from '@/components/ui/NavbarCentered';
import PricingHighlightedCards from '@/components/sections/pricing/PricingHighlightedCards';
import SocialProofMarquee from '@/components/sections/social-proof/SocialProofMarquee';
import TeamGlassCards from '@/components/sections/team/TeamGlassCards';
import TestimonialAvatarCard from '@/components/sections/testimonial/TestimonialAvatarCard';

export default function App() {
  return (
    <>
  <div id="nav" data-section="nav">
      <NavbarCentered
      logo="Grand Hotel"
      navItems={[
        {
          name: "About",
          href: "#about",
        },
        {
          name: "Rooms",
          href: "#features",
        },
        {
          name: "Rates",
          href: "#pricing",
        },
        {
          name: "Contact",
          href: "#contact",
        },
      ]}
      ctaButton={{
        text: "Book Now",
        href: "#contact",
      }}
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroBillboardGallery
      tag="Luxury Reimagined"
      title="Escape to Elegance"
      description="Discover a sanctuary of comfort and style in the heart of the city. Experience world-class hospitality tailored to your desires."
      primaryButton={{
        text: "Reserve Your Stay",
        href: "#contact",
      }}
      secondaryButton={{
        text: "View Suites",
        href: "#features",
      }}
      items={[
        {
          imageSrc: "https://pixabay.com/get/g7424023d391dcfd74704db1311cd3ec7f2a727866cf1ad67a3cdb88ee46419bd599de42fc8adb8d0204ea472cc2fb288201ab78d69d6598672d70b3225e42930_1280.jpg",
        },
        {
          imageSrc: "https://pixabay.com/get/g52487dacb493685996dc7e0883fdbd7280404e72a2cab3630bf002bc3f6d9afd5f8b3a94e44cfb3f572fd11ded3f69cc23e64442b1d68303522e502df3ec384b_1280.jpg",
        },
        {
          imageSrc: "https://pixabay.com/get/g45ec4ec43f20c0d51a65d8298e887559a76b5ddaa80681c835519dcb06bac67b51a530948f18cc42088c52b15e66ee8151d3c1def20224037f8414f3e930df9e_1280.jpg",
        },
        {
          imageSrc: "https://pixabay.com/get/g462a7fcff204f0d8ff339ea015633018bb2f555c5b4ce5777a874bdd8a2bbfe30d9635c2be11cfd10fcca951fe020f911a6ad083172c31c94c9fb30cbcd8f33b_1280.jpg",
        },
        {
          imageSrc: "https://pixabay.com/get/g1cf9493ff91d748711c416937cc9e79622b5cfc90aa1cd018c460814634c5ff23bf0442582916d7df3770f9a3cf0216596f353d4e2a9ed926ad39c4d96bd6cc4_1280.jpg",
        },
        {
          imageSrc: "https://pixabay.com/get/gb74b8b98afe6d0a4132f4fb8442cea1fedcd11271b055482096e6b072ed0f0bc1c9b9b8fa94419cd1bf8d261b126725583f0a12913853975adaf6c28f20458a8_1280.jpg",
        },
      ]}
    />
  </div>

  <div id="about" data-section="about">
      <AboutTextSplit
      title="A Legacy of Hospitality"
      descriptions={[
        "Nestled in the historic district, our hotel combines classic architecture with modern amenities. Since our inception, we have been dedicated to providing unparalleled service and comfort.",
        "Our team curates every detail of your stay, ensuring that every guest experiences a truly unforgettable journey of relaxation and rejuvenation.",
      ]}
    />
  </div>

  <div id="features" data-section="features">
      <FeaturesTaggedCards
      tag="Our Suites"
      title="Rooms & Amenities"
      description="Indulge in our carefully crafted spaces designed for ultimate relaxation and productivity."
      items={[
        {
          tag: "Signature",
          title: "Royal Suite",
          description: "Spacious suite with city views and private terrace.",
          imageSrc: "https://pixabay.com/get/ga5fae3c8528a31c9b8d2144ac3f00684e1e48f110ed613b8bd275f7b2b1ad9c3dc6bdfc8bb55e0c949ee2d79ad339ebc86cf4dd6065234b6d930d1b54fa5d1bd_1280.jpg",
        },
        {
          tag: "Premium",
          title: "Deluxe Room",
          description: "Comfortable room featuring king-sized bed and lounge.",
          imageSrc: "https://pixabay.com/get/gb38e1fd52c73fbbaaf58d16d3644b8c0e9846a90616a7904f1fbdfc1f76f9d846b2e5be9bd5977fb4220a1143c7bc1dadade29106fd70529f81ae6b301dc8899_1280.jpg",
        },
        {
          tag: "Exclusive",
          title: "Penthouse",
          description: "The ultimate luxury experience with panoramic views.",
          imageSrc: "https://pixabay.com/get/g65f32fa6c6461e585803150da6c0f41817efa3e4ce07a1ba2b9a4ed625cef97aa61cb86e4aed38245223f89adec7c23f16e45f19dc8802c96d85afdac635d982_1280.jpg",
        },
      ]}
    />
  </div>

  <div id="pricing" data-section="pricing">
      <PricingHighlightedCards
      tag="Room Rates"
      title="Find Your Stay"
      description="Flexible rates designed to match your travel needs."
      plans={[
        {
          tag: "Standard",
          price: "$299/night",
          description: "Perfect for a quick escape.",
          features: [
            "Complimentary breakfast",
            "Free Wi-Fi",
            "Daily housekeeping",
          ],
          primaryButton: {
            text: "Book Now",
            href: "#contact",
          },
        },
        {
          tag: "Popular",
          price: "$450/night",
          description: "Best for relaxing getaways.",
          features: [
            "All standard features",
            "Spa access",
            "Airport pickup",
          ],
          highlight: "Best Value",
          primaryButton: {
            text: "Book Now",
            href: "#contact",
          },
        },
        {
          tag: "Premium",
          price: "$800/night",
          description: "Luxury redefined.",
          features: [
            "Full suite access",
            "Concierge services",
            "Private dining",
          ],
          primaryButton: {
            text: "Book Now",
            href: "#contact",
          },
        },
      ]}
    />
  </div>

  <div id="metrics" data-section="metrics">
      <MetricsFeatureCards
      tag="Our Impact"
      title="Hospitality Excellence"
      description="Numbers reflect our commitment to excellence and guest satisfaction."
      metrics={[
        {
          value: "15+",
          title: "Years of Excellence",
          features: [
            "Proven legacy",
            "Trusted service",
            "Award winning",
          ],
        },
        {
          value: "10k+",
          title: "Happy Guests",
          features: [
            "High satisfaction",
            "Loyal returning guests",
            "Global reach",
          ],
        },
        {
          value: "98%",
          title: "Guest Satisfaction",
          features: [
            "Excellence in service",
            "Luxury amenities",
            "Comfort prioritized",
          ],
        },
      ]}
    />
  </div>

  <div id="team" data-section="team">
      <TeamGlassCards
      tag="The Experts"
      title="Meet Our Team"
      description="Passionate individuals committed to your perfect stay."
      members={[
        {
          name: "Alice Johnson",
          role: "General Manager",
          imageSrc: "https://pixabay.com/get/g32abcd1446ee384f903bb4d28052193c0adbc7b693fe8e4dfea1230c3737870d12d090292fb073d24240e3901600873c080c2199c6f83fde14a13887ba9a1bc2_1280.jpg",
        },
        {
          name: "Marcus Thorne",
          role: "Head Concierge",
          imageSrc: "https://pixabay.com/get/ge822dc857da34bbcf1ef7994360df144b826271226f8870a4e6f3c6ba3ad77b126e90f06253a340e6686592683ff9deaf45eac9506028d16a2829149b3189e71_1280.jpg",
        },
        {
          name: "Elena Rossi",
          role: "Executive Chef",
          imageSrc: "https://pixabay.com/get/g7575207d22d883e0920fb10f5b446e066e0f3cf31b1ab5cc468d00f2bd54595f29c240cfcbab0a6b36d46a0bff9a2df7c83ae4df531c5f16311122a7c5a72f66_1280.jpg",
        },
      ]}
    />
  </div>

  <div id="testimonial" data-section="testimonial">
      <TestimonialAvatarCard
      tag="Guest Reviews"
      title="Trusted by Travelers"
      avatars={[
        {
          name: "Sarah Miller",
          imageSrc: "https://pixabay.com/get/g2e251eeab33e9126cede95dd511d3ac0c89665802b916007058fd78b277f7065c8fbab70318c68e122830248d6915f0019c2cca5fe20a349c49808dc76e9c6b4_1280.jpg",
        },
        {
          name: "James Smith",
          imageSrc: "https://pixabay.com/get/g3c9472d2392338cf8f45b081e379409823078e363be3ec8fbd27c634e1de27871366296c12382c214e506bd197ce380fcab94440ee0e28196fa969f98b5cade1_1280.jpg",
        },
        {
          name: "Liam Brown",
          imageSrc: "https://pixabay.com/get/g5e47a32e3b92b8aedb599592a1d8b66967d26f489b430f25f6289aceaf5a5f90034c8047b0bfcc70a04ac8b8d11f755caf8156b6cac33f4dd67cd3ad74120286_1280.jpg",
        },
        {
          name: "Olivia Wilson",
          imageSrc: "https://pixabay.com/get/gfd22b793784433ba96ce012591c821db3325f3bf157ffff60554439e605adf1068d5eadfc704af21664c7b62f8e260f48ae43e50d53903c8e55087bfa274e774_1280.jpg",
        },
        {
          name: "Robert Chen",
          imageSrc: "https://pixabay.com/get/gb20dcd192054ef6660339ee6b6ba85a86f9c8c32776b85d5844cafe484598c095e729fc6fdab09ccc3223c6f6a48b1050bdc2f171866cd72fc46e46bff89d5df_1280.jpg",
        },
      ]}
    />
  </div>

  <div id="social-proof" data-section="social-proof">
      <SocialProofMarquee
      tag="Featured In"
      title="Trusted Partners"
      description="Recognized by industry leaders worldwide."
      names={[
        "TravelDaily",
        "LuxuryVoyage",
        "GlobalHospitality",
        "CityEscapes",
        "UrbanLiving",
        "NomadLife",
        "EliteTravel",
      ]}
    />
  </div>

  <div id="faq" data-section="faq">
      <FaqTwoColumn
      tag="Support"
      title="Common Questions"
      description="We are here to answer everything you need to know."
      items={[
        {
          question: "What is the check-in time?",
          answer: "Check-in begins at 3:00 PM.",
        },
        {
          question: "Do you offer airport transport?",
          answer: "Yes, we provide luxury airport pickup upon request.",
        },
        {
          question: "Are pets allowed?",
          answer: "We are a pet-friendly establishment.",
        },
        {
          question: "Is breakfast included?",
          answer: "Complimentary breakfast is served daily.",
        },
      ]}
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactCta
      tag="Booking"
      text="Ready to plan your escape? We look forward to welcoming you."
      primaryButton={{
        text: "Contact Us",
        href: "mailto:hello@grandhotel.com",
      }}
      secondaryButton={{
        text: "Call Now",
        href: "tel:1234567890",
      }}
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterSimpleCard
      brand="Grand Hotel"
      columns={[
        {
          title: "Discover",
          items: [
            {
              label: "Rooms",
              href: "#features",
            },
            {
              label: "Offers",
              href: "#pricing",
            },
          ],
        },
        {
          title: "Support",
          items: [
            {
              label: "FAQ",
              href: "#faq",
            },
            {
              label: "Contact",
              href: "#contact",
            },
          ],
        },
      ]}
      copyright="© 2024 Grand Hotel. All rights reserved."
      links={[
        {
          label: "Privacy",
          href: "#",
        },
        {
          label: "Terms",
          href: "#",
        },
      ]}
    />
  </div>
    </>
  );
}
