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

export const DependentMultiTabs: Story = {
  render: () => (
    <Tabs
      defaultValue="profile"
      variant="underline"
      className="w-full max-w-xl border rounded-xl p-4 shadow-sm bg-background"
    >
      {/* Primary Configuration Groups */}
      <TabsList className="grid w-full grid-cols-4">
        <TabsTrigger value="profile">Profile</TabsTrigger>
        <TabsTrigger value="security">Security</TabsTrigger>
        <TabsTrigger value="billing">Billing</TabsTrigger>
        <TabsTrigger value="notifications">Alerts</TabsTrigger>
      </TabsList>

      {/* Nested Configuration Suite inside Profile */}
      <TabsContent value="profile" className="p-0 mt-0">
        <Tabs defaultValue="profile-general" variant="underline" className="w-full">
          <TabsList className="grid w-full grid-cols-3 bg-muted/30">
            <TabsTrigger value="profile-general">General</TabsTrigger>
            <TabsTrigger value="profile-social">Socials</TabsTrigger>
            <TabsTrigger value="profile-team">Teams</TabsTrigger>
          </TabsList>
          <TabsContent value="profile-general" className="space-y-2 p-6">
            <h4 className="text-base font-semibold">Account Info</h4>
            <p className="text-sm text-muted-foreground">
              Modify your primary display name, company URL, and timezones.
            </p>
          </TabsContent>
          <TabsContent value="profile-social" className="space-y-2 p-6">
            <h4 className="text-base font-semibold">Connected Profiles</h4>
            <p className="text-sm text-muted-foreground">
              Link GitHub, Twitter, or LinkedIn directly to your active public portal.
            </p>
          </TabsContent>
          <TabsContent value="profile-team" className="space-y-2 p-6">
            <h4 className="text-base font-semibold">Organization Seats</h4>
            <p className="text-sm text-muted-foreground">
              Assign executive roles, invite developers, and allocate operational permissions.
            </p>
          </TabsContent>
        </Tabs>
      </TabsContent>

      {/* Nested Configuration Suite inside Security */}
      <TabsContent value="security" className="p-0 mt-0">
        <Tabs defaultValue="security-mfa" variant="underline" className="w-full">
          <TabsList className="grid w-full grid-cols-3 bg-muted/30">
            <TabsTrigger value="security-mfa">Two-Factor</TabsTrigger>
            <TabsTrigger value="security-keys">API Keys</TabsTrigger>
            <TabsTrigger value="security-logs">Audit Logs</TabsTrigger>
          </TabsList>
          <TabsContent value="security-mfa" className="space-y-2 p-6">
            <h4 className="text-base font-semibold">Multi-Factor Authentication</h4>
            <p className="text-sm text-muted-foreground">
              Secure your account by requiring an additional OTP token upon login.
            </p>
          </TabsContent>
          <TabsContent value="security-keys" className="space-y-2 p-6">
            <h4 className="text-base font-semibold">API Integrations</h4>
            <p className="text-sm text-muted-foreground">
              Generate secure client tokens to connect external microservices to the API.
            </p>
          </TabsContent>
          <TabsContent value="security-logs" className="space-y-2 p-6">
            <h4 className="text-base font-semibold">Security Footprint</h4>
            <p className="text-sm text-muted-foreground">
              Review all IP locations, active browser sessions, and login history timestamps.
            </p>
          </TabsContent>
        </Tabs>
      </TabsContent>

      <TabsContent value="billing" className="p-6 space-y-2 border-t">
        <h4 className="text-base font-semibold">Subscriptions & Payments</h4>
        <p className="text-sm text-muted-foreground">
          Update your corporate credit cards, download invoices, or upgrade tiers.
        </p>
      </TabsContent>

      <TabsContent value="notifications" className="p-6 space-y-2 border-t">
        <h4 className="text-base font-semibold">Email Preferences</h4>
        <p className="text-sm text-muted-foreground">
          Control which system events trigger automated webhooks or push notifications.
        </p>
      </TabsContent>
    </Tabs>
  ),
}
