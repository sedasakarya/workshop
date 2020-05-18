""" BUILD-IN FUNTIONS
==================================================== """
# Native functions like print...
#print("whatever")
# print("whatever", "and", "ever")

age = 12
# print("age is:", age)
#print("list\n", [1,2,3])
#print("list", [1,2,3], sep=":", end=".") # Sep adds a seperation sign. End adds a sign at the end.

# MAX, MIN AND ROUND
#------------------------------------

# MAX ¬ MIN
l = [3,6,78,12]
print("max value is:", max (l))
print("min value is:", min (l))

# ROUND
num = 3.2351 # When there is a number more than 5 like 51, it rounds up.
print("rounded number:", round(num, 2)) # If you write num, 2 . It tells us how many decimal it will show.


# INPUT
#------------------------------------
input_val = input("Please enter your birth year: ")
calc_age = 2020 - int(input_val)
print("Your age is:", calc_age)


""" CUSTOM FUNTIONS
==================================================== """