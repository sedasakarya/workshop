# IS THE WORD IS SINGULAR OR PLURAL?
def is_plural(word):
    if( word.endswith("s")):
        return "Plural"
    else :
        return "Singular"
print(is_plural("oranges"))
