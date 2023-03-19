export type Launch = {
  fairings: {
    reused: boolean | null;
    recovery_attempt: boolean | null;
    recovered: boolean;
    ships: string[];
  };
  crew: [];
  launchpad: string;
  auto_update: boolean;
  tbd: boolean;
  launch_library_id: string;
  flight_number: number;
  name: string;
  date_utc: string;
  date_unix: number;
  date_local: string;
  date_precision: 'half' | 'quarter' | 'year' | 'month' | 'day' | 'hour';
  static_fire_date_utc: string | null;
  static_fire_date_unix: number | null;
  tdb: boolean;
  net: boolean;
  window: number;
  rocket: string;
  success: boolean;
  failures: {
    time: number;
    altitude: number | null;
    reason: string;
  }[];
  upcoming: boolean;
  details: string;
  ships: string[];
  capsules: string[];
  payloads: string[];
  cores: {
    core: string;
    flight: number;
    gridfins: boolean;
    legs: boolean;
    reused: boolean;
    landing_attempt: boolean;
    landing_success: boolean | null;
    landing_type: null;
    landpad: null;
  }[];
  links: {
    patch: {
      small: string;
      large: string;
    };
    reddit: {
      campaign: string | null;
      launch: string | null;
      media: string | null;
      recovery: string | null;
    };
    flickr: {
      small: string[];
      original: string[];
    };
    presskit: string | null;
    webcast: string;
    youtube_id: string;
    article: string;
    wikipedia: string;
  };
  id: string;
};
