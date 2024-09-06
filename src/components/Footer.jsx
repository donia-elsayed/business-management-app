import React from 'react';
import * as Yup from 'yup';
import { useFormik } from 'formik';
import toast, { Toaster } from 'react-hot-toast';
import FacebookIcon from '../assets/icons/facebook.svg';
import TwitterIcon from '../assets/icons/twitter.svg';
import InstagramIcon from '../assets/icons/instagram.svg';
import LinkedinIcon from '../assets/icons/linkedin.svg';

const SocialMediaLink = ({ href, src, alt, label }) => (
  <a href={href} target="_blank" rel="noopener noreferrer" aria-label={label} className="hover:text-gray-300">
    <img src={src} alt={alt} className="h-6 w-6" />
  </a>
);

const Footer = () => {
  const validationSchema = Yup.object({
    email: Yup.string().email('Invalid email address').required('Email is required'),
  });

  const formik = useFormik({
    initialValues: {
      email: '',
    },
    validationSchema: validationSchema,
    onSubmit: (values, { resetForm }) => {
      // Simulate a successful subscription
      toast.success('Subscribed successfully!');
      resetForm();
    },
  });

  return (
    <footer className="bg-gradient-to-l from-[#0072ff] to-[#00c6ff] text-white py-8 border-t-[0.5px] border-gray-100">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between">
          <div className="w-full md:w-1/4 mb-6 md:mb-0">
            <h2 className="text-lg font-bold mb-4">About Us</h2>
            <p className="text-sm">We are a leading e-commerce platform providing top-notch services and products to our customers. Our mission is to deliver excellence in every aspect of our business.</p>
          </div>
          <div className="w-full md:w-1/4 mb-6 md:mb-0">
            <h2 className="text-lg font-bold mb-4">Follow Us</h2>
            <div className="flex space-x-4">
              <SocialMediaLink href="https://facebook.com" src={FacebookIcon} alt="Facebook" label="Facebook" />
              <SocialMediaLink href="https://twitter.com" src={TwitterIcon} alt="Twitter" label="Twitter" />
              <SocialMediaLink href="https://instagram.com" src={InstagramIcon} alt="Instagram" label="Instagram" />
              <SocialMediaLink href="https://linkedin.com" src={LinkedinIcon} alt="LinkedIn" label="LinkedIn" />
            </div>
          </div>
          <div className="w-full md:w-1/4">
            <h2 className="text-lg font-bold mb-4">Newsletter</h2>
            <form onSubmit={formik.handleSubmit}>
              <label htmlFor="email" className="sr-only">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Enter your email"
                className="w-full p-2 mb-2 text-black rounded"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.email}
              />
              {formik.touched.email && formik.errors.email ? (
                <div className="text-red-500 text-sm">{formik.errors.email}</div>
              ) : null}
              <button type="submit" className="w-full p-2 bg-white text-[#0072ff] rounded hover:bg-gray-50">Subscribe</button>
            </form>
          </div>
        </div>
        <div className="mt-8 text-center">
          <p>© 2024 Business Management. All rights reserved.</p>
        </div>
      </div>
      <Toaster />
    </footer>
  );
};

export default Footer;
