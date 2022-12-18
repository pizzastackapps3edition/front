import { ComponentStory, ComponentMeta } from '@storybook/react';
import { MenuList } from '@app/modules/menu/components/menu-list/menu-list.componernt';

export default {
	title: 'Menu/Menu List',
	component: MenuList,
	argTypes: {
		backgroundColor: { control: 'color' },
	},
} as ComponentMeta<typeof MenuList>;

const Template: ComponentStory<typeof MenuList> = (args: any) => <MenuList {...args} />;

export const View = Template.bind({});
View.args = {

}