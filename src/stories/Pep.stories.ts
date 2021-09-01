import { moduleMetadata } from '@storybook/angular';
import { CommonModule } from '@angular/common';
import { Story, Meta } from '@storybook/angular/types-6-0';

import { ButtonComponent } from 'src/app/components/button/button.component';
import { TextareaComponent } from 'src/app/components/textarea/textarea.component';
import { PepComponent } from 'src/app/components/pep/pep.component';

export default {
  title: 'Example/Pep',
  component: PepComponent,
  decorators: [
    moduleMetadata({
      declarations: [ButtonComponent, TextareaComponent],
      imports: [CommonModule],
    }),
  ],
  argTypes: {
    textareaTheme: { control: { type: 'select' } },
    buttonTheme: { control: { type: 'select' } },
  },
} as Meta;

const Template: Story<PepComponent> = (args: PepComponent) => ({
  props: args,
});

export const SamplePep = Template.bind({});
SamplePep.args = {};
