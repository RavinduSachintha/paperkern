export enum ThemeCompSizes {
  LARGE = 'LARGE',
  MEDIUM = 'MEDIUM',
  SMALL = 'SMALL',
}

export enum ButtonThemes {
  STD_PRIMARY_MD = 'STD_PRIMARY_MD',
  STD_SECONDARY_MD = 'STD_SECONDARY_MD',
  STD_PRIMARY_SM = 'STD_PRIMARY_SM',
  STD_SECONDARY_SM = 'STD_SECONDARY_SM',
  STD_PRIMARY_LG = 'STD_PRIMARY_LG',
  STD_SECONDARY_LG = 'STD_SECONDARY_LG',
}

export const ButtonThemeTemplates = {
  STD_PRIMARY_MD: {
    mode: 'primary-light',
    border: true,
    shadow: true,
    size: 'medium',
  },
  STD_SECONDARY_MD: {
    mode: 'secondary-light',
    border: true,
    shadow: false,
    size: 'medium',
  },
  STD_PRIMARY_SM: {
    mode: 'primary-light',
    border: true,
    shadow: true,
    size: 'small',
  },
  STD_SECONDARY_SM: {
    mode: 'secondary-light',
    border: true,
    shadow: false,
    size: 'small',
  },
  STD_PRIMARY_LG: {
    mode: 'primary-light',
    border: true,
    shadow: true,
    size: 'large',
  },
  STD_SECONDARY_LG: {
    mode: 'secondary-light',
    border: true,
    shadow: false,
    size: 'large',
  },
};
