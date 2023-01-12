export interface Pokemon {
  id: number;
  name: string;
  type: string[];
  hp: number;
  attack: number;
  defense: number;
  speed: number;
  special_attack: number;
  special_defense: number;
}

export namespace TicketNetwork {
  export interface Root {
    page: number;
    count: number;
    _links: Link[];
    facets: any[];
    results: Result[];
    spellcheck: Spellcheck;
  }

  export interface Link {
    href: string;
    rel: string;
    type: string;
    title: string;
  }

  export interface Result {
    id: number;
    date: Date;
    isMultiDayEvent: boolean;
    isTest: boolean;
    text: Text2;
    scheduleStatus: string;
    geoLocation: GeoLocation;
    _links: Link2[];
    _metadata: Metadata;
    country: Country;
    stateProvince: StateProvince;
    city: City;
    venue: Venue;
    defaultCategory: DefaultCategory;
    performers: Performer[];
    pricingInfo: PricingInfo;
    eventPriority: number;
    venueConfig?: VenueConfig;
    metadataInclusiveUpdatedAt: string;
    updatedAt: string;
    createdAt: string;
    version: number;
    uriComponent: string;
    uriComponentHistory: any[];
  }

  export interface Date {
    date: string;
    datetime: string;
    weekday: number;
    text: Text;
    time?: string;
    datetimeOffset?: string;
  }

  export interface Text {
    date: string;
    time: string;
  }

  export interface Text2 {
    name: string;
  }

  export interface GeoLocation {
    latitude: number;
    longitude: number;
  }

  export interface Link2 {
    href: string;
    rel: string;
    type: string;
    title: string;
  }

  export interface Metadata {
    ticketCount: number;
    hasTickets: boolean;
    hasMyTickets: boolean;
    hasTnPrimeTickets: boolean;
    eTickets: ETickets;
    parkingTickets: ParkingTickets;
    mercuryEligibleTicketCount: number;
  }

  export interface ETickets {
    ticketCount: number;
    hasTickets: boolean;
  }

  export interface ParkingTickets {
    ticketCount: number;
    hasTickets: boolean;
  }

  export interface Country {
    alphaCode: string;
    text: Text3;
    _links: Link3[];
  }

  export interface Text3 {
    name: string;
  }

  export interface Link3 {
    href: string;
    rel: string;
    type: string;
    title: string;
  }

  export interface StateProvince {
    id: number;
    text: Text4;
    _links: Link4[];
  }

  export interface Text4 {
    abbr: string;
    name: string;
  }

  export interface Link4 {
    href: string;
    rel: string;
    type: string;
    title: string;
  }

  export interface City {
    id: number;
    text: Text5;
    _links: Link5[];
  }

  export interface Text5 {
    name: string;
  }

  export interface Link5 {
    href: string;
    rel: string;
    type: string;
    title: string;
  }

  export interface Venue {
    id: number;
    text: Text6;
    _links: Link6[];
  }

  export interface Text6 {
    name: string;
    formerNames: string[];
  }

  export interface Link6 {
    href: string;
    rel: string;
    type: string;
    title: string;
  }

  export interface DefaultCategory {
    path: string;
    depth: number;
    text: Text7;
    ancestors: Ancestor[];
    _links: Link7[];
  }

  export interface Text7 {
    name: string;
  }

  export interface Ancestor {
    path: string;
    depth: number;
    text: Text8;
  }

  export interface Text8 {
    name: string;
  }

  export interface Link7 {
    href: string;
    rel: string;
    type: string;
    title: string;
  }

  export interface Performer {
    name: string;
    id: number;
    role: string;
    isPerformance: boolean;
  }

  export interface PricingInfo {
    lowPrice: LowPrice;
    highPrice: HighPrice;
    averagePrice?: AveragePrice;
  }

  export interface LowPrice {
    value: number;
    currencyCode: string;
    text: Text9;
  }

  export interface Text9 {
    formatted: string;
  }

  export interface HighPrice {
    value: number;
    currencyCode: string;
    text: Text10;
  }

  export interface Text10 {
    formatted: string;
  }

  export interface AveragePrice {
    value: number;
    currencyCode: string;
    text: Text11;
  }

  export interface Text11 {
    formatted: string;
  }

  export interface VenueConfig {
    id: number;
  }

  export interface Spellcheck {}
}
