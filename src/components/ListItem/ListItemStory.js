import { storiesOf } from '@storybook/vue'

import ListItem from './ListItem'

storiesOf('List item', module)
  .add('normal', () => ({
    components: { ListItem },
    template: `
      <div>
        <ListItem
          avatar="https://pbs.twimg.com/profile_images/979283176337031173/WceF581P.jpg"
          text="Great stuff"
        />
        <ListItem
          avatar="https://pbs.twimg.com/profile_images/979283176337031173/WceF581P.jpg"
          text="Great stuff"
        />
        <ListItem
          avatar="https://pbs.twimg.com/profile_images/979283176337031173/WceF581P.jpg"
          text="Great stuff"
        />
      </div>
    `
  }))
