// 上帝保佑,永无bug
export default class Unix {

    unixToTime (unix) {
        let date = new Date(unix);
        let month = ( date.getMonth() + 1 ) .toString();
        let day = date.getDate().toString();
        let hour = date.getHours().toString();
        let minutes = date.getMinutes().toString();
        let seconds = date.getSeconds().toString();
        return date.getFullYear() + '-' + ( month.length === 2 ? month : '0' + month  ) + '-' + (day.length === 2 ? day : '0' + day) + ' '
            + (hour.length === 2 ? hour : '0' + hour) + ':' + (minutes.length === 2 ? minutes : '0' + minutes) + ':' + (seconds.length === 2 ? seconds : '0' + seconds);
    }

    unixToDate (unix) {
        let date = new Date(unix);
        let month = ( date.getMonth() + 1 ) .toString();
        let day = date.getDate().toString();
        let hour = date.getHours().toString();
        let minutes = date.getMinutes().toString();
        let seconds = date.getSeconds().toString();
        return date.getFullYear() + '-' + ( month.length === 2 ? month : '0' + month  ) + '-' + (day.length === 2 ? day : '0' + day);
    }

    unixToMonths (unix) {
        let date = new Date(unix);
        let month = ( date.getMonth() + 1 ) .toString();
        return date.getFullYear() + '-' + ( month.length === 2 ? month : '0' + month  );
    }
}