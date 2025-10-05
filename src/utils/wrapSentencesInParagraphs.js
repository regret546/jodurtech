export function wrapSentencesInParagraphs(text) {
  const sentences = text.split(/\. (?=[A-Z])/g);

  const withPeriods = sentences.map((s) => s.trim() + ".");

  const paragraphs = [];
  for (let i = 0; i < withPeriods.length; i += 2) {
    const group = withPeriods.slice(i, i + 2).join(" ");
    paragraphs.push(`<p>${group}</p>`);
  }

  return paragraphs.join("");
}
