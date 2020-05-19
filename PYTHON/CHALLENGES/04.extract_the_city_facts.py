# EXTRACT THE CITY FACTS
city = {
    "name": "Istanbul",
    "population": 8000000000,
    "continent": "Europe"
}

def cityFacts(city):
     return f"{city['name']} has a population of {city['population']} and is situated in {city['continent']}"
print(cityFacts(city))

