import { Metadata } from "next";
import ServicesClient from "./components/ServicesClient";

export const metadata: Metadata = {
  title: "Editing Services - Superb Editing",
  description: "Top-tier language editing services designed to refine your writing and increase your chances of publication.",
};

export default function ServicesPage() {
  return (
    <main>
      <ServicesClient />
    </main>
  );
}
