function calculateBudget() {
    const income = document.getElementById("income").value;
    const needs = income * 0.50;
    const wants = income * 0.20;
    const savingsDebt = income * 0.20;
    const tithing = income * 0.10;

    document.getElementById("needsAmount").innerText = "$" + needs.toFixed(2);
    document.getElementById("wantsAmount").innerText = "$" + wants.toFixed(2);
    document.getElementById("savingsDebtAmount").innerText = "$" + savingsDebt.toFixed(2);
    document.getElementById("tithingAmount").innerText = "$" + tithing.toFixed(2);

    document.getElementById("budgetResult").style.display = "block";
}
