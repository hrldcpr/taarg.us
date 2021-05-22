function m(id, c, f, u, gs) {
  var numMissing = 7 - gs.length
  for (i = 0; i < numMissing; i++) {
    gs.push(null)
  }
  var invisible = f == null || u == null
  return {
    id: id,
    conference: c,
    favorite: f,
    underdog: u,
    fseed: null,
    useed: null,
    invisible: invisible,
    scheduleSortKey: null,
    nextGameSortKey: null,
    games: gs.map(g => makeGame(g))
  }
}

function makeGame(date) {
  return {
    date: date,
    time: null,
    network: null,
    winner: null,
    fscore: null,
    uscore: null,
    clock: null,
    period: null,
    loading: true
  }
}

var rounds = [
  {
    number: 1,
    startDate: '2021-05-22',
    endDate: '2021-06-06',
    matchups: [
      m(
        '10',
        'West',
        'UTA',
        'MEM',
        [
          '2021-05-23',
          '2021-05-26',
          '2021-05-29',
          '2021-05-31',
          '2021-06-02',
          '2021-06-04',
          '2021-06-06',
        ]
      ),
      m(
        '11',
        'West',
        'LAC',
        'DAL',
        [
          '2021-05-22',
          '2021-05-25',
          '2021-05-28',
          '2021-05-30',
          '2021-06-02',
          '2021-06-04',
          '2021-06-06',
        ]
      ),
      m(
        '12',
        'West',
        'DEN',
        'POR',
        [
          '2021-05-22',
          '2021-05-24',
          '2021-05-27',
          '2021-05-29',
          '2021-06-01',
          '2021-06-03',
          '2021-06-05',
        ]
      ),
      m(
        '13',
        'West',
        'PHX',
        'LAL',
        [
          '2021-05-23',
          '2021-05-25',
          '2021-05-27',
          '2021-05-30',
          '2021-06-01',
          '2021-06-03',
          '2021-06-05',
        ]
      ),
      m(
        '14',
        'East',
        'PHI',
        'WAS',
        [
          '2021-05-23',
          '2021-05-26',
          '2021-05-29',
          '2021-05-31',
          '2021-06-02',
          '2021-06-04',
          '2021-06-06',
        ]
      ),
      m(
        '15',
        'East',
        'NYK',
        'ATL',
        [
          '2021-05-23',
          '2021-05-26',
          '2021-05-28',
          '2021-05-30',
          '2021-06-02',
          '2021-06-04',
          '2021-06-06',
        ]
      ),
      m(
        '16',
        'East',
        'MIL',
        'MIA',
        [
          '2021-05-22',
          '2021-05-24',
          '2021-05-27',
          '2021-05-29',
          '2021-06-01',
          '2021-06-03',
          '2021-06-05',
        ]
      ),
      m(
        '17',
        'East',
        'BKN',
        'BOS',
        [
          '2021-05-22',
          '2021-05-25',
          '2021-05-28',
          '2021-05-30',
          '2021-06-01',
          '2021-06-03',
          '2021-06-05',
        ]
      ),
    ]
  }
  // {
  //   number: 2,
  //   startDate: '2020-08-30',
  //   endDate: '2020-09-16',
  //   matchups: [
  //     m(
  //       '20',
  //       'West',
  //       'LAL',
  //       'HOU',
  //       [
  //         '2020-09-04',
  //         '2020-09-06',
  //         '2020-09-08',
  //         '2020-09-10',
  //         '2020-09-12',
  //         '2020-09-14',
  //         '2020-09-16',
  //       ]
  //     ),
  //     m(
  //       '21',
  //       'West',
  //       'LAC',
  //       'DEN',
  //       [
  //         '2020-09-03',
  //         '2020-09-05',
  //         '2020-09-07',
  //         '2020-09-09',
  //         '2020-09-11',
  //         '2020-09-13',
  //         '2020-09-15',
  //       ]
  //     ),
  //     m(
  //       '22',
  //       'East',
  //       'MIL',
  //       'MIA',
  //       [
  //         '2020-08-31',
  //         '2020-09-02',
  //         '2020-09-04',
  //         '2020-09-06',
  //         '2020-09-08',
  //         '2020-09-10',
  //         '2020-09-12',
  //       ]
  //     ),
  //     m(
  //       '23',
  //       'East',
  //       'TOR',
  //       'BOS',
  //       [
  //         '2020-08-30',
  //         '2020-09-01',
  //         '2020-09-03',
  //         '2020-09-05',
  //         '2020-09-07',
  //         '2020-09-09',
  //         '2020-09-11',
  //       ]
  //     ),
  //   ]
  // },
  // {
  //   number: 3,
  //   startDate: '2020-09-15',
  //   endDate: '2020-09-30',
  //   matchups: [
  //     m(
  //       '30',
  //       'West',
  //       'LAL',
  //       'DEN',
  //       [
  //         '2020-09-18',
  //         '2020-09-20',
  //         '2020-09-22',
  //         '2020-09-24',
  //         '2020-09-26',
  //         '2020-09-28',
  //         '2020-09-30',
  //       ]
  //     ),
  //     m(
  //       '31',
  //       'East',
  //       'BOS',
  //       'MIA',
  //       [
  //         '2020-09-15',
  //         '2020-09-17',
  //         '2020-09-19',
  //         '2020-09-23',
  //         '2020-09-25',
  //         '2020-09-27',
  //         '2020-09-30',
  //       ]
  //     ),
  //   ]
  // },
  // {
  //   number: 4,
  //   startDate: '2020-09-30',
  //   endDate: '2020-10-13',
  //   matchups: [
  //     m(
  //       '40',
  //       'Finals',
  //       'LAL',
  //       'MIA',
  //       [
  //         '2020-09-30',
  //         '2020-10-02',
  //         '2020-10-04',
  //         '2020-10-06',
  //         '2020-10-09',
  //         '2020-10-11',
  //         '2020-10-13',
  //       ]
  //     )
  //   ]
  // }
]
