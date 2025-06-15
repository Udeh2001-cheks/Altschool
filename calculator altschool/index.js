const display = document.getElementById('display');
const buttons = document.querySelectorAll('.btn');
const toggleBtn = document.getElementById('toggle-history');
const historyPanel = document.getElementById('history');
const historyContent = document.getElementById('history-content');

let expression = '';

function updateDisplay() {
  display.value = expression;
}

function addToHistory(exp, result) {
  const entry = document.createElement('div');
  entry.classList.add('history-entry');
  entry.textContent = ` ${exp} = ${result};`
  historyContent.prepend(entry);
}

buttons.forEach(button => {
  button.addEventListener('click', () => {
    const value = button.getAttribute('data-value');

    if (value === 'C') {
      expression = '';
      historyContent.innerHTML = ''; // ✅ clear history
    } else if (value === '×') {
      expression = expression.slice(0, -1); // ✅ backspace
    } else if (value === '=') {
      try {
        const sanitized = expression.replace(/÷/g, '/').replace(/×/g, '*').replace(/−/g, '-');
        const result = eval(sanitized);
        addToHistory(expression, result);
        expression = result.toString();
      } catch {
        expression = 'Error';
      }
    } else {
      expression += value;
    }

    updateDisplay();
  });
});

toggleBtn.addEventListener('click', () => {
  const isVisible = historyPanel.style.display === 'block';
  historyPanel.style.display = isVisible ? 'none' : 'block';
  toggleBtn.textContent = isVisible ? '↓' : '↑';
});