import React from 'react';

import About from './About';

export default {
  /* 👇 The title prop is optional.
  * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
  * to learn how to generate automatic titles
  */
  title: 'About',
  component: About,
};

//👇 We create a “template” of how args map to rendering
const Template = (args) => <About {...args} />;

const playerMock = {
  data: {"name": "Ponder Stibbons"},
  get (key) {
    return this.data[key];
  }
};


//👇 Each story then reuses that template
export const Primary = Template.bind({});
Primary.args = {
   player: playerMock
};