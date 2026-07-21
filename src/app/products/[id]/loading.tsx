export default function Loading() {
  return (
    <div className="bg-[#fbfaf6] px-4 pt-32 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.92fr_1.08fr]">
        <div className="min-h-[420px] animate-pulse rounded-card bg-[#efe3ca]" />
        <div className="space-y-5">
          <div className="h-4 w-40 animate-pulse rounded-card bg-[#efe3ca]" />
          <div className="h-16 w-full max-w-xl animate-pulse rounded-card bg-[#efe3ca]" />
          <div className="h-28 w-full max-w-2xl animate-pulse rounded-card bg-[#efe3ca]" />
        </div>
      </div>
    </div>
  );
}
