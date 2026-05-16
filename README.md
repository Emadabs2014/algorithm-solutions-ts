# 🧠 Algorithmic Classics: TypeScript Solutions

A comprehensive, strictly-typed TypeScript implementation of 7 fundamental algorithmic challenges. Each solution is optimized for performance, thoroughly documented, and structured for academic evaluation and real-world engineering standards.

---

##  Table of Contents
- [📌 Project Overview](#-project-overview)
- [📊 Problems Summary](#-problems-summary)
- [📁 Project Structure](#-project-structure)
- [🛠️ Installation & Setup](#-installation--setup)
- [ Usage & Testing](#-usage--testing)
- [📘 Detailed Problem Breakdown](#-detailed-problem-breakdown)
- [📈 Complexity Analysis](#-complexity-analysis)
- [👨‍💻 Author](#-author)
- [📜 License](#-license)

---

## 📌 Project Overview

This repository contains **TypeScript implementations** of classic Data Structures & Algorithms problems. The codebase follows strict architectural principles:
✅ **Strict TypeScript Mode** – Zero `any` types, full compile-time safety  
✅ **Modular Design** – Each algorithm isolated in its own file, re-exported via `index.ts`  
✅ **Optimal Complexity** – Best-known time/space trade-offs applied per problem  
✅ **Academic Documentation** – Clear logic breakdowns, input/output examples, and complexity tables  

---

##  Problems Summary

| # | Problem | Core Technique | Time Complexity | Space Complexity | Source File |
|---|---------|----------------|-----------------|------------------|-------------|
| 1 | Flood Fill | Depth-First Search (DFS) | `O(m × n)` | `O(m × n)` | `src/flood-fill.ts` |
| 2 | Trapping Rain Water | Two-Pointer Technique | `O(n)` | `O(1)` | `src/trapping-rain-water.ts` |
| 3 | Climbing Stairs | Dynamic Programming (Fibonacci) | `O(n)` | `O(1)` | `src/climbing-stairs.ts` |
| 4 | Jump Game | Greedy Algorithm | `O(n)` | `O(1)` | `src/jump-game.ts` |
| 5 | Rod Cutting | Dynamic Programming (Unbounded Knapsack) | `O(n²)` | `O(n)` | `src/rod-cutting.ts` |

algorithm-solutions-ts/

│

├── src/
│ ├── flood-fill.ts # Problem 1: DFS-based grid traversal
│ ├── trapping-rain-water.ts # Problem 2: Two-pointer water calculation
│ ├── climbing-stairs.ts # Problem 3: Iterative DP solution
│ ├── jump-game.ts # Problem 4: Greedy reachability check
│ ├── rod-cutting.ts # Problem 5: Bottom-up DP optimization
│ ├── largest-rectangle.ts # Problem 6: Stack-based area maximization
│ ├── maximal-rectangle.ts # Problem 7: Row-wise histogram + Problem 6 reuse
│ └── index.ts # Central barrel file for clean imports
│
├── .gitignore # Excludes node_modules, dist, logs
├── package.json # NPM scripts & dependencies
├── tsconfig.json # Strict TS compiler options
└── README.md # Comprehensive documentation
---

## 🛠️ Installation & Setup

### Prerequisites
- **Node.js** `v18+`
- **npm** `v9+`
- **TypeScript** `v5+`

### Quick Start
```bash
# 1. Clone the repository
git clone https://github.com/YOUR_USERNAME/algorithm-solutions-ts.git
cd algorithm-solutions-ts

# 2. Install dependencies
npm install

# 3. Compile TypeScript to JavaScript
npm run build

# 4. Execute test cases
npm start
