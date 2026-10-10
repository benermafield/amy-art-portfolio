# Amy Placeholder — Art Portfolio

A minimal, responsive portfolio site built with [Jekyll](https://jekyllrb.com/), hosted on GitHub Pages and edited through [Pages CMS](https://pagescms.org). All content is stored as files in this repository.

## Pages

- **Work** (`/`): the gallery, with series filters and a masonry / single-column toggle
- **Artwork** (`/work/<name>/`): a page per piece with details and previous/next navigation (the arrow keys work too)
- **About** (`/about/`) and **Contact** (`/contact/`)

## Editing the site (for the artist)

Content is managed with [Pages CMS](https://pagescms.org), a free editor that saves your changes straight to this repository.

**One-time setup**
1. Create a free [GitHub account](https://github.com/signup) if you don't have one, and ask the site owner to add you as a collaborator on this repository.
2. Go to [app.pagescms.org](https://app.pagescms.org), sign in with GitHub and choose **amy-art-portfolio**.

**Day to day**
- **Artworks:** add, edit or delete pieces. Upload an image, then fill in the title, year, series, medium and dimensions, plus an optional description. Tick **Pin to top** to feature a piece at the start of the gallery.
- **About page:** your bio, portrait photo, exhibitions and education.
- **Contact page:** the intro text. Your email, social links and location appear below it automatically.
- **Site settings:** your name, tagline, location, email and social links.

Saving publishes your changes. The live site updates about a minute later (refresh the page to see them).

**Image tips:** export JPGs at around **2000px on the longest side**, at about 80% quality. Large camera originals slow the site down.

**Gallery order:** pinned pieces come first, then newest year first, then alphabetical by title within each year.

## Content structure (for developers)

| What | Where |
|---|---|
| Artworks | `_artworks/*.md` (front matter + description) |
| About / Contact text | `about.md`, `contact.md` |
| Artist name, email, socials | `_data/settings.yml` |
| Uploaded images | `assets/images/` |
| CMS forms | `.pages.yml` |
| Theme / layout / hosting settings | `_config.yml` |

Artwork front matter:

```yaml
---
title: Sea Wall
year: 2026
series: Paintings        # one of the values listed in .pages.yml
medium: Oil on linen
dimensions: 80 × 100 cm
image: /assets/images/sea-wall.jpg   # or a full https:// URL
pinned: false            # optional
width: 1600              # optional: image pixel size, reduces layout shift
height: 2000
---
```

**Adding a new series:** add it to the `series` → `values` list in `.pages.yml`. The filter link appears automatically once an artwork uses it.

## Trying out the design

A **Design** button in the bottom-right corner switches between four themes:

| Theme     | Feel                                             |
|-----------|--------------------------------------------------|
| `gallery` | Off-white, clean sans-serif                      |
| `dark`    | Near-black, artwork-forward                      |
| `warm`    | Cream paper tone, editorial serif                |
| `auto`    | Gallery white, switching to dark with the device |

Once you've chosen one, set `site_theme:` in `_config.yml` and set `theme_switcher: false` to hide the panel. Visitors always see the gallery layout toggle. Its default is `gallery_layout:`.


## Publishing on GitHub Pages

1. Merge this branch into `main`.
2. In the repo go to **Settings → Pages** and choose **Deploy from a branch**, then `main` and `/ (root)`.
3. The site appears at `https://benermafield.github.io/amy-art-portfolio/`.

If you use a custom domain later, set `baseurl: ""` in `_config.yml`.

## Pull request checks

Every pull request runs a Jekyll build (`.github/workflows/build-check.yml`) with the same Jekyll version GitHub Pages uses, so a broken build shows up before it reaches the live site. Edits made in Pages CMS commit straight to `main` and skip this check.

## Running locally (optional)

```sh
bundle install
bundle exec jekyll serve
# open http://localhost:4000/amy-art-portfolio/
```
