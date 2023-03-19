import React, {useState, useEffect} from 'react'
import blogs from '../data/blogs'

const Blog = () => {
  const [Blogs, setBlogs] = useState(blogs);

  // console.log(Blogs.tags);
	useEffect(()=>{
		document.title = `Blog | Assutech`
	},[])
  
  return (
    
		<>
			<div className='h-[30vh] work px-[2rem] py-[1rem] md:px-[4rem] md:py-[2rem]  lg:px-[10rem] lg:py-[2rem]  mx-auto'>
				<div className='text-center md:text-start font-sans p-6 flex flex-col items-center justify-center lg:items-start space-y-8 max-w-[1440px] mx-auto'>
					<h2 className='text-2xl lg:text-6xl text-white font-semibold'>
						You have ideas. We have solutions.
					</h2>
					<p className='font-mono text-center text-white md:text-xl tracking-wide lg:text-start'>
						We distill the Trends, Thoughts and Technologies.
					</p>
				</div>
			</div>
			<div className='flex flex-wrap gap-6 my-[4rem] mx-auto px-[4rem] py-[2rem] max-w-[1440px] justify-center'>
				{Blogs.map((blog) => {
					const { title, image, author, position } = blog;
					return (
						<div className='max-w-[22rem]  min-w-[20rem] max-h-[28rem] shadow-md rounded-md bg-white' key={title}>
							<div className='h-[40%] w-full'>
								<img
									src={image}
									alt={title}
									className='h-full w-full object-cover'
								/>
							</div>
							<div className='flex flex-wrap gap-1 text-xs items-center mx-[1rem] my-[1rem]'>
								{blog.tags.map((tag)=>{
                  return (
										<p className='bg-gray-300 px-2.5 py-1 rounded-full'>
											{tag.tag}
										</p>
									);
                })}
							</div>
							<div className='mb-[2rem] mx-auto px-[1.5rem]'>
								<h2 className='text-lg font-semibold mb-[1rem]'>{title}</h2>
								<h3 className='text-[#850400] font-semibold mb-[0.5rem]'>
									{author}
								</h3>
								<p className='font-mono text-xs'>{position}</p>
							</div>
						</div>
					);
				})}
			</div>
		</>
	);
}

export default Blog