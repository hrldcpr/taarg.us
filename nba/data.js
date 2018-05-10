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
    startDate: '2018-04-14',
    endDate: '2018-04-29',
    matchups: [
      m(
        '10',
        'West',
        'HOU',
        'MIN',
        [
          '2018-04-15',
          '2018-04-18',
          '2018-04-21',
          '2018-04-23',
          '2018-04-25',
          '2018-04-27',
          '2018-04-29',
        ]
      ),
      m(
        '13',
        'West',
        'GSW',
        'SAS',
        [
          '2018-04-14',
          '2018-04-16',
          '2018-04-19',
          '2018-04-22',
          '2018-04-24',
          '2018-04-26',
          '2018-04-28',
        ]
      ),
      m(
        '12',
        'West',
        'POR',
        'NOP',
        [
          '2018-04-14',
          '2018-04-17',
          '2018-04-19',
          '2018-04-21',
          '2018-04-24',
          '2018-04-26',
          '2018-04-28',
        ]
      ),
      m(
        '11',
        'West',
        'OKC',
        'UTA',
        [
          '2018-04-15',
          '2018-04-18',
          '2018-04-21',
          '2018-04-23',
          '2018-04-25',
          '2018-04-27',
          '2018-04-29',
        ]
      ),
      m(
        '14',
        'East',
        'TOR',
        'WAS',
        [
          '2018-04-14',
          '2018-04-17',
          '2018-04-20',
          '2018-04-22',
          '2018-04-25',
          '2018-04-27',
          '2018-04-29',
        ]
      ),
      m(
        '17',
        'East',
        'BOS',
        'MIL',
        [
          '2018-04-15',
          '2018-04-17',
          '2018-04-20',
          '2018-04-22',
          '2018-04-24',
          '2018-04-26',
          '2018-04-28',
        ]
      ),
      m(
        '16',
        'East',
        'PHI',
        'MIA',
        [
          '2018-04-14',
          '2018-04-16',
          '2018-04-19',
          '2018-04-21',
          '2018-04-24',
          '2018-04-26',
          '2018-04-28',
        ]
      ),
      m(
        '15',
        'East',
        'CLE',
        'IND',
        [
          '2018-04-15',
          '2018-04-18',
          '2018-04-20',
          '2018-04-22',
          '2018-04-25',
          '2018-04-27',
          '2018-04-29',
        ]
      )
    ]
  },
  {
    number: 2,
    startDate: '2018-04-28',
    endDate: '2018-05-14',
    matchups: [
      m(
        '20',
        'West',
        'HOU',
        'UTA',
        [
          '2018-04-29',
          '2018-05-02',
          '2018-05-04',
          '2018-05-06',
          '2018-05-08',
          '2018-05-10',
          '2018-05-14',
        ]
      ),
      m(
        '21',
        'West',
        'GSW',
        'NOP',
        [
          '2018-04-28',
          '2018-05-01',
          '2018-05-04',
          '2018-05-06',
          '2018-05-08',
          '2018-05-10',
          '2018-05-14',
        ]
      ),
      m(
        '22',
        'East',
        'TOR',
        'CLE',
        [
          '2018-05-01',
          '2018-05-03',
          '2018-05-05',
          '2018-05-07',
          '2018-05-09',
          '2018-05-11',
          '2018-05-13',
        ]
      ),
      m(
        '23',
        'East',
        'BOS',
        'PHI',
        [
          '2018-04-30',
          '2018-05-03',
          '2018-05-05',
          '2018-05-07',
          '2018-05-09',
          '2018-05-11',
          '2018-05-13',
        ]
      ),
    ]
  },
  {
    number: 3,
    startDate: '2018-05-13',
    endDate: '2018-05-28',
    matchups: [
      m(
        '30',
        'West',
        'HOU',
        'GSW',
        [
          '2018-05-14',
          '2018-05-16',
          '2018-05-20',
          '2018-05-22',
          '2018-05-24',
          '2018-05-26',
          '2018-05-28',
        ]
      ),
      m(
        '31',
        'East',
        'BOS',
        'CLE',
        [
          '2018-05-13',
          '2018-05-15',
          '2018-05-19',
          '2018-05-21',
          '2018-05-23',
          '2018-05-25',
          '2018-05-27',
        ]
      ),
    ]
  }
]
