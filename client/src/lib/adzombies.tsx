/**
 * Shared Ad Zombies cross-links.
 * Every mention of "Ad Zombies" on this site should point back to the
 * main Ad Zombies site, and the primary CTA sends visitors to the
 * contact form there.
 */
export const AD_ZOMBIES_URL = "https://adzombies.com";
export const AD_ZOMBIES_CONTACT_URL = "https://adzombies.com/contact";

/** Common attributes for any outbound link to adzombies.com. */
export const adZombiesLinkProps = {
  target: "_blank",
  rel: "noopener noreferrer",
} as const;

/**
 * Renders a plain string, turning every occurrence of "Ad Zombies"
 * into a link back to the main site. Used for free-text copy (e.g.
 * kenDescription) where "Ad Zombies" isn't already its own JSX node.
 */
export function linkifyAdZombies(text: string): React.ReactNode[] {
  const parts = text.split("Ad Zombies");
  return parts.flatMap((part, i) =>
    i === 0
      ? [part]
      : [
          <a key={i} href={AD_ZOMBIES_URL} {...adZombiesLinkProps} className="dz-underline-reverse" style={{ color: "inherit" }}>
            Ad Zombies
          </a>,
          part,
        ]
  );
}
