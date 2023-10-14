import React from 'react';
import brandLogo from '../../../assets/brand-logo.png'

const Footer = () => {
    return (
        <div>
            <img src={brandLogo} alt="" className='mx-auto h-20 my-10 '/>
            <p className='mx-auto'>Indulge in culinary artistry with our chef-curated recipes, turning your kitchen <br className=' '/> into a gourmet haven where flavors ignite</p>
            <div className='my-6'>
                <h3 className='text-2xl'><i>Newsletter Subscriber</i></h3>
                <div className="flex align-middle justify-center mt-4">
                <input type="email" name="" id=""  className="bg-slate-200 rounded-md text-black ps-3" placeholder="Email"/>
                <div className="btn bg-orange-400">send</div>
                </div>

            </div>
        </div>
    );
};

export default Footer;