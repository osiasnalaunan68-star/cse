import { quizImageUrl } from "../quizImages";

// Shows an image, or only a slice of it (x0..x1 = 0..1 of the width).
export function CroppedImage({ img, alt = "" }) {
  if (!img?.src) return null;
  const x0 = img.x0 ?? 0;
  const x1 = img.x1 ?? 1;
  const span = x1 - x0 || 1;
  const ratio = img.w && img.h ? `${span * img.w} / ${img.h}` : undefined;
  return (
    <div className="overflow-hidden rounded bg-white" style={{ aspectRatio: ratio }}>
      <img
        src={quizImageUrl(img.src)}
        alt={alt}
        draggable={false}
        style={{
          display: "block",
          maxWidth: "none",
          width: `${100 / span}%`,
          marginLeft: `${(-100 * x0) / span}%`,
        }}
      />
    </div>
  );
}

export function QuizFigure({ item }) {
  const f = item?.figure;
  if (!f) return null;
  const span = (f.x1 ?? 1) - (f.x0 ?? 0);
  const maxW = Math.min(384, Math.round(span * (f.w || 300) * 1.5));
  return (
    <div
      className="mx-auto w-full rounded-lg border border-parchment-200 bg-white p-2 dark:border-navy-700"
      style={{ maxWidth: maxW }}
    >
      <CroppedImage img={f} alt="Question figure" />
    </div>
  );
}

export function ChoiceContent({ k, label, item }) {
  const img = item?.choiceImages?.[k];
  if (!img) {
    return (
      <>
        <span className="font-semibold">{k}.</span> {label}
      </>
    );
  }
  return (
    <div className="flex flex-col items-center gap-1">
      <span className="self-start font-semibold">{k}.</span>
      <div className="w-full">
        <CroppedImage img={img} alt={`Choice ${k}`} />
      </div>
    </div>
  );
}
