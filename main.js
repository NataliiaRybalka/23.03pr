/* Реализуйте класс Student (Студент), который будет наследовать от класса User . Этот класс должен иметь следующие свойства: name (имя, наследуется от User), surname (фамилия, наследуется от User), year (год поступления в вуз). Класс должен иметь метод getFullName() (наследуется от User), с помощью которого можно вывести одновременно имя и фамилию студента. Также класс должен иметь метод, который будет изменять имя и фамилию студента. */
class User {
    constructor (name, surname) {
        this.name = name;
        this.surname = surname;
    }
    getFullName() {
        console.log(this.name + ' ' + this.surname);
    }
}

class Student extends User {
    constructor (name, surname, year) {
        super (name, surname);
        this.year = year;
    }
    changeNameAndSurname(newName, newSurname) {
        this.name = newName;
        this.surname = newSurname;
        console.log(this.name + ' ' + this.surname);
    }
}
let max = new Student ('Max', 'Gray', 2020);
max.getFullName();
max.changeNameAndSurname('Oleg', 'Black');