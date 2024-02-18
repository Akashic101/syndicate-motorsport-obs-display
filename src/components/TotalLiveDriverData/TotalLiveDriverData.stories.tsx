import { Meta, StoryObj } from "@storybook/react";
import TotalLiveDriverData from "./TotalLiveDriverData";

export default {
  title: "Live Data/Total Live Driver Data",
  component: TotalLiveDriverData,
  argTypes: {
    position: {
      type: "number",
      control: { type: "number" },
      description: "The position of the driver",
    },
    profilepicture: {
      type: "string",
      control: { type: "text" },
      description:
        "The link to the profile picture of the user on for example Steam",
    },
    driverName: {
      type: "string",
      control: { type: "text" },
      description: "The name of the driver",
    },
    interval: {
      type: "string",
      control: { type: "string" },
      description: "The distance in ss.mmmm to the driver in front",
    },
    lastLap: {
      type: "string",
      control: { type: "string" },
      description: "The last lap of the driver",
    },
  },
} as Meta;

type Story = StoryObj<typeof TotalLiveDriverData>;

export const Primary: Story = {
  args: {
    standings: [
      { position: 1, profilepicture: "https://avatars.cloudflare.steamstatic.com/d716afce0ef2370bff095f25584aa62b6a7760fa_full.jpg", driverName: "Akashic", interval: "-", lastLap: "1:23.234"},
      { position: 2, profilepicture: "https://avatars.cloudflare.steamstatic.com/a3fe2c5cfea12706e10cc70f9938b1edd5099508_full.jpg", driverName: "PirateLaserBeam", interval: "+0.203", lastLap: "1:23.527"},
      { position: 3, profilepicture: "https://avatars.cloudflare.steamstatic.com/b247e52619fed83034d57fe07f1b3c0f1604c035_full.jpg", driverName: "Kaiser", interval: "+0.561", lastLap: "1:23.295"}
    ],
  },
};
