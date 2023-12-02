# 2023 Advent of Code

Completed using Node.js with JSDoc. May attempt with Zig or Rust as well later. 

#### My personal rules:
- No copilot
- No LLM's
- Strict type checking via JSDoc and tsc
- Write unit test
- Write each puzzle solver as a CLI tool

#### Layout
Each puzzle has its own folder named by day and part. The puzzle prompt is inside `PUZZLE.txt`. The example input is in the file `example-input.txt` and the actual input inside `puzzle-input.txt`. The entry point of each puzzle solver is `src/main.js`

#### Running solutions 
Example for the first puzzle:
```bash
node ./day-1-part-1/src/main.js ./day-1-part-1/puzzle-input.txt
```
which should output: `Calibration Sum: 54940`

#### Other
Run test + coverage:
```bash
npm run test
```

Run type checker:
```bash
npm run check
```