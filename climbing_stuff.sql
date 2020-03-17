CREATE DATABASE Climbing;


CREATE TABLE route (
    id serial PRIMARY KEY,
    mountain_id int,
    climber_id int,
    name text,
    pitches int,
    FOREIGN KEY (mountain_id) REFERENCES mountain (id),
    FOREIGN KEY (climber_id) REFERENCES climber (id)
 
);

CREATE TABLE mountain (
    id serial PRIMARY KEY,
    name text,
    distance int,
    location text

);

CREATE TABLE climber (
    id serial PRIMARY KEY,
    name text,
    email varchar, 
    password varchar
    
);

CREATE TABLE review (
    id serial PRIMARY KEY,
    review_title text,
    review_text varchar,
    reviewer_name text, 
    mountain_id int REFERENCES mountain(id),
    climber_id int REFERENCES climber(id)
);

INSERT INTO route (climber_id, mountain_id, name, pitches)
    VALUES (1, 1, 'The Crag Route', 32), (2, 2, 'Obra Dinn', 20), (3, 3, 'Hollow Knight', 27)

INSERT INTO mountain (name, distance, location)
    VALUES ('Super Ridiculous Mountain', 2550, 'Tuscaloosa, Alabama'), ('Cavernous Peak', 1765, 'Aspen, Colorado'), ('Mount Crunchy', 4321, 'Little Rock, Arkansas');

INSERT INTO climber (name, email, password) 
    VALUES ('Don', 'don@thejuan.com', null), ('Jerry', 'larry@yahoo.com', null), ('Jimmy', 'jimmy@gmail.com', null)
