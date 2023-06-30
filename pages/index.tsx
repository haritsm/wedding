import React, { useState, useEffect } from "react";
import ProductCategories from '../modules/views/ProductCategories';
import ProductSmokingHero from '../modules/views/ProductSmokingHero';
import AppFooter from '../modules/views/AppFooter';
import ProductHero from '../modules/views/ProductHero';
import ProductShowcase from '../modules/views/ProductShowcase';
import Facilities from '../modules/views/Facilities';
import ProductValues from '../modules/views/ProductValues';
import ProductHowItWorks from '../modules/views/ProductHowItWorks';
import ProductCTA from '../modules/views/ProductCTA';
import AppAppBar from '../modules/views/AppAppBar';
import withRoot from '../modules/withRoot';
import Metatags from "../modules/components/SEO/Metatags";
import SimpleSlide from '../modules/views/Banner';
import BankTransfer from "../modules/views/BankTransfer";
import UcapanSelamat from "../modules/views/UcapanSelamat";
import Footer from "../modules/views/Footer";

function Index() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000)
  }, []);

  return (
    <React.Fragment>
      <Metatags
        title="The Krissy & Harits Wedding!"
      />
      {/* <AppAppBar /> */}

      <SimpleSlide />

      {loading == false &&
      <>
        <ProductHero />
        <ProductShowcase />
        <Facilities />
        <ProductCategories />
        <BankTransfer />
        <UcapanSelamat />
        <Footer />
      </>
      }
      
    </React.Fragment>
  );
}

export default withRoot(Index);
