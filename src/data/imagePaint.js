import { colorsByCarId } from "./carColors";

/** Names that read as white/black/grey/silver — skip for hero renders. */
const NEUTRAL_COLOR =
  /\b(white|black|grey|gray|silver|pearl|stealth|snow|crystal|glacier|gravity|magnetite|moonstone|scale|magnesium|space|chronos|mythos|typhoon|panthera|makalu|savile|uyuni|summit|sterling|iridescent|quicksilver|wind chill|heavy metal|elemental|interstellar|vapour|gelato|mineral|abyss|cyber|deep black|grenadilla|candy|atlas|ivory|ice silver|steel matte)\b/i;

const COLORFUL_HINT =
  /\b(blue|red|green|orange|yellow|teal|copper|rose|crimson|cosmic|solar|flare|rush|underground|digital|lucid|performance|energetic|cardamom|moss|fusion|namsan|iceberg|mineral|runway|yacht|ocean|navarra|portimao|cape|river rock|gold|jupiter|thunder|radiant|tandoori)\b/i;

export function colorNameToPaintDescription(name) {
  return name
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

/** Pick a vivid exterior from the car's Canada color list. */
export function pickImagePaint(colors) {
  if (!colors?.length) return {};
  const preferred = colors.find(
    (c) => !NEUTRAL_COLOR.test(c.name) && COLORFUL_HINT.test(c.name),
  );
  const fallback = colors.find((c) => !NEUTRAL_COLOR.test(c.name));
  const chosen = preferred ?? fallback ?? colors[0];
  return {
    imagePaintDescription: colorNameToPaintDescription(chosen.name),
    imagePaintName: chosen.name,
  };
}

export function getImagePaintConfig(car) {
  return pickImagePaint(colorsByCarId[car.id]);
}
