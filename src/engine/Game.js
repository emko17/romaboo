// Absolute simplest start - a single province
export class Game {
    constructor() {
        this.year = 0; // Starting at 0 AD
        this.provinces = new Map();
    }

    addProvince(id, name, population, resources) {
        this.provinces.set(id, {
            id,
            name,
            population,
            resources: resources || { grain: 100, timber: 50, iron: 20 },
            buildings: [],
            garrison: 0
        });
    }

    processTurn() {
        this.year++;
        // Simple population growth
        for (const province of this.provinces.values()) {
            province.population = Math.floor(province.population * 1.01); // 1% growth
            province.resources.grain -= province.population * 0.1; // Consumption
        }
        return this.getState();
    }

    getState() {
        return {
            year: this.year,
            provinces: Array.from(this.provinces.values())
        };
    }
}

// Example usage
export function createTestGame() {
    const game = new Game();
    game.addProvince('rome', 'Roma', 1000000);
    game.addProvince('carthage', 'Carthago', 500000);
    return game;
}
