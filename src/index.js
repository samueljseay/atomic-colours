import {opacify} from 'polished';

// General UI Colours
export const WHITE = '#FFFFFF';
export const BLACK = '#000000';
export const BLACKISH = '#2D3034';

export const GREY_900 = '#343C46';
export const GREY_800 = '#363F49';
export const GREY_700 = '#434D59';
export const GREY_600 = '#646E7F';
export const GREY_500 = '#798293';
export const GREY_400 = '#939DAF';
export const GREY_300 = '#BDC4D0';
export const GREY_200 = '#DADEE5';

export const BLUE = '#2286FB';
export const BLUE_DARK = '#0E74E6';
export const IVORY = '#F0F2F3';
export const IVORY_WHITE = '#F4F4F4';

export const MINT = '#2ED8B1';
export const MINT_DARK = '#29CDA8';
export const MINT_DARKER = '#26AD8F';
export const CORAL = '#FF6969';
export const RED = '#F15354';

// Specific UI Element Colours
export const SNAPPING_PINK = '#FF00FF';
export const COMPONENT_PURPLE = '#9C66FD';
export const TIMELINE_YELLOW = '#FFE118';
export const ORG_PURPLE = '#BD47F2';
export const ORG_PURPLE_DARK = '#9031B3';

// Modifiers
export const inactive = (colour: string): string => opacify(-0.75, colour);
export const hover = (colour: string): string => opacify(-0.3, colour);
export const shadow = (colour: string): string => opacify(-0.75, colour);
export const active = (colour: string): string => colour;
export const selected = (colour: string): string => colour;
export const pressed = (colour: string): string => opacify(-0.1, colour);
export const disabled = (colour: string): string => opacify(-0.5, colour);

export const half = (colour: string): string => opacify(-0.5, colour);
export const quarter = (colour: string): string => opacify(-0.75, colour);
