import { ComponentStory, ComponentMeta } from '@storybook/react';
import { FooterLink } from './footer-link.component';

export default {
	title: 'Common/FooterLink',
	component: FooterLink,
	argTypes: {
		backgroundColor: { control: 'color' },
	},
} as ComponentMeta<typeof FooterLink>;

const Template: ComponentStory<typeof FooterLink> = (args) => (
	<ul>
		<FooterLink {...args} />
	</ul>
);

export const View = Template.bind({});
View.args = {
	href: "tel:+380987453974",
	children: '098 745 39 74',
}