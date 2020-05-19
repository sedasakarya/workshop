# CALCULATE THE PROFITS
profit = {
    "cost_price": 32.67,
    "sell_price": 45.00,
    "inventory" : 1200
}

def total_profit(profit):
    return ( (profit["sell_price"] * profit["inventory"]) - profit["cost_price"])
print(total_profit(profit))
