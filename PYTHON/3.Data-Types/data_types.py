""" DATA-TYPES 
----------------------------------------------------------------- """
# Everything is lower case or with underscores like in PHP.
num = 3
NUM = 5 # This is for const!

# NUMBERS
#===================================================================

# Integers
num_int = 5
#print( type(num_int) ) # The Result is <class 'int'> because everything is an OBJECT in Python !!!

# Floats
num_float = 5.35
#print( type(num_float) )

# Type Conversion
str_name = "Marcel"
#print(type(str))
str_int = int("5") # We convert string into integers.
# print(type(str_int))
str_float = float("3.25")
# print(type(str_float))
int_str = str(3)
#print(type(int_str))


# STRINGS
#===================================================================

# One line strings
str_one_line = "Marcel is the new kid in town"

# Multi line string
str_multi_lines = """ 
One
Two
Three
"""
# \n means break lines.
# print(str_multi_lines)

# STRINGS METHODS 
#----------------------------------------------------

# Length of a string
s = "python"
ss = "i have two cats YEAH!"

# print( len(s) ) # len is a function here. It gives us the length.

# print( s.capitalize() ) # Capitalize is a method and s is an object.
# print( s.upper() ) # If you don't put parenthesis after the method, it is like a variable. BEWARE !!! It looks red.
# print( ss.lower() )
# print ( ss.title() ) # Each word will be capitalized.

# REPLACE PARTS OF THE STRING
#---------------------------------------
#ss = ss.replace("cats", "dogs") # We change the variable here but below we just made an overview not change it.
# print( ss.replace("cats", "dogs") ) # It replaces cats with dogs.
# print(ss)

# SPLIT A STRING
#----------------------------------------------
# print( ss.split() ) # It uses the original string. 
# print( ss.split('a') ) # It removes all the a's but not uppercase ones.
# print( ss.split('a', 1) ) # Only one a it removes.

# CONCATENATION
#----------------------------------------------------
# In python you can concatenate only strings 
concat = str(3) + "3" # Python doesn't allow you to mix the datas like in JS.
#print(concat)

name = "Marcel"
age = 27
#phrase = name + " is 27 years old" # It works
#phrase = name + " is " + age + " years old"
#phrase = name + " is " + str(age) + " years old" # It works
# phrase = f"{name} is {age} years old" # This is the BEST WAY !!! F is format.
#phrase = "{} is {} years old. {}?".format(name, age, age) # It works too.
#print(phrase)

#JS = `"${name of the variable} other strings ${variable}"` IT IS JS!


# BOOLEANS & NULLS
#============================================
b_true  = True # Capitalize in Python.
b_false = False
b_null  = None


# COLLECTIONS/SEQUENCES (PYTHON ARRAYS)
#============================================

# LISTS (MUTABLE)
l = [1,2,3,4]
# print( l[2] )

# DICTIONARY (MUTABLE)
d = {
  "first_name": "Marcel",
  "last_name" : "Duchamp",
  "age"       : 27
}
d["first_name"] = "Bob" # How we change the value. These are mutable values.
# print(d["first_name"]) # Everything is like an ARRAY here.
# We don't have index base print here. Key-based collection

# TUPLES (IMMUTABLE LIKE CONST)
t = ("january", "february", "mars")
# print(t[1])

# SET 
# Sets are not index-based !!!
s1 = {"apple", "car", 56} # The order of the list changes everytime we print it.
s2 = {1,8,9,2,48,48,0,99,1} # Numbers are always in the same order. They don't change. We cant duplicate the same numbers here. It writes just once.
# print(s1) 
# print(s2)