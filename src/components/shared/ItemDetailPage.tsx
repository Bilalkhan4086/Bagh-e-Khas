import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, CheckCircle2, Leaf, PackageCheck, Truck } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import type { ItemDetailCopy } from "@/lib/detail-copy";
import DetailActions from "@/components/shared/DetailActions";

interface ItemDetailPageProps {
  backHref: string;
  backLabel: string;
  eyebrow: string;
  title: string;
  description: string;
  price: string;
  image: string;
  tag?: string;
  detail: ItemDetailCopy;
  actionId: string;
  disabled?: boolean;
  disabledLabel?: string;
}

export default function ItemDetailPage({
  backHref,
  backLabel,
  eyebrow,
  title,
  description,
  price,
  image,
  tag,
  detail,
  actionId,
  disabled,
  disabledLabel,
}: ItemDetailPageProps) {
  return (
    <article className="bg-[#fbfaf6] pt-28 md:pt-32">
      <div className="mx-auto max-w-7xl px-4 pb-20 sm:px-6 lg:px-8">
        <Link
          href={backHref}
          className="mb-8 inline-flex cursor-pointer items-center gap-2 text-sm font-semibold text-[#62584c] transition-colors hover:text-brand-primary"
        >
          <ArrowLeft className="h-4 w-4" aria-hidden="true" />
          {backLabel}
        </Link>

        <div className="grid gap-10 lg:grid-cols-[0.92fr_1.08fr] lg:items-start">
          <div className="relative min-h-[420px] overflow-hidden rounded-card border border-[#ded5c6] bg-white shadow-card md:min-h-[620px]">
            <Image
              src={image}
              alt={title}
              fill
              sizes="(max-width: 1024px) 100vw, 48vw"
              className="object-cover"
              priority
            />
          </div>

          <div>
            <div className="mb-4 flex flex-wrap items-center gap-3">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-brand-secondary">
                {eyebrow}
              </p>
              {tag && (
                <Badge className="rounded-card bg-white text-brand-primary shadow-sm">
                  {tag}
                </Badge>
              )}
            </div>

            <h1 className="max-w-3xl text-5xl font-semibold leading-[0.96] text-brand-text md:text-6xl lg:text-7xl">
              {title}
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-8 text-[#62584c] md:text-lg">
              {description}
            </p>

            <div className="mt-8 rounded-card border border-[#ded5c6] bg-white p-5 shadow-soft">
              <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#8d8070]">
                    Price
                  </p>
                  <p className="mt-1 text-2xl font-bold text-brand-primary">
                    {price}
                  </p>
                </div>
                <DetailActions
                  id={actionId}
                  name={title}
                  price={price}
                  image={image}
                  disabled={disabled}
                  disabledLabel={disabledLabel}
                />
              </div>
            </div>

            <section className="mt-8" aria-labelledby="detail-description">
              <h2
                id="detail-description"
                className="font-heading text-3xl font-semibold text-brand-text"
              >
                Why customers choose it
              </h2>
              <p className="mt-3 max-w-3xl text-sm leading-7 text-[#62584c] md:text-base">
                {detail.longDescription}
              </p>
            </section>

            <div className="mt-8 grid gap-4 md:grid-cols-2">
              <DetailList
                icon={CheckCircle2}
                title="Highlights"
                items={detail.highlights}
              />
              <DetailList icon={PackageCheck} title="What is included" items={detail.includes} />
              <DetailList icon={Leaf} title="Ideal for" items={detail.idealFor} />
              <div className="rounded-card border border-[#ded5c6] bg-white p-5 shadow-soft">
                <div className="mb-4 flex items-center gap-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-card bg-brand-primary text-white">
                    <Truck className="h-4 w-4" aria-hidden="true" />
                  </div>
                  <h2 className="font-heading text-2xl font-semibold text-brand-text">
                    Freshness care
                  </h2>
                </div>
                <p className="text-sm leading-7 text-[#62584c]">{detail.care}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}

function DetailList({
  icon: Icon,
  title,
  items,
}: {
  icon: React.ComponentType<{ className?: string; "aria-hidden"?: boolean }>;
  title: string;
  items: string[];
}) {
  return (
    <section className="rounded-card border border-[#ded5c6] bg-white p-5 shadow-soft">
      <div className="mb-4 flex items-center gap-3">
        <div className="flex h-9 w-9 items-center justify-center rounded-card bg-[#fff9ed] text-brand-secondary">
          <Icon className="h-4 w-4" aria-hidden={true} />
        </div>
        <h2 className="font-heading text-2xl font-semibold text-brand-text">
          {title}
        </h2>
      </div>
      <ul className="space-y-3" role="list">
        {items.map((item) => (
          <li key={item} className="flex gap-3 text-sm leading-6 text-[#62584c]">
            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-secondary" aria-hidden="true" />
            {item}
          </li>
        ))}
      </ul>
    </section>
  );
}
