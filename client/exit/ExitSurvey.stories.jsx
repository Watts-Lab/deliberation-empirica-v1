import React from 'react';

import ExitSurvey from './ExitSurvey';

export default {
  /* ๐ The title prop is optional.
  * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
  * to learn how to generate automatic titles
  */
  title: 'ExitSurvey',
  component: ExitSurvey,
};

//๐ We create a โtemplateโ of how args map to rendering
const Template = (args) => <ExitSurvey {...args} />;

const player = {
  data: {"name": "Ponder Stibbons"},
  get (key) {
    return this.data[key];
  }
}


//๐ Each story then reuses that template
export const Primary = Template.bind({});
Primary.args = {
   player: player
};