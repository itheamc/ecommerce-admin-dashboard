/**
 * Extra theme properties
 */
const extras = {
    font_size: {
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
        small: '8px',
        medium: '16px',
        large: '24px',
        x_large: '32px',
        xx_large: '48px'
    },
    margin: {
        small: '8px',
        medium: '16px',
        large: '24px',
        x_large: '32px',
        xx_large: '48px'
    },
    border_radius: {
        small: '4px',
        medium: '8px',
        large: '16px',
        x_large: '32px',
        xx_large: '64px'
    },
    border_width: {
        small: '1px',
        medium: '2px',
        large: '4px',
        x_large: '8px',
    },
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
        divider: '#bdbdbd',
        disabled: '#bdbdbd',
        sidebar_background: '#ffffff',
        selected_item_background: '#f2f5fe',
        selected_item: '#00bcd4',
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
        sidebar_background: '#212121',
        selected_item_background: '#f2f5fe',
        selected_item: '#00bcd4',
        selected_item_border: '#00bcd4',
    },
    ...extras,
};