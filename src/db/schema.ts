import { relations } from "drizzle-orm";
import { integer, pgEnum, pgTable, text, time, timestamp, uuid, } from "drizzle-orm/pg-core";

export const usersTable = pgTable("users", {
  id: uuid("id").defaultRandom().primaryKey(),
});

export const clinicsTable = pgTable("clinics", {
  id: uuid("id").defaultRandom().primaryKey(),
  name: text("name").notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at").defaultNow().notNull().$onUpdate(() => new Date()),
});

export const clinicsTableRelations = relations(clinicsTable, ({many}) => ({
  doctors: many(doctorsTable),
  patients: many(patientsTable), 
  appointments: many(appointmentsTable),
}))

export const doctorsTable = pgTable("doctors", {
  id: uuid("id").defaultRandom().primaryKey(),
  clinicId: uuid("clinic_id").notNull().references(() => clinicsTable.id, { onDelete: "cascade"}),
  name: text("name").notNull(),
  avatarImageUrl: text("avatar_image_url"),
  availableFromWeekDay: integer("available_from_week_day").notNull(),
  availableToWeekDay: integer("available_to_week_day").notNull(),
  availableFromTime: time("available_from_time").notNull(),
  availableToTime: time("available_to_time").notNull(),
  specialty: text("specialty").notNull(),
  appointmentPriceInCents: integer("appointment_price_in_cents").notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at").defaultNow().notNull().$onUpdate(() => new Date()),
});

export const doctorsTableRelations = relations(doctorsTable, ({one}) => ({
  clinic: one(clinicsTable, {
    fields: [doctorsTable.clinicId],
    references: [clinicsTable.id],
  })
}))

export const patientSexEnum = pgEnum("patient_sex", ["male", "female"]);

export const patientsTable = pgTable("patients",{
  id: uuid("id").defaultRandom().primaryKey(),  name: text("name").notNull(),
  clinicId: uuid("clinic_id").notNull().references(() => clinicsTable.id, { onDelete: "cascade"}),
  email: text("email").notNull(),
  phone: text("phone").notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at").defaultNow().notNull().$onUpdate(() => new Date()),
  sex: patientSexEnum("sex").notNull(),
});

export const appointmentsTable = pgTable("appointments", { 
  id: uuid("id").defaultRandom().primaryKey(),
  date: timestamp("date").notNull(),  
  clinicId: uuid("clinic_id").notNull().references(() => clinicsTable.id, { onDelete: "cascade"}),
  patientId: uuid("patient_id").notNull().references(() => patientsTable.id, { onDelete: "cascade"}),
  doctorId: uuid("doctor_id").notNull().references(() => doctorsTable.id, { onDelete: "cascade"}),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at").defaultNow().notNull().$onUpdate(() => new Date()),
});

