""" BUILD-IN FUNTIONS
==================================================== """
# Native functions like print...
#print("whatever")
#print("whatever", "and", "ever")

age = 12
#print("age is:", age)
#print("list\n", [1,2,3])
#print("list", [1,2,3], sep=":", end=".") # Sep adds a seperation sign. End adds a sign at the end.

# MAX, MIN AND ROUND
#------------------------------------

# MAX ¬ MIN
l = [3,6,78,12]
# print("max value is:", max (l))
# print("min value is:", min (l))

# ROUND
num = 3.2351 # When there is a number more than 5 like 51, it rounds up.
# print("rounded number:", round(num, 2)) # If you write num, 2 . It tells us how many decimal it will show.


# INPUT
#------------------------------------
# input_val = input("Please enter your birth year: ")
# calc_age = 2020 - int(input_val)
# print("Your age is:", calc_age)


""" CUSTOM FUNTIONS
==================================================== """
# We use colons instead of curly braces in Python.
# Indentations are VERY IMPORTANT ! If you don't use them, you will get an error.
# We can change spaces with spaces button in the bottom just for this workspace.
# In Python you have to put something inside the function, otherwise you will get an error.

# def calc (x, y = 0) : 
#     return x + y 
# print( calc(2) ) 
# The result will be 2. y is already defined above as 0. 

def calc (x, y) : 
    return x + y 
print( calc(2,8) ) 


""" IMPORTING
==================================================== """
import time
# print( dir(time) ) # We see every method inside time.

local = time.localtime()
current_year = local.tm_year # We declared in global scope and we can use it inside a function in Python.

# CHALLENGE 
def calc_age2(current_year,birth_year):
    return current_year - birth_year
print(calc_age2(current_year, 1992))

# CHALLENGE 2
def calc_age3():
    input_birth_year = input("Birth year, please: ")
    return current_year - int(input_birth_year)

print(calc_age3())

