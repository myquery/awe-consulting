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
            Name
          </label>
          <input
            type="text"
            className="form-control"
            id="name"
            name="name"
            autoComplete="name"
            required
          />
          <div className="invalid-feedback">Enter your name.</div>
        </div>
        <div className="col-md-6">
          <label htmlFor="organization" className="form-label">
            Organization
          </label>
          <input
            type="text"
            className="form-control"
            id="organization"
            name="organization"
            autoComplete="organization"
            required
          />
          <div className="invalid-feedback">Enter your organization.</div>
        </div>
        <div className="col-md-6">
          <label htmlFor="email" className="form-label">
            Work email
          </label>
          <input
            type="email"
            className="form-control"
            id="email"
            name="email"
            autoComplete="email"
            required
          />
          <div className="invalid-feedback">Enter a valid work email.</div>
        </div>
        <div className="col-md-6">
          <label htmlFor="phone" className="form-label">
            Phone
          </label>
          <input
            type="tel"
            className="form-control"
            id="phone"
            name="phone"
            autoComplete="tel"
          />
        </div>
        <div className="col-12">
          <label htmlFor="interest" className="form-label">
            Partnership interest
          </label>
          <select
            className="form-select"
            id="interest"
            name="interest"
            required
            defaultValue=""
          >
            <option value="">Select an option</option>
            <option>University or research institute program</option>
            <option>Industry or CSR partnership</option>
            <option>Diaspora expert participation</option>
            <option>Development agency or foundation collaboration</option>
            <option>Other institutional inquiry</option>
          </select>
          <div className="invalid-feedback">
            Choose the closest partnership interest.
          </div>
        </div>
        <div className="col-12">
          <label htmlFor="message" className="form-label">
            Message
          </label>
          <textarea
            className="form-control"
            id="message"
            name="message"
            rows={5}
            required
          />
          <div className="invalid-feedback">Share a brief message.</div>
        </div>
        <div className="col-12">
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              value="yes"
              id="consent"
              name="consent"
              required
            />
            <label className="form-check-label" htmlFor="consent">
              I consent to being contacted about this inquiry.
            </label>
            <div className="invalid-feedback">Consent is required.</div>
          </div>
        </div>
        <div className="col-12">
          <button type="submit" className="btn btn-primary btn-lg">
            Prepare Inquiry
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
