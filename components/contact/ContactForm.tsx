"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { clsx } from "clsx";

const schema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters."),
  email: z.string().email("Please enter a valid email address."),
  message: z
    .string()
    .min(10, "Message must be at least 10 characters.")
    .max(2000, "Message is too long."),
});

type FormData = z.infer<typeof schema>;

type Status = "idle" | "loading" | "success" | "error";

const inputBase = clsx(
  "w-full bg-[var(--bg-subtle)] border border-[var(--border)] rounded-md",
  "px-4 py-3 text-sm text-[var(--text)]",
  "placeholder:text-[var(--text-muted)]",
  "focus:outline-none focus:border-[var(--accent)]",
  "transition-colors duration-200"
);

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  const onSubmit = async (data: FormData) => {
    setStatus("loading");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (res.ok) {
        setStatus("success");
        reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <div>
      <h2 className="text-base font-semibold text-[var(--text)] mb-6">
        Send a Message
      </h2>

      <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-4">
        {/* Name */}
        <div>
          <input
            {...register("name")}
            type="text"
            placeholder="Your name"
            autoComplete="name"
            className={inputBase}
          />
          {errors.name && (
            <p className="text-xs text-red-400 mt-1.5">{errors.name.message}</p>
          )}
        </div>

        {/* Email */}
        <div>
          <input
            {...register("email")}
            type="email"
            placeholder="Your email"
            autoComplete="email"
            className={inputBase}
          />
          {errors.email && (
            <p className="text-xs text-red-400 mt-1.5">
              {errors.email.message}
            </p>
          )}
        </div>

        {/* Message */}
        <div>
          <textarea
            {...register("message")}
            placeholder="What's on your mind?"
            rows={6}
            className={clsx(inputBase, "resize-none")}
          />
          {errors.message && (
            <p className="text-xs text-red-400 mt-1.5">
              {errors.message.message}
            </p>
          )}
        </div>

        {/* Submit */}
        <button
          type="submit"
          disabled={status === "loading" || status === "success"}
          className={clsx(
            "w-full py-3 rounded-md text-sm font-medium transition-all duration-200",
            "bg-[var(--accent)] text-white",
            "hover:bg-[var(--accent-hover)]",
            "disabled:opacity-50 disabled:cursor-not-allowed"
          )}
        >
          {status === "loading" ? "Sending…" : "Send Message"}
        </button>

        {/* Feedback */}
        {status === "success" && (
          <p className="text-sm text-emerald-400 text-center pt-1">
            Message sent — I&apos;ll be in touch soon.
          </p>
        )}
        {status === "error" && (
          <p className="text-sm text-red-400 text-center pt-1">
            Something went wrong. Try emailing me directly.
          </p>
        )}
      </form>
    </div>
  );
}
