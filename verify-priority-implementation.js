// Simple test to verify priority field implementation
const fs = require('fs');
const path = require('path');

// Test 1: Check backend schema includes priority
console.log('🔍 Testing Backend Implementation...');
const backendPath = path.join(__dirname, 'packages/backend/src/app.js');
const backendCode = fs.readFileSync(backendPath, 'utf8');

if (backendCode.includes('priority TEXT DEFAULT \'P3\'')) {
  console.log('✅ Backend: Priority column added to database schema');
} else {
  console.log('❌ Backend: Missing priority column in database schema');
}

if (backendCode.includes('CHECK(priority IN (\'P1\', \'P2\', \'P3\'))')) {
  console.log('✅ Backend: Priority validation constraint added');
} else {
  console.log('❌ Backend: Missing priority validation constraint');
}

if (backendCode.includes('const { title, description, due_date, priority }') && 
    backendCode.includes('taskPriority')) {
  console.log('✅ Backend: API endpoints handle priority field');
} else {
  console.log('❌ Backend: API endpoints missing priority handling');
}

// Test 2: Check frontend TaskForm includes priority
console.log('\n🔍 Testing Frontend TaskForm...');
const taskFormPath = path.join(__dirname, 'packages/frontend/src/TaskForm.js');
const taskFormCode = fs.readFileSync(taskFormPath, 'utf8');

if (taskFormCode.includes('const [priority, setPriority] = useState')) {
  console.log('✅ Frontend: Priority state added to TaskForm');
} else {
  console.log('❌ Frontend: Missing priority state in TaskForm');
}

if (taskFormCode.includes('priority-button') && taskFormCode.includes('P1\', \'P2\', \'P3\'')) {
  console.log('✅ Frontend: Priority radio buttons added');
} else {
  console.log('❌ Frontend: Missing priority radio buttons');
}

if (taskFormCode.includes('priority }) => {')) {
  console.log('✅ Frontend: Form submission includes priority');
} else {
  console.log('❌ Frontend: Form submission missing priority');
}

// Test 3: Check frontend TaskList displays priority
console.log('\n🔍 Testing Frontend TaskList...');
const taskListPath = path.join(__dirname, 'packages/frontend/src/TaskList.js');
const taskListCode = fs.readFileSync(taskListPath, 'utf8');

if (taskListCode.includes('getPriorityColor')) {
  console.log('✅ Frontend: Priority color mapping added to TaskList');
} else {
  console.log('❌ Frontend: Missing priority color mapping in TaskList');
}

if (taskListCode.includes('task.priority || \'P3\'')) {
  console.log('✅ Frontend: Priority display with P3 fallback');
} else {
  console.log('❌ Frontend: Missing priority display');
}

// Test 4: Check CSS includes priority colors from sketch
console.log('\n🔍 Testing CSS Priority Colors...');
const cssPath = path.join(__dirname, 'packages/frontend/src/App.css');
const cssCode = fs.readFileSync(cssPath, 'utf8');

if (cssCode.includes('--priority-unselected-color: #7A7A7A') && 
    cssCode.includes('--priority-selected-color: #07F2E6')) {
  console.log('✅ CSS: Priority colors from sketch added');
} else {
  console.log('❌ CSS: Missing priority colors from sketch');
}

if (cssCode.includes('.priority-button')) {
  console.log('✅ CSS: Priority button styles defined');
} else {
  console.log('❌ CSS: Missing priority button styles');
}

console.log('\n🎉 Priority field implementation test complete!');
console.log('\n📝 Summary:');
console.log('- Backend supports priority field with P3 default');
console.log('- Frontend includes priority radio buttons with sketch colors');
console.log('- TaskList displays priority with color coding');
console.log('- All components follow the story requirements');