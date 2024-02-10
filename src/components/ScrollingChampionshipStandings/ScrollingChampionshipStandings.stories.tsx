import { Meta, StoryObj } from '@storybook/react';
import ScrollingChampionshipStandings from './ScrollingChampionshipStandings';

export default {
    title: 'ScrollingChampionshipStandings',
    component: ScrollingChampionshipStandings,
    argTypes: {
        position: {
            type: 'number',
            control: { type: 'number' },
            description: "The position of the driver"
        },
        countryCode: {
            type: 'string',
            control: { type: 'text' },
            description: "The two-letter code of the country following the ISO 3166-1 alpha-2 standard"
        },
        driverName: {
            type: 'string',
            control: { type: 'text' },
            description: "The name of the driver"
        },
        points: {
            type: 'number',
            control: { type: 'number' },
            description: "The points of the driver"
        },
    },
} as Meta;

type Story = StoryObj<typeof ScrollingChampionshipStandings>;

export const Primary: Story = {
    args: {
        standings: [
            { position: 1, countryCode: 'DE', driverName: 'Akashic', points: 49 },
            { position: 2, countryCode: 'GB', driverName: 'PirateLaserBeam', points: 35 },
            { position: 3, countryCode: 'FR', driverName: 'Red', points: 32 },
        ]
    }
}

