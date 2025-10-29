"use client"

import { ThemeProvider } from "@/providers/ThemeProvider";
import NavbarLayoutFloatingInline from '@/components/navbar/NavbarLayoutFloatingInline';
import HeroBillboard from '@/components/sections/hero/HeroBillboard';
import FeatureCardThree from '@/components/sections/feature/featureCardThree/FeatureCardThree';
import ProductCardTwo from '@/components/sections/product/ProductCardTwo';
import MetricCardOne from '@/components/sections/metrics/MetricCardOne';
import TestimonialCardThree from '@/components/sections/testimonial/TestimonialCardThree';
import SocialProofTwo from '@/components/sections/socialProof/SocialProofTwo';
import FaqSplitText from '@/components/sections/faq/FaqSplitText';
import ContactSplit from '@/components/sections/contact/ContactSplit';
import FooterBase from '@/components/sections/footer/FooterBase';
import { Award, Calendar, Flower, Heart, MessageCircle, Sparkles, Star, Users } from "lucide-react";

export default function Home() {
  return (
    <ThemeProvider
      defaultButtonVariant="text-stagger"
      defaultTextAnimation="background-highlight"
      borderRadius="rounded"
    >
      <div id="nav" data-section="nav">
        <NavbarLayoutFloatingInline
          navItems={[
            { name: "Workshops", id: "feature" },
            { name: "About", id: "about" },
            { name: "Testimonials", id: "testimonial" },
            { name: "Contact", id: "contact" }
          ]}
          brandName="Mossart"
          button={{
            text: "Book Now",
            href: "contact"
          }}
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroBillboard
          title="Create Beautiful Botanical Art"
          description="Join our hands-on flower workshops and discover the art of modern floral design in a minimalist, inspiring environment"
          tag="Workshops"
          tagIcon={Flower}
          buttons={[
            { text: "Book Workshop", href: "contact" },
            { text: "View Classes", href: "feature" }
          ]}
          imageSrc="https://images.pexels.com/photos/5480020/pexels-photo-5480020.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
          imageAlt="Modern flower arrangement workshop with hands crafting beautiful botanical designs"
        />
      </div>

      <div id="feature" data-section="feature">
        <FeatureCardThree
          title="Our Workshop Collection"
          description="Discover our curated selection of botanical workshops designed for all skill levels"
          tag="Featured"
          tagIcon={Sparkles}
          features={[
            {
              id: "01",
              title: "Terrarium Creation",
              description: "Learn to build stunning glass terrariums with carefully selected plants and decorative elements",
              imageSrc: "https://images.pexels.com/photos/7223254/pexels-photo-7223254.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Modern terrarium workshop with glass containers and plants"
            },
            {
              id: "02",
              title: "Flower Crown Workshop",
              description: "Craft elegant flower crowns using fresh blooms and sustainable techniques",
              imageSrc: "https://images.pexels.com/photos/5414028/pexels-photo-5414028.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Botanical flower crown making workshop with fresh flowers"
            },
            {
              id: "03",
              title: "Succulent Arrangements",
              description: "Design minimalist succulent displays perfect for modern living spaces",
              imageSrc: "https://images.pexels.com/photos/796602/pexels-photo-796602.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Succulent arrangement workshop with modern minimalist design"
            }
          ]}
          layout="default"
        />
      </div>

      <div id="product" data-section="product">
        <ProductCardTwo
          title="Workshop Experiences"
          description="Choose from our variety of hands-on botanical workshops"
          tag="Available"
          tagIcon={Calendar}
          products={[
            {
              id: "1",
              brand: "Mossart Studio",
              name: "Beginner Terrarium Workshop",
              price: "$85",
              rating: 5,
              reviewCount: "127",
              imageSrc: "https://images.pexels.com/photos/7223254/pexels-photo-7223254.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Beginner terrarium workshop experience"
            },
            {
              id: "2",
              brand: "Mossart Studio",
              name: "Advanced Floral Design",
              price: "$120",
              rating: 5,
              reviewCount: "89",
              imageSrc: "https://images.pexels.com/photos/5414028/pexels-photo-5414028.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Advanced floral design workshop"
            },
            {
              id: "3",
              brand: "Mossart Studio",
              name: "Succulent Garden Workshop",
              price: "$95",
              rating: 5,
              reviewCount: "156",
              imageSrc: "https://images.pexels.com/photos/796602/pexels-photo-796602.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Succulent garden workshop experience"
            }
          ]}
          layout="default"
        />
      </div>

      <div id="metric" data-section="metric">
        <MetricCardOne
          title="Our Impact"
          description="Creating beautiful experiences and lasting memories through botanical art"
          tag="Achievements"
          tagIcon={Award}
          metrics={[
            {
              id: "1",
              value: "500+",
              title: "Workshops",
              description: "Successful botanical workshops hosted",
              icon: Users
            },
            {
              id: "2",
              value: "98%",
              title: "Satisfaction",
              description: "Customer satisfaction rate",
              icon: Heart
            },
            {
              id: "3",
              value: "2000+",
              title: "Creations",
              description: "Beautiful arrangements crafted",
              icon: Flower
            }
          ]}
          layout="default"
        />
      </div>

      <div id="testimonial" data-section="testimonial">
        <TestimonialCardThree
          title="What Our Students Say"
          description="Real feedback from our workshop participants"
          tag="Reviews"
          tagIcon={MessageCircle}
          testimonials={[
            {
              id: "1",
              name: "Sarah",
              handle: "@sarah_creates",
              testimonial: "The terrarium workshop was absolutely magical. The attention to detail and guidance was exceptional. Highly recommend!",
              imageSrc: "https://images.pexels.com/photos/8558897/pexels-photo-8558897.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Portrait of Sarah, workshop participant"
            },
            {
              id: "2",
              name: "Emma",
              handle: "@emma_botanical",
              testimonial: "I never thought I could create something so beautiful. The instructor was patient and the environment was so inspiring.",
              imageSrc: "https://images.pexels.com/photos/6647504/pexels-photo-6647504.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Portrait of Emma, workshop participant"
            },
            {
              id: "3",
              name: "Maya",
              handle: "@maya_designs",
              testimonial: "Perfect blend of creativity and technique. Learned so much and left with a gorgeous arrangement. Will definitely return!",
              imageSrc: "https://images.pexels.com/photos/7205899/pexels-photo-7205899.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Portrait of Maya, workshop participant"
            },
            {
              id: "4",
              name: "Lisa",
              handle: "@lisa_botanicals",
              testimonial: "The most relaxing and fulfilling workshop experience. Beautiful space, wonderful people, amazing results.",
              imageSrc: "https://images.pexels.com/photos/7776140/pexels-photo-7776140.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Portrait of Lisa, workshop participant"
            }
          ]}
          layout="default"
        />
      </div>

      <div id="socialProof" data-section="socialProof">
        <SocialProofTwo
          title="Featured In"
          description="Recognized by leading design and lifestyle publications"
          tag="Media"
          tagIcon={Star}
          logos={["/placeholders/placeholder1.webp", "/placeholders/placeholder1.webp", "/placeholders/placeholder1.webp", "/placeholders/placeholder1.webp", "/placeholders/placeholder1.webp"]}
          layout="default"
        />
      </div>

      <div id="faq" data-section="faq">
        <FaqSplitText
          sideTitle="Frequently Asked Questions"
          sideDescription="Everything you need to know about our workshops"
          faqs={[
            {
              id: "1",
              title: "Do I need any experience with plants or flowers?",
              content: "No experience necessary! Our workshops are designed for all skill levels, from complete beginners to those with some botanical knowledge."
            },
            {
              id: "2",
              title: "What materials are included in the workshop fee?",
              content: "All materials are provided including plants, containers, tools, and decorative elements. You'll leave with your completed creation."
            },
            {
              id: "3",
              title: "How long do the workshops typically last?",
              content: "Most workshops run 2-3 hours, giving you plenty of time to learn techniques and create your botanical masterpiece."
            },
            {
              id: "4",
              title: "Can I book private workshops for groups?",
              content: "Yes! We offer private group workshops perfect for birthday parties, corporate events, or special celebrations. Contact us for details."
            }
          ]}
          textPosition="left"
          animationType="smooth"
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactSplit
          tag="Book Now"
          title="Ready to Create Something Beautiful?"
          description="Join our next workshop and discover the joy of botanical art in a welcoming, inspiring environment"
          tagIcon={Calendar}
          imageSrc="https://images.pexels.com/photos/7858874/pexels-photo-7858874.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
          imageAlt="Modern flower workshop studio interior with plants and natural lighting"
          mediaPosition="right"
          inputPlaceholder="Enter your email"
          buttonText="Reserve Spot"
          termsText="By signing up, you'll receive workshop updates and botanical tips. Unsubscribe anytime."
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterBase
          columns={[
            {
              title: "Workshops",
              items: [
                { label: "Terrarium Classes", href: "feature" },
                { label: "Flower Crowns", href: "feature" },
                { label: "Succulent Design", href: "feature" },
                { label: "Private Groups", href: "contact" }
              ]
            },
            {
              title: "About",
              items: [
                { label: "Our Story", href: "about" },
                { label: "Instructors", href: "about" },
                { label: "Studio Space", href: "about" },
                { label: "Reviews", href: "testimonial" }
              ]
            },
            {
              title: "Support",
              items: [
                { label: "FAQ", href: "faq" },
                { label: "Contact", href: "contact" },
                { label: "Gift Cards", href: "contact" },
                { label: "Cancellation", href: "faq" }
              ]
            }
          ]}
          copyrightText="© 2025 | Mossart Studio"
        />
      </div>
    </ThemeProvider>
  );
}