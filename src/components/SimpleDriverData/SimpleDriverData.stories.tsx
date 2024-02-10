import { Meta, StoryObj } from '@storybook/react';
import SimpleDriverData from './SimpleDriverData';

export default {
    title: 'SimpleDriverData',
    component: SimpleDriverData,
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

type Story = StoryObj<typeof SimpleDriverData>;

export const Primary: Story = {
    args: {
        position: 1,
        countryCode: 'DE',
        driverName: 'Akashic',
        points: 49,
    }
}

