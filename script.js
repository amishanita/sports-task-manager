/**
 * Sports Task Manager - Main JavaScript
 * スポーツタスクマネージャー - メインJavaScript
 * खेल कार्य प्रबन्धक - मुख्य जाभास्क्रिप्ट
 */

// Multi-language translations
// 多言語対応の翻訳
// बहुभाषिक अनुवाद
const translations = {
    ja: {
        appTitle: "スポーツタスクマネージャー",
        appSubtitle: "スポーツの練習と試合を管理",
        totalLabel: "総タスク",
        completedLabel: "完了",
        pendingLabel: "未完了",
        addTaskTitle: "新しいタスクを追加",
        taskTitleLabel: "タスク名 *",
        taskTitlePlaceholder: "例: サッカーの練習",
        sportLabel: "スポーツ",
        sports: {
            soccer: "⚽ サッカー",
            basketball: "🏀 バスケットボール",
            baseball: "⚾ 野球",
            tennis: "🎾 テニス",
            swimming: "🏊 水泳",
            running: "🏃 ランニング",
            volleyball: "🏐 バレーボール",
            other: "🤸 その他"
        },
        dueDateLabel: "日付",
        descriptionLabel: "詳細",
        descriptionPlaceholder: "例: ドリブル練習を30分",
        addBtnText: "タスクを追加",
        searchLabel: "タスクを検索",
        searchPlaceholder: "検索...",
        filterAll: "すべて",
        filterActive: "未完了",
        filterCompleted: "完了",
        emptyTitle: "タスクがありません",
        emptySubtitle: "最初のタスクを追加してください",
        footerText: "スポーツタスクマネージャー - 日本語, English, नेपाली対応",
        editBtn: "編集",
        completeBtn: "完了",
        reopenBtn: "再開",
        deleteBtn: "削除",
        addedLabel: "追加日:",
        dueLabel: "期限:",
        noDueDate: "期限なし",
        today: "今日",
        tomorrow: "明日",
        confirmDelete: "このタスクを削除しますか？"
    },
    en: {
        appTitle: "Sports Task Manager",
        appSubtitle: "Manage your sports practice and matches",
        totalLabel: "Total Tasks",
        completedLabel: "Completed",
        pendingLabel: "Pending",
        addTaskTitle: "Add New Task",
        taskTitleLabel: "Task Name *",
        taskTitlePlaceholder: "e.g. Soccer practice",
        sportLabel: "Sport",
        sports: {
            soccer: "⚽ Soccer",
            basketball: "🏀 Basketball",
            baseball: "⚾ Baseball",
            tennis: "🎾 Tennis",
            swimming: "🏊 Swimming",
            running: "🏃 Running",
            volleyball: "🏐 Volleyball",
            other: "🤸 Other"
        },
        dueDateLabel: "Due Date",
        descriptionLabel: "Description",
        descriptionPlaceholder: "e.g. 30 minutes of dribbling practice",
        addBtnText: "Add Task",
        searchLabel: "Search Tasks",
        searchPlaceholder: "Search...",
        filterAll: "All",
        filterActive: "Active",
        filterCompleted: "Completed",
        emptyTitle: "No tasks yet",
        emptySubtitle: "Add your first task to get started",
        footerText: "Sports Task Manager - Japanese, English, Nepali supported",
        editBtn: "Edit",
        completeBtn: "Complete",
        reopenBtn: "Reopen",
        deleteBtn: "Delete",
        addedLabel: "Added:",
        dueLabel: "Due:",
        noDueDate: "No due date",
        today: "Today",
        tomorrow: "Tomorrow",
        confirmDelete: "Are you sure you want to delete this task?"
    },
    ne: {
        appTitle: "खेल कार्य प्रबन्धक",
        appSubtitle: "तपाईंको खेल अभ्यास र म्याचहरू प्रबन्धन गर्नुहोस्",
        totalLabel: "कुल कार्यहरू",
        completedLabel: "पूरा भयो",
        pendingLabel: "बाँकी छ",
        addTaskTitle: "नयाँ कार्य थप्नुहोस्",
        taskTitleLabel: "कार्यको नाम *",
        taskTitlePlaceholder: "उदा: फुटबल अभ्यास",
        sportLabel: "खेल",
        sports: {
            soccer: "⚽ फुटबल",
            basketball: "🏀 बास्केटबल",
            baseball: "⚾ बेसबल",
            tennis: "🎾 टेनिस",
            swimming: "🏊 पौडी",
            running: "🏃 दौड",
            volleyball: "🏐 भलिबल",
            other: "🤸 अन्य"
        },
        dueDateLabel: "मिति",
        descriptionLabel: "विवरण",
        descriptionPlaceholder: "उदा: ३० मिनेट ड्रिब्लिङ अभ्यास",
        addBtnText: "कार्य थप्नुहोस्",
        searchLabel: "कार्यहरू खोज्नुहोस्",
        searchPlaceholder: "खोज्नुहोस्...",
        filterAll: "सबै",
        filterActive: "सकिएन",
        filterCompleted: "पूरा भयो",
        emptyTitle: "अहिले सम्म कुनै कार्य छैन",
        emptySubtitle: "सुरु गर्न पहिलो कार्य थप्नुहोस्",
        footerText: "खेल कार्य प्रबन्धक - जापानी, अंग्रेजी, नेपाली समर्थित",
        editBtn: "सम्पादन",
        completeBtn: "पूरा गर्नुहोस्",
        reopenBtn: "फेरि खोल्नुहोस्",
        deleteBtn: "मेटाउनुहोस्",
        addedLabel: "थपियो:",
        dueLabel: "मिति:",
        noDueDate: "कुनै निश्चित मिति छैन",
        today: "आज",
        tomorrow: "भोलि",
        confirmDelete: "के तपाईं यो कार्य मेटाउन निश्चित हुनुहुन्छ?"
    }
};

// DOM elements
// DOM要素
// DOM तत्वहरू
const taskContainer = document.getElementById('task-container');
const addTaskBtn = document.getElementById('add-task');
const taskTitleInput = document.getElementById('task-title');
const taskDescriptionInput = document.getElementById('task-description');
const taskSportSelect = document.getElementById('task-sport');
const taskDueDateInput = document.getElementById('task-due-date');
const searchInput = document.getElementById('search-task');
const filterButtons = document.querySelectorAll('.filter-btn');
const langButtons = document.querySelectorAll('.lang-btn');

// Text elements for translation
// 翻訳用テキスト要素
// अनुवादका लागि पाठ तत्वहरू
const textElements = {
    appTitle: document.getElementById('app-title'),
    appSubtitle: document.getElementById('app-subtitle'),
    totalLabel: document.getElementById('total-label'),
    completedLabel: document.getElementById('completed-label'),
    pendingLabel: document.getElementById('pending-label'),
    addTaskTitle: document.getElementById('add-task-title'),
    taskTitleLabel: document.getElementById('task-title-label'),
    sportLabel: document.getElementById('sport-label'),
    dueDateLabel: document.getElementById('due-date-label'),
    descriptionLabel: document.getElementById('description-label'),
    addBtnText: document.getElementById('add-btn-text'),
    searchLabel: document.getElementById('search-label'),
    filterAll: document.getElementById('filter-all'),
    filterActive: document.getElementById('filter-active'),
    filterCompleted: document.getElementById('filter-completed'),
    emptyTitle: document.getElementById('empty-title'),
    emptySubtitle: document.getElementById('empty-subtitle'),
    footerText: document.getElementById('footer-text')
};

// Stats elements
// 統計要素
// तथ्याङ्क तत्वहरू
const totalTasksEl = document.getElementById('total-tasks');
const completedTasksEl = document.getElementById('completed-tasks');
const pendingTasksEl = document.getElementById('pending-tasks');

// Task data
// タスクデータ
// कार्य डाटा
let tasks = JSON.parse(localStorage.getItem('sports-tasks')) || [];
let currentFilter = 'all';
let currentLanguage = 'ja';

/**
 * Initialize the application
 * アプリケーションを初期化
 * अनुप्रयोग सुरु गर्नुहोस्
 */
function init() {
    // Set default due date to tomorrow
    // デフォルトの期限を明日に設定
    // पूर्वनिर्धारित मिति भोलि राख्नुहोस्
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    taskDueDateInput.valueAsDate = tomorrow;

    renderTasks();
    updateStats();

    // Event listeners
    // イベントリスナー
    // घटना श्रोताहरू
    addTaskBtn.addEventListener('click', addTask);
    searchInput.addEventListener('input', filterTasks);

    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            filterButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
            currentFilter = button.dataset.filter;
            filterTasks();
        });
    });

    langButtons.forEach(button => {
        button.addEventListener('click', () => {
            currentLanguage = button.dataset.lang;
            updateLanguage();
            renderTasks();
        });
    });
}

/**
 * Update language of the UI
 * UIの言語を更新
 * यूआईको भाषा अपडेट गर्नुहोस्
 */
function updateLanguage() {
    const lang = translations[currentLanguage];

    // Update all text elements
    // すべてのテキスト要素を更新
    // सबै पाठ तत्वहरू अपडेट गर्नुहोस्
    for (const [key, element] of Object.entries(textElements)) {
        if (element) element.textContent = lang[key];
    }

    // Update placeholders
    // プレースホルダーを更新
    // प्लेसहोल्डरहरू अपडेट गर्नुहोस्
    taskTitleInput.placeholder = lang.taskTitlePlaceholder;
    taskDescriptionInput.placeholder = lang.descriptionPlaceholder;
    searchInput.placeholder = lang.searchPlaceholder;

    // Update sport options
    // スポーツオプションを更新
    // खेल विकल्पहरू अपडेट गर्नुहोस्
    const sports = lang.sports;
    taskSportSelect.innerHTML = '';
    for (const [value, text] of Object.entries(sports)) {
        const option = document.createElement('option');
        option.value = value;
        option.textContent = text;
        taskSportSelect.appendChild(option);
    }

    // Update active language button
    // アクティブな言語ボタンを更新
    // सक्रिय भाषा बटन अपडेट गर्नुहोस्
    langButtons.forEach(btn => {
        btn.classList.toggle('active', btn.dataset.lang === currentLanguage);
    });
}

/**
 * Add a new task
 * 新しいタスクを追加
 * नयाँ कार्य थप्नुहोस्
 */
function addTask() {
    const title = taskTitleInput.value.trim();
    const description = taskDescriptionInput.value.trim();
    const sport = taskSportSelect.value;
    const dueDate = taskDueDateInput.value;

    if (title === '') {
        alert(translations[currentLanguage].taskTitleLabel.replace(' *', '') + ' ' +
            (currentLanguage === 'ja' ? 'を入力してください' :
                currentLanguage === 'ne' ? 'आवश्यक छ' : 'is required'));
        taskTitleInput.focus();
        return;
    }

    const newTask = {
        id: Date.now(),
        title,
        description,
        sport,
        dueDate,
        completed: false,
        createdAt: new Date().toISOString()
    };

    tasks.push(newTask);
    saveTasks();
    renderTasks();
    updateStats();

    // Reset form
    // フォームをリセット
    // फर्म रिसेट गर्नुहोस्
    taskTitleInput.value = '';
    taskDescriptionInput.value = '';
    taskSportSelect.value = 'soccer';

    // Set default due date to tomorrow
    // デフォルトの期限を明日に設定
    // पूर्वनिर्धारित मिति भोलि राख्नुहोस्
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    taskDueDateInput.valueAsDate = tomorrow;

    taskTitleInput.focus();
}

/**
 * Delete a task
 * タスクを削除
 * कार्य मेटाउनुहोस्
 */
function deleteTask(id) {
    if (confirm(translations[currentLanguage].confirmDelete)) {
        tasks = tasks.filter(task => task.id !== id);
        saveTasks();
        renderTasks();
        updateStats();
    }
}

/**
 * Toggle task completion status
 * タスクの完了状態を切り替え
 * कार्य पूरा स्थिति टगल गर्नुहोस्
 */
function toggleComplete(id) {
    tasks = tasks.map(task => {
        if (task.id === id) {
            return { ...task, completed: !task.completed };
        }
        return task;
    });
    saveTasks();
    renderTasks();
    updateStats();
}

/**
 * Edit a task
 * タスクを編集
 * कार्य सम्पादन गर्नुहोस्
 */
function editTask(id) {
    const task = tasks.find(task => task.id === id);
    if (!task) return;

    taskTitleInput.value = task.title;
    taskDescriptionInput.value = task.description || '';
    taskSportSelect.value = task.sport;
    taskDueDateInput.value = task.dueDate || '';

    // Remove task from list
    // リストからタスクを削除
    // सूचीबाट कार्य हटाउनुहोस्
    tasks = tasks.filter(t => t.id !== id);
    saveTasks();
    renderTasks();
    updateStats();

    // Scroll to form
    // フォームにスクロール
    // फर्ममा स्क्रोल गर्नुहोस्
    document.querySelector('.input-section').scrollIntoView({ behavior: 'smooth' });
    taskTitleInput.focus();
}

/**
 * Save tasks to localStorage
 * タスクをlocalStorageに保存
 * कार्यहरू localStorage मा बचत गर्नुहोस्
 */
function saveTasks() {
    localStorage.setItem('sports-tasks', JSON.stringify(tasks));
}

/**
 * Filter tasks based on search and filter
 * 検索とフィルターに基づいてタスクをフィルタリング
 * खोज र फिल्टर आधारमा कार्यहरू फिल्टर गर्नुहोस्
 */
function filterTasks() {
    const searchTerm = searchInput.value.toLowerCase();

    let filteredTasks = tasks.filter(task => {
        const matchesSearch = task.title.toLowerCase().includes(searchTerm) ||
            (task.description && task.description.toLowerCase().includes(searchTerm));

        if (currentFilter === 'active') {
            return matchesSearch && !task.completed;
        } else if (currentFilter === 'completed') {
            return matchesSearch && task.completed;
        }
        return matchesSearch;
    });

    renderTasks(filteredTasks);
}

/**
 * Update statistics display
 * 統計表示を更新
 * तथ्याङ्क प्रदर्शन अपडेट गर्नुहोस्
 */
function updateStats() {
    totalTasksEl.textContent = tasks.length;

    const completed = tasks.filter(task => task.completed).length;
    completedTasksEl.textContent = completed;

    pendingTasksEl.textContent = tasks.length - completed;
}

/**
 * Format date for display
 * 表示用に日付をフォーマット
 * प्रदर्शनका लागि मिति ढाँचा गर्नुहोस्
 */
function formatDate(dateString) {
    if (!dateString) return translations[currentLanguage].noDueDate;

    const date = new Date(dateString);
    const today = new Date();
    const tomorrow = new Date(today);
    tomorrow.setDate(tomorrow.getDate() + 1);

    if (date.toDateString() === today.toDateString()) {
        return translations[currentLanguage].today;
    } else if (date.toDateString() === tomorrow.toDateString()) {
        return translations[currentLanguage].tomorrow;
    }

    return date.toLocaleDateString();
}

/**
 * Get sport icon and name
 * スポーツのアイコンと名前を取得
 * खेल आइकन र नाम प्राप्त गर्नुहोस्
 */
function getSportDisplay(sport) {
    const sports = translations[currentLanguage].sports;
    return sports[sport] || sports.other;
}

/**
 * Render tasks to the DOM
 * DOMにタスクをレンダリング
 * DOM मा कार्यहरू रेन्डर गर्नुहोस्
 */
function renderTasks(tasksToRender = tasks) {
    if (tasksToRender.length === 0) {
        taskContainer.innerHTML = `
            <div class="empty-state">
                <i class="fas fa-clipboard-list"></i>
                <h3>${translations[currentLanguage].emptyTitle}</h3>
                <p>${translations[currentLanguage].emptySubtitle}</p>
            </div>
        `;
        return;
    }

    taskContainer.innerHTML = '';

    tasksToRender.forEach(task => {
        const taskElement = document.createElement('div');
        taskElement.className = `task-item ${task.completed ? 'completed' : ''}`;

        const sportDisplay = getSportDisplay(task.sport);
        const createdAt = new Date(task.createdAt).toLocaleDateString();
        const dueDate = formatDate(task.dueDate);
        const lang = translations[currentLanguage];

        taskElement.innerHTML = `
            <div class="task-header">
                <div class="task-title">${task.title}</div>
                <div class="task-sport">${sportDisplay}</div>
            </div>
            <div class="task-description">${task.description || lang.descriptionPlaceholder}</div>
            <div class="task-footer">
                <div>
                    <div><i class="fas fa-calendar-plus"></i> ${lang.addedLabel} ${createdAt}</div>
                    <div><i class="fas fa-calendar-day"></i> ${lang.dueLabel} ${dueDate}</div>
                </div>
                <div class="task-actions">
                    <button class="task-btn edit-btn" onclick="editTask(${task.id})">
                        <i class="fas fa-edit"></i> ${lang.editBtn}
                    </button>
                    <button class="task-btn complete-btn" onclick="toggleComplete(${task.id})">
                        <i class="fas fa-${task.completed ? 'undo' : 'check'}"></i>
                        ${task.completed ? lang.reopenBtn : lang.completeBtn}
                    </button>
                    <button class="task-btn delete-btn" onclick="deleteTask(${task.id})">
                        <i class="fas fa-trash"></i> ${lang.deleteBtn}
                    </button>
                </div>
            </div>
        `;

        taskContainer.appendChild(taskElement);
    });
}

// Initialize the app when DOM is loaded
// DOMが読み込まれたらアプリを初期化
// DOM लोड भएपछि अनुप्रयोग सुरु गर्नुहोस्
document.addEventListener('DOMContentLoaded', init);

// Make functions available globally for onclick attributes
// onclick属性で使用するために関数をグローバルに公開
// onclick विशेषताहरूमा प्रयोग गर्नका लागि प्रकार्यहरू सार्वजनिक गर्नुहोस्
window.toggleComplete = toggleComplete;
window.deleteTask = deleteTask;
window.editTask = editTask;