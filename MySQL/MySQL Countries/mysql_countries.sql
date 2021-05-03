use world;
-- question1:
select countries.name, languages.language
from countries 
join languages on countries.id = languages.country_id
where languages.language= "slovene";

-- question2:
select countries.name, count(cities.country_id) as cities_total from countries
join cities on countries.id = cities.country_id
group by cities.country_id;

-- question3:
select cities.name , cities.population
from cities 
join countries on countries.id = cities.country_id 
where countries.name = "mexico" and cities.population > "500000"
order by cities.population DESC;

-- question4:
select languages.language, languages.percentage
from languages
join countries on countries.id = languages.country_id
where population > "89%"
order by languages.percentage DESC;

-- question5:
select countries.name, countries.surface_area, countries.population
from countries
where surface_area < "501" and population >  "100000";

-- question6:
select countries.name, countries.government_form ,countries.capital, countries.life_expectancy
from countries
where government_form = "Constitutional Monarchy" and capital > "200" and life_expectancy > "75";

-- question7:

select countries.name , cities.name, cities.district, cities.population
from cities
join countries on countries.id = cities.country_id
where countries.name = "Argentina" and district="Buenos Aires" and cities.population > "500000";

-- question 8:
select countries.region, count(countries.name) as total
from countries
group by countries.region
order by countries.region DESC;