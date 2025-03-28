import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialPinEndW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PinEndW100'

      short_name='PinEnd'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M192-212q-26 0-43-17t-17-43v-416q0-26 17-43t43-17h576q26 0 43 17t17 43v180q0 5.95-4.04 9.98-4.03 4.02-10 4.02-5.96 0-9.96-4.02-4-4.03-4-9.98v-180q0-14-9-23t-23-9H192q-14 0-23 9t-9 23v416q0 14 9 23t23 9h340q5.95 0 9.97 4.04 4.03 4.03 4.03 10 0 5.96-4.03 9.96-4.02 4-9.97 4H192Zm241-374 172 171q5 3.75 5 9.37 0 5.63-4.78 10.63-5.22 5-10.22 5-5 0-10-5L414-566v112q0 5.95-4.04 9.98-4.03 4.02-10 4.02-5.96 0-9.96-4.02-4-4.03-4-9.98v-130q0-12.75 8.63-21.38Q403.25-614 416-614h130q5.95 0 9.97 4.04 4.03 4.03 4.03 10 0 5.96-4.03 9.96-4.02 4-9.97 4H433Zm305 374q-37.5 0-63.75-26.25T648-302q0-37.5 26.25-63.75T738-392q37.5 0 63.75 26.25T828-302q0 37.5-26.25 63.75T738-212Z"/>
    </Icon>
  );
});

IconMaterialPinEndW100.displayName = 'OnesyIconMaterialPinEndW100';

export default IconMaterialPinEndW100;
