import React from 'react';
import brandLogo from '../../../assets/brand-logo.png'
import { Link } from 'react-router-dom';
import toast from 'react-hot-toast';


const Footer = () => {
    return (
        <div>
            <img src={brandLogo} alt="" className='mx-auto h-20 my-10 ' />
            <p className='mx-auto'>Indulge in culinary artistry with our chef-curated recipes, turning your kitchen <br className=' ' /> into a gourmet haven where flavors ignite</p>
            <div className='mt-28 mb-10'>

                <div className="flex justify-between px-16">
                    <div>
                        <nav className="grid gap-4 text-left ">
                            <Link to="/" className="link link-hover">Home</Link>
                            <Link to="/about" className="link link-hover">About</Link>
                            <Link to="/blog" className="link link-hover">Blog</Link>
                            <Link to="/" className="link link-hover w-60">Pinecrest Valley, 123 Evergreen Lane, Serenity Springs, Tranquilandia, 54321, Blissland</Link>

                        </nav>

                    </div>
                    <nav className="grid gap-4 text-left">
                        <Link to="/" className="link link-hover">Blog</Link>
                        <Link to="/login" className="link link-hover">Login</Link>
                        <Link to="/register" className="link link-hover">Register</Link>
                        <Link to="/" className="link link-hover">Contact</Link>
                    </nav>
                    <div>
                        <h3 className='text-2xl'><i>Newsletter Subscriber</i></h3>
                        <div className="flex align-middle justify-center mt-4">
                            <input type="email" name="" id="news-letter" className="bg-slate-200 rounded-md text-black ps-3" placeholder="Email" />
                            <div className="btn bg-orange-400" onClick={()=>{toast.success('Thank for subscribe') ;document.getElementById("news-letter").value=''}}>send</div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Footer;