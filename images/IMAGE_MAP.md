# Heirloom Group — Image Asset Map

All paths are relative to the project root. Drop final images in this folder with these exact filenames.

## Hero
| Path | Spec | Notes |
|------|------|-------|
| `images/hero-bg.jpg` | 1920×1080 min, JPG | Dark, moody interior or food shot. Should work with the dark overlay. Aim for warm tones (amber, wood, candlelight). |

## Team
| Path | Subject | Spec |
|------|---------|------|
| `images/owner.jpg` | Kevin Santiago | 400×480 min, portrait orientation, professional headshot or candid in-restaurant. |
| `images/contractor.jpg` | Colton Soelberg | 400×480 min, same style as owner photo. |

## Restaurant / Project Cards
| Path | Restaurant | Spec |
|------|-----------|------|
| `images/communal.jpg` | Communal (featured) | 800×560 min, landscape, interior or signature dish. Used in the featured project card. |
| `images/pizzeria-712.jpg` | Pizzeria 712 | 600×400 min |
| `images/station-22.jpg` | Station 22 Cafe | 600×400 min |
| `images/black-sheep.jpg` | Black Sheep Cafe | 600×400 min |
| `images/five-star-bbq.jpg` | Five Star BBQ | 600×400 min |
| `images/heirloom-common.jpg` | Heirloom Common & Market | 600×400 min |
| `images/chom.jpg` | CHOM | 600×400 min |
| `images/bistro-provenance.jpg` | Bistro Provenance | 600×400 min |

## Notes
- All images should be compressed (use Squoosh or similar — target <200KB for cards, <400KB for hero).
- If an image is missing, the site degrades gracefully: team cards show initials, project cards show a gradient placeholder.
- Prefer JPG for photos, WebP if available (add `<picture>` srcset for production).
