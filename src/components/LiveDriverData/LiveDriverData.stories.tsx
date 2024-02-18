import { Meta, StoryObj } from "@storybook/react";
import LiveDriverData from "./LiveDriverData";

export default {
  title: "Live Data/Live Driver Data",
  component: LiveDriverData,
  argTypes: {
    position: {
      type: "number",
      control: { type: "number" },
      description: "The position of the driver",
    },
    countryCode: {
      type: "string",
      control: { type: "text" },
      description:
        "The two-letter code of the country following the ISO 3166-1 alpha-2 standard",
    },
    driverName: {
      type: "string",
      control: { type: "text" },
      description: "The name of the driver",
    },
    points: {
      type: "number",
      control: { type: "number" },
      description: "The points of the driver",
    },
  },
} as Meta;

type Story = StoryObj<typeof LiveDriverData>;

export const Primary: Story = {
  args: {
    position: 1,
    profilepicture: "https://avatars.cloudflare.steamstatic.com/d716afce0ef2370bff095f25584aa62b6a7760fa_full.jpg",
    driverName: "Akashic",
    interval: "+ 0.204s",
    lastLap: "1:25:403"
  },
};
