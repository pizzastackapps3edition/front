import { MenuItem } from '@app/modules/menu/components/menu-item/menu-item.component'
import { FC } from 'react';
import { Pizza } from '../../types/pizza'

interface MenuListProps {
	items: Pizza[];
}

export const MenuList: FC<MenuListProps> = ({ items }) => {
	return (
		<div className='flex flex-wrap gap-10'>
			{items.map(({ image, ...pizza }) => (
				<MenuItem key={`pizza-${pizza.id}`} {...pizza} imagePath={'/assets/pizza/' + image} />
			))}
		</div>
	)
}
