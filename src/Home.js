import React from 'react'
import './home.css'
import Product from './Product.js'
import image1 from './assets/macbook-air-13-m1-2020-8-core-cpu-256-gb-space-gray.jpg'
import image2 from './assets/51QxA-98Q+L._AC_SX466_.jpg'
import image3 from './assets/61Y1P6uIRFL._AC_SX425_.jpg'
import image4 from './assets/Tripod_61vRETKHpaL._AC_SX425_.jpg'
import image5 from './assets/Holder_61XzOG9rAwL._AC_SL1500_.jpg'
import image6 from './assets/81rZCg017gL._AC_SX425_.jpg'
import image7 from './assets/71tK21fYkDL._AC_SX679_.jpg'
import image8 from './assets/Acer_71+1lOl1Y1L._AC_SX679_.jpg'
import image9 from './assets/Mouse_61yxQRsEPJL._AC_SX425_.jpg'
import Footer from './Footer.js'

function Home(){  

    return <div className='home'>

        {/* Background image */} 
        <div className='home_container'>
            <img className='home_image' src='https://store-images.s-microsoft.com/image/apps.16285.14618985536919905.552c0017-6644-49a8-8467-8f7b34ce0428.30ad6b05-16d9-4d5e-a242-43107708a16a' alt='Background'></img>
        </div>
        
        {/* Products */} 

        <div className='home_row_one'>
             <Product title='Apple 2020 MacBook Air Laptop M1 Chip, 13" Retina Display, 8GB RAM, 256GB SSD Storage, Backlit Keyboard, FaceTime HD Camera, Touch ID. Works with iPhone/iPad; Space Gray' price={830} rating={4}
             image={image1}/>
             <Product title='Beats Solo3 Wireless On-Ear Headphones - Apple W1 Headphone Chip, Class 1 Bluetooth, 40 Hours of Listening Time, Built-in Microphone - Black (Latest Model)' price={200} rating={5}
             image={image2}/>
             <Product title='DJI Mini 3 Pro (DJI RC), Lightweight Drone with 4K Video, 48MP Photo, 34 Mins Flight Time, Less than 249 g, Tri-Directional Obstacle Sensing, Return to Home, Drone with Camera for Adults' price={940} rating={5}
             image={image3}/>
        </div>

        <div className='home_row_two'>
             <Product title='UBeesize 67" Extendable Phone Tripod, Detachable Cell Phone Tripod for Live Stream, Video Recording, Photography, Compatible with Cellphones/Camera/Projector/GoPro/Ring Light' price={22.4} rating={5}
             image={image4}/>
             <Product title='iOttie Easy One Touch 5 Dashboard & Windshield Universal Car Mount Phone Holder Desk Stand with Suction Cup Base and Telescopic Arm for iPhone, Samsung, Google, Huawei, Nokia, other Smartphones' price={19} rating={4}
             image={image5}/>
             <Product title='HyperX Cloud III - Wired Gaming Headset, PC, PS5, Xbox Series X|S, Angled 53mm Drivers, DTS, Memory Foam, Durable Frame, Ultra-Clear 10mm Mic, USB-C, USB-A, 3.5mm - Black/Red' price={111.5} rating={5}
             image={image6}/>
   
        </div>

        <div className='home_row_three'>
             <Product title='SAMSUNG EVO Select Micro SD-Memory-Card + Adapter, 256GB microSDXC 130MB/s Full HD & 4K UHD, UHS-I, U3, A2, V30, Expanded Storage for Android Smartphones, Tablets' price={22} rating={5}
             image={image7}/>
             <Product title='Acer Aspire 3 A315-24P-R7VH Slim Laptop | 15.6" Full HD IPS Display | AMD Ryzen 3 7320U Quad-Core Processor | AMD Radeon Graphics | 8GB LPDDR5 | 128GB NVMe SSD | Wi-Fi 6 | Windows 11 Home' price={328} rating={5}
             image={image8}/>
             <Product title='Logitech M185 Wireless Mouse, 2.4GHz with USB Mini Receiver, 12-Month Battery Life, 1000 DPI Optical Tracking, Ambidextrous, Compatible with PC, Mac, Laptop - Black' price={18} rating={5}
             image={image9}/>
        </div>

        <Footer></Footer>

    </div>


}

export default Home