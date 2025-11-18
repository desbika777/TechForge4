
abstract class TaskManager {
	protected tasks: { type: 'project' | 'daily'; name: string }[] = [];
	protected taskNames = new Set<string>();

	abstract addTask(task: string): void;
	abstract listTasks(): string[];

	protected addUniqueTask(entry: { type: 'project' | 'daily'; name: string }): void {
		if (this.taskNames.has(entry.type + ':' + entry.name)) return;
		this.taskNames.add(entry.type + ':' + entry.name);
		this.tasks.push(entry);
	}
}

class Project extends TaskManager {
	addTask(task: string): void {
		this.addUniqueTask({ type: 'project', name: task });
	}
	listTasks(): string[] {
		return this.tasks.filter(t => t.type === 'project').map(t => t.name);
	}
}

class DailyTasks extends TaskManager {
	addTask(task: string): void {
		this.addUniqueTask({ type: 'daily', name: task });
	}
	listTasks(): string[] {
		return this.tasks.filter(t => t.type === 'daily').map(t => t.name);
	}
}

abstract class Inventory {
	protected items: Record<string, number> = {};
	abstract addItem(item: string, quantity: number): void;
	abstract removeItem(item: string): void;
	abstract getInventory(): Record<string, number>;
}

class WarehouseInventory extends Inventory {
	addItem(item: string, quantity: number): void {
		if (quantity <= 0) return;
		this.items[item] = (this.items[item] || 0) + quantity;
	}
	removeItem(item: string): void {
		delete this.items[item];
	}
	getInventory(): Record<string, number> {
		return { ...this.items };
	}
}

class StoreInventory extends Inventory {
	private static MAX_PER_ITEM = 10;
	addItem(item: string, quantity: number): void {
		if (quantity <= 0) return;
		const current = this.items[item] || 0;
		const newTotal = current + quantity;
		this.items[item] = newTotal > StoreInventory.MAX_PER_ITEM ? StoreInventory.MAX_PER_ITEM : newTotal;
	}
	removeItem(item: string): void {
		delete this.items[item];
	}
	getInventory(): Record<string, number> {
		return { ...this.items };
	}
}

abstract class FavoriteManager {
	abstract addFavorite(item: string): void;
	abstract getFavorites(): string[];
}

class MoviesFavoriteManager extends FavoriteManager {
	private favorites = new Set<string>();
	addFavorite(item: string): void {
		this.favorites.add(item);
	}
	getFavorites(): string[] {
		return Array.from(this.favorites).sort((a, b) => a.localeCompare(b));
	}
}

class BooksFavoriteManager extends FavoriteManager {
	private favorites: string[] = [];
	addFavorite(item: string): void {
		this.favorites.unshift(item);
	}
	getFavorites(): string[] {
		return [...this.favorites];
	}
}

abstract class VoteSystem {
	abstract voteFor(candidate: string): void;
	abstract getResults(): object;
}

class Election extends VoteSystem {
	private votes: Record<string, number> = {};
	voteFor(candidate: string): void {
		this.votes[candidate] = (this.votes[candidate] || 0) + 1;
	}
	getResults(): object {
		return { ...this.votes };
	}
}

class Poll extends VoteSystem {
	private votes: Record<string, number> = {};
	voteFor(candidate: string): void {
		this.votes[candidate] = (this.votes[candidate] || 0) + 1;
	}
	getResults(): object {
		return Object.entries(this.votes)
			.sort((a, b) => b[1] - a[1])
			.map(([candidate]) => candidate);
	}
}

const project = new Project();
project.addTask('Implementar API');
project.addTask('Implementar API'); 
project.addTask('Testar módulo');

const daily = new DailyTasks();
daily.addTask('Reunião diária');
daily.addTask('Revisar PRs');

const warehouse = new WarehouseInventory();
warehouse.addItem('Parafuso', 500);
warehouse.addItem('Porca', 200);

const store = new StoreInventory();
store.addItem('Teclado', 8);
store.addItem('Teclado', 5); 

const moviesFav = new MoviesFavoriteManager();
moviesFav.addFavorite('Inception');
moviesFav.addFavorite('Avatar');
moviesFav.addFavorite('Inception'); 

const booksFav = new BooksFavoriteManager();
booksFav.addFavorite('Clean Code');
booksFav.addFavorite('Design Patterns');

const election = new Election();
election.voteFor('Alice');
election.voteFor('Bob');
election.voteFor('Alice');

const poll = new Poll();
poll.voteFor('Python');
poll.voteFor('TypeScript');
poll.voteFor('Python');
poll.voteFor('Rust');
poll.voteFor('Python');

export {
	TaskManager,
	Project,
	DailyTasks,
	Inventory,
	WarehouseInventory,
	StoreInventory,
	FavoriteManager,
	MoviesFavoriteManager,
	BooksFavoriteManager,
	VoteSystem,
	Election,
	Poll,
};

console.log('Project tasks:', project.listTasks());
console.log('Daily tasks:', daily.listTasks());
console.log('Warehouse inventory:', warehouse.getInventory());
console.log('Store inventory:', store.getInventory());
console.log('Movies favorites:', moviesFav.getFavorites());
console.log('Books favorites:', booksFav.getFavorites());
console.log('Election results:', election.getResults());
console.log('Poll ranking:', poll.getResults());

