import { FC } from 'react';

interface MenuItemProps {
	imagePath: string;
	weight: number;
	title: string;
	ingredients: string;
	price: number;
}

export const MenuItem: FC<MenuItemProps> = ({ imagePath, weight, title, ingredients, price }) => {
	return (
		<div className='w-96 shadow-xl rounded-2xl bg-white overflow-hidden'>
			<div className='relative'>
				<img
					className='w-full h-[15.4375rem] object-cover object-center'
					src={imagePath}
					alt="Pizza"
				/>
				<span className='absolute bottom-1.5 right-3 text-sm px-2 bg-gray-900/50 text-white rounded-[2rem]'>{weight} г</span>
			</div>
			<div className='p-8'>
				<h3 className='text-xl font-semibold mb-2'>{title}</h3>
				<p className='mb-8'>{ingredients}</p>
				<span className='text-xl font-semibold'>{price} грн</span>
			</div>
		</div>
	)
}
