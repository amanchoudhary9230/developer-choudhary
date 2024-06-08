"use client";
import React from "react";
import { Label } from "./ui/InputLabel";
import { Input } from "./ui/Input";
import { cn } from "../lib/utils";
import { useForm } from "react-hook-form";
import axios from "axios";

export function Contact() {
  const { register, handleSubmit, setValue } = useForm();

  interface FormData {
    [key: string]: any;
  }

  const handleOnSubmit = async (data: FormData) => {
    const contactData = data;
    setValue("firstname", "");
    setValue("lastname", "");
    setValue("mobile", "");
    setValue("email", "");
    setValue("query", "");
    try {
      await axios.post("/api/contact", contactData);
    } catch (error) {
      console.error("Error sending email:", error);
    }
  };
  return (
    <div
      className="md:w-11/12 my-10 mx-auto rounded-none md:rounded-2xl p-4 md:p-8 shadow-input bg-white dark:bg-black"
      id="contact"
    >
      <h2 className="font-bold text-xl text-neutral-800 dark:text-neutral-200">
        Ready to take your digital presence to the next level? Let&apos;s get
        started!
      </h2>
      <p className="text-neutral-600 text-sm max-w-sm mt-2 dark:text-neutral-300">
        Reach out to me today and let&apos;s discuss how I can help you achieve your
        goals.
      </p>

      <form className="my-8" onSubmit={handleSubmit(handleOnSubmit)}>
        <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-4">
          <LabelInputContainer>
            <Label htmlFor="firstname">First name</Label>
            <Input
              id="firstname"
              placeholder="Aman"
              type="text"
              {...register("firstname", { required: true })}
            />
          </LabelInputContainer>
          <LabelInputContainer>
            <Label htmlFor="lastname">Last name</Label>
            <Input
              id="lastname"
              placeholder="Choudhary"
              type="text"
              {...register("lastname")}
            />
          </LabelInputContainer>
        </div>
        <LabelInputContainer className="mb-4">
          <Label htmlFor="mobile">Mobile</Label>
          <Input
            id="mobile"
            placeholder="+919530363236"
            type="tel"
            {...register("mobile", { required: true })}
          />
        </LabelInputContainer>
        <LabelInputContainer className="mb-4">
          <Label htmlFor="email">Email Address</Label>
          <Input
            id="email"
            placeholder="amanjaat7668@gmail.com"
            type="email"
            {...register("email", { required: true })}
          />
        </LabelInputContainer>
        <LabelInputContainer className="mb-4">
          <Label htmlFor="query">Query</Label>
          <Input
            id="query"
            placeholder="How can I help you?"
            type="text"
            {...register("query")}
          />
        </LabelInputContainer>

        <button
          className="bg-gradient-to-br relative group/btn from-black dark:from-zinc-900 dark:to-zinc-900 to-neutral-600 block dark:bg-zinc-800 w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
          type="submit"
        >
          Send &rarr;
          <BottomGradient />
        </button>

        <div className="bg-gradient-to-r from-transparent via-neutral-300 dark:via-neutral-700 to-transparent my-8 h-[1px] w-full" />
      </form>
    </div>
  );
}

const BottomGradient = () => {
  return (
    <>
      <span className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
      <span className="group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
    </>
  );
};

const LabelInputContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn("flex flex-col space-y-2 w-full", className)}>
      {children}
    </div>
  );
};
