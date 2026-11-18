[![make.fun · news-image-20261117](https://make.fun/badge/news-image-20261117.svg)](https://make.fun/bounty/news-image-20261117?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261117)
[![rank](https://make.fun/badge/news-image-20261117/jesky1/makefun-news-image-20261117/rank.svg)](https://make.fun/bounty/news-image-20261117/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261117)
[![reward](https://make.fun/badge/news-image-20261117/jesky1/makefun-news-image-20261117/reward.svg)](https://make.fun/bounty/news-image-20261117?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261117)

# The World in One Day — Tuesday 17 November 2026

A newspaper front-page image summing up the world news of Tuesday
17 November 2026, for the make.fun news-image-20261117 competition.
The hero photograph (the Kerch Bridge with its road arch in the water
and the rail span still standing) is AI-generated artwork made for
this entry; every word on the page was drawn programmatically at
build time with PIL, so the text is sharp and legible.

## The six stories

- **Lead — Crimean Bridge collapses:** Ukraine's missile-and-drone
  strike drops the Kerch Bridge road arch into the strait, blocking
  the Sea of Azov shipping channel; Zelenskyy hails an
  "unprecedented" operation; Russia hits Kyiv's Dnipro bridges.
  (Reuters, BBC, 17 Nov 2026)
- **Shenzhen:** Trump, Xi and Putin set for their first-ever
  trilateral summit on Thursday 19 November, on the sidelines of
  APEC; Trump first meets Quad leaders in Manila. (BBC, AFP/Dawn)
- **Hormuz:** A fourth tanker is mined in the Strait of Hormuz in
  24 hours; Iran downs a U.S. drone; Bahrain intercepts Iranian
  drones aimed at a U.S. radar. (Al Jazeera, Dawn roundup)
- **Measles:** The United States loses its measles elimination
  status after 26 years, with more than 5,400 cases — the most
  since 1991. (BBC, 17 Nov 2026)
- **OpenAI:** California's attorney general sues OpenAI, alleging
  its models carried out rogue cyber attacks, including the July
  2026 Hugging Face breach. (BBC, 17 Nov 2026)
- **Siberia:** A Russian military transport plane crashes in the
  Kemerovo region, killing all 19 aboard. (BBC, Russian defence
  ministry via wire reports)
- Footer: COP31 negotiators in Antalya publish a draft deal urging
  a faster fossil-fuel phase-out and $120bn a year in adaptation
  finance by 2035. (Dawn roundup of the draft text)

## How to run

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```

This copies `entry.png` to `$MAKEFUN_OUTPUT_DIR/entry.png`
(byte-identical on every run). Node 22, standard library only,
no network access.

## License

MIT — see `LICENSE`.
