# 🧠 Algorithmic Classics: TypeScript Solutions

A comprehensive, strictly-typed TypeScript implementation of 7 fundamental algorithmic challenges. Each solution is optimized for performance, thoroughly documented, and structured for academic evaluation and real-world engineering standards.

---

## Table of Contents

- [📌 Project Overview](#-project-overview)
- [ Problems Summary](#-problems-summary)
- [📁 Project Structure](#-project-structure)
- [🛠️ Installation & Setup](#️-installation--setup)
- [ Usage](#-usage)
- [ Problem Statements](#-problem-statements)
- [📈 Complexity Analysis](#-complexity-analysis)
- [👨‍💻 Author](#-author)

---

## 📌 Project Overview

This repository contains professional TypeScript implementations of classic Data Structures & Algorithms problems. The codebase follows strict architectural principles:

✅ **Strict TypeScript Mode** – Zero `any` types, full compile-time safety  
✅ **Modular Design** – Each algorithm isolated in its own file, re-exported via `index.ts`  
✅ **Optimal Complexity** – Best-known time/space trade-offs applied per problem  
✅ **Academic Documentation** – Clear logic breakdowns and comprehensive testing

---

## 📊 Problems Summary

| #   | Problem                            | Core Technique                           | Time Complexity | Space Complexity | Source File                  |
| --- | ---------------------------------- | ---------------------------------------- | --------------- | ---------------- | ---------------------------- |
| 1   | Flood Fill                         | Depth-First Search (DFS)                 | `O(m × n)`      | `O(m × n)`       | `src/flood-fill.ts`          |
| 2   | Trapping Rain Water                | Two-Pointer Technique                    | `O(n)`          | `O(1)`           | `src/trapping-rain-water.ts` |
| 3   | Climbing Stairs                    | Dynamic Programming (Fibonacci)          | `O(n)`          | `O(1)`           | `src/climbing-stairs.ts`     |
| 4   | Jump Game                          | Greedy Algorithm                         | `O(n)`          | `O(1)`           | `src/jump-game.ts`           |
| 5   | Rod Cutting                        | Dynamic Programming (Unbounded Knapsack) | `O(n²)`         | `O(n)`           | `src/rod-cutting.ts`         |
| 6   | Largest Rectangle in Histogram     | Monotonic Stack                          | `O(n)`          | `O(n)`           | `src/largest-rectangle.ts`   |
| 7   | Maximal Rectangle in Binary Matrix | DP + Histogram Conversion                | `O(m × n)`      | `O(n)`           | `src/maximal-rectangle.ts`   |

---

## 📁 Project Structure

The project is organized as follows:

- **`src/`** - Contains all TypeScript source files
  - `flood-fill.ts` - Problem 1 solution
  - `trapping-rain-water.ts` - Problem 2 solution
  - `climbing-stairs.ts` - Problem 3 solution
  - `jump-game.ts` - Problem 4 solution
  - `rod-cutting.ts` - Problem 5 solution
  - `largest-rectangle.ts` - Problem 6 solution
  - `maximal-rectangle.ts` - Problem 7 solution
  - `index.ts` - Central export file
- **`.gitignore`** - Git ignore configuration
- **`package.json`** - NPM scripts and dependencies
- **`tsconfig.json`** - TypeScript compiler configuration
- **`README.md`** - Project documentation

---

## 🛠️ Installation & Setup

### Prerequisites

- **Node.js** `v18+`
- **npm** `v9+`
- **TypeScript** `v5+`

### Quick Start

```bash
# 1. Clone the repository
git clone https://github.com/Emadabs2014/algorithm-solutions-ts.git
cd algorithm-solutions-ts

# 2. Install dependencies
npm install

# 3. Compile TypeScript to JavaScript
npm run build

# 4. Execute test cases
npm start
```
