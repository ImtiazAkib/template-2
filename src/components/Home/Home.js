import React from 'react';
import "./Home.css";
import {BsArrowRight} from 'react-icons/bs';
import Footer from '../Footer/Footer';

const Home = () => {
    return (
        <div>
            {/* hero section */}
            <section className="text-gray-600 body-font">
  <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
      <img className="object-cover object-center rounded" alt="hero" src="https://i.ibb.co/HK3K2xV/home-2-rev-img-1.png"/>
    </div>
    <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
      <h1 style={{color:'#58468c'}} className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">Discover The
        <br className="hidden lg:inline-block"/>Incredible Features
      </h1>
      <p className="mb-8 leading-relaxed">Copper mug try-hard pitchfork pour-over freegan heirloom neutra air plant cold-pressed tacos poke beard tote bag. Heirloom echo park mlkshk tote bag selvage hot chicken authentic tumeric truffaut hexagon try-hard chambray.</p>
      <div className="flex justify-center">
        <button className="flex btn-simple justify-center items-center text-white bg-indigo-500 h-12 border-0  px-14 rounded-full focus:outline-none text-sm">Contact Us</button>
        <button className="ml-4 btn-simple flex justify-center items-center text-white h-12 bg-orange-400 border-0 rounded-full px-14 focus:outline-non text-sm">Read More</button>
      </div>
    </div>
  </div>
</section>

        {/* feature section */}
        <section className="text-gray-600 body-font">
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-col text-center w-full mb-20">
      <h1 className=" text-5xl font-medium text-indigo-900">Perfect Intergration</h1>
      <div className='flex justify-center items-center'>
      <p className="text-lg text-gray-400 pt-3 w-2/4">Lorem ipsum dolor sit amet, con sectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
      </div>
    </div>
    <div className='features'>
        <a href="#xdf">
        <div className="single-feature">
            <div className='single-feature-img'>
                <img src="https://i.ibb.co/VJNStnQ/aboutme-icon1.png" alt="" />
            </div>
            <div className='single-feature-content'>
                <div>
                <h1 className='text-lg text-indigo-900 font-bold'>Mail Chimp</h1>
                <p>Send Mail</p>
                </div>
                <div className='pl-9 arrow-icon text-2xl'>
                    <BsArrowRight/>
                </div>
            </div>
        </div>
        </a>
        <a href="">
        <div className="single-feature">
            <div className='single-feature-img'>
                <img src="https://i.ibb.co/Qvsvttf/aboutme-icon2.png" alt="" />
            </div>
            <div className='single-feature-content'>
                <div>
                <h1 className='text-lg text-indigo-900 font-bold'>Slack</h1>
                <p>Messaging</p>
                </div>
                <div className='pl-9 arrow-icon text-2xl'>
                    <BsArrowRight/>
                </div>
            </div>
        </div>
        </a>
        <a href="">
        <div className="single-feature">
            <div className='single-feature-img'>
                <img src="https://i.ibb.co/FXRDnM5/aboutme-icon3.png" alt="" />
            </div>
            <div className='single-feature-content'>
                <div>
                <h1 className='text-lg text-indigo-900 font-bold'>Twitter</h1>
                <p>News Feed</p>
                </div>
                <div className='pl-9 arrow-icon text-2xl'>
                    <BsArrowRight/>
                </div>
            </div>
        </div>
        </a>
        <a href="">
        <div className="single-feature">
            <div className='single-feature-img'>
                <img src="https://i.ibb.co/HBvdksG/aboutme-icon4.png" alt="" />
            </div>
            <div className='single-feature-content'>
                <div>
                <h1 className='text-lg text-indigo-900 font-bold'>Instragram</h1>
                <p>News Feed</p>
                </div>
                <div className='pl-9 arrow-icon text-2xl'>
                    <BsArrowRight/>
                </div>
            </div>
        </div>
        </a>
    </div>
  </div>
</section>
{/* feature section end */}

{/* new section */}
<section className="text-gray-600 body-font">
  <div className="container mx-auto flex px-5 md:flex-row flex-col items-center">
    <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center w-2/3 pl-7">
      <h1 className=" text-5xl font-medium text-indigo-900 pb-5">Creative App Display
      </h1>
      <p className="mb-8 leading-relaxed text-gray-500 text-lg">Quisque ac dolor nec nisl pellen tesque ulla mor. Ves tibulum sed per ultrices mi morbi etamus. Ei erant pha edru vis. Eut aliim, auta ea, tek sit timeam.</p>
      <div className="flex justify-center">
      <button className="btn-simple flex justify-center items-center text-white h-12 bg-orange-400 border-0 rounded-full px-14 focus:outline-non text-sm">Button</button>
      </div>
    </div>
    <div className="w-100 phone-img">
      <img className="object-cover object-center rounded" alt="hero" src="https://i.ibb.co/tsXwLcw/home-2-phone-1.png"/>
      <img className="object-cover object-center phone-img1" alt="hero" src="https://i.ibb.co/D1GtbQd/home-2-phone-111.png"/>
      <img className="object-cover object-center phone-img2" alt="hero" src="https://i.ibb.co/nk1Lcyz/home-2-phone-11.png"/>
    </div>
  </div>
</section>

{/* new section */}
<section className="text-gray-600 body-font">
  <div className="container mx-auto flex justify-center lg:px-14 py-24 md:flex-row flex-col items-center">
    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0 product-preview">
      <img className="object-cover object-center rounded product-preview-img1" alt="hero" src="https://i.ibb.co/Y7XyRz5/home-2-img-8.jpg"/>
      <img className="object-cover object-center rounded product-preview-img2" alt="hero" src="https://i.ibb.co/ssnm0qt/home-2-img-7.jpg"/>
    </div>
    <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 lg:px-24 flex flex-col md:items-start md:text-left items-center mt-14 text-center">
      <h1 className="title-font sm:text-4xl text-3xl mb-4 text-indigo-900 font-medium">Amazing Practical
Features Included</h1>
      <p className="mb-8 leading-relaxed">Vero homero perfecto mei ut, sonet aperiam an nec. Ni nec dicta altera legimu. Me vita legendos expet end isad. Ex mei omitta de aliqu mi ando, ha beo tibi que comp titur vis cu. Ut tritani aliqua duom dico.</p>
    </div>
  </div>
</section>

{/* new section */}
<section className="text-gray-600 body-font">
  <div className="container px-5 lg:pt-24 mx-auto">
    <div className="flex flex-wrap -m-4">
      <div className="xl:w-1/3 md:w-1/2 p-4 promo">
        <div className="p-6 flex">
          <div className="w-14 h-10 inline-flex items-center justify-center rounded-full pr-2 text-indigo-500 mb-4">
            <img src="https://i.ibb.co/k6QpfkK/aboutme-icon5.png" alt="" />
          </div>
          <div className='pl-4 promo-content'>
          <h2 className="text-lg text-indigo-900 font-bold title-font mb-2">Market Analysis</h2>
          <p className="leading-relaxed text-gray-500 text-base">Fingerstache flexitarian street art 8-bit waist co, subway tile poke farm.</p>
          </div>
        </div>
      </div>
      <div className="xl:w-1/3 md:w-1/2 p-4 promo">
      <div className="p-6 flex">
          <div className="w-14 h-10 inline-flex items-center justify-center rounded-full pr-2 text-indigo-500 mb-4">
            <img src="https://i.ibb.co/k6QpfkK/aboutme-icon5.png" alt="" />
          </div>
          <div className='pl-4 promo-content'>
          <h2 className="text-lg text-indigo-900 font-bold title-font mb-2">Web Solution</h2>
          <p className="leading-relaxed text-gray-500 text-base">Fingerstache flexitarian street art 8-bit waist co, subway tile poke farm.</p>
          </div>
        </div>
      </div>
      <div className="xl:w-1/3 md:w-1/2 p-4 promo">
      <div className="p-6 flex">
          <div className="w-14 h-10 inline-flex items-center justify-center rounded-full pr-2 text-indigo-500 mb-4">
            <img src="https://i.ibb.co/k6QpfkK/aboutme-icon5.png" alt="" />
          </div>
          <div className='pl-4 promo-content'>
          <h2 className="text-lg text-indigo-900 font-bold title-font mb-2">Financial Advice</h2>
          <p className="leading-relaxed text-gray-500 text-base">Fingerstache flexitarian street art 8-bit waist co, subway tile poke farm.</p>
          </div>
        </div>
      </div>
      <div className="xl:w-1/3 md:w-1/2 p-4 promo">
      <div className="p-6 flex">
          <div className="w-14 h-10 inline-flex items-center justify-center rounded-full pr-2 text-indigo-500 mb-4">
            <img src="https://i.ibb.co/k6QpfkK/aboutme-icon5.png" alt="" />
          </div>
          <div className='pl-4 promo-content'>
          <h2 className="text-lg text-indigo-900 font-bold title-font mb-2">Great tests</h2>
          <p className="leading-relaxed text-gray-500 text-base">Fingerstache flexitarian street art 8-bit waist co, subway tile poke farm.</p>
          </div>
        </div>
      </div>
      <div className="xl:w-1/3 md:w-1/2 p-4 promo">
      <div className="p-6 flex">
          <div className="w-14 h-10 inline-flex items-center justify-center rounded-full pr-2 text-indigo-500 mb-4">
            <img src="https://i.ibb.co/k6QpfkK/aboutme-icon5.png" alt="" />
          </div>
          <div className='pl-4 promo-content'>
          <h2 className="text-lg text-indigo-900 font-bold title-font mb-2">Action Plans</h2>
          <p className="leading-relaxed text-gray-500 text-base">Fingerstache flexitarian street art 8-bit waist co, subway tile poke farm.</p>
          </div>
        </div>
      </div>
      <div className="xl:w-1/3 md:w-1/2 p-4 promo">
      <div className="p-6 flex">
          <div className="w-14 h-10 inline-flex items-center justify-center rounded-full pr-2 text-indigo-500 mb-4">
            <img src="https://i.ibb.co/k6QpfkK/aboutme-icon5.png" alt="" />
          </div>
          <div className='pl-4 promo-content'>
          <h2 className="text-lg text-indigo-900 font-bold title-font mb-2">Big Projects</h2>
          <p className="leading-relaxed text-gray-500 text-base">Fingerstache flexitarian street art 8-bit waist co, subway tile poke farm.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

{/* new section */}
<section className="text-gray-600 body-font">
  <div className="container mx-auto flex lg:px-24 py-24 md:flex-row flex-col items-center">
    <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
      <h1 className="title-font sm:text-4xl text-3xl mb-4 text-indigo-900 font-medium">A Multitude Of Options And Feats</h1>
      <p className="mb-8 leading-relaxed">Chillwave portland ugh, knausgaard fam polaroid iPhone. Man braid swag typewriter affogato, hella selvage wolf narwhal dreamcatcher.</p>
    </div>
    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0 promo-preview">
      <img className="object-cover object-center rounded product-preview-img1" alt="hero" src="https://i.ibb.co/Y7XyRz5/home-2-img-8.jpg"/>
      <img className="object-cover object-center rounded product-preview-img2" alt="hero" src="https://i.ibb.co/ssnm0qt/home-2-img-7.jpg"/>
    </div>
  </div>
</section>

{/* new section */}
<section className="text-gray-600 body-font">
  <div className="container mx-auto flex lg:px-40 py-24 md:flex-row flex-col items-center">
    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0 download-preview">
      <img className="object-cover object-center rounded" alt="hero" src="https://i.ibb.co/Hd0QG93/home-2-phone-2.png"/>
      <img className="object-cover object-center rounded download-preview-img2" alt="hero" src="https://i.ibb.co/bb9T6cT/home-2-phone-22.png"/>
    </div>
    <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
      <h1 style={{color:'#58468c'}} className="title-font text-5xl mb-4 mt-14 font-medium text-gray-900">Get The App Now & Enjoy!
      </h1>
      <p className="mb-8 leading-relaxed">Lorem ipsum dolor sit amet, cons ectetur adipis cing elit. In sag ittis egestas ante, sed viverra de nunc.</p>
      <div className="flex justify-center">
        <button className="flex btn-simple justify-center items-center text-white bg-indigo-500 h-12 border-0  px-14 rounded-full focus:outline-none text-sm">Button</button>
        <button className="ml-4 btn-simple flex justify-center items-center text-white h-12 bg-orange-400 border-0 rounded-full px-14 focus:outline-non text-sm">Button</button>
      </div>
    </div>
  </div>
</section>

{/* new section */}
<section className="text-gray-600 body-font">
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4">
    <div className="xl:w-1/3 md:w-1/2 p-4 promo text-center">
        <div className="p-6 flex flex-col justify-center items-center">
          <div className="w-36 h-10 inline-flex pb-10 items-center justify-center rounded-full pr-2 text-indigo-500 mb-4">
            <img src="https://i.ibb.co/sVFfQBz/icon-img-5.png" alt="" />
          </div>
          <div className='pl-4 promo-content'>
          <h2 className="text-lg text-indigo-900 font-bold title-font mb-2">Market Analysis</h2>
          <p className="leading-relaxed text-gray-500 text-base">Fingerstache flexitarian street art 8-bit waist co, subway tile poke farm.</p>
          </div>
        </div>
      </div>
      <div className="xl:w-1/3 md:w-1/2 p-4 promo text-center">
        <div className="p-6 flex flex-col justify-center items-center">
          <div className="w-36 h-10 inline-flex pb-10 items-center justify-center rounded-full pr-2 text-indigo-500 mb-4">
            <img src="https://i.ibb.co/VMZPmPb/icon-img-8.png" alt="" />
          </div>
          <div className='pl-4 promo-content'>
          <h2 className="text-lg text-indigo-900 font-bold title-font mb-2">Financial Advise</h2>
          <p className="leading-relaxed text-gray-500 text-base">Fingerstache flexitarian street art 8-bit waist co, subway tile poke farm.</p>
          </div>
        </div>
      </div>
      <div className="xl:w-1/3 md:w-1/2 p-4 promo text-center">
        <div className="p-6 flex flex-col justify-center items-center">
          <div className="w-36 h-10 inline-flex pb-10 items-center justify-center rounded-full pr-2 text-indigo-500 mb-4">
            <img src="https://i.ibb.co/hCpmTb0/icon-img-9.png" alt="" />
          </div>
          <div className='pl-4 promo-content text-center'>
          <h2 className="text-lg text-indigo-900 text-center font-bold title-font mb-2">Web Solution</h2>
          <p className="leading-relaxed text-gray-500 text-base">Fingerstache flexitarian street art 8-bit waist co, subway tile poke farm.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

{/* new section */}
<section className="text-gray-600 body-font">
  <div className="container mx-auto flex px-5 lg:pt-24 items-center justify-center flex-col">
    <div className="text-center lg:w-2/3 w-full">
      <h1 className="title-font md:text-5xl sm:text-2xl mb-4 font-medium text-indigo-900">Download Our App Today & Experience Endless Possibilities.</h1>
      <div className="flex justify-center">
      <button className="flex btn-simple justify-center items-center mt-6 text-white bg-indigo-500 h-12 border-0  px-14 rounded-full focus:outline-none text-sm">Download</button>
      </div>
    </div>
    <div className='flex justify-center items-center flex-col app-preview'>
    <img className="w-9/12 mb-10 object-cover mt-14 object-center rounded app-preview-img1" alt="hero" src="https://i.ibb.co/S5kdBDZ/rev-2-1.png"/>
    <img className="w-3/12 mb-10 object-cover mt-14 object-center rounded app-preview-img2" alt="hero" src="https://i.ibb.co/m6s17VF/rev-2-4-1.png"/>
    <img className="w-3/12 mb-10 object-cover mt-14 object-center rounded app-preview-img3" alt="hero" src="https://i.ibb.co/ykyQfR2/rev-2-3-1.png"/>
    <img className="w-3/12 mb-10 object-cover mt-14 object-center rounded app-preview-img4" alt="hero" src="https://i.ibb.co/ZXfyK4n/rev-2-2-1.png"/>
    </div>
  </div>
</section>
<Footer></Footer>
        </div>
    );
};

export default Home;