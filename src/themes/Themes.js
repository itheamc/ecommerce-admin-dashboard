/**
 * Extra theme properties
 */
const extras = {
    font_size: {
        xx_small: '8px',
        x_small: '10px',
        small: '12px',
        medium: '14px',
        large: '16px',
        x_large: '18px',
        xx_large: '20px',
        xxx_large: '24px'
    },
    font_weight: {
        light: '300',
        regular: '400',
        medium: '500',
        bold: '700',
        bolder: '900'
    },
    padding: {
        xx_small: '4px',
        x_small: '8px',
        small: '12px',
        medium: '16px',
        large: '24px',
        x_large: '32px',
        xx_large: '48px'
    },
    margin: {
        xx_small: '4px',
        x_small: '8px',
        small: '12px',
        medium: '16px',
        large: '24px',
        x_large: '32px',
        xx_large: '48px'
    },
    border_radius: {
        x_small: '2px',
        small: '4px',
        medium: '8px',
        large: '16px',
        x_large: '32px',
        xx_large: '64px',
        circular: '50%'
    },
    border_width: {
        x_small: '0.5px',
        small: '1px',
        medium: '2px',
        large: '4px',
        x_large: '8px',
    },
    gap: {
        xx_small: '4px',
        x_small: '8px',
        small: '12px',
        medium: '16px',
        large: '24px',
        x_large: '32px',
        xx_large: '48px'
    }
};


/**
 * Light Theme Object
 */
export const lightTheme = {
    color: {
        primary: '#5126fe',
        secondary: '#fc2152',
        accent: '#fd6b02',
        background: '#e9f3fc',
        card_background: '#f7fcff',
        error: '#f44336',
        primary_button: '#7363ff',
        secondary_button: '#f8f9fa',
        primary_text: '#1d2452',
        secondary_text: '#9297ad',
        menu_item_text: '#9ba1b9',
        divider: '#e6e6e693',
        disabled: '#bdbdbd',
        nav_background: '#e9f3fc',
        sidebar_background: '#ffffff',
        selected_item_background: '#f2f5fe',
        selected_item_border: '#00bcd4',
    },
    ...extras,
};


/**
 * Dark Theme Object
 */
export const darkTheme = {
    color: {
        primary: '#5126fe',
        secondary: '#fc2152',
        accent: '#fd6b02',
        background: '#e9f3fc',
        card_background: '#f7fcff',
        error: '#f44336',
        primary_button: '#7363ff',
        secondary_button: '#f8f9fa',
        primary_text: '#1d2452',
        secondary_text: '#9297ad',
        menu_item_text: '#9ba1b9',
        divider: '#bdbdbd',
        disabled: '#bdbdbd',
        nav_background: '#212121',
        sidebar_background: '#212121',
        selected_item_background: '#f2f5fe',
        selected_item: '#00bcd4',
        selected_item_border: '#00bcd4',
    },
    ...extras,
};