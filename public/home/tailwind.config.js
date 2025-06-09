
// remember to use module.exports instead of tailwind.config in production
tailwind.config = 
   {
      // Note: config only includes the used styles & variables of your selection
      content: ["./src/**/*.{html,vue,svelte,js,ts,jsx,tsx}"],
      theme: {
        extend: {
          fontFamily: {
            'text-base-medium-font-family': "Manrope-Medium, sans-serif",
            'text-base-semi-bold-font-family': "Manrope-SemiBold, sans-serif",
            'text-sm-medium-font-family': "Manrope-Medium, sans-serif",
            'display-2xl-medium-font-family': "Manrope-Medium, sans-serif",
            'text-xl-regular-font-family': "Manrope-Regular, sans-serif",
            'text-lg-semi-bold-font-family': "Manrope-SemiBold, sans-serif",
            'text-md-regular-font-family': "Manrope-Regular, sans-serif",
            'display-xl-medium-font-family': "Manrope-Medium, sans-serif",
            'display-sm-medium-font-family': "Manrope-Medium, sans-serif",
            'text-lg-regular-font-family': "Manrope-Regular, sans-serif",
            'text-md-semi-bold-font-family': "Manrope-SemiBold, sans-serif",
            'text-xs-regular-font-family': "Manrope-Regular, sans-serif",
            'text-md-medium-font-family': "Manrope-Medium, sans-serif",
            'text-lg-medium-font-family': "Manrope-Medium, sans-serif",
            'display-xs-medium-font-family': "Manrope-Medium, sans-serif",
            'text-xs-medium-font-family': "Manrope-Medium, sans-serif",
            'display-xs-regular-font-family': "Manrope-Regular, sans-serif",
            'display-xs-semi-bold-font-family': "Manrope-SemiBold, sans-serif",
            'text-sm-regular-font-family': "Manrope-Regular, sans-serif",
            'text-md-regular-underlined-font-family': "Manrope-Regular, sans-serif",
            'text-xl-medium-font-family': "Manrope-Medium, sans-serif",
          },
          fontSize: {
            'text-base-medium-font-size': "15px",
            'text-base-semi-bold-font-size': "15px",
            'text-sm-medium-font-size': "14px",
            'display-2xl-medium-font-size': "72px",
            'text-xl-regular-font-size': "20px",
            'text-lg-semi-bold-font-size': "18px",
            'text-md-regular-font-size': "16px",
            'display-xl-medium-font-size': "58px",
            'display-sm-medium-font-size': "36px",
            'text-lg-regular-font-size': "18px",
            'text-md-semi-bold-font-size': "16px",
            'text-xs-regular-font-size': "12px",
            'text-md-medium-font-size': "16px",
            'text-lg-medium-font-size': "18px",
            'display-xs-medium-font-size': "24px",
            'text-xs-medium-font-size': "12px",
            'display-xs-regular-font-size': "24px",
            'display-xs-semi-bold-font-size': "24px",
            'text-sm-regular-font-size': "14px",
            'text-md-regular-underlined-font-size': "16px",
            'text-xl-medium-font-size': "20px",
          },
          fontWeight: {
            'text-base-medium-font-weight': "500",
            'text-base-semi-bold-font-weight': "600",
            'text-sm-medium-font-weight': "500",
            'display-2xl-medium-font-weight': "500",
            'text-xl-regular-font-weight': "400",
            'text-lg-semi-bold-font-weight': "600",
            'text-md-regular-font-weight': "400",
            'display-xl-medium-font-weight': "500",
            'display-sm-medium-font-weight': "500",
            'text-lg-regular-font-weight': "400",
            'text-md-semi-bold-font-weight': "600",
            'text-xs-regular-font-weight': "400",
            'text-md-medium-font-weight': "500",
            'text-lg-medium-font-weight': "500",
            'display-xs-medium-font-weight': "500",
            'text-xs-medium-font-weight': "500",
            'display-xs-regular-font-weight': "400",
            'display-xs-semi-bold-font-weight': "600",
            'text-sm-regular-font-weight': "400",
            'text-md-regular-underlined-font-weight': "400",
            'text-xl-medium-font-weight': "500",
          },
          lineHeight: {
            'text-base-medium-line-height': "24px",
            'text-base-semi-bold-line-height': "24px",
            'text-sm-medium-line-height': "20px",
            'display-2xl-medium-line-height': "80px",
            'text-xl-regular-line-height': "28px",
            'text-lg-semi-bold-line-height': "28px",
            'text-md-regular-line-height': "24px",
            'display-xl-medium-line-height': "64px",
            'display-sm-medium-line-height': "44px",
            'text-lg-regular-line-height': "28px",
            'text-md-semi-bold-line-height': "24px",
            'text-xs-regular-line-height': "18px",
            'text-md-medium-line-height': "24px",
            'text-lg-medium-line-height': "28px",
            'display-xs-medium-line-height': "32px",
            'text-xs-medium-line-height': "18px",
            'display-xs-regular-line-height': "32px",
            'display-xs-semi-bold-line-height': "32px",
            'text-sm-regular-line-height': "20px",
            'text-md-regular-underlined-line-height': "24px",
            'text-xl-medium-line-height': "28px", 
          },
          letterSpacing: {
             
          },
          borderRadius: {
              
          },
          colors: {
            'bg': '#0a0d14',
            'white': '#ffffff',
            'gray-300': '#c9cbce',
            'black': '#000000',
            'gray-600': '#454745',
            'green-900': '#002c15',
            'gray-400': '#a7a9ab',
            'lime-900': '#151c01',
            'green-600': '#00c805',
            'lime-300': '#c3f53c',
            'lime-200': '#d5f876',
            'green-800': '#005802',
            'gray-500': '#6a6c6a',
            'stroke-2': '#3c414c',
            
          },
          spacing: {
              
          },
          width: {
             
          },
          minWidth: {
             
          },
          maxWidth: {
             
          },
          height: {
             
          },
          minHeight: {
             
          },
          maxHeight: {
             
          }
        }
      }
    }

          