import { faker } from '@faker-js/faker';

export class bookingData{
 firstname = faker.person.firstName();
 lastname = faker.person.lastName();
 totalprice = faker.commerce.price();
 depositpaid: boolean;
 bookingdates: boolean;
 checkin = faker.date;
 checkout = faker.date;
 additionalneeds: string;
}



