export default function () {
  return (
    <div className="w-10 relative self-stretch pt-1 pb-1">
      <div className="absolute top-2 left-1/2 -translate-x-1/2 bg-border w-0.5 h-[calc(100%-2rem)]" />
      <div className="w-7 h-7 rounded-full bg-border border-8 border-background absolute left-1/2 -translate-x-1/2"></div>
      <div className="w-7 h-7 rounded-full bg-border border-8 border-background absolute left-1/2 -translate-x-1/2 bottom-0"></div>
    </div>
  );
}
