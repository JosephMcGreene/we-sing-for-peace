"use client";
import Modal from "./Modal";
import SignUpForm from "./SignUpForm";
import { useState } from "react";

export default function EventLI({ title }: { title: string }) {
  const [modalOpen, setModalOpen] = useState(false);
  return (
    <>
      <li className="flex items-center justify-between p-7 bg-blue-700 text-xl rounded-2xl">
        <p>{title}</p>
        <button
          className="ml-10 py-3 px-8 bg-purple-700 rounded-lg cursor-pointer"
          onClick={() => setModalOpen(true)}
        >
          Sign Up
        </button>
      </li>

      <Modal open={modalOpen} onClose={() => setModalOpen(false)}>
        <SignUpForm title={title} />
      </Modal>
    </>
  );
}
