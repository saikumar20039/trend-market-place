
import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">About ShopWave</h1>
        
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">Our Story</h2>
          <p className="text-gray-700 mb-4 leading-relaxed">
            ShopWave was founded in 2023 with a simple mission: to provide high-quality products at competitive prices with exceptional customer service. What started as a small online store has grown into a trusted e-commerce destination for thousands of customers worldwide.
          </p>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Our journey began when our founder identified a gap in the market for an online shopping experience that truly prioritized the customer. We've built our business on the principles of transparency, quality, and service, and we continue to uphold these values in everything we do.
          </p>
        </section>
        
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
          <p className="text-gray-700 mb-4 leading-relaxed">
            At ShopWave, our mission is to revolutionize the online shopping experience by offering a curated selection of high-quality products that enhance our customers' lives. We believe that shopping should be enjoyable, straightforward, and reliable. That's why we're committed to providing:
          </p>
          <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4 pl-4">
            <li>Carefully selected products that meet our strict quality standards</li>
            <li>Transparent pricing with no hidden fees</li>
            <li>Fast, reliable shipping and hassle-free returns</li>
            <li>Exceptional customer service at every step of your journey</li>
            <li>A secure, user-friendly shopping experience</li>
          </ul>
        </section>
        
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">Our Team</h2>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Behind ShopWave is a dedicated team of professionals who are passionate about e-commerce and customer satisfaction. Our team combines expertise in product sourcing, quality control, logistics, customer service, and web development to create a seamless shopping experience from start to finish.
          </p>
          <p className="text-gray-700 mb-4 leading-relaxed">
            We're a diverse group of individuals united by our commitment to excellence and our belief that online shopping should be a pleasure, not a chore. Each member of our team plays a vital role in ensuring that ShopWave delivers on its promises to customers.
          </p>
        </section>
        
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">Our Commitment</h2>
          <p className="text-gray-700 mb-4 leading-relaxed">
            We're committed to sustainability and ethical business practices. We work with suppliers who share our values and are taking steps to reduce our environmental footprint. From eco-friendly packaging to supporting ethical manufacturing, we're constantly looking for ways to make a positive impact.
          </p>
          <p className="text-gray-700 leading-relaxed">
            We also believe in giving back to the community. A portion of our profits goes to various charitable organizations that support education, environmental conservation, and social welfare.
          </p>
        </section>
        
        <div className="bg-navy-50 p-8 rounded-lg">
          <h2 className="text-2xl font-bold mb-4 text-center">Start Shopping Today</h2>
          <p className="text-gray-700 text-center mb-6">
            Experience the ShopWave difference and join thousands of satisfied customers.
          </p>
          <div className="flex justify-center">
            <Link to="/products">
              <Button className="bg-navy-600 hover:bg-navy-700">
                Browse Products
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
