import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Hero = () => {
	const [userData, setUserData] = useState(null);

    useEffect(() => {
        axios.get('https://randomuser.me/api/?page=1&results=1&seed=abc')
            .then(response => {
                if (response.data.results.length > 0) {
                    setUserData(response.data.results[0]); 
                }
            })
            .catch(error => console.error('Error fetching data:', error));
    }, []);

    return (
        <section className="hero__section bg-[#6664d2] h-[100vh] px-[10%] sm:px-[5%] w-[100%] flex flex-col items-center justify-center">
            <div className='border-[13px] border-[black] h-[600px] md:h-[450px] sm:h-[350px] w-[100%] px-[10%]  '>
			{userData && (
                <div className='flex  h-[100%] items-center sm:justify-center  space-x-[90px] sm:space-x-[20px]'> 
                   <div>
                    <img src={userData.picture.large} alt="User" className='w-[300px] lg:w-[250px] md:w-[200px] sm:w-[100px]'/>
					</div>
					<div className='space-y-[30px] sm:space-y-[15px] text-[35px] lg:text-[32px] md:text-[27px] sm:text-[17px] esm:text-[13px] font-semibold font-poppins'>
					<div className='flex space-x-[25px] sm:space-x-[15px] '>
					<p>{userData.name.first}</p>
					<p>{userData.name.last}</p>
					</div>
					<h1>{userData.gender}</h1>
					<h1>{userData.phone}</h1>

					</div>

					 </div>
            )}
			</div>
           
        </section>
    );
};

export default Hero;
