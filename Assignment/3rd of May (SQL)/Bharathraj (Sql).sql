-- Q1 
CREATE SCHEMA `students_assg01` ;

create table students_assg01.student_details(`id` int primary key auto_increment,`first_name` varchar(15) not null,`last_name` varchar(15) not null,`phno` varchar(14) not null,`email` varchar(40) not null unique,`R_Number` varchar(7) Not null unique,`age` int not null,`password` varchar(40) not null,`otp` varchar(6) not null);
insert into students_assg01.student_details(first_name,last_name,phno,email,R_Number,age,password) values('Bharath','Raj','+91 9876543210','bharathraj@gmail.com','Rhi001',24,'Bharath@1');
insert into students_assg01.student_details(first_name,last_name,phno,email,R_Number,age,password) values('Bhuvan','Venkatesh','+91 9899543210','bhuvan@gmail.com','Rhi002',24,'Bharath@1');
insert into students_assg01.student_details(first_name,last_name,phno,email,R_Number,age,password) values('Leonel','Messi','+91 8876543210','messithegoat@gmail.com','Rhi003',36,'Bharath@1');
insert into students_assg01.student_details(first_name,last_name,phno,email,R_Number,age,password) values('Neymer','Jr','+91 9876543211','neymer.jr@gmail.com','Rhi004',32,'Bharath@1');
insert into students_assg01.student_details(first_name,last_name,phno,email,R_Number,age,password) values('Sergio','Ramos','+91 7876543210','sergioa@gmail.com','Rhi005',34,'Bharath@1');
insert into students_assg01.student_details(first_name,last_name,phno,email,R_Number,age,password) values('Xavi','Hernandez','+91 9876093210','xavi@gmail.com','Rhi006',30,'Bharath@1');
insert into students_assg01.student_details(first_name,last_name,phno,email,R_Number,age,password) values('Mahendra Singh','Dhoni','+91 7777777777','msdthegoat@gmail.com','Rhi007',42,'Bharath@1');
insert into students_assg01.student_details(first_name,last_name,phno,email,R_Number,age,password) values('Faf','Duplesis','+91 9809543210','faf@gmail.com','Rhi008',34,'Bharath@1');
insert into students_assg01.student_details(first_name,last_name,phno,email,R_Number,age,password) values('Ajinkya','Rahane','+91 9808543210','rahane@gmail.com','Rhi009',32,'Bharath@1');
insert into students_assg01.student_details(first_name,last_name,phno,email,R_Number,age,password) values('Rahul','Dravid','+91 9876547710','thewall@gmail.com','Rhi010',45,'Bharath@1');


create table students_assg01.student_marks(`id` int primary key auto_increment,`R_Number` varchar(7) Not null,`maths_marks` varchar(5),`science_marks` varchar(5),`social_marks` varchar(5),foreign key(R_Number) references student_details(R_Number));
insert into students_assg01.student_marks(R_Number,maths_marks,science_marks,social_marks)values('Rhi001',35.0,35.0,35.0);
insert into students_assg01.student_marks(R_Number,maths_marks,science_marks,social_marks)values('Rhi002',95.0,77.0,88.0);
insert into students_assg01.student_marks(R_Number,maths_marks,science_marks,social_marks)values('Rhi003',78.0,88.0,35.0);
insert into students_assg01.student_marks(R_Number,maths_marks,science_marks,social_marks)values('Rhi004',82.0,72.50,57.0);
insert into students_assg01.student_marks(R_Number,maths_marks,science_marks,social_marks)values('Rhi005',89.0,98.0,86.0);
insert into students_assg01.student_marks(R_Number,maths_marks,science_marks,social_marks)values('Rhi006',91.0,37.0,35.0);
insert into students_assg01.student_marks(R_Number,maths_marks,science_marks,social_marks)values('Rhi007',99.0,99.0,99.0);
insert into students_assg01.student_marks(R_Number,maths_marks,science_marks,social_marks)values('Rhi008',84.0,64.0,83.0);
insert into students_assg01.student_marks(R_Number,maths_marks,science_marks,social_marks)values('Rhi009',87.0,57.0,65.0);
insert into students_assg01.student_marks(R_Number,maths_marks,science_marks,social_marks)values('Rhi010',95.0,98.0,54.0);
insert into students_assg01.student_marks(R_Number,maths_marks)values('Rhi001',55.0);
insert into students_assg01.student_marks(R_Number,science_marks,social_marks)values('Rhi002',65.0,75.0);
insert into students_assg01.student_marks(R_Number,maths_marks,social_marks)values('Rhi004',35.0,35.0);
insert into students_assg01.student_marks(R_Number,science_marks)values('Rhi009',85.0);
insert into students_assg01.student_marks(R_Number,social_marks)values('Rhi006',78.0);

-- Q2
select * from students_assg01.student_details
where age>=24 and age<=35;

-- Q3
select * from students_assg01.student_details
where length(first_name)+length(last_name)=4;

-- Q4 using subquery 
select * from students_assg01.student_details
where R_Number in (select R_Number from students_assg01.student_marks
where maths_marks = (select max(maths_marks) from students_assg01.student_marks));

-- Q4 using joins
select s.* from students_assg01.student_details s INNER JOIN students_assg01.student_marks m
on m.R_Number=s.R_Number and m.maths_marks = (select max(maths_marks) from students_assg01.student_marks);