# EQUALITY OF THREE VALUES
def equal(a,b,c):
    if a==b and b==c :
        return 3
    elif a==b or b==c or a==c :
        return 2
    else :
        return 0

print(equal(3,2,3))