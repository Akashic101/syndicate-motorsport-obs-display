import { Meta, StoryObj } from '@storybook/react';
import VerticalChampionshipStandings from './VerticalChampionshipStandings';

export default {
    title: 'VerticalChampionshipStandings',
    component: VerticalChampionshipStandings,
    argTypes: {
        standings: {
          control: {
            type: 'object',
          },
          description: 'An array of objects of the standings in a championship displayed in a vertical list',
        },
      },
} as Meta;

type Story = StoryObj<typeof VerticalChampionshipStandings>;

export const Primary: Story = {
    args: {
        standings: [
            { position: 1, countryCode: 'DE', driverName: 'Akashic', points: 49 },
            { position: 2, countryCode: 'GB', driverName: 'PirateLaserBeam', points: 35 },
            { position: 3, countryCode: 'FR', driverName: 'Red', points: 32 },
        ]
    }
}

