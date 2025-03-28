import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialBacklightLowW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BacklightLowW100'

      short_name='BacklightLow'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M126-386q-5.95 0-9.97-4.04-4.03-4.03-4.03-10 0-5.96 4.03-9.96 4.02-4 9.97-4h60q5.95 0 9.98 4.04 4.02 4.03 4.02 10 0 5.96-4.02 9.96-4.03 4-9.98 4h-60Zm156-212q-4 4-9.67 4-5.66 0-9.33-4l-44-44q-4-4-4-9t4-9q4-4 9.67-4 5.66 0 9.33 4l44 44q4 4 4 9t-4 9Zm58 306q-14.17 0-24.08-9.88-9.92-9.88-9.92-24t9.92-24.12q9.91-10 24.08-10h280q14.17 0 24.08 9.88 9.92 9.88 9.92 24T644.08-302q-9.91 10-24.08 10H340Zm139.96-388q-5.96 0-9.96-4.03-4-4.02-4-9.97v-60q0-5.95 4.04-9.97 4.03-4.03 10-4.03 5.96 0 9.96 4.03 4 4.02 4 9.97v60q0 5.95-4.04 9.97-4.03 4.03-10 4.03ZM676-599q-4-4-3.5-10t4.5-10l43-42q4-4 10-4t10.17 5q3.83 5 3.83 10.5t-5 9.5l-43 41q-4 4-10 4.5t-10-4.5Zm98 213q-5.95 0-9.97-4.04-4.03-4.03-4.03-10 0-5.96 4.03-9.96 4.02-4 9.97-4h60q5.95 0 9.97 4.04 4.03 4.03 4.03 10 0 5.96-4.03 9.96-4.02 4-9.97 4h-60Z"/>
    </Icon>
  );
});

IconMaterialBacklightLowW100.displayName = 'OnesyIconMaterialBacklightLowW100';

export default IconMaterialBacklightLowW100;
