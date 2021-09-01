// also exported from '@storybook/angular' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/angular/types-6-0';
import { ButtonComponent } from 'src/app/components/button/button.component';

export default {
  title: 'Example/Button',
  component: ButtonComponent,
  argTypes: {
    theme: { control: { type: 'select' } },
  },
} as Meta;

const Template: Story<ButtonComponent> = (args: ButtonComponent) => ({
  props: args,
});

export const Button = Template.bind({});
Button.args = {
  label: 'Button',
};
