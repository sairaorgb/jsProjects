document.addEventListener("DOMContentLoaded", () => {
  let expenses = [];

  const expenseForm = document.getElementById("expense-form");
  const expenseName = document.getElementById("expense-name");
  const expenseAmount = document.getElementById("expense-amount");
  const expenseList = document.getElementById("expense-list");
  const totalAmount = document.getElementById("total-amount");

  expenseForm.addEventListener("submit", () => {
    event.preventDefault();
    const expensename = expenseName.value.trim();
    if (expensename === "") return;
    const expenseamount = expenseAmount.value.trim();
    if (expenseamount === "") return;
    const expenseObj = {
      name: expensename,
      amount: expenseamount,
      id: Date.now(),
    };
    expenses.push(expenseObj);
    expenseAmount.textContent = "";
    expenseName.textContent = "";
    displayExpenses();
  });

  function displayExpenses() {
    expenseList.textContent = "";
    expenses.forEach((expense) => {
      const li = document.createElement("li");
      li.innerHTML = `<span>${expense.name} - $${expense.amount}</span><button data-id=${expense.id}>delete</button>`;
      li.addEventListener("click", (e) => {
        if (e.target.tagName === "BUTTON") {
          expenses = expenses.filter((exp) => exp.id !== expense.id);
          displayExpenses();
          totalExpense();
        }
      });
      expenseList.appendChild(li);
    });
    totalExpense();
  }

  function totalExpense() {
    let totalamount = 0;
    expenses.forEach((expense) => {
      totalamount += parseInt(expense.amount);
    });
    totalAmount.textContent = `${totalamount}`;
  }
});
