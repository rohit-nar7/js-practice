let menu = [
    {
        'category': 'Beverages',
        'name': 'Coke',
        'price': 1.5
    },
    {
        'category': 'Starters',
        'name': 'Garlic Bread',
        'price': 2.8
    },
    {
        'category': 'Starters',
        'name': 'Mozzarella Sticks',
        'price': 5.5
    },
    {
        'category': 'Main Meal',
        'name': 'Medium Size Margherita Pizza',
        'price': 11
    },
    {
        'category': 'Beverages',
        'name': 'Iced Tea',
        'price': 1.25
    },
    {
        'category': 'Starters',
        'name': 'Greek Wedge Salad',
        'price': 4.5
    },
    {
        'category': 'Main Meal',
        'name': 'Veg Family Meal',
        'price': 13.25
    },
    {
        'category': 'Main Meal',
        'name': 'Large Size Vegan Pepperoni Pizza',
        'price': 14.5
    },
]
const order = {
    'items': [
        {
            'name': 'Mozzarella Sticks',
            'price': 5.5,
            'quantity': 2
        },
        {
            'name': 'Garlic Bread',
            'price': 2.8,
            'quantity': 2
        },
        {
            'name': 'Coke',
            'price': 1.5,
            'quantity': 3
        },
        {
            'name': 'Medium Size Margherita Pizza',
            'price': 11,
            'quantity': 2
        },
        {
            'name': 'Iced Tea',
            'price': 1.25,
            'quantity': 1
        },
        {
            'name': 'Veg Family Meal',
            'price': 13.25,
            'quantity': 2
        },
    ]
};

//Write function to filter menu items by Category and sort them alphabetically
function listByCategory(menu, categoryName) {
    if(categoryName == "Beverages") {
        let pizza = menu.filter(items => items.category.includes(categoryName));
        console.log(pizza);
        }

    if(categoryName == "Starters") {
        let starters  = menu.filter(items => items.category.includes(categoryName));
        console.log(starters);
        }

        if(categoryName == "Main Meal") {
            let mainMeal = menu.filter(items => items.category.includes(categoryName));
            console.log(mainMeal);
            }
}
    

listByCategory(menu, "Beverages");
listByCategory(menu, "Starters");
listByCategory(menu, "Main Meal");



//Write function to calculate the amount of each ordered item
 function  calculateAmount(menu, order) {

    let orderAmount = order.map(items => {
       return items;
    })
    console.log(orderAmount);
 }
calculateAmount(menu, order.items);

//Write function to calculate the subtotal amount for the main meal ordered
function calculateMainMealAmount(orderAmount) {
    let mainMeal = orderAmount.filter(items =>  items.category.includes("Main Meal"))
    .reduce((acc, item) => acc + item.price, 0);
    console.log(mainMeal);

}
calculateMainMealAmount(menu);

//Write function to find the totalAmount of the order based on the calculated mainMealAmount value
function calculateTotalAmount(orderAmount) {
    var main = orderAmount.reduce((acc, item) => 
         acc + item.price*item.quantity, 0);

    return main;
}

let total = calculateTotalAmount(order.items);
console.log(total);

//Write function to calculate the final amount after discount
function discount(total) {
    if(total > 40) {
    let discount = total - 1.5
    return discount;
}
}
let finalAmount = discount(total);
console.log("final amount after disocunt: "+finalAmount);

//Write function to display the total amount 
console.log("total amount",finalAmount);

//Write function to display the final amount

//Invoke  functions 


