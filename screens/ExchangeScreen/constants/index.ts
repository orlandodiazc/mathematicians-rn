import { Input, Unit } from 'types';

export const defaultValues: Input[] = [
  {
    id: 0,
    unit: { abbr: 'COP', plural: 'Colombian Peso' },
    value: '5000',
  },
  {
    id: 1,
    unit: { abbr: 'USD', plural: 'US Dollar' },
    value: '1',
  },
];

export const exchangeList: Unit[] = [
  {
    abbr: 'USD',
    plural: 'US Dollar',
  },
  {
    abbr: 'COP',
    plural: 'Colombian Peso',
  },
  {
    abbr: 'CNY',
    plural: 'Chinese Yuan Renminbi',
  },
  {
    abbr: 'HKD',
    plural: 'Hong Kong Dollar',
  },
  {
    abbr: 'CAD',
    plural: 'Canadian Dollar',
  },
  {
    abbr: 'GBP',
    plural: 'Pound Sterling',
  },
  {
    abbr: 'JPY',
    plural: 'Japanese Yen',
  },
  {
    abbr: 'KRW',
    plural: 'South Korean Won',
  },
  {
    abbr: 'EUR',
    plural: 'Euro',
  },
  {
    abbr: 'INR',
    plural: 'Indian Rupee',
  },
  {
    abbr: 'SGD',
    plural: 'Singapore Dollar',
  },
  {
    abbr: 'ARS',
    plural: 'Argentine Peso',
  },
  {
    abbr: 'AUD',
    plural: 'Australian Dollar',
  },
  {
    abbr: 'BRL',
    plural: 'Brazilian Real',
  },
  {
    abbr: 'BGN',
    plural: 'Bulgarian Lev',
  },
  {
    abbr: 'CLP',
    plural: 'Chilean Peso',
  },
  {
    abbr: 'CRC',
    plural: 'Costa Rican Colon',
  },
  {
    abbr: 'CZK',
    plural: 'Czech Koruna',
  },
  {
    abbr: 'DKK',
    plural: 'Danish Krone',
  },
  {
    abbr: 'MXN',
    plural: 'Mexican Peso',
  },
  {
    abbr: 'NZD',
    plural: 'New Zealand Dollar',
  },
  {
    abbr: 'NOK',
    plural: 'Norwegian Kroner',
  },
  {
    abbr: 'SAR',
    plural: 'Saudi Riyal',
  },
  {
    abbr: 'CHF',
    plural: 'Swiss Franc',
  },
  {
    abbr: 'TRY',
    plural: 'Turkish Lira',
  },
];
