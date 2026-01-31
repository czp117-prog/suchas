// DOM 元素
const toolsGrid = document.getElementById('toolsGrid');
const searchInput = document.getElementById('searchInput');
const searchBtn = document.getElementById('searchBtn');
const categories = document.getElementById('categories');
const noResult = document.getElementById('noResult');

// 当前选中的分类
let currentCategory = 'all';
let searchKeyword = '';

// 初始化
function init() {
    renderTools(toolsData);
    bindEvents();
}

// 绑定事件
function bindEvents() {
    // 分类按钮点击
    categories.addEventListener('click', (e) => {
        if (e.target.classList.contains('category-btn')) {
            // 更新选中状态
            document.querySelectorAll('.category-btn').forEach(btn => {
                btn.classList.remove('active');
            });
            e.target.classList.add('active');

            // 更新分类并重新渲染
            currentCategory = e.target.dataset.category;
            filterAndRenderTools();
        }
    });

    // 搜索按钮点击
    searchBtn.addEventListener('click', () => {
        searchKeyword = searchInput.value.trim().toLowerCase();
        filterAndRenderTools();
    });

    // 搜索框回车
    searchInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            searchKeyword = searchInput.value.trim().toLowerCase();
            filterAndRenderTools();
        }
    });

    // 实时搜索（防抖）
    let debounceTimer;
    searchInput.addEventListener('input', () => {
        clearTimeout(debounceTimer);
        debounceTimer = setTimeout(() => {
            searchKeyword = searchInput.value.trim().toLowerCase();
            filterAndRenderTools();
        }, 300);
    });
}

// 过滤并渲染工具
function filterAndRenderTools() {
    const filteredTools = toolsData.filter(tool => {
        // 分类过滤
        if (currentCategory !== 'all' && tool.category !== currentCategory) {
            return false;
        }

        // 搜索过滤
        if (searchKeyword) {
            const searchStr = `${tool.name} ${tool.description} ${tool.tags.join(' ')} ${tool.categoryName}`.toLowerCase();
            if (!searchStr.includes(searchKeyword)) {
                return false;
            }
        }

        return true;
    });

    renderTools(filteredTools);
}

// 渲染工具卡片
function renderTools(tools) {
    if (tools.length === 0) {
        toolsGrid.innerHTML = '';
        noResult.style.display = 'block';
        return;
    }

    noResult.style.display = 'none';
    toolsGrid.innerHTML = tools.map(tool => createToolCard(tool)).join('');
}

// 创建工具卡片 HTML
function createToolCard(tool) {
    return `
        <div class="tool-card" onclick="window.open('${tool.url}', '_blank')">
            <div class="tool-header">
                <div class="tool-icon ${tool.category}">${tool.icon}</div>
                <div class="tool-info">
                    <h3>${tool.name}</h3>
                    <span class="category-tag">${tool.categoryName}</span>
                </div>
            </div>
            <p class="tool-description">${tool.description}</p>
            <div class="tool-tags">
                ${tool.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
            </div>
            <div class="tool-price">
                <span class="price">${tool.price}</span>
                <button class="visit-btn">访问 →</button>
            </div>
        </div>
    `;
}

// 页面加载完成后初始化
document.addEventListener('DOMContentLoaded', init);
