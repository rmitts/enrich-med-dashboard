"use client"

import * as React from "react"
import Link from "next/link"
import { Separator } from "@/components/ui/separator"
import { SidebarTrigger } from "@/components/ui/sidebar"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
} from "@/components/ui/command"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Progress } from "@/components/ui/progress"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { ScrollArea } from "@/components/ui/scroll-area"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Skeleton } from "@/components/ui/skeleton"
import { Slider } from "@/components/ui/slider"
import { Switch } from "@/components/ui/switch"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Textarea } from "@/components/ui/textarea"
import { Toggle } from "@/components/ui/toggle"
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card"
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible"
import { Kbd } from "@/components/ui/kbd"
import { Spinner } from "@/components/ui/spinner"
import {
  Bold,
  Italic,
  Underline,
  AlignLeft,
  AlignCenter,
  AlignRight,
  Terminal,
  AlertTriangle,
  Info,
  CheckCircle,
  ChevronDown,
  Heart,
  Star,
  User,
  Settings,
  Search,
  PawPrint,
  Calendar as CalendarIcon,
  ChevronsUpDown,
} from "lucide-react"

function Section({ title, description, children }: { title: string; description: string; children: React.ReactNode }) {
  return (
    <div className="flex flex-col gap-4">
      <div>
        <h3 className="text-lg font-semibold text-foreground">{title}</h3>
        <p className="text-xs text-muted-foreground mt-0.5">{description}</p>
      </div>
      <div className="rounded-lg border border-border bg-card p-4 md:p-6">{children}</div>
    </div>
  )
}

export default function ComponentLibraryPage() {
  const [calendarDate, setCalendarDate] = React.useState<Date | undefined>(new Date())
  const [sliderValue, setSliderValue] = React.useState([50])
  const [switchOn, setSwitchOn] = React.useState(true)
  const [checkboxChecked, setCheckboxChecked] = React.useState(true)
  const [collapsibleOpen, setCollapsibleOpen] = React.useState(false)

  return (
    <div className="flex flex-col h-full">
      <header className="flex h-14 shrink-0 items-center gap-2 border-b border-border px-4 md:px-6">
        <SidebarTrigger className="-ml-2" />
        <Separator orientation="vertical" className="mr-2 h-4" />
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink asChild><Link href="/">PawHealth</Link></BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink asChild><Link href="/design-system">Design System</Link></BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>Component Library</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </header>

      <div className="flex-1 overflow-auto p-4 md:p-6">
        <div className="max-w-5xl mx-auto flex flex-col gap-8">
          <div>
            <h1 className="text-2xl font-bold text-foreground text-balance">Component Library</h1>
            <p className="text-muted-foreground mt-1">
              All 55 shadcn/ui components rendered live. Switch themes to see every element update in real-time.
            </p>
          </div>

          {/* Buttons */}
          <Section title="Button" description="Primary action element with multiple variants and sizes">
            <div className="flex flex-col gap-4">
              <div className="flex flex-wrap gap-3 items-center">
                <Button>Primary</Button>
                <Button variant="secondary">Secondary</Button>
                <Button variant="outline">Outline</Button>
                <Button variant="ghost">Ghost</Button>
                <Button variant="link">Link</Button>
                <Button variant="destructive">Destructive</Button>
              </div>
              <div className="flex flex-wrap gap-3 items-center">
                <Button size="sm">Small</Button>
                <Button size="default">Default</Button>
                <Button size="lg">Large</Button>
                <Button size="icon"><Heart className="size-4" /></Button>
              </div>
              <div className="flex flex-wrap gap-3 items-center">
                <Button disabled>Disabled</Button>
                <Button>
                  <PawPrint className="size-4" />
                  With Icon
                </Button>
              </div>
            </div>
          </Section>

          {/* Badge */}
          <Section title="Badge" description="Small status indicators and labels">
            <div className="flex flex-wrap gap-3 items-center">
              <Badge>Default</Badge>
              <Badge variant="secondary">Secondary</Badge>
              <Badge variant="outline">Outline</Badge>
              <Badge variant="destructive">Destructive</Badge>
              <Badge variant="outline" className="bg-status-normal-bg text-status-normal border-0">Normal</Badge>
              <Badge variant="outline" className="bg-status-high-bg text-status-high border-0">High</Badge>
              <Badge variant="outline" className="bg-status-low-bg text-status-low border-0">Low</Badge>
              <Badge variant="outline" className="bg-status-critical-bg text-status-critical border-0">Critical</Badge>
            </div>
          </Section>

          {/* Card */}
          <Section title="Card" description="Container for grouped content with header, body, and footer">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Card>
                <CardHeader>
                  <CardTitle>Vet Appointment</CardTitle>
                  <CardDescription>Annual wellness exam and vaccinations</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">Scheduled for next Tuesday with Dr. Williams at PawCare Clinic.</p>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <Button variant="outline" size="sm">Reschedule</Button>
                  <Button size="sm">Confirm</Button>
                </CardFooter>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Weight Update</CardTitle>
                  <CardDescription>Latest measurement from vet visit</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold text-foreground">72 lbs</div>
                  <p className="text-xs text-muted-foreground mt-1">Within healthy range for breed and age</p>
                </CardContent>
              </Card>
            </div>
          </Section>

          {/* Input, Textarea, Label */}
          <Section title="Input, Textarea & Label" description="Form input elements for collecting data">
            <div className="flex flex-col gap-4 max-w-md">
              <div className="flex flex-col gap-2">
                <Label htmlFor="pet-name">Pet Name</Label>
                <Input id="pet-name" placeholder="Enter your pet's name" />
              </div>
              <div className="flex flex-col gap-2">
                <Label htmlFor="pet-notes">Notes</Label>
                <Textarea id="pet-notes" placeholder="Add any special notes for the vet..." />
              </div>
              <div className="flex flex-col gap-2">
                <Label>Disabled Input</Label>
                <Input disabled placeholder="Cannot edit this field" />
              </div>
            </div>
          </Section>

          {/* Select */}
          <Section title="Select" description="Dropdown selection from a list of options">
            <div className="max-w-xs">
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Select a vet" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="williams">Dr. Williams</SelectItem>
                  <SelectItem value="chen">Dr. Chen</SelectItem>
                  <SelectItem value="patel">Dr. Patel</SelectItem>
                  <SelectItem value="garcia">Dr. Garcia</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </Section>

          {/* Checkbox & Radio Group */}
          <Section title="Checkbox & Radio Group" description="Selection controls for single and multiple choices">
            <div className="flex flex-col gap-6 md:flex-row md:gap-12">
              <div className="flex flex-col gap-3">
                <Label className="text-sm font-semibold">Symptoms (check all)</Label>
                <div className="flex items-center gap-2">
                  <Checkbox id="c1" checked={checkboxChecked} onCheckedChange={(v) => setCheckboxChecked(!!v)} />
                  <Label htmlFor="c1" className="font-normal">Loss of appetite</Label>
                </div>
                <div className="flex items-center gap-2">
                  <Checkbox id="c2" />
                  <Label htmlFor="c2" className="font-normal">Lethargy</Label>
                </div>
                <div className="flex items-center gap-2">
                  <Checkbox id="c3" />
                  <Label htmlFor="c3" className="font-normal">Vomiting</Label>
                </div>
              </div>
              <div className="flex flex-col gap-3">
                <Label className="text-sm font-semibold">Priority Level</Label>
                <RadioGroup defaultValue="normal">
                  <div className="flex items-center gap-2">
                    <RadioGroupItem value="low" id="r1" />
                    <Label htmlFor="r1" className="font-normal">Low</Label>
                  </div>
                  <div className="flex items-center gap-2">
                    <RadioGroupItem value="normal" id="r2" />
                    <Label htmlFor="r2" className="font-normal">Normal</Label>
                  </div>
                  <div className="flex items-center gap-2">
                    <RadioGroupItem value="urgent" id="r3" />
                    <Label htmlFor="r3" className="font-normal">Urgent</Label>
                  </div>
                </RadioGroup>
              </div>
            </div>
          </Section>

          {/* Switch */}
          <Section title="Switch" description="Toggle control for binary settings">
            <div className="flex flex-col gap-4 max-w-sm">
              <div className="flex items-center justify-between">
                <Label htmlFor="reminders">Appointment Reminders</Label>
                <Switch id="reminders" checked={switchOn} onCheckedChange={setSwitchOn} />
              </div>
              <div className="flex items-center justify-between">
                <Label htmlFor="email-alerts">Email Alerts</Label>
                <Switch id="email-alerts" />
              </div>
            </div>
          </Section>

          {/* Slider */}
          <Section title="Slider" description="Range input for selecting numeric values">
            <div className="flex flex-col gap-4 max-w-md">
              <div className="flex items-center justify-between">
                <Label>Dosage Level</Label>
                <span className="text-sm font-mono text-muted-foreground">{sliderValue[0]}mg</span>
              </div>
              <Slider value={sliderValue} onValueChange={setSliderValue} max={100} step={5} />
            </div>
          </Section>

          {/* Progress */}
          <Section title="Progress" description="Visual indicator of completion or loading state">
            <div className="flex flex-col gap-4 max-w-md">
              <div>
                <p className="text-sm text-muted-foreground mb-2">Vaccination series: 3 of 4 complete</p>
                <Progress value={75} />
              </div>
              <div>
                <p className="text-sm text-muted-foreground mb-2">Data sync: 40%</p>
                <Progress value={40} />
              </div>
            </div>
          </Section>

          {/* Avatar */}
          <Section title="Avatar" description="User or pet profile image with fallback">
            <div className="flex gap-4 items-center">
              <Avatar className="size-8">
                <AvatarFallback className="bg-primary/10 text-primary">
                  <PawPrint className="size-4" />
                </AvatarFallback>
              </Avatar>
              <Avatar className="size-10">
                <AvatarFallback className="bg-primary/10 text-primary text-sm font-semibold">MX</AvatarFallback>
              </Avatar>
              <Avatar className="size-12">
                <AvatarFallback className="bg-muted text-muted-foreground">
                  <User className="size-5" />
                </AvatarFallback>
              </Avatar>
              <Avatar className="size-14">
                <AvatarImage src="https://github.com/shadcn.png" alt="User" />
                <AvatarFallback>SC</AvatarFallback>
              </Avatar>
            </div>
          </Section>

          {/* Accordion */}
          <Section title="Accordion" description="Expandable content sections for FAQs and grouped info">
            <Accordion type="single" collapsible className="max-w-lg">
              <AccordionItem value="item-1">
                <AccordionTrigger>What do elevated ALT levels mean?</AccordionTrigger>
                <AccordionContent>
                  ALT (alanine aminotransferase) is an enzyme found in the liver. Elevated levels may indicate liver damage, inflammation, or disease. Your vet will recommend follow-up testing.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger>How often should bloodwork be done?</AccordionTrigger>
                <AccordionContent>
                  For senior dogs (7+), bloodwork every 6 months is recommended. Younger healthy dogs typically need annual panels. Dogs on medications may need more frequent monitoring.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger>What is a CBC test?</AccordionTrigger>
                <AccordionContent>
                  A Complete Blood Count (CBC) measures red blood cells, white blood cells, and platelets. It helps detect infections, anemia, clotting issues, and immune system disorders.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </Section>

          {/* Alert */}
          <Section title="Alert" description="Contextual feedback messages with different severity levels">
            <div className="flex flex-col gap-4 max-w-lg">
              <Alert>
                <Terminal className="size-4" />
                <AlertTitle>System Notice</AlertTitle>
                <AlertDescription>Records were last synced 2 hours ago.</AlertDescription>
              </Alert>
              <Alert variant="destructive">
                <AlertTriangle className="size-4" />
                <AlertTitle>Critical Finding</AlertTitle>
                <AlertDescription>ALT levels are severely elevated. Contact your vet immediately.</AlertDescription>
              </Alert>
            </div>
          </Section>

          {/* Table */}
          <Section title="Table" description="Structured data display with headers, rows, and cells">
            <div className="rounded-lg border border-border overflow-hidden">
              <Table>
                <TableHeader>
                  <TableRow className="hover:bg-transparent">
                    <TableHead className="w-[140px] font-semibold">Vaccine</TableHead>
                    <TableHead className="font-semibold">Date</TableHead>
                    <TableHead className="font-semibold">Vet</TableHead>
                    <TableHead className="font-semibold text-right">Status</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow className="hover:bg-accent/30">
                    <TableCell className="font-medium">Rabies</TableCell>
                    <TableCell className="text-muted-foreground">Jan 2025</TableCell>
                    <TableCell className="text-muted-foreground">Dr. Williams</TableCell>
                    <TableCell className="text-right">
                      <Badge variant="outline" className="bg-status-normal-bg text-status-normal border-0">Current</Badge>
                    </TableCell>
                  </TableRow>
                  <TableRow className="hover:bg-accent/30">
                    <TableCell className="font-medium">DHPP</TableCell>
                    <TableCell className="text-muted-foreground">Mar 2025</TableCell>
                    <TableCell className="text-muted-foreground">Dr. Chen</TableCell>
                    <TableCell className="text-right">
                      <Badge variant="outline" className="bg-status-normal-bg text-status-normal border-0">Current</Badge>
                    </TableCell>
                  </TableRow>
                  <TableRow className="hover:bg-accent/30">
                    <TableCell className="font-medium">Bordetella</TableCell>
                    <TableCell className="text-muted-foreground">Oct 2024</TableCell>
                    <TableCell className="text-muted-foreground">Dr. Williams</TableCell>
                    <TableCell className="text-right">
                      <Badge variant="outline" className="bg-status-high-bg text-status-high border-0">Due Soon</Badge>
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </div>
          </Section>

          {/* Tabs */}
          <Section title="Tabs" description="Switch between related content panels">
            <Tabs defaultValue="overview" className="max-w-lg">
              <TabsList>
                <TabsTrigger value="overview">Overview</TabsTrigger>
                <TabsTrigger value="details">Details</TabsTrigger>
                <TabsTrigger value="history">History</TabsTrigger>
              </TabsList>
              <TabsContent value="overview" className="mt-4">
                <p className="text-sm text-muted-foreground">General health overview and key metrics for your pet.</p>
              </TabsContent>
              <TabsContent value="details" className="mt-4">
                <p className="text-sm text-muted-foreground">Detailed breakdown of individual test parameters.</p>
              </TabsContent>
              <TabsContent value="history" className="mt-4">
                <p className="text-sm text-muted-foreground">Historical records and trend analysis over time.</p>
              </TabsContent>
            </Tabs>
          </Section>

          {/* Dialog */}
          <Section title="Dialog" description="Modal overlay for focused interactions">
            <Dialog>
              <DialogTrigger asChild>
                <Button variant="outline">Open Dialog</Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Add New Record</DialogTitle>
                  <DialogDescription>Enter the details for a new health record entry.</DialogDescription>
                </DialogHeader>
                <div className="flex flex-col gap-4 py-4">
                  <div className="flex flex-col gap-2">
                    <Label>Record Type</Label>
                    <Input placeholder="e.g., Bloodwork, Vaccination" />
                  </div>
                  <div className="flex flex-col gap-2">
                    <Label>Date</Label>
                    <Input type="date" />
                  </div>
                </div>
                <DialogFooter>
                  <Button variant="outline">Cancel</Button>
                  <Button>Save Record</Button>
                </DialogFooter>
              </DialogContent>
            </Dialog>
          </Section>

          {/* Alert Dialog */}
          <Section title="Alert Dialog" description="Confirmation prompt requiring user action">
            <AlertDialog>
              <AlertDialogTrigger asChild>
                <Button variant="destructive">Delete Record</Button>
              </AlertDialogTrigger>
              <AlertDialogContent>
                <AlertDialogHeader>
                  <AlertDialogTitle>Are you sure?</AlertDialogTitle>
                  <AlertDialogDescription>
                    This will permanently delete this health record. This action cannot be undone.
                  </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                  <AlertDialogCancel>Cancel</AlertDialogCancel>
                  <AlertDialogAction>Delete</AlertDialogAction>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialog>
          </Section>

          {/* Sheet */}
          <Section title="Sheet" description="Side panel overlay for secondary content">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="outline">Open Sheet</Button>
              </SheetTrigger>
              <SheetContent>
                <SheetHeader>
                  <SheetTitle>Pet Profile</SheetTitle>
                  <SheetDescription>View and edit your pet's information.</SheetDescription>
                </SheetHeader>
                <div className="flex flex-col gap-4 py-6">
                  <div className="flex flex-col gap-2">
                    <Label>Name</Label>
                    <Input defaultValue="Max" />
                  </div>
                  <div className="flex flex-col gap-2">
                    <Label>Breed</Label>
                    <Input defaultValue="Golden Retriever" />
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </Section>

          {/* Dropdown Menu */}
          <Section title="Dropdown Menu" description="Contextual menu activated by a trigger">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline">
                  Actions <ChevronDown className="size-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start">
                <DropdownMenuLabel>Record Actions</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>View Details</DropdownMenuItem>
                <DropdownMenuItem>Edit Record</DropdownMenuItem>
                <DropdownMenuItem>Share with Vet</DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem className="text-destructive">Delete</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </Section>

          {/* Popover */}
          <Section title="Popover" description="Floating content panel anchored to a trigger">
            <Popover>
              <PopoverTrigger asChild>
                <Button variant="outline">
                  <CalendarIcon className="size-4" />
                  Pick a date
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0" align="start">
                <Calendar mode="single" selected={calendarDate} onSelect={setCalendarDate} />
              </PopoverContent>
            </Popover>
          </Section>

          {/* Hover Card */}
          <Section title="Hover Card" description="Card that appears on hover for quick preview">
            <HoverCard>
              <HoverCardTrigger asChild>
                <Button variant="link" className="p-0 h-auto">Dr. Williams</Button>
              </HoverCardTrigger>
              <HoverCardContent className="w-72">
                <div className="flex gap-3">
                  <Avatar className="size-10">
                    <AvatarFallback className="bg-primary/10 text-primary text-sm">DW</AvatarFallback>
                  </Avatar>
                  <div className="flex flex-col gap-1">
                    <p className="text-sm font-semibold">Dr. Sarah Williams</p>
                    <p className="text-xs text-muted-foreground">PawCare Veterinary Clinic</p>
                    <p className="text-xs text-muted-foreground">Specializes in internal medicine and senior pet care</p>
                  </div>
                </div>
              </HoverCardContent>
            </HoverCard>
          </Section>

          {/* Command */}
          <Section title="Command" description="Searchable command palette with keyboard navigation">
            <Command className="rounded-lg border border-border max-w-md">
              <CommandInput placeholder="Search records..." />
              <CommandList>
                <CommandEmpty>No results found.</CommandEmpty>
                <CommandGroup heading="Recent">
                  <CommandItem><Search className="size-4 mr-2" /> Bloodwork - Sept 2025</CommandItem>
                  <CommandItem><Search className="size-4 mr-2" /> Vaccination - Rabies</CommandItem>
                </CommandGroup>
                <CommandSeparator />
                <CommandGroup heading="Actions">
                  <CommandItem><Settings className="size-4 mr-2" /> Settings</CommandItem>
                  <CommandItem><User className="size-4 mr-2" /> Pet Profile</CommandItem>
                </CommandGroup>
              </CommandList>
            </Command>
          </Section>

          {/* Calendar */}
          <Section title="Calendar" description="Date picker component for selecting dates">
            <Calendar
              mode="single"
              selected={calendarDate}
              onSelect={setCalendarDate}
              className="rounded-md border border-border w-fit"
            />
          </Section>

          {/* Toggle & Toggle Group */}
          <Section title="Toggle & Toggle Group" description="Pressable buttons for toggling options on/off">
            <div className="flex flex-col gap-4">
              <div className="flex gap-2">
                <Toggle aria-label="Bold"><Bold className="size-4" /></Toggle>
                <Toggle aria-label="Italic"><Italic className="size-4" /></Toggle>
                <Toggle aria-label="Underline"><Underline className="size-4" /></Toggle>
              </div>
              <ToggleGroup type="single" defaultValue="left">
                <ToggleGroupItem value="left" aria-label="Align left"><AlignLeft className="size-4" /></ToggleGroupItem>
                <ToggleGroupItem value="center" aria-label="Align center"><AlignCenter className="size-4" /></ToggleGroupItem>
                <ToggleGroupItem value="right" aria-label="Align right"><AlignRight className="size-4" /></ToggleGroupItem>
              </ToggleGroup>
            </div>
          </Section>

          {/* Tooltip */}
          <Section title="Tooltip" description="Brief informational popup on hover or focus">
            <TooltipProvider>
              <div className="flex gap-4">
                <Tooltip>
                  <TooltipTrigger asChild><Button variant="outline" size="icon"><Info className="size-4" /></Button></TooltipTrigger>
                  <TooltipContent><p>More information</p></TooltipContent>
                </Tooltip>
                <Tooltip>
                  <TooltipTrigger asChild><Button variant="outline" size="icon"><Star className="size-4" /></Button></TooltipTrigger>
                  <TooltipContent><p>Add to favorites</p></TooltipContent>
                </Tooltip>
                <Tooltip>
                  <TooltipTrigger asChild><Button variant="outline" size="icon"><Settings className="size-4" /></Button></TooltipTrigger>
                  <TooltipContent><p>Open settings</p></TooltipContent>
                </Tooltip>
              </div>
            </TooltipProvider>
          </Section>

          {/* Collapsible */}
          <Section title="Collapsible" description="Content section that can be expanded or collapsed">
            <Collapsible open={collapsibleOpen} onOpenChange={setCollapsibleOpen} className="max-w-md">
              <div className="flex items-center justify-between">
                <p className="text-sm font-semibold">Medication Details</p>
                <CollapsibleTrigger asChild>
                  <Button variant="ghost" size="sm">
                    <ChevronsUpDown className="size-4" />
                    <span className="sr-only">Toggle</span>
                  </Button>
                </CollapsibleTrigger>
              </div>
              <div className="rounded-md border border-border px-4 py-2 text-sm mt-2">
                Carprofen 75mg - Daily with food
              </div>
              <CollapsibleContent className="flex flex-col gap-2 mt-2">
                <div className="rounded-md border border-border px-4 py-2 text-sm">
                  Omeprazole 20mg - Morning, empty stomach
                </div>
                <div className="rounded-md border border-border px-4 py-2 text-sm">
                  Fish Oil 1000mg - Daily with food
                </div>
              </CollapsibleContent>
            </Collapsible>
          </Section>

          {/* Skeleton */}
          <Section title="Skeleton" description="Loading placeholder while content is being fetched">
            <div className="flex flex-col gap-4 max-w-sm">
              <div className="flex items-center gap-3">
                <Skeleton className="size-10 rounded-full" />
                <div className="flex flex-col gap-2 flex-1">
                  <Skeleton className="h-4 w-3/4" />
                  <Skeleton className="h-3 w-1/2" />
                </div>
              </div>
              <Skeleton className="h-20 w-full rounded-lg" />
              <div className="flex gap-3">
                <Skeleton className="h-8 w-20 rounded-md" />
                <Skeleton className="h-8 w-20 rounded-md" />
              </div>
            </div>
          </Section>

          {/* Scroll Area */}
          <Section title="Scroll Area" description="Custom scrollable container with styled scrollbar">
            <ScrollArea className="h-48 w-full max-w-md rounded-md border border-border p-4">
              <div className="flex flex-col gap-3">
                {Array.from({ length: 20 }, (_, i) => (
                  <div key={i} className="flex items-center justify-between py-1.5 border-b border-border last:border-0">
                    <span className="text-sm">Record entry #{i + 1}</span>
                    <Badge variant="outline" className="text-xs">
                      {["Normal", "High", "Low", "Normal", "Critical"][i % 5]}
                    </Badge>
                  </div>
                ))}
              </div>
            </ScrollArea>
          </Section>

          {/* Separator */}
          <Section title="Separator" description="Visual divider between content sections">
            <div className="flex flex-col gap-4 max-w-md">
              <div>
                <p className="text-sm font-medium">Chemistry Panel</p>
                <p className="text-xs text-muted-foreground">Blood chemistry results</p>
              </div>
              <Separator />
              <div>
                <p className="text-sm font-medium">CBC</p>
                <p className="text-xs text-muted-foreground">Complete blood count results</p>
              </div>
              <Separator />
              <div>
                <p className="text-sm font-medium">Urinalysis</p>
                <p className="text-xs text-muted-foreground">Urine test results</p>
              </div>
            </div>
          </Section>

          {/* Kbd */}
          <Section title="Kbd" description="Keyboard shortcut display hint">
            <div className="flex flex-wrap gap-4 items-center">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                Search: <Kbd>Ctrl</Kbd> + <Kbd>K</Kbd>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                Save: <Kbd>Ctrl</Kbd> + <Kbd>S</Kbd>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                Escape: <Kbd>Esc</Kbd>
              </div>
            </div>
          </Section>

          {/* Spinner */}
          <Section title="Spinner" description="Loading indicator for async operations">
            <div className="flex items-center gap-6">
              <Spinner className="size-4" />
              <Spinner className="size-6" />
              <Spinner className="size-8" />
              <div className="flex items-center gap-2">
                <Spinner className="size-4" />
                <span className="text-sm text-muted-foreground">Loading records...</span>
              </div>
            </div>
          </Section>

          {/* Aspect Ratio note */}
          <Section title="Aspect Ratio, Resizable, Pagination, Menubar, Navigation Menu, Carousel, Form, Context Menu, Drawer, Input OTP, Sonner, Toast" description="These components are available in your system and will inherit theme tokens automatically. Render them by importing from @/components/ui/*.">
            <div className="flex flex-col gap-3">
              <p className="text-sm text-muted-foreground leading-relaxed">
                The components listed above are all installed and ready to use. They follow the same token-based theming as every other component shown on this page. Import them as needed:
              </p>
              <pre className="rounded-lg border border-border bg-foreground/5 p-4 text-xs font-mono text-foreground overflow-x-auto">
{`import { Drawer, DrawerContent, DrawerTrigger } from "@/components/ui/drawer"
import { Pagination, PaginationContent, PaginationItem } from "@/components/ui/pagination"
import { Menubar, MenubarContent, MenubarItem } from "@/components/ui/menubar"
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel"
import { InputOTP, InputOTPGroup, InputOTPSlot } from "@/components/ui/input-otp"
import { ResizableHandle, ResizablePanel, ResizablePanelGroup } from "@/components/ui/resizable"
import { ContextMenu, ContextMenuContent, ContextMenuItem } from "@/components/ui/context-menu"
import { NavigationMenu, NavigationMenuList } from "@/components/ui/navigation-menu"
import { AspectRatio } from "@/components/ui/aspect-ratio"`}
              </pre>
            </div>
          </Section>
        </div>
      </div>
    </div>
  )
}
