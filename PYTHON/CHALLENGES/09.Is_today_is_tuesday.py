# IS TODAY IS TUESDAY?
import time
local = time.localtime()
current_day = local.tm_wday

def is_current_day(day):
    if current_day == day :
        return "TRUE"
    else :
        return "FALSE"

print(is_current_day(3))










