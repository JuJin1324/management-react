use management;

create table customer(
    id int primary key auto_increment,
    image varchar(1024),
    name varchar(64),
    birthday varchar(64),
    gender varchar(64),
    job varchar(64)
) default character set UTF8 collate utf8_general_ci;

insert into customer values(1, 'https://placeimg.com/64/64/1', '유주진','9201122','남자','대딩');
insert into customer values(2, 'https://placeimg.com/64/64/2', '유주순', '880922', '여자', '직장인');
insert into customer values(3,'https://placeimg.com/64/64/3','김동역','9800430','남자','초딩');
insert into customer values(4,'https://placeimg.com/64/64/3','동호식','8800430','남자','애늙은이');

alter table customer add createdDate DATETIME;
alter table customer add isDeleted INT;

update customer set customer.createdDate = now();
update customer set customer.isDeleted = 0;