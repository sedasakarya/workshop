# STRICTLY DECREASING OR INCREASING
def check(a,b,c):
    if a > b and b > c :
        return "Decreasing"
    elif a < b and b < c :
        return "Increasing"
    else :
        return "Neither"

print(check(36,36,12))