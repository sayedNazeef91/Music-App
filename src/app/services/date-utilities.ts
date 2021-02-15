import { Constants } from './helpers/constants';
import * as moment from 'moment';

import { Injectable } from '@angular/core';

@Injectable()
export class DateUtilityService {

    constructor() {

    }

    convertFromTimeInterval(unit, value) {

        if (unit == Constants.intervalformats.minutes) {

            return Math.trunc(moment.duration(value).asMinutes());
        } else if (unit == Constants.intervalformats.hours) {

            return Math.trunc(moment.duration(value).asHours());
        } else if (unit == Constants.intervalformats.days) {

            return Math.trunc(moment.duration(value).asDays());
        } else if (unit == Constants.intervalformats.weeks) {

            return Math.trunc(moment.duration(value).asWeeks());
        } else if (unit == Constants.intervalformats.months) {

            return Math.trunc(moment.duration(value).asMonths());
        } else {

            return '';
        }

    }

    convertToTimeInterval(unit, value) {

        if (unit == Constants.intervalformats.minutes) {

            return Math.trunc(moment.duration(value, 'minutes').asMilliseconds());
        } else if (unit == Constants.intervalformats.hours) {

            return Math.trunc(moment.duration(value, 'hours').asMilliseconds());
        } else if (unit == Constants.intervalformats.days) {

            return Math.trunc(moment.duration(value, 'days').asMilliseconds());
        } else if (unit == Constants.intervalformats.weeks) {

            return Math.trunc(moment.duration(value, 'weeks').asMilliseconds());
        } else if (unit == Constants.intervalformats.months) {

            return Math.trunc(moment.duration(value, 'months').asMilliseconds());
        } else {

            return '';
        }
    }

    formatDate(dateVal: number, format: string = 'MMM DD YYYY') {

        if (dateVal) {

            return moment(dateVal).format(format);
        } else {

            return '';
        }
    }

    convertTimeInterval(timeToFormat) {

        timeToFormat = timeToFormat || '';
        if (timeToFormat !== '') {

            let timeInterval = "just now";

            const currentTime = new Date();
            const currentTimeMs = currentTime.getTime();

            const timeIntervalElapsed = (currentTimeMs - timeToFormat);

            let timeUnit = "ago";
            if (timeIntervalElapsed < 0) {

                timeUnit = "";
            }

            if (timeIntervalElapsed !== 0) {

                let period = "ms";

                let timeIntervalDifference: number = Math.abs(timeIntervalElapsed);
                if (timeIntervalDifference > 1000 && period === "ms") {

                    period = "seconds";
                    timeIntervalDifference = timeIntervalDifference / 1000;
                }

                if (timeIntervalDifference > 60 && period === "seconds") {

                    period = "minutes";
                    timeIntervalDifference = timeIntervalDifference / 60;
                }

                if (timeIntervalDifference > 60 && period === "minutes") {

                    period = "hours";
                    timeIntervalDifference = timeIntervalDifference / 60;
                }

                let days = 0.0;
                if (timeIntervalDifference > 24 && period === "hours") {

                    period = "days";
                    timeIntervalDifference = timeIntervalDifference / 24;
                    days = timeIntervalDifference;
                }

                if (days > 7 && period === "days") {

                    period = "weeks";
                    timeIntervalDifference = days / 7;
                }

                if (days > 30 && period === "weeks") {

                    period = "months";
                    timeIntervalDifference = days / 30;
                }

                if (days > 365 && period === "months") {

                    period = "years";
                    timeIntervalDifference = days / 365;
                }

                if (timeIntervalDifference > 10 && period === "years") {

                    period = "decades";
                    timeIntervalDifference = timeIntervalDifference / 10;
                }

                if (timeIntervalDifference > 10 && period === "decades") {

                    period = "ages";
                    timeIntervalDifference = timeIntervalDifference / 10;
                }

                if (timeIntervalDifference < 1) {

                    timeIntervalDifference = 1;
                }

                const timeIntervalInPeriod = Math.floor(Number((timeIntervalDifference).toFixed(0)));

                if (timeIntervalInPeriod === 1 && period !== "ms" && period !== "ages") {

                    period = period.substring(0, period.length - 1);
                }

                if (period === "ms") {

                    timeInterval = "just now";
                } else {

                    if (period !== "ages") {

                        timeInterval = timeIntervalInPeriod + " " + period + " " + timeUnit;
                    } else {

                        timeInterval = period + " " + timeUnit;
                    }
                }
            }

            return timeInterval;
        } else {

            return '';
        }

    }

    getDateByString(dateString) {

        dateString = dateString || '';
        let dates = dateString.trim().toLowerCase().split(' ').filter((val) => (val));
        let addOp = !((dates[0] || '') === 'last');
        let count = parseFloat(dates[1]);
        let entity = (dates[2] || '');

        if (addOp) {

            return new Date(moment().add(count, entity).format('ddd MMM DD YYYY')).getTime();
        } else {

            return new Date(moment().subtract(count, entity).format('ddd MMM DD YYYY')).getTime();
        }
    }
}

