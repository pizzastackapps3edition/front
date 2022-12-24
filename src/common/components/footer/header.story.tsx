import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Footer } from './footer.component';

export default {
	title: 'Common/Footer',
	component: Footer,
	argTypes: {
		backgroundColor: { control: 'color' },
	},
} as ComponentMeta<typeof Footer>;

const Template: ComponentStory<typeof Footer> = () => <Footer />;

export const View = Template.bind({});