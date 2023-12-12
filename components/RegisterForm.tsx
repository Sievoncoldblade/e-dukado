"use client";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import { Button } from "@/components/ui/button";
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import Link from "next/link";

import { signUpWithEmailAndPassword } from "@/app/auth-server-actions";
import { AuthResponse } from "@supabase/supabase-js";

const formSchema = z
  .object({
    email: z.string({ required_error: "This field is required" }).email({ message: "Must be a valid email address" }).min(5, { message: "Minimum of 5 characters" }),
    password: z
      .string({ required_error: "This field is required" })
      .min(8, { message: "Minimum of 8 characters" })
      .refine((value) => /(?=.*[a-z])/.test(value), "At least one lower case letter should exist")
      .refine((value) => /(?=.*[A-Z])/.test(value), "At least one upper case letter should exist")
      .refine((value) => /(?=.*\d)/.test(value), "At least one digit should exist")
      .refine((value) => /(?=.*[-+_!@#$%^&*.,?])/.test(value), "Need to have at least one special character"),
    confirmPassword: z.string({ required_error: "This field is required" }).min(8, { message: "Minimum of 8 characters" }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords don't match",
    path: ["confirmPassword"],
  });

const RegisterForm = () => {
  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
      confirmPassword: "",
    },
  });

  // 2. Define a submit handler.
  async function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    const response = await signUpWithEmailAndPassword(values);
    const result: AuthResponse = await JSON.parse(response);

    // ✅ This will be type-safe and validated.
    console.log(result);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-8'>
        <FormField
          control={form.control}
          name='email'
          render={({ field }) => (
            <FormItem>
              <FormLabel className='font-bold'>Email Address</FormLabel>
              <FormControl>
                <Input placeholder='Email Address' {...field} type='email' />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name='password'
          render={({ field }) => (
            <FormItem>
              <FormLabel className='font-bold'>Password</FormLabel>
              <FormControl>
                <Input placeholder='Password' {...field} type='password' />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name='confirmPassword'
          render={({ field }) => (
            <FormItem>
              <FormLabel className='font-bold'>Confirm Password</FormLabel>
              <FormControl>
                <Input placeholder='Confirm Password' {...field} type='password' />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type='submit' className='mr-4 bg-green-500 text-white'>
          Submit
        </Button>
        <Link className='text-sm text-gray-500' href='/teacher/login'>
          Already have an account?
        </Link>
      </form>
    </Form>
  );
};

export default RegisterForm;
