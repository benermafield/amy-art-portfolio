# Amy Placeholder — Art Portfolio

A minimal, responsive portfolio site built with [Jekyll](https://jekyllrb.com/) and hosted on GitHub Pages. The repository is the CMS: each artwork is a small Markdown file.

## Pages

- **Work** (`/`): the gallery, with series filters and a masonry / single-column toggle
- **Artwork** (`/work/<name>/`): a page per piece with details and previous/next navigation (the arrow keys work too)
- **About** (`/about/`) and **Contact** (`/contact/`)

## Adding or editing artwork

Create a file in `_artworks/`. The file name becomes the URL, e.g. `_artworks/sea-wall.md` → `/work/sea-wall/`.

```yaml
---
title: Sea Wall
year: 2026
series: Paintings        # creates a filter button automatically
medium: Oil on linen
dimensions: 80 × 100 cm
image: /assets/images/sea-wall.jpg   # or a full https:// URL
width: 1600              # the image's pixel size, used to reserve space while it loads
height: 2000
order: 1                 # position in the gallery (lower = first)
---

Optional description of the piece.
```

Put real images in `assets/images/`. The placeholders currently come from placehold.co.

## Trying out the design

A **Design** button in the bottom-right corner switches between four themes:

| Theme     | Feel                                             |
|-----------|--------------------------------------------------|
| `gallery` | Off-white, clean sans-serif                      |
| `dark`    | Near-black, artwork-forward                      |
| `warm`    | Cream paper tone, editorial serif                |
| `auto`    | Gallery white, switching to dark with the device |

Once you've chosen one, set `theme:` in `_config.yml` and set `theme_switcher: false` to hide the panel. Visitors always see the gallery layout toggle. Its default is `gallery_layout:`.

Artist name, email, location and social links are also in `_config.yml`.

## Publishing on GitHub Pages

1. Merge this branch into `main`.
2. In the repo go to **Settings → Pages** and choose **Deploy from a branch**, then `main` and `/ (root)`.
3. The site appears at `https://benermafield.github.io/amy-art-portfolio/`.

If you use a custom domain later, set `baseurl: ""` in `_config.yml`.

## Running locally (optional)

```sh
bundle install
bundle exec jekyll serve
# open http://localhost:4000/amy-art-portfolio/
```

## Moving to a CMS later

Artworks are plain Markdown with front matter, so:
- [Decap CMS](https://decapcms.org/) or [Pages CMS](https://pagescms.org/) can add an editing UI on top of `_artworks/` without changing the site.
- A headless CMS (Sanity, Contentful, etc.) could replace the collection later, with only the gallery and artwork templates needing changes.
