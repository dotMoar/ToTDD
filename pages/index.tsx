import Chat from "@/app/components/chat";

export default function Page() {
  return (
    <div className="min-h-screen bg-zinc-900 text-white flex items-center">
      <div className="grid grid-cols-12 gap-4 w-full h-screen">
        <div className="columns-secondary">Columna Uno</div>
        <div className="columns"> <Chat/></div>
        <div className="columns-secondary">Columna Tres</div>
      </div>
    </div>
  )
}