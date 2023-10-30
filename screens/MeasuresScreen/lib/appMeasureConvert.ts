import configureMeasurements, {
  area,
  length,
  volume,
  speed,
  mass,
  temperature,
  energy,
  pressure,
  type LengthSystems,
  type AreaSystems,
  type LengthUnits,
  type AreaUnits,
  type VolumeSystems,
  type SpeedSystems,
  type MassSystems,
  type TemperatureSystems,
  type EnergySystems,
  type PressureSystems,
  type VolumeUnits,
  type SpeedUnits,
  type MassUnits,
  type TemperatureUnits,
  type EnergyUnits,
  type PressureUnits,
} from 'convert-units';

// Measures: The names of the measures being used
export type Measures =
  | 'length'
  | 'area'
  | 'volume'
  | 'speed'
  | 'mass'
  | 'temperature'
  | 'energy'
  | 'pressure';
// Systems: The systems being used across all measures
export type Systems =
  | LengthSystems
  | AreaSystems
  | VolumeSystems
  | SpeedSystems
  | MassSystems
  | TemperatureSystems
  | EnergySystems
  | PressureSystems;
// Units: All the units across all measures and their systems
export type Units =
  | LengthUnits
  | AreaUnits
  | VolumeUnits
  | SpeedUnits
  | MassUnits
  | TemperatureUnits
  | EnergyUnits
  | PressureUnits;

export const appMeasureConvert = configureMeasurements<
  Measures,
  Systems,
  Units
>({
  length,
  area,
  volume,
  speed,
  mass,
  temperature,
  energy,
  pressure,
});

export function convertUnit(value: string, fromUnit: string, toUnit: string) {
  return appMeasureConvert(parseFloat(value))
    .from(fromUnit as Units)
    .to(toUnit as Units)
    .toString();
}
