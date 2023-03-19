import React,{useEffect} from 'react'

const Contact = () => {
  useEffect(() => {
		document.title = `Contact | Assutech`;
	}, []);
  
  return (
		<div className='relative top-0 left-0 w-screen min-h-screen bg-gray-100'>
			<div className='absolute top-[40%] left-[50%] translate-x-[-50%] translate-y-[-50%] flex flex-col space-y-4 items-center text-center'>
				<h1 className='text-4xl font-semibold text-[#850400]'>
					Coming Soon...
				</h1>
				<h2 className='text-xl'>Page under construction</h2>
			</div>
		</div>
	);
}

export default Contact