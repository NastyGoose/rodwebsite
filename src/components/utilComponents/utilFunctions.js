export function preventDefault (e) {
    e = e || window.event;
    if (e.preventDefault) { e.preventDefault(); }
    e.returnValue = false;
}

export default class Time extends Date {
    constructor() {
        super();
    }

  static  whatTimeIsItNow = () => {
    const time = new Date().getHours();
    if (time >= 0 && time <= 5) return ('Доброй ночи,');
    if (time >= 6 && time <= 11) return ('Доброе утро,');
    if (time >= 12 && time <= 16) return ('Добрый день,');
    if (time >= 17 && time <= 23) return ('Доброй вечер,');
    };

  static  whatDayIsItToday = () => {
    let today = new Date().getDay();
       switch (today) {
            case 1:
                return ('понедельник');
            case 2:
                return ('вторник');
            case 3:
                return ('среда');
            case 4:
                return ('четверг');
            case 5:
                return ('пятница');
            case 6:
                return ('суббота');
            case 0:
                return ('воскресенье');
        }
    };

}