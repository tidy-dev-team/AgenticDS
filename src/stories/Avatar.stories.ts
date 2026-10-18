import type { Meta, StoryObj } from '@storybook/react-vite'
import { Avatar } from '../components/Avatar'

const SAMPLE_IMAGE = 'https://i.pravatar.cc/150?img=47'

const meta = {
  title: 'Kido DS/Avatar',
  component: Avatar,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    type: {
      control: 'radio',
      options: ['picture', 'initials'],
    },
    shape: {
      control: 'radio',
      options: ['circle', 'rounded', 'square'],
    },
    size: {
      control: 'radio',
      options: ['24', '32', '40', '52', '64'],
    },
    outline: { control: 'boolean' },
    initials: { control: 'text' },
    imageUrl: { control: 'text' },
    alt: { control: 'text' },
  },
  args: {
    type: 'picture',
    shape: 'circle',
    size: '40',
    outline: false,
    initials: 'AA',
    imageUrl: SAMPLE_IMAGE,
    alt: 'User avatar',
  },
} satisfies Meta<typeof Avatar>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const WithImage: Story = {
  args: {
    type: 'picture',
    imageUrl: SAMPLE_IMAGE,
    size: '52',
    shape: 'circle',
  },
}

export const WithInitials: Story = {
  args: {
    type: 'initials',
    initials: 'KD',
    size: '52',
    shape: 'circle',
    imageUrl: undefined,
  },
}

export const WithOutline: Story = {
  args: {
    type: 'picture',
    imageUrl: SAMPLE_IMAGE,
    size: '52',
    shape: 'circle',
    outline: true,
  },
}

export const ShapeCircle: Story = {
  args: { shape: 'circle', size: '52', imageUrl: SAMPLE_IMAGE },
}

export const ShapeRounded: Story = {
  args: { shape: 'rounded', size: '52', imageUrl: SAMPLE_IMAGE },
}

export const ShapeSquare: Story = {
  args: { shape: 'square', size: '52', imageUrl: SAMPLE_IMAGE },
}

export const Size24: Story = {
  args: { size: '24', imageUrl: SAMPLE_IMAGE },
}

export const Size32: Story = {
  args: { size: '32', imageUrl: SAMPLE_IMAGE },
}

export const Size40: Story = {
  args: { size: '40', imageUrl: SAMPLE_IMAGE },
}

export const Size52: Story = {
  args: { size: '52', imageUrl: SAMPLE_IMAGE },
}

export const Size64: Story = {
  args: { size: '64', imageUrl: SAMPLE_IMAGE },
}

export const NoImage: Story = {
  name: 'Picture – No Image (Placeholder)',
  args: {
    type: 'picture',
    imageUrl: undefined,
    size: '52',
    shape: 'circle',
  },
}
