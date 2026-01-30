import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

import { Button } from "@/components/ui/button"
import { DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"



const formSchema = z
  .object({
    name: z.string().trim().min(1, {
      message: "Nome é obrigatório.",
    }),
    specialty: z.string().trim().min(1, {
      message: "Especialidade é obrigatória.",
    }),
    appointmentPrice: z.number().min(1, {
      message: "Preço da consulta é obrigatório.",
    }),
    availableFromWeekDay: z.number(),
    availableToWeekDay: z.number(),
    availableFromTime: z.string().min(1, {
      message: "Hora de início é obrigatória.",
    }),
    availableToTime: z.string().min(1, {
      message: "Hora de término é obrigatória.",
    }),
  })

const UpsertDoctorForm = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      specialty: "",
      appointmentPrice: 0,
      availableFromWeekDay: 0,
      availableToWeekDay: 0,
      availableFromTime: "",
      availableToTime: "",
    },
  })

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    console.log(values)
  }

  return <DialogContent>

    <DialogHeader>
      <DialogTitle>
        Adicionar médico
      </DialogTitle>
      <DialogDescription>
        Adicione um novo médico.
      </DialogDescription>
    </DialogHeader>
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <FormField control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>
                Nome
              </FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
              <FormMessage/>
            </FormItem>
          )}
        />

        <DialogFooter>
          <Button type="submit">Adicionar</Button>
        </DialogFooter>
      </form>
    </Form>
  </DialogContent>

}

export default UpsertDoctorForm