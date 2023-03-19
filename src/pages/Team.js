import React,{useEffect} from 'react';
import team from '../data/team'

const Team = () => {
	useEffect(() => {
		document.title = `Team | Assutech`;
	}, []);
  
	return (
		<>
			<div className='h-[30vh] work px-[2rem] py-[1rem] md:px-[4rem] md:py-[2rem]  lg:px-[10rem] lg:py-[2rem]  mx-auto'>
				<div className='text-center md:text-start font-sans p-6 flex flex-col items-center justify-center lg:items-start space-y-8 max-w-[1440px] mx-auto'>
					<h2 className='text-2xl lg:text-6xl text-white font-semibold'>
						The Team
					</h2>
					<p className='font-mono text-center text-white md:text-xl tracking-wide lg:text-start'>
						Behind every successful project are these amazing personalities,
						ready to deliver.
					</p>
				</div>
			</div>
			<div className='flex flex-wrap gap-6 my-[4rem] mx-auto px-[4rem] py-[2rem] max-w-[1770px] justify-center'>
        {team.map((person)=>{
          const {name, image, position, title} = person;
          return (
						<div className='relative group max-w-[20rem]  min-w-[20rem] max-h-[28rem]'>
							<img
								src={image}
								alt={name}
								className='object-cover w-full h-full'
							/>
							<div className='absolute bottom-0 right-0 left-0 h-full p-2 px-4 text-center text-white bg-black bg-opacity-60 opacity-0 group-hover:opacity-100 duration-500'>
                <div className="flex flex-col space-y-4 items-center justify-center h-full">
                  <h3 className='font-semibold text-xl tracking-wider'>{name}</h3>
                  <div className="border-b-2 w-[15%] mx-auto"></div>
                  <p>{position}</p>
                  <p>{title}</p>
                </div>
              </div>
						</div>
					);
        })}
      </div>
		</>
	);
};

export default Team;
