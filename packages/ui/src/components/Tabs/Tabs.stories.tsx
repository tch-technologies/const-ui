import * as React from 'react'
import type { Meta, StoryObj } from '@storybook/react'

import { Tabs, TabsList, TabsTrigger, TabsContent } from './Tabs'

const meta: Meta<typeof Tabs> = {
  title: 'Components/Tabs',
  component: Tabs,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof Tabs>

export const Default: Story = {
  render: () => (
    <Tabs defaultValue="account" className="w-[400px]">
      <TabsList className="grid w-full grid-cols-2">
        <TabsTrigger value="account">Account</TabsTrigger>
        <TabsTrigger value="password">Password</TabsTrigger>
      </TabsList>
      <TabsContent value="account" className="p-4 border rounded-md mt-2">
        <p className="text-sm text-foreground">Make changes to your account here.</p>
      </TabsContent>
      <TabsContent value="password" className="p-4 border rounded-md mt-2">
        <p className="text-sm text-foreground">Change your password here.</p>
      </TabsContent>
    </Tabs>
  ),
}

export const UnderlineVariant: Story = {
  render: () => (
    <Tabs variant="underline" defaultValue="overview" className="w-[400px]">
      <TabsList>
        <TabsTrigger value="overview">Overview</TabsTrigger>
        <TabsTrigger value="integrations">Integrations</TabsTrigger>
        <TabsTrigger value="settings">Settings</TabsTrigger>
      </TabsList>
      <TabsContent value="overview" className="p-4 mt-2">
        <p className="text-sm text-foreground">Overview content.</p>
      </TabsContent>
      <TabsContent value="integrations" className="p-4 mt-2">
        <p className="text-sm text-foreground">Integrations content.</p>
      </TabsContent>
      <TabsContent value="settings" className="p-4 mt-2">
        <p className="text-sm text-foreground">Settings content.</p>
      </TabsContent>
    </Tabs>
  ),
}

export const CurvedVariant: Story = {
  render: () => (
    <div className="bg-muted p-8 rounded-xl w-[500px]">
      <Tabs variant="curved" defaultValue="home">
        <TabsList className="px-4">
          <TabsTrigger value="home">Home</TabsTrigger>
          <TabsTrigger value="products">Products</TabsTrigger>
          <TabsTrigger value="about">About</TabsTrigger>
        </TabsList>
        <TabsContent value="home">
          <div className="p-4">
            <h3 className="text-xl font-bold mb-2">Home Feed</h3>
            <p className="text-sm">Seamless curved inverted corner design ready to use.</p>
          </div>
        </TabsContent>
        <TabsContent value="products">
          <div className="p-4">
            <h3 className="text-xl font-bold mb-2">All Products</h3>
            <p className="text-sm">Viewing catalog grid here.</p>
          </div>
        </TabsContent>
        <TabsContent value="about">
          <div className="p-4">
            <h3 className="text-xl font-bold mb-2">Our Story</h3>
            <p className="text-sm">Founded in 2026 with a mission to create beauty.</p>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  ),
}

export const Disabled: Story = {
  render: () => (
    <Tabs defaultValue="music" className="w-[400px]">
      <TabsList className="grid w-full grid-cols-3">
        <TabsTrigger value="music">Music</TabsTrigger>
        <TabsTrigger value="podcasts">Podcasts</TabsTrigger>
        <TabsTrigger value="live" disabled>
          Live
        </TabsTrigger>
      </TabsList>
      <TabsContent value="music" className="p-4 mt-2 border rounded-md">
        <p className="text-sm text-foreground">Music content.</p>
      </TabsContent>
      <TabsContent value="podcasts" className="p-4 mt-2 border rounded-md">
        <p className="text-sm text-foreground">Podcasts content.</p>
      </TabsContent>
      <TabsContent value="live" className="p-4 mt-2 border rounded-md">
        <p className="text-sm text-foreground">Live content.</p>
      </TabsContent>
    </Tabs>
  ),
}
