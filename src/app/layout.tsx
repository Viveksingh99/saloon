/* eslint-disable @next/next/no-css-tags */
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import React from 'react';
import Head from 'next/head'; // Import the Head component
import "./globals.css";
import Header from "@/components/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Book Online Saloon At Home Services With Saloon App",
  description: "Saloon",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        <meta />
        <meta http-equiv="content-type" content="text/html; charset=utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0, shrink-to-fit=no" />
        <meta name="theme-color" content="#1A73E9" />
        <meta http-equiv='X-UA-Compatible' content='IE=edge' />
        <meta name="web-author" content="web-author-name" />
        <meta name="googlebot" content="all" />
        <meta name="revisit-after" content="3 days" />
        <meta name="copyright" content="Site Name" />
        <meta name="language" content="English" />
        <meta name="reply-to" content="info@imgglobalinfotech.com" />
        <meta name="distribution" content="Global" />
        <meta name="rating" content="General" />
        <meta name="twitter:site" content="@miradontsoa" />
        <meta name="twitter:creator" content="@miradontsoa" />
        <meta name="twitter:card" content="summary" />
        <meta property="fb:app_id" content="0" />
        <meta property="og:type" content="website" />
        <meta property="og:image:type" content="image/jpg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta name="twitter:title" content="SALOON" />
        <meta name="twitter:description" content="Discrption here" />
        <meta name="twitter:image" content="assets/img/logo.png" />
        <meta property="og:url" content="" />
        <meta property="og:title" content="SALOON" />
        <meta property="og:description" content="Discrption here" />
        <meta property="og:image" content="assets/img/logo/favicon-32x32.svg" />
        <meta property="og:image:secure_url" content="assets/img/logo/favicon-32x32.svg" />
        <link rel="shortcut icon" type="image/x-icon" href="assets/img/logo/favicon-32x32.svg" />
        <link rel="icon" type="image/x-icon" href="assets/img/logo/favicon-32x32.svg" />
        <meta name="classification" content="SALOON" />
        <link rel="canonical" href="" />
        <link rel="stylesheet" href="assets/css/bootstrap.min.css" />
        <link rel="stylesheet" href="assets/libs/swiper-slider/swiper-bundle.min.css" />
        <link rel="stylesheet" href="assets/css/style.min.css" />
        <title>SALOON | Home</title>
        <meta name="title" content="SALOON" />
        <meta name="discrption" content="Discrption here" />
        <meta name="keyword" content="Keyword here" />
      </Head>
      <body className={inter.className}>
        <Header/>
        {children}
      </body>
    </html>
  );
}
