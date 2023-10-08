var stations = {
    'kovel': [
        {
            time: ['00:00', '05:01'],
            days: [1, 4, 7, 10, 13, 16, 19, 22, 25, 28, 31],
            class: 'kovel_night'
        },
        {
            time: ['05:00', '07:01'],
            days: [1, 4, 7, 10, 13, 16, 19, 22, 25, 28, 31],
            class: 'kovel_morning'
        },
        {
            time: ['07:00', '09:01'],
            days: [1, 4, 7, 10, 13, 16, 19, 22, 25, 28, 31],
            class: 'kovel'
        },
        {
            time: ['09:00', '14:13'],
            days: [31],
            class: 'kovel'
        },
        {
            time: ['14:12', '21:11'],
            days: [3, 6, 9, 12, 15, 18, 21, 24, 27, 30, 31],
            class: 'kovel'
        },
        {
            time: ['21:10', '23:59'],
            days: [3, 6, 9, 12, 15, 18, 21, 24, 27, 30, 31],
            class: 'kovel_night'
        }
    ],
    'rozhyshche': [
        {
            time: ['09:48', '09:51'],
            days: [1, 4, 7, 10, 13, 16, 19, 22, 25, 28],
            class: 'rozhyshche'
        },
        {
            time: ['13:27', '13:30'],
            days: [3, 6, 9, 12, 15, 18, 21, 24, 27, 30],
            class: 'rozhyshche'
        }
    ],
    'kivertsi': [
        {
            time: ['10:06', '10:29'],
            days: [1, 4, 7, 10, 13, 16, 19, 22, 25, 28],
            class: 'kivertsi'
        },
        {
            time: ['11:27', '11:32'],
            days: [1, 4, 7, 10, 13, 16, 19, 22, 25, 28],
            class: 'kivertsi'
        },
        {
            time: ['11:52', '11:55'],
            days: [3, 6, 9, 12, 15, 18, 21, 24, 27, 30],
            class: 'kivertsi'
        },
        {
            time: ['12:51', '13:14'],
            days: [3, 6, 9, 12, 15, 18, 21, 24, 27, 30],
            class: 'kivertsi'
        }
    ],
    'lutsk': [
        {
            time: ['10:43', '11:08'],
            days: [1, 4, 7, 10, 13, 16, 19, 22, 25, 28],
            class: 'lutsk'
        },
        {
            time: ['12:11', '12:35'],
            days: [3, 6, 9, 12, 15, 18, 21, 24, 27, 30],
            class: 'lutsk'
        }
    ],
    'rivne': [
        {
            time: ['12:42', '12:57'],
            days: [1, 4, 7, 10, 13, 16, 19, 22, 25, 28],
            class: 'rivne'
        },
        {
            time: ['10:51', '10:57'],
            days: [3, 6, 9, 12, 15, 18, 21, 24, 27, 30],
            class: 'rivne'
        }
    ],
    'zdolbuniv': [
        {
            time: ['13:12', '13:33'],
            days: [1, 4, 7, 10, 13, 16, 19, 22, 25, 28],
            class: 'zdolbuniv'
        },
        {
            time: ['10:16', '10:37'],
            days: [3, 6, 9, 12, 15, 18, 21, 24, 27, 30],
            class: 'zdolbuniv'
        }
    ],
    'ostroh': [
        {
            time: ['13:58', '14:01'],
            days: [1, 4, 7, 10, 13, 16, 19, 22, 25, 28],
            class: 'ostroh'
        },
        {
            time: ['09:50', '09:53'],
            days: [3, 6, 9, 12, 15, 18, 21, 24, 27, 30],
            class: 'ostroh'
        }
    ],
    'kryvyn': [
        {
            time: ['14:16', '14:19'],
            days: [1, 4, 7, 10, 13, 16, 19, 22, 25, 28],
            class: 'kryvyn'
        },
        {
            time: ['09:30', '09:33'],
            days: [3, 6, 9, 12, 15, 18, 21, 24, 27, 30],
            class: 'kryvyn'
        }
    ],
    'slavuta': [
        {
            time: ['14:31', '14:34'],
            days: [1, 4, 7, 10, 13, 16, 19, 22, 25, 28],
            class: 'slavuta'
        },
        {
            time: ['09:14', '09:17'],
            days: [3, 6, 9, 12, 15, 18, 21, 24, 27, 30],
            class: 'slavuta'
        }
    ],
    'shepetivka': [
        {
            time: ['14:54', '14:57'],
            days: [1, 4, 7, 10, 13, 16, 19, 22, 25, 28],
            class: 'shepetivka'
        },
        {
            time: ['08:50', '08:53'],
            days: [3, 6, 9, 12, 15, 18, 21, 24, 27, 30],
            class: 'shepetivka'
        }
    ],
    'polonne': [
        {
            time: ['15:27', '15:30'],
            days: [1, 4, 7, 10, 13, 16, 19, 22, 25, 28],
            class: 'polonne'
        },
        {
            time: ['08:18', '08:21'],
            days: [3, 6, 9, 12, 15, 18, 21, 24, 27, 30],
            class: 'polonne'
        }
    ],
    'pechanivka': [
        {
            time: ['15:50', '15:53'],
            days: [1, 4, 7, 10, 13, 16, 19, 22, 25, 28],
            class: 'pechanivka'
        },
        {
            time: ['07:55', '07:58'],
            days: [3, 6, 9, 12, 15, 18, 21, 24, 27, 30],
            class: 'pechanivka'
        }
    ],
    'chudniv_volynsky': [
        {
            time: ['16:14', '16:17'],
            days: [1, 4, 7, 10, 13, 16, 19, 22, 25, 28],
            class: 'chudniv_volynsky'
        },
        {
            time: ['07:31', '07:34'],
            days: [3, 6, 9, 12, 15, 18, 21, 24, 27, 30],
            class: 'chudniv_volynsky'
        }
    ],
    'berdychiv': [
        {
            time: ['16:49', '16:52'],
            days: [1, 4, 7, 10, 13, 16, 19, 22, 25, 28],
            class: 'berdychiv'
        },
        {
            time: ['06:57', '07:00'],
            days: [3, 6, 9, 12, 15, 18, 21, 24, 27, 30],
            class: 'berdychiv_morning'
        }
    ],
    'kozyatyn': [
        {
            time: ['17:18', '17:44'],
            days: [1, 4, 7, 10, 13, 16, 19, 22, 25, 28],
            class: 'kozyatyn'
        },
        {
            time: ['06:07', '06:30'],
            days: [3, 6, 9, 12, 15, 18, 21, 24, 27, 30],
            class: 'kozyatyn_morning'
        }
    ],
    'bila_tservka': [
        {
            time: ['19:24', '19:27'],
            days: [1, 4, 7, 10, 13, 16, 19, 22, 25, 28],
            class: 'bila_tservka'
        },
        {
            time: ['04:21', '04:24'],
            days: [3, 6, 9, 12, 15, 18, 21, 24, 27, 30],
            class: 'bila_tservka_night'
        }
    ],
    'myronivka': [
        {
            time: ['20:19', '20:22'],
            days: [1, 4, 7, 10, 13, 16, 19, 22, 25, 28],
            class: 'myronivka'
        },
        {
            time: ['03:26', '03:29'],
            days: [3, 6, 9, 12, 15, 18, 21, 24, 27, 30],
            class: 'myronivka_night'
        }
    ],
    'korsun': [
        {
            time: ['20:48', '20:50'],
            days: [1, 4, 7, 10, 13, 16, 19, 22, 25, 28],
            class: 'korsun'
        },
        {
            time: ['02:56', '02:59'],
            days: [3, 6, 9, 12, 15, 18, 21, 24, 27, 30],
            class: 'korsun_night'
        }
    ],
    'tsvitkove': [
        {
            time: ['21:16', '21:18'],
            days: [1, 4, 7, 10, 13, 16, 19, 22, 25, 28],
            class: 'tsvitkove'
        },
        {
            time: ['02:24', '02:27'],
            days: [3, 6, 9, 12, 15, 18, 21, 24, 27, 30],
            class: 'tsvitkove_night'
        }
    ],
    'im_tarasa_shevchenka': [
        {
            time: ['21:41', '21:57'],
            days: [1, 4, 7, 10, 13, 16, 19, 22, 25, 28],
            class: 'im_tarasa_shevchenka_night'
        },
        {
            time: ['01:41', '01:57'],
            days: [3, 6, 9, 12, 15, 18, 21, 24, 27, 30],
            class: 'im_tarasa_shevchenka_night'
        }
    ],
    'fundukliivka': [
        {
            time: ['22:27', '22:29'],
            days: [1, 4, 7, 10, 13, 16, 19, 22, 25, 28],
            class: 'fundukliivka_night'
        },
        {
            time: ['01:07', '01:10'],
            days: [3, 6, 9, 12, 15, 18, 21, 24, 27, 30],
            class: 'fundukliivka_night'
        }
    ],
    'znamyanka': [
        {
            time: ['23:08', '23:12'],
            days: [1, 4, 7, 10, 13, 16, 19, 22, 25, 28],
            class: 'znamyanka_night'
        },
        {
            time: ['00:22', '00:28'],
            days: [3, 6, 9, 12, 15, 18, 21, 24, 27, 30],
            class: 'znamyanka_night'
        }
    ],
    'oleksandriya': [
        {
            time: ['23:46', '23:49'],
            days: [1, 4, 7, 10, 13, 16, 19, 22, 25, 28],
            class: 'oleksandriya_night'
        },
        {
            time: ['23:41', '23:44'],
            days: [2, 5, 8, 11, 14, 17, 20, 23, 26, 29],
            class: 'oleksandriya_night'
        }
    ],
    'pyatyhatky_stykova': [
        {
            time: ['00:33', '00:55'],
            days: [2, 5, 8, 11, 14, 17, 20, 23, 26, 29],
            class: 'pyatyhatky_stykova_night'
        },
        {
            time: ['22:33', '22:56'],
            days: [2, 5, 8, 11, 14, 17, 20, 23, 26, 29],
            class: 'pyatyhatky_stykova_night'
        }
    ],
    'pyatyhatky': [
        {
            time: ['01:02', '01:05'],
            days: [2, 5, 8, 11, 14, 17, 20, 23, 26, 29],
            class: 'pyatyhatky_night'
        },
        {
            time: ['22:23', '22:26'],
            days: [2, 5, 8, 11, 14, 17, 20, 23, 26, 29],
            class: 'pyatyhatky_night'
        }
    ],
    'kamyanske': [
        {
            time: ['02:04', '02:07'],
            days: [2, 5, 8, 11, 14, 17, 20, 23, 26, 29],
            class: 'kamyanske_night'
        },
        {
            time: ['21:12', '21:15'],
            days: [2, 5, 8, 11, 14, 17, 20, 23, 26, 29],
            class: 'kamyanske_night'
        }
    ],
    'dnipro': [
        {
            time: ['02:39', '03:11'],
            days: [2, 5, 8, 11, 14, 17, 20, 23, 26, 29],
            class: 'dnipro_night'
        },
        {
            time: ['20:18', '20:39'],
            days: [2, 5, 8, 11, 14, 17, 20, 23, 26, 29],
            class: 'dnipro'
        }
    ],
    'synelnykove': [
        {
            time: ['04:01', '04:04'],
            days: [2, 5, 8, 11, 14, 17, 20, 23, 26, 29],
            class: 'synelnykove_night'
        },
        {
            time: ['19:25', '19:28'],
            days: [2, 5, 8, 11, 14, 17, 20, 23, 26, 29],
            class: 'synelnykove'
        }
    ],
    'zaporizhzhya': [
        {
            time: ['04:53', '04:59'],
            days: [2, 5, 8, 11, 14, 17, 20, 23, 26, 29],
            class: 'zaporizhzhya_night'
        },
        {
            time: ['18:24', '18:30'],
            days: [2, 5, 8, 11, 14, 17, 20, 23, 26, 29],
            class: 'zaporizhzhya'
        }
    ],
    'melitopol': [
        {
            time: ['06:34', '06:43'],
            days: [2, 5, 8, 11, 14, 17, 20, 23, 26, 29],
            class: 'melitopol_morning'
        },
        {
            time: ['16:47', '16:50'],
            days: [2, 5, 8, 11, 14, 17, 20, 23, 26, 29],
            class: 'melitopol'
        }
    ],
    'yakymivka': [
        {
            time: ['07:07', '07:10'],
            days: [2, 5, 8, 11, 14, 17, 20, 23, 26, 29],
            class: 'yakymivka'
        },
        {
            time: ['16:22', '16:25'],
            days: [2, 5, 8, 11, 14, 17, 20, 23, 26, 29],
            class: 'yakymivka'
        }
    ],
    'novooleksiivka': [
        {
            time: ['07:54', '07:57'],
            days: [2, 5, 8, 11, 14, 17, 20, 23, 26, 29],
            class: 'novooleksiivka'
        },
        {
            time: ['15:32', '15:36'],
            days: [2, 5, 8, 11, 14, 17, 20, 23, 26, 29],
            class: 'novooleksiivka'
        }
    ],
    'dzhankoy': [
        {
            time: ['08:40', '08:46'],
            days: [2, 5, 8, 11, 14, 17, 20, 23, 26, 29],
            class: 'dzhankoy'
        },
        {
            time: ['14:39', '14:45'],
            days: [2, 5, 8, 11, 14, 17, 20, 23, 26, 29],
            class: 'dzhankoy'
        }
    ],
    'urozhayna': [
        {
            time: ['09:07', '09:10'],
            days: [2, 5, 8, 11, 14, 17, 20, 23, 26, 29],
            class: 'urozhayna'
        },
        {
            time: ['14:15', '14:18'],
            days: [2, 5, 8, 11, 14, 17, 20, 23, 26, 29],
            class: 'urozhayna'
        }
    ],
    'simferopol': [
        {
            time: ['10:07', '13:21'],
            days: [2, 5, 8, 11, 14, 17, 20, 23, 26, 29],
            class: 'simferopol'
        }
    ],
};

var trains = {
    '088': [
        {
            days: [1, 4, 7, 10, 13, 16, 19, 22, 25, 28],
            run: [
                ['09:00', '09:49', 'left'], // Kovel
                ['09:50', '10:07', 'left'],
                ['10:28', '10:44', 'right'],
                ['11:07', '11:28', 'left'],
                ['11:31', '12:43', 'left'],
                ['12:56', '13:13', 'left'],
                ['13:32', '13:59', 'left'],
                ['14:00', '14:17', 'left'],
                ['14:18', '14:32', 'left'],
                ['14:33', '14:55', 'left'],
                ['14:56', '15:28', 'left'],
                ['15:29', '15:51', 'left'],
                ['15:52', '16:15', 'left'],
                ['16:16', '16:50', 'left'],
                ['16:51', '17:19', 'left'],
                ['17:43', '19:25', 'right'],
                ['19:26', '20:20', 'right'],
                ['20:21', '20:49', 'right'],
                ['20:49', '21:17', 'right'],
                ['21:17', '21:42', 'right'],
                ['21:56', '22:28', 'right'],
                ['22:28', '23:09', 'right'],
                ['23:11', '23:47', 'right'],
                ['23:48', '23:59', 'right'],
            ]
        },
        {
            days: [2, 5, 8, 11, 14, 17, 20, 23, 24, 26, 29],
            run: [
                ['00:00', '00:34', 'right'],
                ['00:54', '01:03', 'right', 'chs2'],
                ['01:04', '02:05', 'right', 'chs2'],
                ['02:06', '02:40', 'right', 'chs2'],
                ['03:10', '04:02', 'right', 'chs2'],
                ['04:03', '04:54', 'right', 'chs2'],
                ['04:58', '06:35', 'right', 'chs2'],
                ['06:42', '07:08', 'right', 'chs2'],
                ['07:09', '07:55', 'right', 'chs2'],
                ['07:56', '08:41', 'right', 'chs2'],
                ['08:45', '09:08', 'right', 'chs2'],
                ['09:08', '10:08', 'right', 'chs2'], // Simferopol
                ['13:20', '14:16', 'left', 'chs2'],
                ['14:17', '14:40', 'left', 'chs2'],
                ['14:44', '15:33', 'left', 'chs2'],
                ['15:35', '16:23', 'left', 'chs2'],
                ['16:24', '16:48', 'left', 'chs2'],
                ['16:49', '18:25', 'left', 'chs2'],
                ['18:29', '19:26', 'left', 'chs2'],
                ['19:27', '20:19', 'left', 'chs2'],
                ['20:38', '21:13', 'left', 'chs2'],
                ['21:14', '22:24', 'left', 'chs2'],
                ['22:25', '22:34', 'left', 'chs2'],
                ['22:55', '23:42', 'left'],
                ['23:43', '23:59', 'left'],
            ]
        },
        {
            days: [3, 6, 9, 12, 15, 18, 21, 24, 27, 30],
            run: [
                ['00:00', '00:23', 'left'],
                ['00:27', '01:08', 'left'],
                ['01:09', '01:42', 'left'],
                ['01:56', '02:25', 'left'],
                ['02:26', '02:57', 'left'],
                ['02:58', '03:27', 'left'],
                ['03:28', '04:22', 'left'],
                ['04:23', '06:08', 'left'],
                ['06:29', '06:58', 'right'],
                ['06:59', '07:32', 'right'],
                ['07:33', '07:56', 'right'],
                ['07:57', '08:19', 'right'],
                ['08:20', '08:51', 'right'],
                ['08:52', '09:15', 'right'],
                ['09:16', '09:31', 'right'],
                ['09:32', '09:51', 'right'],
                ['09:52', '10:17', 'right'],
                ['10:36', '10:52', 'right'],
                ['10:56', '11:53', 'right'],
                ['11:54', '12:12', 'right'],
                ['12:34', '12:52', 'left'],
                ['13:13', '13:28', 'right'],
                ['13:29', '14:13', 'right'], // Kovel
            ]
        }
    ]
}

checkStation();
checkTrain();
checkPeriod();

setInterval(function() {
    checkStation();
    checkTrain();
    checkPeriod();
}, 5000);

function checkStation() {
    var selectedStation = false;
    $.each(stations, function(i, elem) {
        //console.log(i); // населений пункт
        $.each(stations[i], function(y, elem) {
            if (isAvailable(stations[i][y]['time'][0], stations[i][y]['time'][1], stations[i][y]['days'])) {
                $("#station").attr("class", stations[i][y]['class']);
                $("#game").attr('data-run', false); // фон не рухається
                selectedStation = true;
                return false;
            }
        });
        if (!selectedStation) {
            $("#station").attr("class", "");
            $("#game").attr('data-run', true); // фон рухається
        }
    });
}

function checkTrain() {
    $("#train").attr("class", "train_chs4_kyiv");
    $.each(trains, function(i, elem) {
        //console.log(i); // потяг
        $.each(trains[i], function(y, elem) {
            $.each(trains[i][y]['run'], function(x, elem) {
                if (isAvailable(trains[i][y]['run'][x][0], trains[i][y]['run'][x][1], trains[i][y]['days'])) {
                    $("#train").attr("class", "train_chs4_kyiv runtrain");
                    $('#game').attr('data-direction', trains[i][y]['run'][x][2]);
                    //console.log('yes');
                    return false;
                }
            });
        });
    });
}

function isAvailable(opening, closing, days = []) {
    var timeFormat2 = "HH:mm";
    var timeNow = moment().format("HH:mm");
    var dayNow = +moment().format('D');
    var ifTime = moment(timeNow, timeFormat2).isBetween(moment(opening, timeFormat2), moment(closing, timeFormat2));
    var ifDays = days.includes(dayNow);
    if (ifTime && ifDays) {
        return true;
    } else {
        return false;
    }
}

function checkPeriod() {
    var timeNow = moment().format("H");
    if (timeNow <= 5) {
        $("#game").attr('data-period', 'night');
    } else if (timeNow > 5 && timeNow <= 7) {
        $("#game").attr('data-period', 'morning');
    } else if (timeNow > 7 && timeNow <= 20) {
        $("#game").attr('data-period', 'day');
    } else if (timeNow > 20 && timeNow <= 22) {
        $("#game").attr('data-period', 'evening');
    } else if (timeNow > 22) {
        $("#game").attr('data-period', 'night');
    }
}