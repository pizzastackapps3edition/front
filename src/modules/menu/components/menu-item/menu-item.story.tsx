import { ComponentStory, ComponentMeta } from '@storybook/react';
import { MenuItem } from '@app/modules/menu/components/menu-item/menu-item.component';

export default {
	title: 'Menu/Menu Item',
	component: MenuItem,
	argTypes: {
		backgroundColor: { control: 'color' },
	},
} as ComponentMeta<typeof MenuItem>;

const Template: ComponentStory<typeof MenuItem> = (args) => <MenuItem {...args} />;

export const View = Template.bind({});
View.args = {
	imagePath: '/assets/pizza/manhattan.jpeg',
	weight: 555,
	title: 'Піца Мангеттен',
	ingredients: '(Подвійна порція грибів), Гриби, Моцапела, Пепероні, Соус Альфредо',
	price: 215,
}