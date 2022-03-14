import React from "react";
import { Call } from "empirica-videocall";

export default class SocialExposure extends React.Component {
  renderSocialInteraction(otherPlayer) {
    const value = otherPlayer.round.get("value");
    return (
      <div className="alter" key={otherPlayer._id}>
        <img src={otherPlayer.get("avatar")} className="profile-avatar" />
        <div className="range">
          <Slider
            min={0}
            max={1}
            stepSize={0.01}
            value={value}
            disabled
            hideHandleOnEmpty
          />
        </div>
      </div>
    );
  }

  render() {
    const { round, player } = this.props;
    const roomName = round._id;

    return (
      <div className="social-exposure">
        <Call player={player} roomName={roomName} />
      
      </div>
    );
  }
}
