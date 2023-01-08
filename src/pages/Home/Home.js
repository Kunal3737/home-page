import React from "react";
import "./Home.css";
import SearchBar from "../../components/SearchBar/SearchBar";
import ILLUSTRATION from "../../assets/ILLUSTRATION.png";
import Button from "../../components/Button/Button";
import Group117 from "../../assets/Group 117.png";
import dungeon from "../../assets/dungeon.png";
import Vector2 from "../../assets/Vector-2.png";
import Vector1 from "../../assets/Vector-1.png";
import ILLUSTRATION031 from "../../assets/ILLUSTRATION 03  1.png";
import Group2 from "../../assets/Group-2.png";
import Group from "../../assets/Group.png";
import Group1 from "../../assets/Group-1.png";
import Vector from "../../assets/Vector.png";
import Vector4 from "../../assets/Vector-4.png";
import Vector3 from "../../assets/Vector-3.png";
import Group34 from "../../assets/Group 34.png";
import CompanyRegCard from "../../components/CompanyRegCard/CompanyRegCard";
import CompanyBenefitsCard from "../../components/CompanyBenefitsCard/CompanyBenefitsCard";
import PaymentCard from "../../components/PaymentCard/PaymentCard";
import BlogTitle from "../../components/BlogTitle/BlogTitle";
import BlogArticle from "../../components/BlogArticle/BlogArticle";
import Comment from "../../components/Comment/Comment";
import FooterItem from "../../components/FooterItem/FooterItem";
import SocialMediaIcons from "../../components/SocialMediaIcons/SocialMediaIcons";
import Copyright from "../../components/Copyright/Copyright";
import useWindowWidth from "../../utilities/useWindowWidth";
import CardCarousel from "../../components/CardCarousel/CardCarousel";

const featureList = [
  "Attestation Charges",
  "Registered Agent",
  "Registered Office",
  "Varal Administrative",
  "Preparing Statutory File",
  "Liasing with Registration Authorities",
  "Due Diligence Appraisal",
  "Keeping The Register",
  "Seal Charges",
  "Certificate of Good Standing",
];

const servicesList = [
  "Products",
  "Solutions",
  "Assurance",
  "FAQ",
  "Working at Varal-Singhania",
];

const policiesList = ["Privacy Policy", "Terms & Conditions"];

const aboutList = ["About Us", "Contact Us"];

const addressList = [
  "608 One Lake Plaza, Cluster T,",
  "Al Sarayat Street, Jumeirah",
  "Lake Towers",
  "Dubai",
  "United Arab Emirates",
];

const officeDetails = [
  "Office Hours: Sunday to",
  "Thursday 8:30 AM to 6:30 PM",
  "[GMT+4]",
  "M: +971 55 794 2016",
  "O: +971 4 447 2061",
];

const subscribeNowText = [
  "Sunbscribe now to receive our",
  "Newsletters about amazing",
  "opportunities in Dubai",
];

const Home = () => {
  const { width } = useWindowWidth();
  return (
    <>
      <section className="home-wrapper">
        <SearchBar placeholder="Search a Term | Topic" />
        <div className="mobile-left-panel-header">
          <div className="claim-quote">Claim a Free Quote</div>
          <h1 className="get-started--text">
            <span className="span-get-started--text">Get started</span>
            &nbsp;on fulfilling your Dubai or UAE dream.
          </h1>
        </div>
        <section className="get-started-wrapper">
          <div className="left-panel">
            <div className="left-panel-header">
              <div className="claim-quote">Claim a Free Quote</div>
              <h1 className="get-started--text">
                <span className="span-get-started--text">Get started</span>
                &nbsp;on fulfilling your Dubai or UAE dream.
              </h1>
            </div>
            <div className="uae-offshore--text">UAE & Offshore Company</div>
            <div className="uae-subtext">
              We provide you with information about UAE or Offshore Company
              Registration & help you setup your company with a bank account and
              visas.
            </div>
            <div className="get-started--footer-action">
              <Button
                size="lg"
                color="primary"
                content="Start a Company"
                joinFrom="right"
              />
              <Button
                size="lg"
                color="outline"
                content="Renew a Company"
                joinFrom="left"
              />
            </div>
          </div>
          <div className="right-panel">
            <img src={ILLUSTRATION} className="study-image" alt="studying" />
          </div>
        </section>
        <section className="watch-video">
          <div className="watch-video-content">
            Watch the video about UAE or Offshore Company Registration &nbsp;
            <span className="play-icon">
              <img src={Group117} alt="play-icon" />
            </span>
          </div>
        </section>
        <section className="mission-dedication">
          <h2 className="dedicated--text">
            <span>Dedicated</span>
          </h2>
          <h2>
            <span>to our mission we are</span>
          </h2>
          <div className="mission-dedication--subtext">
            Our services include Company Formation & Renewals, Trust &
            Fiduciary, Tax Residency Setup With Family, Bank Accounts, Remote
            Management, Stock Trading Platforms, Ownership Solutions.
          </div>
        </section>
        <section className="company-reg--wrapper">
          <CompanyRegCard
            image={dungeon}
            title="UAE Free Zone Company"
            subTitle="Your registration agent, will answer all
            of your questions and help you to reach
            a conclusion that meets your objectives
            of investing in the UAE."
          />
          <CompanyRegCard
            image={Vector2}
            title="Dubai Local Companies"
            subTitle="The Dubai LLC formation documents
            are actually articles of organization or a
            certificate of organization. You can get
            yours today."
          />
          <CompanyRegCard
            image={Vector1}
            title="Offshore Companies"
            subTitle="You can register an offshore company
            and open its bank account in Dubai.
            Your agent will help you along all the
            process."
          />
        </section>
        <section className="company-benefits">
          <div className="company-benefits--left-panel">
            <div className="company-benefits-title--wrapper">
              <h3 className="company-benefits-title">
                Learn the ways in which you can benefit from a UAE/Offshore
                Company. Then get started on fulfilling your UAE dream.
              </h3>
              <div className="company-benefits--action">Claim a Free Quote</div>
            </div>
            <div>
              <CompanyBenefitsCard
                image={ILLUSTRATION031}
                title="Bank Account Setup"
                subTitle="There are many banks in the United Arab Emirates [UAE]. Both locally owned and branches of multinational ones. Foreign banks adjust according to their parent's strategies and have changed local requirements overnight in the past. But we are here to help you."
              />
              <CompanyBenefitsCard
                image={Group2}
                title="UAE Company Visas"
                subTitle="Your application for visas is critical especially if you intend to move to Dubai. This becomes even more urgent if your family will also move with you. All the paperwork is done on your behalf smoothly so that you may only focus on doing what matters most to you."
              />
            </div>
          </div>
          <div className="company-benefits--right-panel">
            <CompanyBenefitsCard
              image={Group}
              title="Advice & Guidance"
              subTitle="All activities in the UAE are licensed. Whether manufacturing, finance, trading, marketing, consultancy or restaurants In some countries only manufacturing is licensed. In others there is a threshold below which business are encouraged. Get our insightfull guidance today."
            />
            <CompanyBenefitsCard
              image={Group1}
              title="Registration Document Perparation"
              subTitle="Several documents must be prepared to start the process of registering a new company in the United Arab Emirates. Be it a Dubai local company, a free zone one or an offshore entity. Your registered agent is dedicated to get this done for you for a seamless process."
            />
            <div className="company-benefits-title--wrapper-bottom">
              <h3 className="company-benefits-title">
                We have gathered a team of professionals to craft adequate
                services you can rely on for a friction free setup in UAE.
              </h3>
              <div className="company-benefits--action2">
                More about our services <img src={Vector} alt="right-arrow" />
              </div>
            </div>
          </div>
        </section>

        <section className="company-benefits--mobile">
          <div className="company-benefits--left-panel">
            <div className="company-benefits-title--wrapper">
              <h3 className="company-benefits-title">
                Learn the ways in which you can benefit from a UAE/Offshore
                Company. Then get started on fulfilling your UAE dream.
              </h3>
              <div className="company-benefits--action">Claim a Free Quote</div>
            </div>
            <div>
              <CompanyBenefitsCard
                image={Group}
                title="Advice & Guidance"
                subTitle="All activities in the UAE are licensed. Whether manufacturing, finance, trading, marketing, consultancy or restaurants In some countries only manufacturing is licensed. In others there is a threshold below which business are encouraged. Get our insightfull guidance today."
              />
              <CompanyBenefitsCard
                image={ILLUSTRATION031}
                title="Bank Account Setup"
                subTitle="There are many banks in the United Arab Emirates [UAE]. Both locally owned and branches of multinational ones. Foreign banks adjust according to their parent's strategies and have changed local requirements overnight in the past. But we are here to help you."
              />
            </div>
          </div>
          <div className="company-benefits--right-panel">
            <div className="company-benefits-title--wrapper-bottom">
              <h3 className="company-benefits-title">
                We have gathered a team of professionals to craft adequate
                services you can rely on for a friction free setup in UAE.
              </h3>
              <div className="company-benefits--action2">
                More about our services <img src={Vector} alt="right-arrow" />
              </div>
            </div>
          </div>
        </section>
        <section className="affordable-pricing--text">
          <h1>
            Most&nbsp;
            <span className="popular-pricing--underline">
              popular affordable pricing
            </span>
            &nbsp; per jurisdictions are brought to you to kick off your
            adventure.
          </h1>
        </section>
        {width > 768 && (
          <section className="payment-section">
            <PaymentCard
              location="AJMAN OFFSHORE"
              cost="$2,997"
              companyName="Ajman Offshore New Company formation includes"
              inclusiveList={featureList}
            />
            <PaymentCard
              location="RAK ICC"
              cost="$2,997"
              companyName="Rak Icc New Company formation includes"
              inclusiveList={featureList}
              isBackground={true}
            />
            <PaymentCard
              location="SHARJAH MEDIA CITY"
              cost="$4,124"
              companyName="Sharjah Media City New Company formation include "
              inclusiveList={featureList}
            />
          </section>
        )}
        {width <= 768 && <CardCarousel />}
        <section className="blog-footer-wrapper">
          <section className="blog-footer--left-section">
            <BlogTitle title="Read about our blogs for more information on our processes" />
            <BlogArticle
              image={Vector4}
              title="How to start a company formation in Dubai"
              duration="5 Minutes"
            />
            <BlogArticle
              image={Vector4}
              title="How to start an Offshore company formation in Dubai"
              duration="5 Minutes"
            />
            {width > 768 && (
              <BlogArticle
                image={Vector4}
                title="SEO Dubai: Who benefits the most?"
                duration="5 Minutes"
              />
            )}
            <BlogTitle title="Satisfied We are When Our Customers Are Happy" />
            <Comment
              image={Vector3}
              comment="I am very happy with them. I’ll continue to use their services in future & highly recommend them to anyone,"
              author="Muhib Abrar"
            />
            <Comment
              image={Vector3}
              comment="Rama has a high level of integrity, intellect, knowledge of his business, resourcefulness and humanity,"
              author="Colin Saldahna"
            />
            {width > 768 && (
              <Comment
                image={Vector3}
                comment="Your advise was so complete that I actually realized how beneficial this would be to my clients and my business."
                author="Mark Swann"
              />
            )}
          </section>
          <section className="blog-footer--right-section">
            {width > 768 && (
              <BlogTitle title="Get to know the whole us and more of our services" />
            )}
            <div className="blog-footer-content-wrapper">
              <FooterItem title="Services" list={servicesList} />
              <FooterItem title="Policies" list={policiesList} />
              <FooterItem title="About" list={aboutList} />
              <FooterItem title="Address" list={addressList} />
              {width > 768 && <FooterItem title="" list={officeDetails} />}
              <FooterItem title="Subscribe to our Newsletter" list={[]} />
              <div className="email-footer-sm-wrapper">
                <div className="email-add-wrapper">
                  <input
                    type="text"
                    className="email-address"
                    placeholder="Enter email address"
                  />
                  <img
                    src={Group34}
                    alt="send"
                    className="email-add-sent-img"
                  />
                </div>
                <SocialMediaIcons />
              </div>
            </div>
          </section>
        </section>
        <Copyright />
      </section>
    </>
  );
};
export default Home;
