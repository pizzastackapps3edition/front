import { ComponentStory, ComponentMeta } from '@storybook/react';
import { App } from '@app/App';

export default {
  title: 'Example/App',
  component: App,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof App>;

const Template: ComponentStory<typeof App> = () => <App />;

export const Primary = Template.bind({});