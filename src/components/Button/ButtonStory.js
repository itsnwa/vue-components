import { storiesOf } from '@storybook/vue'

import Button from './Button'

storiesOf('Button', module)
  .add('normal', () => ({
    components: { Button },
    template: `
      <div>
        <small>Small</small><br>
        <Button size="small" @click="action">Button</Button><br>
        <small>Medium (default)</small><br>
        <Button size="medium" @click="action">Button</Button><br>
        <small>Large</small><br>
        <Button size="large" @click="action">Button</Button><br>
      </div>
    `
  }))
  .add('primary', () => ({
    components: { Button },
    template: `
      <div>
        <small>Small</small><br>
        <Button size="small" primary @click="action">Button</Button><br>
        <small>Medium (default)</small><br>
        <Button size="medium" primary @click="action">Button</Button><br>
        <small>Large</small><br>
        <Button size="large" primary @click="action">Button</Button><br>
      </div>
    `
  }))
  .add('light', () => ({
    components: { Button },
    template: `
      <div>
        <small>Small</small><br>
        <Button size="small" light @click="action">Button</Button><br>
        <small>Medium (default)</small><br>
        <Button size="medium" light @click="action">Button</Button><br>
        <small>Large</small><br>
        <Button size="large" light @click="action">Button</Button><br>
      </div>
    `
  }))
