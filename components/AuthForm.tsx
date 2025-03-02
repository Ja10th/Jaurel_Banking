'use client'

import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import CustomInput from './CustomInput'
import { formSchema } from '@/lib/utils'

   


const AuthForm = ({type}: {type: string}) => {
    const [user, setUser] = useState(null)

     // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
    },
  })
 
  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values)
  }
  return (
    <section className='auth-form'>
        <header className='flex flex-col gap-5 md:gap-8'>
        <Link href='/' className='cursor-pointer items-center flex  gap-1'>
            <Image  src="./icons/logo.svg" width={34} height={34} alt='jaurel-logo'
            />
            <h1 className='sidebar-logo text-26 font-ibm-plex-serif font-bold text-black-1'>JaurelB</h1>
        </Link>
        <div className='flex flex-col gap-1 md:gap-3'>
            <h1 className='text-24  text-gray-900 font-semibold lg:text-36'>
        {user ? 'Link Account' : type === 'sign-in'  ? 'Sign In': 'Sign Up'}
            </h1>
            <p className='text-16 font-normal text-gray-600 '>
                {user ? 'Please link your account  to get started' : 'Enter your details'}
            </p>
        </div>
        </header>
        {user ? (
            <div className='flex flex-col gap-4'>
                {/* PlainLink */}
            </div>
        ): (
            <>
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                    <CustomInput control={form.control} 
                    name="email"
                    label="Email"
                    placeholder="Enter your email" 
                    />
                    <CustomInput control={form.control} 
                    name="password"
                    label=" Password"
                    placeholder="Enter your password" 
                    />
                <Button type="submit">Submit</Button>
            </form>
            </Form>
            </>
        )}
    </section>
  )
}

export default AuthForm