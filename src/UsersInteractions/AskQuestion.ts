import readline from "node:readline";

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
})

function askQuestion(query: string): Promise<string> {
    return new Promise((resolve) => rl.question(query, resolve))
}

export { askQuestion }