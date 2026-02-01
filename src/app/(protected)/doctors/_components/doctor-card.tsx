"use cliet"

import { CalendarIcon, ClockIcon, DollarSignIcon } from "lucide-react"

import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { DialogTrigger } from "@/components/ui/dialog"
import { Separator } from "@/components/ui/separator"
import { doctorsTable } from "@/db/schema"

import UpsertDoctorForm from "./upsert-doctor-form"

interface DoctorCardProps {
  doctor: typeof doctorsTable.$inferSelect
}

const DoctorCard = ({ doctor }: DoctorCardProps) => {
  const doctorInitials = doctor.name.split(" ").map((name) => name[0]).join("")
  return (
    <Card>
      <CardHeader>
        <div className="flex items-center gap-2"></div>
        <Avatar>
          <AvatarFallback>
            {doctorInitials}
          </AvatarFallback>
        </Avatar>
        <div>
          <h3 className="text-sm font-medium">{doctor.name}</h3>
          <p className="text-sm text-muted-foreground"> {doctor.specialty}</p>
        </div>
      </CardHeader>
      <Separator />
      <CardContent className="felx flex-col gap-1">
        <Badge variant="outline">
          <CalendarIcon className="mr-1" />
          Segunda a Sexta
        </Badge>
        <Badge variant="outline">
          <ClockIcon className="mr-1" />
          {doctor.availableFromTime} - {doctor.availableToTime}
        </Badge>
        <Badge variant="outline">
          <DollarSignIcon className="mr-1" />
          {doctor.appointmentPriceInCents / 100}
        </Badge>
      </CardContent>
      <Separator />
      <CardFooter>
        <DialogTrigger asChild>
          <Button className="w-full">Ver detalhes</Button>
        </DialogTrigger>
        <UpsertDoctorForm />
      </CardFooter>
    </Card>
  )
}

export default DoctorCard