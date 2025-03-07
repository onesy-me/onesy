import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialFormatQuoteOff = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FormatQuoteOff'

      short_name='FormatQuoteOff'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M819-84q-12 11-28 11.5T763-84L425-422l-94 162q-5 9-14 14.5t-20 5.5q-23 0-34.5-20t-.5-40l58-100q-66 0-113-47t-47-113q0-27 8.5-51t23.5-44L84-763q-11-11-11-27.5T84-819q12-12 28.5-12t28.5 12l679 679q12 12 11.5 28T819-84ZM320-500q6 0 12-1t11-3l-79-79q-2 5-3 11t-1 12q0 25 17.5 42.5T320-500Zm360 0q25 0 42.5-17.5T740-560q0-25-17.5-42.5T680-620q-25 0-42.5 17.5T620-560q0 25 17.5 42.5T680-500Zm-374-41Zm374-19Zm19 186L539-534q-10-10-14.5-22t-4.5-25q0-26 15-52t39-47q21-19 48-29.5t58-10.5q66 0 113 47t47 113q0 21-5.5 41.5T818-480l-56 98q-10 17-29.5 19.5T699-374Z"/>
    </Icon>
  );
});

IconMaterialFormatQuoteOff.displayName = 'OnesyIconMaterialFormatQuoteOff';

export default IconMaterialFormatQuoteOff;
