'use client'

import * as React from 'react'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
  Badge,
  Button,
  ButtonGroup,
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
  Combobox,
  ContextMenu,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuSeparator,
  ContextMenuTrigger,
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  Popover,
  PopoverContent,
  PopoverTrigger,
  Progress,
  RadioGroup,
  RadioGroupItem,
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
  Switch,
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
  ImageZoom,
} from '@const-ui/react'
import { Home, Sparkles, Users } from 'lucide-react'

// Local styled Label since it's not exported from the UI package
const Label = React.forwardRef<HTMLLabelElement, React.LabelHTMLAttributes<HTMLLabelElement>>(
  ({ className, ...props }, ref) => (
    <label
      ref={ref}
      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
      style={{ cursor: 'pointer' }}
      {...props}
    />
  ),
)
Label.displayName = 'Label'

// -- Accordion --
function AccordionDemo() {
  return (
    <Accordion type="single" collapsible className="w-full max-w-md">
      <AccordionItem value="item-1">
        <AccordionTrigger>Is it accessible?</AccordionTrigger>
        <AccordionContent>Yes. It adheres to the WAI-ARIA design pattern.</AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>Is it styled?</AccordionTrigger>
        <AccordionContent>
          Yes. It comes with default styles that match the other components.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger>Is it animated?</AccordionTrigger>
        <AccordionContent>
          Yes. It&apos;s animated by default, but you can disable it if you prefer.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  )
}

// -- Badge --
function BadgeDemo() {
  return (
    <div className="flex flex-wrap gap-3">
      <Badge>Default</Badge>
      <Badge variant="secondary">Secondary</Badge>
      <Badge variant="destructive">Destructive</Badge>
      <Badge variant="outline">Outline</Badge>
    </div>
  )
}

// -- Button --
function ButtonDemo() {
  return (
    <div className="flex flex-wrap items-center gap-3">
      <Button>Default</Button>
      <Button variant="destructive">Destructive</Button>
      <Button variant="outline">Outline</Button>
      <Button variant="ghost">Ghost</Button>
      <Button variant="link">Link</Button>
      <Button isLoading>Loading</Button>
      <Button size="sm">Small</Button>
      <Button size="lg">Large</Button>
    </div>
  )
}

// -- ButtonGroup --
function ButtonGroupDemo() {
  return (
    <div className="flex flex-col gap-4">
      <ButtonGroup>
        <Button variant="outline">Left</Button>
        <Button variant="outline">Center</Button>
        <Button variant="outline">Right</Button>
      </ButtonGroup>
      <ButtonGroup orientation="vertical">
        <Button variant="outline">Top</Button>
        <Button variant="outline">Middle</Button>
        <Button variant="outline">Bottom</Button>
      </ButtonGroup>
    </div>
  )
}

// -- Card --
function CardDemo() {
  return (
    <Card className="w-full max-w-sm">
      <CardHeader>
        <CardTitle>Create project</CardTitle>
        <CardDescription>Deploy your new project in one-click.</CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted-foreground">
          Fill in the details below to get started with your new project.
        </p>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button variant="outline">Cancel</Button>
        <Button>Deploy</Button>
      </CardFooter>
    </Card>
  )
}

// -- Combobox --
function ComboboxDemo() {
  const [value, setValue] = React.useState('')
  const frameworks = [
    { value: 'next.js', label: 'Next.js' },
    { value: 'sveltekit', label: 'SvelteKit' },
    { value: 'nuxt.js', label: 'Nuxt.js' },
    { value: 'remix', label: 'Remix' },
    { value: 'astro', label: 'Astro' },
  ]
  return (
    <Combobox
      options={frameworks}
      value={value}
      onChange={setValue}
      placeholder="Select framework..."
    />
  )
}

// -- ContextMenu --
function ContextMenuDemo() {
  return (
    <ContextMenu>
      <ContextMenuTrigger className="flex h-24 w-64 items-center justify-center rounded-lg border border-dashed text-sm text-muted-foreground">
        Right-click here
      </ContextMenuTrigger>
      <ContextMenuContent>
        <ContextMenuItem>Back</ContextMenuItem>
        <ContextMenuItem>Forward</ContextMenuItem>
        <ContextMenuItem>Reload</ContextMenuItem>
        <ContextMenuSeparator />
        <ContextMenuItem>Save As...</ContextMenuItem>
        <ContextMenuItem>Print...</ContextMenuItem>
      </ContextMenuContent>
    </ContextMenu>
  )
}

// -- Dialog --
function DialogDemo() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">Open Dialog</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Edit Profile</DialogTitle>
          <DialogDescription>
            Make changes to your profile here. Click save when you&apos;re done.
          </DialogDescription>
        </DialogHeader>
        <div className="py-4 text-sm text-muted-foreground">Profile form fields would go here.</div>
        <DialogFooter>
          <Button variant="outline">Cancel</Button>
          <Button>Save changes</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}

// -- Popover --
function PopoverDemo() {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="outline">Open Popover</Button>
      </PopoverTrigger>
      <PopoverContent className="w-64">
        <div className="space-y-2">
          <h4 className="font-medium leading-none">Dimensions</h4>
          <p className="text-sm text-muted-foreground">Set the dimensions for the layer.</p>
          <div className="grid gap-2 pt-2">
            <div className="flex items-center justify-between">
              <span className="text-sm">Width</span>
              <span className="text-sm font-medium">100%</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm">Height</span>
              <span className="text-sm font-medium">auto</span>
            </div>
          </div>
        </div>
      </PopoverContent>
    </Popover>
  )
}

// -- Progress --
function ProgressDemo() {
  const [value, setValue] = React.useState(60)
  React.useEffect(() => {
    const t = setInterval(() => setValue((v) => (v >= 100 ? 10 : v + 5)), 600)
    return () => clearInterval(t)
  }, [])
  return (
    <div className="flex w-full max-w-md flex-col gap-6">
      <div className="space-y-1.5">
        <p className="text-xs font-medium text-muted-foreground">Bar ({value}%)</p>
        <Progress value={value} variant="bar" />
      </div>
      <div className="space-y-1.5">
        <p className="text-xs font-medium text-muted-foreground">Circle</p>
        <Progress value={value} variant="circle" circleSize={80} />
      </div>
      <div className="space-y-1.5">
        <p className="text-xs font-medium text-muted-foreground">Box</p>
        <Progress value={value} variant="box" boxCount={12} />
      </div>
    </div>
  )
}

// -- RadioGroup --
function RadioGroupDemo() {
  return (
    <RadioGroup defaultValue="comfortable">
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="default" id="r1" />
        <Label htmlFor="r1">Default</Label>
      </div>
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="comfortable" id="r2" />
        <Label htmlFor="r2">Comfortable</Label>
      </div>
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="compact" id="r3" />
        <Label htmlFor="r3">Compact</Label>
      </div>
    </RadioGroup>
  )
}

// -- Select --
function SelectDemo() {
  return (
    <Select>
      <SelectTrigger className="w-[200px]">
        <SelectValue placeholder="Select a fruit" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="apple">Apple</SelectItem>
        <SelectItem value="banana">Banana</SelectItem>
        <SelectItem value="blueberry">Blueberry</SelectItem>
        <SelectItem value="grapes">Grapes</SelectItem>
        <SelectItem value="pineapple">Pineapple</SelectItem>
      </SelectContent>
    </Select>
  )
}

// -- Switch --
function SwitchDemo() {
  const [checked, setChecked] = React.useState(false)
  return (
    <div className="flex items-center gap-6">
      <div className="flex items-center space-x-2">
        <Switch id="airplane" checked={checked} onCheckedChange={setChecked} />
        <Label htmlFor="airplane">Airplane Mode</Label>
      </div>
      <span className="text-sm text-muted-foreground">{checked ? 'On' : 'Off'}</span>
    </div>
  )
}

// -- Tabs --
function TabsDemo() {
  return (
    <Tabs defaultValue="account" className="w-full max-w-md">
      <TabsList className="grid w-full grid-cols-2">
        <TabsTrigger value="account">Account</TabsTrigger>
        <TabsTrigger value="password">Password</TabsTrigger>
      </TabsList>
      <TabsContent value="account" className="space-y-2 p-4">
        <p className="text-sm font-medium">Account settings</p>
        <p className="text-sm text-muted-foreground">Make changes to your account here.</p>
      </TabsContent>
      <TabsContent value="password" className="space-y-2 p-4">
        <p className="text-sm font-medium">Password settings</p>
        <p className="text-sm text-muted-foreground">Change your password here.</p>
      </TabsContent>
    </Tabs>
  )
}

function TabsNestedDemo() {
  return (
    <Tabs
      defaultValue="row1-account"
      variant="underline"
      className="w-full max-w-xl border rounded-lg p-2"
    >
      <TabsList className="grid w-full grid-cols-4">
        <TabsTrigger value="row1-account">Account</TabsTrigger>
        <TabsTrigger value="row1-password">Password</TabsTrigger>
        <TabsTrigger value="row1-account1">Account 1</TabsTrigger>
        <TabsTrigger value="row1-password1">Password 1</TabsTrigger>
      </TabsList>

      <TabsContent value="row1-account" className="p-0">
        <Tabs defaultValue="row2-account" variant="underline" className="w-full">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="row2-account">Account</TabsTrigger>
            <TabsTrigger value="row2-password">Password</TabsTrigger>
          </TabsList>
          <TabsContent value="row2-account" className="space-y-2 p-4 pt-6">
            <h4 className="text-base font-semibold">Account settings</h4>
            <p className="text-sm text-muted-foreground">Make changes to your account here.</p>
          </TabsContent>
          <TabsContent value="row2-password" className="space-y-2 p-4 pt-6">
            <h4 className="text-base font-semibold">Account Security</h4>
            <p className="text-sm text-muted-foreground">Modify secure level 2 tokens here.</p>
          </TabsContent>
        </Tabs>
      </TabsContent>

      <TabsContent
        value="row1-password"
        className="p-8 text-center text-sm text-muted-foreground border-t mt-2"
      >
        Outer "Password" tab is active. The nested sub-menu is hidden!
      </TabsContent>

      <TabsContent
        value="row1-account1"
        className="p-8 text-center text-sm text-muted-foreground border-t mt-2"
      >
        Outer "Account 1" tab is active. The nested sub-menu is hidden!
      </TabsContent>

      <TabsContent
        value="row1-password1"
        className="p-8 text-center text-sm text-muted-foreground border-t mt-2"
      >
        Outer "Password 1" tab is active. The nested sub-menu is hidden!
      </TabsContent>
    </Tabs>
  )
}

function TabsCurvedDemo() {
  return (
    <div className="w-full max-w-lg p-8 rounded-xl bg-[#f3e8e0] dark:bg-[#1a1614]">
      <Tabs defaultValue="home" className="w-full" variant="curved">
        <TabsList className="px-4">
          <TabsTrigger value="home" className="gap-2">
            <Home className="h-4 w-4" />
            Home
          </TabsTrigger>
          <TabsTrigger value="products" className="gap-2">
            <Sparkles className="h-4 w-4" />
            Products
          </TabsTrigger>
          <TabsTrigger value="about" className="gap-2">
            <Users className="h-4 w-4" />
            About
          </TabsTrigger>
        </TabsList>
        <TabsContent value="home">
          <h3 className="text-xl font-bold mb-2">Home Feed</h3>
          <p>Seamless curved inverted corner design ready to use.</p>
        </TabsContent>
        <TabsContent value="products">
          <h3 className="text-xl font-bold mb-2">All Products</h3>
          <p>Viewing catalog grid here.</p>
        </TabsContent>
        <TabsContent value="about">
          <h3 className="text-xl font-bold mb-2">Our Story</h3>
          <p>Founded in 2026 with a mission to create beauty.</p>
        </TabsContent>
      </Tabs>
    </div>
  )
}

// -- ImageZoom --
function ImageZoomDemo() {
  return (
    <div className="flex justify-center items-center max-w-sm overflow-hidden rounded-xl border shadow-sm bg-muted/50">
      <ImageZoom>
        <img
          src="https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?w=800&auto=format&fit=crop"
          alt="A cute fluffy dog lounging gracefully"
          className="w-full h-auto block transition-transform duration-300 hover:scale-105"
        />
      </ImageZoom>
    </div>
  )
}

// -- Registry --
export const previewRegistry: Record<string, React.ComponentType> = {
  'accordion-basic': AccordionDemo,
  'badge-variants': BadgeDemo,
  'button-variants': ButtonDemo,
  'button-group-basic': ButtonGroupDemo,
  'card-basic': CardDemo,
  'combobox-basic': ComboboxDemo,
  'context-menu-basic': ContextMenuDemo,
  'dialog-basic': DialogDemo,
  'popover-basic': PopoverDemo,
  'progress-variants': ProgressDemo,
  'radio-group-basic': RadioGroupDemo,
  'select-basic': SelectDemo,
  'switch-basic': SwitchDemo,
  'tabs-basic': TabsDemo,
  'tabs-curved': TabsCurvedDemo,
  'tabs-nested': TabsNestedDemo,
  'image-zoom-basic': ImageZoomDemo,
}

export const previewCodeRegistry: Record<string, string> = {
  'accordion-basic': `import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@const-ui/react"

export function AccordionDemo() {
  return (
    <Accordion type="single" collapsible className="w-full max-w-md">
      <AccordionItem value="item-1">
        <AccordionTrigger>Is it accessible?</AccordionTrigger>
        <AccordionContent>Yes. It adheres to the WAI-ARIA design pattern.</AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>Is it styled?</AccordionTrigger>
        <AccordionContent>
          Yes. It comes with default styles that match the other components.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger>Is it animated?</AccordionTrigger>
        <AccordionContent>
          Yes. It's animated by default, but you can disable it if you prefer.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  )
}`,
  'badge-variants': `import { Badge } from "@const-ui/react"

export function BadgeDemo() {
  return (
    <div className="flex flex-wrap gap-3">
      <Badge>Default</Badge>
      <Badge variant="secondary">Secondary</Badge>
      <Badge variant="destructive">Destructive</Badge>
      <Badge variant="outline">Outline</Badge>
    </div>
  )
}`,
  'button-variants': `import { Button } from "@const-ui/react"

export function ButtonDemo() {
  return (
    <div className="flex flex-wrap items-center gap-3">
      <Button>Default</Button>
      <Button variant="destructive">Destructive</Button>
      <Button variant="outline">Outline</Button>
      <Button variant="ghost">Ghost</Button>
      <Button variant="link">Link</Button>
      <Button isLoading>Loading</Button>
      <Button size="sm">Small</Button>
      <Button size="lg">Large</Button>
    </div>
  )
}`,
  'button-group-basic': `import { Button, ButtonGroup } from "@const-ui/react"

export function ButtonGroupDemo() {
  return (
    <div className="flex flex-col gap-4">
      <ButtonGroup>
        <Button variant="outline">Left</Button>
        <Button variant="outline">Center</Button>
        <Button variant="outline">Right</Button>
      </ButtonGroup>
      <ButtonGroup orientation="vertical">
        <Button variant="outline">Top</Button>
        <Button variant="outline">Middle</Button>
        <Button variant="outline">Bottom</Button>
      </ButtonGroup>
    </div>
  )
}`,
  'card-basic': `import { Button, Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@const-ui/react"

export function CardDemo() {
  return (
    <Card className="w-full max-w-sm">
      <CardHeader>
        <CardTitle>Create project</CardTitle>
        <CardDescription>Deploy your new project in one-click.</CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted-foreground">
          Fill in the details below to get started with your new project.
        </p>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button variant="outline">Cancel</Button>
        <Button>Deploy</Button>
      </CardFooter>
    </Card>
  )
}`,
  'combobox-basic': `import * as React from "react"
import { Combobox } from "@const-ui/react"

export function ComboboxDemo() {
  const [value, setValue] = React.useState("")
  const frameworks = [
    { value: "next.js", label: "Next.js" },
    { value: "sveltekit", label: "SvelteKit" },
    { value: "nuxt.js", label: "Nuxt.js" },
    { value: "remix", label: "Remix" },
    { value: "astro", label: "Astro" },
  ]
  return (
    <Combobox
      options={frameworks}
      value={value}
      onChange={setValue}
      placeholder="Select framework..."
    />
  )
}`,
  'context-menu-basic': `import { ContextMenu, ContextMenuContent, ContextMenuItem, ContextMenuSeparator, ContextMenuTrigger } from "@const-ui/react"

export function ContextMenuDemo() {
  return (
    <ContextMenu>
      <ContextMenuTrigger className="flex h-24 w-64 items-center justify-center rounded-lg border border-dashed text-sm text-muted-foreground">
        Right-click here
      </ContextMenuTrigger>
      <ContextMenuContent>
        <ContextMenuItem>Back</ContextMenuItem>
        <ContextMenuItem>Forward</ContextMenuItem>
        <ContextMenuItem>Reload</ContextMenuItem>
        <ContextMenuSeparator />
        <ContextMenuItem>Save As...</ContextMenuItem>
        <ContextMenuItem>Print...</ContextMenuItem>
      </ContextMenuContent>
    </ContextMenu>
  )
}`,
  'dialog-basic': `import { Button, Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@const-ui/react"

export function DialogDemo() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">Open Dialog</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Edit Profile</DialogTitle>
          <DialogDescription>
            Make changes to your profile here. Click save when you're done.
          </DialogDescription>
        </DialogHeader>
        <div className="py-4 text-sm text-muted-foreground">Profile form fields would go here.</div>
        <DialogFooter>
          <Button variant="outline">Cancel</Button>
          <Button>Save changes</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}`,
  'popover-basic': `import { Button, Popover, PopoverContent, PopoverTrigger } from "@const-ui/react"

export function PopoverDemo() {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="outline">Open Popover</Button>
      </PopoverTrigger>
      <PopoverContent className="w-64">
        <div className="space-y-2">
          <h4 className="font-medium leading-none">Dimensions</h4>
          <p className="text-sm text-muted-foreground">Set the dimensions for the layer.</p>
          <div className="grid gap-2 pt-2">
            <div className="flex items-center justify-between">
              <span className="text-sm">Width</span>
              <span className="text-sm font-medium">100%</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm">Height</span>
              <span className="text-sm font-medium">auto</span>
            </div>
          </div>
        </div>
      </PopoverContent>
    </Popover>
  )
}`,
  'progress-variants': `import * as React from "react"
import { Progress } from "@const-ui/react"

export function ProgressDemo() {
  const [value, setValue] = React.useState(60)
  React.useEffect(() => {
    const t = setInterval(() => setValue((v) => (v >= 100 ? 10 : v + 5)), 600)
    return () => clearInterval(t)
  }, [])
  return (
    <div className="flex w-full max-w-md flex-col gap-6">
      <div className="space-y-1.5">
        <p className="text-xs font-medium text-muted-foreground">Bar ({value}%)</p>
        <Progress value={value} variant="bar" />
      </div>
      <div className="space-y-1.5">
        <p className="text-xs font-medium text-muted-foreground">Circle</p>
        <Progress value={value} variant="circle" circleSize={80} />
      </div>
      <div className="space-y-1.5">
        <p className="text-xs font-medium text-muted-foreground">Box</p>
        <Progress value={value} variant="box" boxCount={12} />
      </div>
    </div>
  )
}`,
  'radio-group-basic': `import { RadioGroup, RadioGroupItem } from "@const-ui/react"

export function RadioGroupDemo() {
  return (
    <RadioGroup defaultValue="comfortable">
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="default" id="r1" />
        <label htmlFor="r1">Default</label>
      </div>
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="comfortable" id="r2" />
        <label htmlFor="r2">Comfortable</label>
      </div>
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="compact" id="r3" />
        <label htmlFor="r3">Compact</label>
      </div>
    </RadioGroup>
  )
}`,
  'select-basic': `import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@const-ui/react"

export function SelectDemo() {
  return (
    <Select>
      <SelectTrigger className="w-[200px]">
        <SelectValue placeholder="Select a fruit" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="apple">Apple</SelectItem>
        <SelectItem value="banana">Banana</SelectItem>
        <SelectItem value="blueberry">Blueberry</SelectItem>
        <SelectItem value="grapes">Grapes</SelectItem>
        <SelectItem value="pineapple">Pineapple</SelectItem>
      </SelectContent>
    </Select>
  )
}`,
  'switch-basic': `import * as React from "react"
import { Switch } from "@const-ui/react"

export function SwitchDemo() {
  const [checked, setChecked] = React.useState(false)
  return (
    <div className="flex items-center gap-6">
      <div className="flex items-center space-x-2">
        <Switch id="airplane" checked={checked} onCheckedChange={setChecked} />
        <label htmlFor="airplane">Airplane Mode</label>
      </div>
      <span className="text-sm text-muted-foreground">{checked ? "On" : "Off"}</span>
    </div>
  )
}`,
  'tabs-basic': `import { Tabs, TabsContent, TabsList, TabsTrigger } from "@const-ui/react"

export function TabsDemo() {
  return (
    <Tabs defaultValue="account" className="w-full max-w-md">
      <TabsList className="grid w-full grid-cols-2">
        <TabsTrigger value="account">Account</TabsTrigger>
        <TabsTrigger value="password">Password</TabsTrigger>
      </TabsList>
      <TabsContent value="account" className="space-y-2 p-4">
        <p className="text-sm font-medium">Account settings</p>
        <p className="text-sm text-muted-foreground">Make changes to your account here.</p>
      </TabsContent>
      <TabsContent value="password" className="space-y-2 p-4">
        <p className="text-sm font-medium">Password settings</p>
        <p className="text-sm text-muted-foreground">Change your password here.</p>
      </TabsContent>
    </Tabs>
  )
}`,
  'tabs-curved': `import { Tabs, TabsContent, TabsList, TabsTrigger } from "@const-ui/react"
import { Home, Sparkles, Users } from "lucide-react"

export function TabsCurvedDemo() {
  return (
    <div className="w-full max-w-lg p-8 rounded-xl bg-[#f3e8e0] dark:bg-[#1a1614]">
      <Tabs defaultValue="home" className="w-full" variant="curved">
        <TabsList className="px-4">
          <TabsTrigger value="home" className="gap-2">
            <Home className="h-4 w-4" />
            Home
          </TabsTrigger>
          <TabsTrigger value="products" className="gap-2">
            <Sparkles className="h-4 w-4" />
            Products
          </TabsTrigger>
          <TabsTrigger value="about" className="gap-2">
            <Users className="h-4 w-4" />
            About
          </TabsTrigger>
        </TabsList>
        <TabsContent value="home">
          <h3 className="text-xl font-bold mb-2">Home Feed</h3>
          <p>Seamless curved inverted corner design ready to use.</p>
        </TabsContent>
        <TabsContent value="products">
          <h3 className="text-xl font-bold mb-2">All Products</h3>
          <p>Viewing catalog grid here.</p>
        </TabsContent>
        <TabsContent value="about">
          <h3 className="text-xl font-bold mb-2">Our Story</h3>
          <p>Founded in 2026 with a mission to create beauty.</p>
        </TabsContent>
      </Tabs>
    </div>
  )
}`,
  'image-zoom-basic': `import { ImageZoom } from "@const-ui/react"

export function ImageZoomDemo() {
  return (
    <div className="flex justify-center items-center max-w-sm overflow-hidden rounded-xl border shadow-sm bg-muted/50">
      <ImageZoom>
        <img
          src="https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?w=800&auto=format&fit=crop"
          alt="A cute fluffy dog lounging gracefully"
          className="w-full h-auto block transition-transform duration-300 hover:scale-105"
        />
      </ImageZoom>
    </div>
  )
}`,
  'tabs-nested': `import { Tabs, TabsContent, TabsList, TabsTrigger } from "@const-ui/react"

export function TabsNestedDemo() {
  return (
    <Tabs defaultValue="row1-account" variant="underline" className="w-full max-w-xl border rounded-lg p-2">
      {/* Level 1: Root Tab Navigation */}
      <TabsList className="grid w-full grid-cols-4">
        <TabsTrigger value="row1-account">Account</TabsTrigger>
        <TabsTrigger value="row1-password">Password</TabsTrigger>
        <TabsTrigger value="row1-account1">Account 1</TabsTrigger>
        <TabsTrigger value="row1-password1">Password 1</TabsTrigger>
      </TabsList>

      {/* Level 2: Tabs isolated inside the first level's "Account" Selection */}
      <TabsContent value="row1-account" className="p-0">
        <Tabs defaultValue="row2-account" variant="underline" className="w-full">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="row2-account">Account</TabsTrigger>
            <TabsTrigger value="row2-password">Password</TabsTrigger>
          </TabsList>
          <TabsContent value="row2-account" className="space-y-2 p-4 pt-6">
            <h4 className="text-base font-semibold">Account settings</h4>
            <p className="text-sm text-muted-foreground">Make changes to your account here.</p>
          </TabsContent>
          <TabsContent value="row2-password" className="space-y-2 p-4 pt-6">
            <h4 className="text-base font-semibold">Account Security</h4>
            <p className="text-sm text-muted-foreground">Modify secure level 2 tokens here.</p>
          </TabsContent>
        </Tabs>
      </TabsContent>

      <TabsContent value="row1-password" className="p-8 text-center text-sm text-muted-foreground border-t mt-2">
        Outer "Password" tab is active. The nested sub-menu is hidden!
      </TabsContent>
      
      <TabsContent value="row1-account1" className="p-8 text-center text-sm text-muted-foreground border-t mt-2">
        Outer "Account 1" tab is active. The nested sub-menu is hidden!
      </TabsContent>
      
      <TabsContent value="row1-password1" className="p-8 text-center text-sm text-muted-foreground border-t mt-2">
        Outer "Password 1" tab is active. The nested sub-menu is hidden!
      </TabsContent>
    </Tabs>
  )
}`,
}
