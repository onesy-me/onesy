import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialFormatLetterSpacingWiderFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FormatLetterSpacingWiderFilled'

      short_name='FormatLetterSpacingWider'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M120-160q-17 0-28.5-11.5T80-200v-560q0-17 11.5-28.5T120-800q17 0 28.5 11.5T160-760v560q0 17-11.5 28.5T120-160Zm720 0q-17 0-28.5-11.5T800-200v-560q0-17 11.5-28.5T840-800q17 0 28.5 11.5T880-760v560q0 17-11.5 28.5T840-160ZM341-280q-17 0-27-14t-4-30l126-334q4-10 12-16t19-6h26q11 0 19 6t12 16l126 335q6 16-3.5 29.5T620-280q-11 0-19-6t-12-16l-28-80H399l-29 81q-3 10-11 15.5t-18 5.5Zm79-160h120l-58-166h-4l-58 166Z"/>
    </Icon>
  );
});

IconMaterialFormatLetterSpacingWiderFilled.displayName = 'OnesyIconMaterialFormatLetterSpacingWiderFilled';

export default IconMaterialFormatLetterSpacingWiderFilled;
