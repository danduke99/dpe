import { nunitoExtraBold } from "../styles/font/page";

export default function Section({ title, children }: { title: string; children: React.ReactNode; link: string }) {
  return (
    <section className="w-full">
      <p className={`text-3xl text-center font-bold text-black ${nunitoExtraBold.className}`}>{title}</p>
      <div className="text-gray-700">{children}</div>
    </section>
  );
}