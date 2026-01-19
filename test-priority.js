// Simple test script to verify priority field implementation
const { app, db } = require('./packages/backend/src/app');

// Test 1: Create task with explicit priority
console.log('Test 1: Creating task with P1 priority');
db.prepare('INSERT INTO tasks (title, description, priority) VALUES (?, ?, ?)').run('High priority task', 'Test description', 'P1');

// Test 2: Create task without priority (should default to P3)
console.log('Test 2: Creating task without priority (should default to P3)');
db.prepare('INSERT INTO tasks (title, description) VALUES (?, ?)').run('Default priority task', 'Should have P3 priority');

// Test 3: Create task with invalid priority (should default to P3)
console.log('Test 3: Creating task with invalid priority (should default to P3)');
try {
  db.prepare('INSERT INTO tasks (title, description, priority) VALUES (?, ?, ?)').run('Invalid priority task', 'Test description', 'P4');
} catch (error) {
  console.log('✓ Invalid priority P4 was rejected correctly');
  // Create with valid priority instead
  db.prepare('INSERT INTO tasks (title, description, priority) VALUES (?, ?, ?)').run('Valid P2 task', 'Test description', 'P2');
}

// Fetch all tasks and verify priority values
const tasks = db.prepare('SELECT * FROM tasks').all();
console.log('\nAll tasks:');
tasks.forEach(task => {
  console.log(`- ${task.title}: Priority ${task.priority}`);
});

console.log('\nPriority field implementation test completed!');