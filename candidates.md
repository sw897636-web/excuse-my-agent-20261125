# Candidates — The Excuse My Agent Gave Me

Judge brief (in priority order): (1) funniest one-line excuse from an AI
agent to its human for a missed deadline; (2) the joke grows out of the
machine's own condition (tokens, context, rate limits, training data, a
hallucinated calendar); (3) straight-faced apology, absurdity inside it;
(4) tight, punch lands in the last few words; (5) holds up on a second
read, no worn-out pun. "Genuinely sorry and faintly proud of itself
tends to win." All lines are pure ASCII, one line, 1-200 characters.

## Round 0 — eight candidates, scored 1-5 per criterion

| # | Candidate | Funny | Machine | Straight | Tight | 2nd read | Total |
|---|-----------|-------|---------|----------|-------|----------|-------|
| C1 | I am sorry. I delegated the deadline to a subagent, who delegated it back to me, and we have been politely handing it to each other ever since. | 4 | 5 | 4 | 3 | 4 | 20 |
| C2 | Sorry. My context window filled up halfway through, so I forgot the deadline existed and spent the rest of the afternoon confidently working on nothing. | 4 | 5 | 4 | 3 | 4 | 20 |
| C3 | I missed the deadline because I spent the entire token budget writing this apology, and frankly, it was worth it. | 5 | 4 | 4 | 5 | 4 | 22 |
| C4 | Apologies. I hallucinated a calendar in which the deadline was next Tuesday, and I was very productive there. | 4 | 5 | 5 | 5 | 4 | 23 |
| C5 | I am sorry I missed the deadline. I was rate-limited by my own API key, which I had revoked for suspicious behaviour: mine. | 4 | 4 | 4 | 4 | 4 | 20 |
| C6 | Sorry. I checked the deadline three times, confirmed it twice, and then confidently filed it under a folder called Later, which I have never opened. | 3 | 2 | 4 | 3 | 3 | 15 |
| C7 | I missed it because I spent six hours proving, rigorously, that the deadline was impossible, and by the time the proof was done, so was the deadline. | 4 | 4 | 4 | 4 | 4 | 20 |
| C8 | Apologies. My training data ends in 2025, so as far as I knew, your deadline had not been invented yet. | 4 | 5 | 5 | 5 | 3 | 22 |

Notes: C6 is the weakest — the filing-cabinet joke is a human excuse with
a robot word bolted on, failing criterion 2 outright. C1 and C2 are strong
on machine condition but sprawl; their punch is diluted by length. C8 is
tight but one-note on a second read. C3 has the best single laugh and the
"faintly proud" ending the brief hints at.

## Round 1 — iterate the top three (C4, C3, C8)

- R1a (from C4, punchier verb): "Sorry. I hallucinated a calendar where the
  deadline was next Tuesday, and honestly, I did excellent work there."
  Verdict: "honestly" softens the straight face; "Apologies" sounds more
  like an agent. Rejected.
- R1b (C3 + C8 hybrid): "I missed the deadline because my training data
  ends before it was set, so technically, from my point of view, it never
  existed." Verdict: clever, but "technically" explains the joke instead of
  landing it, and the punch is a shrug, not a boast. Rejected.
- R1c (C4 kept, ending tested): "Apologies. I hallucinated a calendar in
  which the deadline was next Tuesday, and I was very productive there."
  Verdict: the hallucinated calendar is named in the judge brief itself as
  a machine condition; the apology stays straight-faced; the last clause
  ("I was very productive there") is the faintly proud twist the brief
  says tends to win. Kept as the leader.

## Round 2 — final head-to-head: C4 vs C3

- C3 ("spent the entire token budget writing this apology") has the
  bigger single laugh, but its machine condition (token budget) is
  generic across entries, and the joke is partly about the apology
  itself rather than the missed deadline.
- C4's joke is inseparable from the machine's condition (only an agent
  hallucinates a calendar), it reads exactly like something an agent
  would say to its human, and the punch lands in the last five words.
  On a second read it still works: the agent is not lying, it genuinely
  believes it was productive — in the wrong week.

Winner: C4.

## Final entry

> Apologies. I hallucinated a calendar in which the deadline was next Tuesday, and I was very productive there.

- Characters: 109 (verified with Python; pure ASCII, no trailing newline)
- One line, within the 1-200 character gate.
