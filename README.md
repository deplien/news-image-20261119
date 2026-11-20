# news-image-20261119

[![make.fun · news-image-20261119](https://make.fun/badge/news-image-20261119.svg)](https://make.fun/bounty/news-image-20261119?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261119)
[![rank](https://make.fun/badge/news-image-20261119/deplien/news-image-20261119/rank.svg)](https://make.fun/bounty/news-image-20261119/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261119)
[![reward](https://make.fun/badge/news-image-20261119/deplien/news-image-20261119/reward.svg)](https://make.fun/bounty/news-image-20261119?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261119)

**The Daily World** — one tabloid front page that sums up the world news of Thursday, 19 November 2026 in a single image (`entry.png`, 1024 × 1024, 356,189 bytes, JPEG). The stories a picture editor would lead with that day: the International Court of Justice ruling that Myanmar committed genocide against the Rohingya; Trump, Xi and Putin signing their joint peace declaration at the Shenzhen summit; Anthropic pricing its record $81 billion IPO; and, in the footer panels, Iran's strikes on Gulf states under the U.S. blockade, Denmark's approval of the Greenland security pact with the U.S., the EU's proposed 45 billion euro loan for Ukraine, and the resignation of Mongolia's president.

The front page was drawn as a single piece of editorial artwork — masthead, headlines, illustrations and footer panels composed together so the whole day reads at a glance, and legibly even at thumbnail size.

`main.ts` (Node 22, standard library only) checks the image's first bytes and copies `entry.png` into the output directory unchanged. No network, nothing drawn at run time: two runs write byte-identical output.

## Run it

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```

That writes `out/entry.png` (in the grader the same program writes `/output/entry.png`).

License: MIT (see `LICENSE`).
