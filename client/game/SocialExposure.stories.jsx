import React from 'react';

import SocialExposure from './SocialExposure';

export default {
  /* ๐ The title prop is optional.
  * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
  * to learn how to generate automatic titles
  */
  title: 'SocialExposure',
  component: SocialExposure,
};

//๐ We create a โtemplateโ of how args map to rendering
const Template = (args) => <SocialExposure {...args} />;

const playerMock = {
  data: {"name": "Ponder Stibbons"},
  get (key) {
    return this.data[key];
  }
};

const roundMock = {
    _id: "uaL438h7mZyKzL7Dx"
};


//๐ Each story then reuses that template
export const Primary = Template.bind({});
Primary.args = {
   player: playerMock,
   round: roundMock
};