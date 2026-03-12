// Create a JSON object named Home Expenses in which you have to
// add monthly expenses of transport , food bill and names of different
// family members including mother,father,brother and sister.Print the
// expenses of father with his name.
const HomeExpenses = {
  "Transport": 5000,
  "FoodBill": 10000,
  "FamilyMembers": {
    "Mother": "Sita",
    "Father": "Ram",
    "Brother": "Laxman",
    "Sister": "Saraswati"
  },
  "Expenses": {
    "Ram": 3000,
    "Sita": 2000,
    "Laxman": 1500,
    "Saraswati": 2500
  }
}

var fatherName = HomeExpenses.FamilyMembers.Father;
var fatherExpense = HomeExpenses.Expenses.Ram;

console.log(fatherName + "'s expenses are: " + fatherExpense);