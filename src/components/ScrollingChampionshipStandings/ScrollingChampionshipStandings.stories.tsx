import { Meta, StoryObj } from "@storybook/react";
import ScrollingChampionshipStandings from "./ScrollingChampionshipStandings";

export default {
  title: "ScrollingChampionshipStandings",
  component: ScrollingChampionshipStandings,
  argTypes: {
    standings: {
      control: {
        type: "object",
      },
      description: "An array of objects of the standings in a championship",
    },
  },
} as Meta;

type Story = StoryObj<typeof ScrollingChampionshipStandings>;

export const Primary: Story = {
  args: {
    standings: [
      { position: 1, countryCode: "DE", driverName: "Akashic", points: 49 },
      {
        position: 2,
        countryCode: "GB",
        driverName: "PirateLaserBeam",
        points: 35,
      },
      { position: 3, countryCode: "FR", driverName: "Red", points: 32 },
    ],
  },
};
