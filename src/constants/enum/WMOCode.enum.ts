import { DayNightType } from './DayNight.enum';

export default class WMOCodeEnum {
  public static readonly CLEAR_SKY_D = new WMOCodeEnum(
    'CLEAR_SKY_D',
    'clear.sky',
    0,
    DayNightType.DAY,
    './assets/weather_icons/Mostly_Sunny.png'
  );

  public static readonly CLEAR_SKY_N = new WMOCodeEnum(
    'CLEAR_SKY_N',
    'clear.sky',
    0,
    DayNightType.NIGHT,
    './assets/weather_icons/Clear_Night.png'
  );

  public static readonly MAINLY_CLEAR_D = new WMOCodeEnum(
    'MAINLY_CLEAR_D',
    'mainly.clear.sky',
    1,
    DayNightType.DAY,
    './assets/weather_icons/Mostly_Sunny.png'
  );

  public static readonly MAINLY_CLEAR_N = new WMOCodeEnum(
    'MAINLY_CLEAR_N',
    'mainly.clear.sky',
    1,
    DayNightType.NIGHT,
    './assets/weather_icons/Clear_Night.png'
  );

  public static readonly PARTLY_CLOUDY_D = new WMOCodeEnum(
    'PARTLY_CLOUDY_D',
    'partly.cloudy',
    2,
    DayNightType.DAY,
    './assets/weather_icons/Party_Cloudy.png'
  );

  public static readonly PARTLY_CLOUDY_N = new WMOCodeEnum(
    'PARTLY_CLOUDY_N',
    'partly.cloudy',
    2,
    DayNightType.NIGHT,
    './assets/weather_icons/Party_Cloudy_Night.png'
  );

  public static readonly OVERCAST_D = new WMOCodeEnum(
    'OVERCAST_D',
    'overcast',
    3,
    DayNightType.DAY,
    './assets/weather_icons/Mostly_Cloudy.png'
  );

  public static readonly OVERCAST_N = new WMOCodeEnum(
    'OVERCAST_N',
    'overcast',
    3,
    DayNightType.NIGHT,
    './assets/weather_icons/Mostly_Cloudy_Night.png'
  );

  public static readonly FOG_D = new WMOCodeEnum(
    'FOG_D',
    'fog',
    45,
    DayNightType.DAY,
    './assets/weather_icons/Fog.png'
  );

  public static readonly FOG_N = new WMOCodeEnum(
    'FOG_N',
    'fog',
    45,
    DayNightType.NIGHT,
    './assets/weather_icons/Fog_Night.png'
  );

  public static readonly DEPOSITIING_RIME_FOG_D = new WMOCodeEnum(
    'DEPOSITIING_RIME_FOG_D',
    'depositing.rime.fog',
    48,
    DayNightType.DAY,
    './assets/weather_icons/Fog.png'
  );

  public static readonly DEPOSITIING_RIME_FOG_N = new WMOCodeEnum(
    'DEPOSITIING_RIME_FOG_N',
    'depositing.rime.fog',
    48,
    DayNightType.NIGHT,
    './assets/weather_icons/Fog_Night.png'
  );

  public static readonly DRIZZLE_LIGHT_D = new WMOCodeEnum(
    'DRIZZLE_LIGHT_D',
    'drizzle.light',
    51,
    DayNightType.DAY,
    './assets/weather_icons/Drizzle.png'
  );

  public static readonly DRIZZLE_LIGHT_N = new WMOCodeEnum(
    'DRIZZLE_LIGHT_N',
    'drizzle.light',
    51,
    DayNightType.NIGHT,
    './assets/weather_icons/Drizzle_Night.png'
  );

  public static readonly DRIZZLE_MODERATE_D = new WMOCodeEnum(
    'DRIZZLE_MODERATE_D',
    'drizzle.moderate',
    53,
    DayNightType.DAY,
    './assets/weather_icons/Drizzle.png'
  );

  public static readonly DRIZZLE_MODERATE_N = new WMOCodeEnum(
    'DRIZZLE_MODERATE_N',
    'drizzle.moderate',
    53,
    DayNightType.NIGHT,
    './assets/weather_icons/Drizzle_Night.png'
  );

  public static readonly DRIZZLE_DENSE_D = new WMOCodeEnum(
    'DRIZZLE_DENSE_D',
    'drizzle.dense',
    55,
    DayNightType.DAY,
    './assets/weather_icons/Drizzle.png'
  );

  public static readonly DRIZZLE_DENSE_N = new WMOCodeEnum(
    'DRIZZLE_DENSE_N',
    'drizzle.dense',
    55,
    DayNightType.NIGHT,
    './assets/weather_icons/Drizzle_Night.png'
  );

  public static readonly FREEZING_DRIZZLE_LIGHT_D = new WMOCodeEnum(
    'FREEZING_DRIZZLE_LIGHT_D',
    'freezing.drizzle.light',
    56,
    DayNightType.DAY,
    './assets/weather_icons/Sleet.png'
  );

  public static readonly FREEZING_DRIZZLE_LIGHT_N = new WMOCodeEnum(
    'FREEZING_DRIZZLE_LIGHT_N',
    'freezing.drizzle.light',
    56,
    DayNightType.NIGHT,
    './assets/weather_icons/Sleet_Night.png'
  );

  public static readonly FREEZING_DRIZZLE_DENSE_D = new WMOCodeEnum(
    'FREEZING_DRIZZLE_DENSE_D',
    'freezing.drizzle.dense',
    57,
    DayNightType.DAY,
    './assets/weather_icons/Sleet.png'
  );

  public static readonly FREEZING_DRIZZLE_DENSE_N = new WMOCodeEnum(
    'FREEZING_DRIZZLE_DENSE_N',
    'freezing.drizzle.dense',
    57,
    DayNightType.NIGHT,
    './assets/weather_icons/Sleet_Night.png'
  );

  public static readonly RAIN_SLIGHT_D = new WMOCodeEnum(
    'RAIN_SLIGHT_D',
    'rain.slight',
    61,
    DayNightType.DAY,
    './assets/weather_icons/Rain.png'
  );

  public static readonly RAIN_SLIGHT_N = new WMOCodeEnum(
    'RAIN_SLIGHT_N',
    'rain.slight',
    61,
    DayNightType.NIGHT,
    './assets/weather_icons/Rain_Night.png'
  );

  public static readonly RAIN_MODERATE_D = new WMOCodeEnum(
    'RAIN_MODERATE_D',
    'rain.moderate',
    63,
    DayNightType.DAY,
    './assets/weather_icons/Rain.png'
  );

  public static readonly RAIN_MODERATE_N = new WMOCodeEnum(
    'RAIN_MODERATE_N',
    'rain.moderate',
    63,
    DayNightType.NIGHT,
    './assets/weather_icons/Rain_Night.png'
  );

  public static readonly RAIN_HEAVY_D = new WMOCodeEnum(
    'RAIN_HEAVY_D',
    'rain.heavy',
    65,
    DayNightType.DAY,
    './assets/weather_icons/Heavy_Rain.png'
  );

  public static readonly RAIN_HEAVY_N = new WMOCodeEnum(
    'RAIN_HEAVY_N',
    'rain.heavy',
    65,
    DayNightType.NIGHT,
    './assets/weather_icons/Heavy_Rain_Night.png'
  );

  public static readonly FREEZING_RAIN_LIGHT_D = new WMOCodeEnum(
    'FREEZING_RAIN_LIGHT_D',
    'freezing.rain.light',
    66,
    DayNightType.DAY,
    './assets/weather_icons/Sleet.png'
  );

  public static readonly FREEZING_RAIN_LIGHT_N = new WMOCodeEnum(
    'FREEZING_RAIN_LIGHT_N',
    'freezing.rain.light',
    66,
    DayNightType.NIGHT,
    './assets/weather_icons/Sleet_Night.png'
  );

  public static readonly FREEZING_RAIN_HEAVY_D = new WMOCodeEnum(
    'FREEZING_RAIN_HEAVY_D',
    'freezing.rain.heavy',
    67,
    DayNightType.DAY,
    './assets/weather_icons/Sleet.png'
  );

  public static readonly FREEZING_RAIN_HEAVY_N = new WMOCodeEnum(
    'FREEZING_RAIN_HEAVY_N',
    'freezing.rain.heavy',
    67,
    DayNightType.NIGHT,
    './assets/weather_icons/Sleet_Night.png'
  );

  public static readonly SNOW_SLIGHT_D = new WMOCodeEnum(
    'SNOW_SLIGHT_D',
    'snow.slight',
    71,
    DayNightType.DAY,
    './assets/weather_icons/Snow.png'
  );

  public static readonly SNOW_SLIGHT_N = new WMOCodeEnum(
    'SNOW_SLIGHT_N',
    'snow.slight',
    71,
    DayNightType.NIGHT,
    './assets/weather_icons/Snow_Night.png'
  );

  public static readonly SNOW_MODERATE_D = new WMOCodeEnum(
    'SNOW_MODERATE_D',
    'snow.moderate',
    73,
    DayNightType.DAY,
    './assets/weather_icons/Snow.png'
  );

  public static readonly SNOW_MODERATE_N = new WMOCodeEnum(
    'SNOW_MODERATE_N',
    'snow.moderate',
    73,
    DayNightType.NIGHT,
    './assets/weather_icons/Snow_Night.png'
  );

  public static readonly SNOW_HEAVY_D = new WMOCodeEnum(
    'SNOW_HEAVY_D',
    'snow.heavy',
    75,
    DayNightType.DAY,
    './assets/weather_icons/Blizzard.png'
  );

  public static readonly SNOW_HEAVY_N = new WMOCodeEnum(
    'SNOW_HEAVY_N',
    'snow.heavy',
    75,
    DayNightType.NIGHT,
    './assets/weather_icons/Blizzard_Night.png'
  );

  public static readonly SNOW_GRAIN_D = new WMOCodeEnum(
    'SNOW_GRAIN_D',
    'snow.grain',
    77,
    DayNightType.DAY,
    './assets/weather_icons/Hail.png'
  );

  public static readonly SNOW_GRAIN_N = new WMOCodeEnum(
    'SNOW_GRAIN_N',
    'snow.grain',
    77,
    DayNightType.NIGHT,
    './assets/weather_icons/Hail_Night.png'
  );

  public static readonly RAIN_SHOWER_SLIGHT_D = new WMOCodeEnum(
    'RAIN_SHOWER_SLIGHT_D',
    'rain.shower.slight',
    80,
    DayNightType.DAY,
    './assets/weather_icons/Rain.png'
  );

  public static readonly RAIN_SHOWER_SLIGHT_N = new WMOCodeEnum(
    'RAIN_SHOWER_SLIGHT_N',
    'rain.shower.slight',
    80,
    DayNightType.NIGHT,
    './assets/weather_icons/Rain_Night.png'
  );

  public static readonly RAIN_SHOWER_MODERATE_D = new WMOCodeEnum(
    'RAIN_SHOWER_MODERATE_D',
    'rain.shower.moderate',
    81,
    DayNightType.DAY,
    './assets/weather_icons/Rain.png'
  );

  public static readonly RAIN_SHOWER_MODERATE_N = new WMOCodeEnum(
    'RAIN_SHOWER_MODERATE_N',
    'rain.shower.moderate',
    81,
    DayNightType.NIGHT,
    './assets/weather_icons/Rain_Night.png'
  );

  public static readonly RAIN_SHOWER_VIOLENT_D = new WMOCodeEnum(
    'RAIN_SHOWER_VIOLENT_D',
    'rain.shower.violent',
    82,
    DayNightType.DAY,
    './assets/weather_icons/Heavy_Rain.png'
  );

  public static readonly RAIN_SHOWER_VIOLENT_N = new WMOCodeEnum(
    'RAIN_SHOWER_VIOLENT_N',
    'rain.shower.violent',
    82,
    DayNightType.NIGHT,
    './assets/weather_icons/Heavy_Rain_Night.png'
  );

  public static readonly SNOW_SHOWER_SLIGHT_D = new WMOCodeEnum(
    'SNOW_SHOWER_SLIGHT_D',
    'snow.shower.slight',
    85,
    DayNightType.DAY,
    './assets/weather_icons/Snow.png'
  );

  public static readonly SNOW_SHOWER_SLIGHT_N = new WMOCodeEnum(
    'SNOW_SHOWER_SLIGHT_N',
    'snow.shower.slight',
    85,
    DayNightType.NIGHT,
    './assets/weather_icons/Snow_Night.png'
  );

  public static readonly SNOW_SHOWER_HEAVY_D = new WMOCodeEnum(
    'SNOW_SHOWER_HEAVY_D',
    'snow.shower.heavy',
    86,
    DayNightType.DAY,
    './assets/weather_icons/Blizzard.png'
  );

  public static readonly SNOW_SHOWER_HEAVY_N = new WMOCodeEnum(
    'SNOW_SHOWER_HEAVY_N',
    'snow.shower.heavy',
    86,
    DayNightType.NIGHT,
    './assets/weather_icons/Blizzard_Night.png'
  );

  public static readonly THUNDERSTORM_D = new WMOCodeEnum(
    'THUNDERSTORM_D',
    'thunderstorm',
    95,
    DayNightType.DAY,
    './assets/weather_icons/Severe_Thunderstorm.png'
  );

  public static readonly THUNDERSTORM_N = new WMOCodeEnum(
    'THUNDERSTORM_N',
    'thunderstorm',
    95,
    DayNightType.NIGHT,
    './assets/weather_icons/Severe_Thunderstorm_Night.png'
  );

  public static readonly THUNDERSTORM_HAIL_SLIGHT_D = new WMOCodeEnum(
    'THUNDERSTORM_HAIL_SLIGHT_D',
    'thunderstorm.hail.slight',
    96,
    DayNightType.DAY,
    './assets/weather_icons/Mix_Rainfall.png'
  );

  public static readonly THUNDERSTORM_HAIL_SLIGHT_N = new WMOCodeEnum(
    'THUNDERSTORM_HAIL_SLIGHT_N',
    'thunderstorm.hail.slight',
    96,
    DayNightType.NIGHT,
    './assets/weather_icons/Mix_Rainfall_Night.png'
  );

  public static readonly THUNDERSTORM_HAIL_HEAVY_D = new WMOCodeEnum(
    'THUNDERSTORM_HAIL_HEAVY_D',
    'thunderstorm.hail.heavy',
    99,
    DayNightType.DAY,
    './assets/weather_icons/Mix_Rainfall.png'
  );

  public static readonly THUNDERSTORM_HAIL_HEAVY_N = new WMOCodeEnum(
    'THUNDERSTORM_HAIL_HEAVY_N',
    'thunderstorm.hail.heavy',
    99,
    DayNightType.NIGHT,
    './assets/weather_icons/Mix_Rainfall_Night.png'
  );

  public static readonly SUNRISE = new WMOCodeEnum(
    'SUNRISE',
    'sunrise',
    -1,
    DayNightType.SUNRISE,
    './assets/weather_icons/Sunrise.png'
  );

  public static readonly SUNSET = new WMOCodeEnum(
    'SUNSET',
    'sunset',
    -2,
    DayNightType.SUNSET,
    './assets/weather_icons/Sunset.png'
  );

  private static readonly mMap = new Map([
    ['CLEAR_SKY_D', WMOCodeEnum.CLEAR_SKY_D],
    ['CLEAR_SKY_N', WMOCodeEnum.CLEAR_SKY_N],
    ['MAINLY_CLEAR_D', WMOCodeEnum.MAINLY_CLEAR_D],
    ['MAINLY_CLEAR_N', WMOCodeEnum.MAINLY_CLEAR_N],
    ['PARTLY_CLOUDY_D', WMOCodeEnum.PARTLY_CLOUDY_D],
    ['PARTLY_CLOUDY_N', WMOCodeEnum.PARTLY_CLOUDY_N],
    ['OVERCAST_D', WMOCodeEnum.OVERCAST_D],
    ['OVERCAST_N', WMOCodeEnum.OVERCAST_N],
    ['FOG_D', WMOCodeEnum.FOG_D],
    ['FOG_N', WMOCodeEnum.FOG_N],
    ['DEPOSITIING_RIME_FOG_D', WMOCodeEnum.DEPOSITIING_RIME_FOG_D],
    ['DEPOSITIING_RIME_FOG_N', WMOCodeEnum.DEPOSITIING_RIME_FOG_N],
    ['DRIZZLE_LIGHT_D', WMOCodeEnum.DRIZZLE_LIGHT_D],
    ['DRIZZLE_LIGHT_N', WMOCodeEnum.DRIZZLE_LIGHT_N],
    ['DRIZZLE_MODERATE_D', WMOCodeEnum.DRIZZLE_MODERATE_D],
    ['DRIZZLE_MODERATE_N', WMOCodeEnum.DRIZZLE_MODERATE_N],
    ['DRIZZLE_DENSE_D', WMOCodeEnum.DRIZZLE_DENSE_D],
    ['DRIZZLE_DENSE_N', WMOCodeEnum.DRIZZLE_DENSE_N],
    ['FREEZING_DRIZZLE_LIGHT_D', WMOCodeEnum.FREEZING_DRIZZLE_LIGHT_D],
    ['FREEZING_DRIZZLE_LIGHT_N', WMOCodeEnum.FREEZING_DRIZZLE_LIGHT_N],
    ['FREEZING_DRIZZLE_DENSE_D', WMOCodeEnum.FREEZING_DRIZZLE_DENSE_D],
    ['FREEZING_DRIZZLE_DENSE_N', WMOCodeEnum.FREEZING_DRIZZLE_DENSE_N],
    ['RAIN_SLIGHT_D', WMOCodeEnum.RAIN_SLIGHT_D],
    ['RAIN_SLIGHT_N', WMOCodeEnum.RAIN_SLIGHT_N],
    ['RAIN_MODERATE_D', WMOCodeEnum.RAIN_MODERATE_D],
    ['RAIN_MODERATE_N', WMOCodeEnum.RAIN_MODERATE_N],
    ['RAIN_HEAVY_D', WMOCodeEnum.RAIN_HEAVY_D],
    ['RAIN_HEAVY_N', WMOCodeEnum.RAIN_HEAVY_N],
    ['FREEZING_RAIN_LIGHT_D', WMOCodeEnum.FREEZING_RAIN_LIGHT_D],
    ['FREEZING_RAIN_LIGHT_N', WMOCodeEnum.FREEZING_RAIN_LIGHT_N],
    ['FREEZING_RAIN_HEAVY_D', WMOCodeEnum.FREEZING_RAIN_HEAVY_D],
    ['FREEZING_RAIN_HEAVY_N', WMOCodeEnum.FREEZING_RAIN_HEAVY_N],
    ['SNOW_SLIGHT_D', WMOCodeEnum.SNOW_SLIGHT_D],
    ['SNOW_SLIGHT_N', WMOCodeEnum.SNOW_SLIGHT_N],
    ['SNOW_MODERATE_D', WMOCodeEnum.SNOW_MODERATE_D],
    ['SNOW_MODERATE_N', WMOCodeEnum.SNOW_MODERATE_N],
    ['SNOW_HEAVY_D', WMOCodeEnum.SNOW_HEAVY_D],
    ['SNOW_HEAVY_N', WMOCodeEnum.SNOW_HEAVY_N],
    ['SNOW_GRAIN_D', WMOCodeEnum.SNOW_GRAIN_D],
    ['SNOW_GRAIN_N', WMOCodeEnum.SNOW_GRAIN_N],
    ['RAIN_SHOWER_SLIGHT_D', WMOCodeEnum.RAIN_SHOWER_SLIGHT_D],
    ['RAIN_SHOWER_SLIGHT_N', WMOCodeEnum.RAIN_SHOWER_SLIGHT_N],
    ['RAIN_SHOWER_MODERATE_D', WMOCodeEnum.RAIN_SHOWER_MODERATE_D],
    ['RAIN_SHOWER_MODERATE_N', WMOCodeEnum.RAIN_SHOWER_MODERATE_N],
    ['RAIN_SHOWER_VIOLENT_D', WMOCodeEnum.RAIN_SHOWER_VIOLENT_D],
    ['RAIN_SHOWER_VIOLENT_N', WMOCodeEnum.RAIN_SHOWER_VIOLENT_N],
    ['SNOW_SHOWER_SLIGHT_D', WMOCodeEnum.SNOW_SHOWER_SLIGHT_D],
    ['SNOW_SHOWER_SLIGHT_N', WMOCodeEnum.SNOW_SHOWER_SLIGHT_N],
    ['SNOW_SHOWER_HEAVY_D', WMOCodeEnum.SNOW_SHOWER_HEAVY_D],
    ['SNOW_SHOWER_HEAVY_N', WMOCodeEnum.SNOW_SHOWER_HEAVY_N],
    ['THUNDERSTORM_D', WMOCodeEnum.THUNDERSTORM_D],
    ['THUNDERSTORM_N', WMOCodeEnum.THUNDERSTORM_N],
    ['THUNDERSTORM_HAIL_SLIGHT_D', WMOCodeEnum.THUNDERSTORM_HAIL_SLIGHT_D],
    ['THUNDERSTORM_HAIL_SLIGHT_N', WMOCodeEnum.THUNDERSTORM_HAIL_SLIGHT_N],
    ['THUNDERSTORM_HAIL_HEAVY_D', WMOCodeEnum.THUNDERSTORM_HAIL_HEAVY_D],
    ['THUNDERSTORM_HAIL_HEAVY_N', WMOCodeEnum.THUNDERSTORM_HAIL_HEAVY_N],
    ['SUNRISE', WMOCodeEnum.SUNRISE],
    ['SUNSET', WMOCodeEnum.SUNSET],
  ]);

  readonly key: string;

  readonly name: string;

  readonly code: number;

  readonly type: DayNightType;

  readonly image: string;

  constructor(
    key: string,
    name: string,
    code: number,
    type: DayNightType,
    image: string
  ) {
    this.key = key;
    this.name = name;
    this.code = code;
    this.type = type;
    this.image = image;
  }

  static of(name: string): WMOCodeEnum {
    return this.mMap.get(name)!;
  }

  static values(): WMOCodeEnum[] {
    return Array.from(this.mMap.values());
  }

  static keys(): string[] {
    return Array.from(this.mMap.keys());
  }

  static findFromCode(
    code: number | undefined,
    type: DayNightType
  ): WMOCodeEnum {
    let Fkey = this.CLEAR_SKY_D;
    this.mMap.forEach((value: WMOCodeEnum, key: string) => {
      if (value.code === code && value.type === type) {
        Fkey = this.mMap.get(key) as WMOCodeEnum;
        return;
      }
    });
    return Fkey;
  }
}
