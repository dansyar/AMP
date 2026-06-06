import { notFound } from "next/navigation";
import { BlueprintDetail } from "@/components/BlueprintDetail";
import { blueprints, getBlueprint } from "@/lib/blueprints";

type BlueprintPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return blueprints.map((blueprint) => ({
    slug: blueprint.slug,
  }));
}

export async function generateMetadata({ params }: BlueprintPageProps) {
  const { slug } = await params;
  const blueprint = getBlueprint(slug);

  if (!blueprint) {
    return {
      title: "Blueprint not found",
    };
  }

  return {
    title: `${blueprint.industry} AI Fluency Blueprint | AMP`,
    description: blueprint.summary,
  };
}

export default async function BlueprintPage({ params }: BlueprintPageProps) {
  const { slug } = await params;
  const blueprint = getBlueprint(slug);

  if (!blueprint) {
    notFound();
  }

  return <BlueprintDetail blueprint={blueprint} />;
}
