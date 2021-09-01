// also exported from '@storybook/angular' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/angular/types-6-0';
import { TextareaComponent } from 'src/app/components/textarea/textarea.component';

export default {
  title: 'Example/Textarea',
  component: TextareaComponent,
  argTypes: {
    theme: { control: { type: 'select' } },
  },
} as Meta;

const Template: Story<TextareaComponent> = (args: TextareaComponent) => ({
  props: args,
});

export const Textarea_With_Content = Template.bind({});
Textarea_With_Content.args = {
  content: 'Textarea content',
};

export const Textarea_Without_Content = Template.bind({});
Textarea_Without_Content.args = {
};
