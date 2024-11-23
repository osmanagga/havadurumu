import React, { ReactNode } from 'react';
import Head from 'next/head';
import { motion } from 'framer-motion';

interface LayoutProps {
  children: ReactNode;
  title: string;
  description: string;
  weatherCondition: string;
}

export default function Layout({ children, title, description, weatherCondition }: LayoutProps) {
  const getBackgroundColor = (condition: string) => {
    switch (condition.toLowerCase()) {
      case 'clear':
        return 'from-blue-400 to-blue-200';
      case 'clouds':
        return 'from-gray-400 to-gray-200';
      case 'rain':
        return 'from-blue-700 to-blue-500';
      case 'snow':
        return 'from-blue-100 to-white';
      default:
        return 'from-blue-300 to-blue-100';
    }
  };

  return (
    <div className={`min-h-screen bg-gradient-to-br ${getBackgroundColor(weatherCondition)}`}>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
      </Head>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="container mx-auto px-4 py-8"
      >
        {children}
      </motion.div>
    </div>
  );
}

