use sakila;

-- question1:
select customer.first_name, customer.last_name, customer.email, address.address
from sakila.address
join customer on customer.address_id = address.address_id
where address.city_id = 312;

-- question2:
select film.title , film.description , film.rating , film.special_features , film.release_year , category.name
from film 
join film_category on film.film_id = film_category.film_id
join category on category.category_id = film_category.category_id
where category.name = "comedy";

-- question3:
select  actor.first_name , actor.actor_id, film.title , film.description , film.release_year 
from  film 
join film_actor on film.film_id = film_actor.film_id
join actor on actor.actor_id = film_actor.actor_id
where  actor.actor_id="5";

-- question4:
select customer.first_name, customer.last_name, customer.email, address.address
 from sakila.address
join customer on customer.address_id = address.address_id
-- join store on customer.store_id = store_id
where customer.store_id = 1;

-- question5:
select film.title , film.description ,film.release_year, film.rating , film.special_features  like "behind the scenes" 
from film;

-- question6:
select film.title, film.film_id   ,actor.actor_id , actor.first_name 
from film
join film_actor on film.film_id = film_actor.film_id
join actor on actor.actor_id = film_actor.actor_id
where   film.film_id = 369;

-- question7:
 select film.film_id,film.title, film.description ,film.release_year, film.rating , film.special_features,film.rental_rate ,category.name
 from film
 join film_category on film.film_id = film_category.film_id
join category on category.category_id = film_category.category_id
where category.name = "comedy" and rental_rate = 2.99;

-- question8:
 select film.film_id,film.title, film.description ,film.release_year, film.rating , film.special_features,category.name, actor.first_name,actor.last_name
 from film
 join film_category on film.film_id = film_category.film_id
join category on category.category_id = film_category.category_id
join film_actor on film.film_id = film_actor.film_id
join actor on actor.actor_id = film_actor.actor_id
where actor.first_name = "sandra" and actor.last_name = "KILMER";