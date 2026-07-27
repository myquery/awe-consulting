"use client";

import type { FormEvent } from "react";
import { useState } from "react";

type StatusType = "idle" | "error" | "success";

export function ContactForm() {
  const [status, setStatus] = useState<{
    type: StatusType;
    message: string;
  }>({ type: "idle", message: "" });

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    event.stopPropagation();

    const form = event.currentTarget;

    if (!form.checkValidity()) {
      form.classList.add("was-validated");
      setStatus({
        type: "error",
        message: "Please complete the required fields before continuing.",
      });

      const firstInvalidField = form.querySelector<HTMLElement>(":invalid");
      firstInvalidField?.focus();
      return;
    }

    setStatus({
      type: "success",
      message:
        "Inquiry validated. Connect a secure backend or form service before using this form publicly.",
    });
    form.reset();
    form.classList.remove("was-validated");
  }

  const statusClass =
    status.type === "error"
      ? "text-danger"
      : status.type === "success"
        ? "text-success"
        : "";

  return (
    <form
      className="contact-form needs-validation"
      action="https://example.com/replace-with-form-handler"
      method="post"
      onSubmit={handleSubmit}
      noValidate
    >
      <div className="row g-3">
        <div className="col-md-6">
          <label htmlFor="name" className="form-label">
            Full name
          </label>
          <input
            type="text"
            className="form-control"
            id="name"
            name="name"
            autoComplete="name"
            placeholder="Your name"
            required
          />
          <div className="invalid-feedback">Enter your name.</div>
        </div>
        <div className="col-md-6">
          <label htmlFor="organization" className="form-label">
            Institution
          </label>
          <input
            type="text"
            className="form-control"
            id="organization"
            name="institution"
            autoComplete="organization"
            placeholder="Your institution"
            required
          />
          <div className="invalid-feedback">Enter your institution.</div>
        </div>
        <div className="col-12">
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <input
            type="email"
            className="form-control"
            id="email"
            name="email"
            autoComplete="email"
            placeholder="name@institution.edu"
            required
          />
          <div className="invalid-feedback">Enter a valid email.</div>
        </div>
        <div className="col-12">
          <label htmlFor="interest" className="form-label">
            Inquiry type
          </label>
          <select
            className="form-select"
            id="interest"
            name="type"
            required
            defaultValue="Institutional partnership"
          >
            <option>Institutional partnership</option>
            <option>Expert consultation</option>
            <option>Graduate research development</option>
            <option>Pilot programme</option>
          </select>
        </div>
        <div className="col-12">
          <button type="submit" className="btn btn-primary btn-lg">
            Submit inquiry
          </button>
          <p
            className={`form-status mt-3 mb-0 ${statusClass}`.trim()}
            role="status"
            aria-live="polite"
          >
            {status.message}
          </p>
        </div>
      </div>
    </form>
  );
}
