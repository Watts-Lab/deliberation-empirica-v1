import React from 'react';

import Round from './Round';

export default {
  /* 👇 The title prop is optional.
  * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
  * to learn how to generate automatic titles
  */
  title: 'Round',
  component: Round,
};

//👇 We create a “template” of how args map to rendering
const Template = (args) => <Round {...args} />;

const playerMock = {
  _id: "55siJ478TELDRgK2b",
  data: {"name": "Ponder Stibbons"},
  get (key) {
    return this.data[key];
  }
};

const roundMock = {
    _id: "uaL438h7mZyKzL7Dx"
};

const stageMock = {
    _id: "6wqKgWvGAiicPQZvt",
    name: "response"
};

const gameMock = {
    _id: "v8RrnJBHANNS2PtNT"
};

//👇 Each story then reuses that template
export const Primary = Template.bind({});
Primary.args = {
   player: playerMock,
   round: roundMock,
   stage: stageMock,
   game: gameMock,
};