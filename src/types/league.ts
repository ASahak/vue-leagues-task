export interface League {
  idLeague: string;
  strLeague: string;
  strSport: string;
  strLeagueAlternate: string;
}

export interface LeagueDetail extends League {
  strBadge: string;
  strDescriptionEN: string;
  intFormedYear: string;
  strTrophy: string
  strCountry: string
  strCurrentSeason: string
}

export interface AllLeaguesResponse {
  leagues: League[];
}
