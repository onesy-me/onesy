import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialUpload2W100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Upload2W100'

      short_name='Upload2'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M226-160h508q5.95 0 9.97 4.04 4.03 4.03 4.03 10 0 5.96-4.03 9.96-4.02 4-9.97 4H226q-5.95 0-9.98-4.04-4.02-4.03-4.02-10 0-5.96 4.02-9.96 4.03-4 9.98-4Zm197-120q-12.75 0-21.37-8.63Q393-297.25 393-310v-239h-62q-18.62 0-26.81-16.5Q296-582 307-597l149-199q4.5-6 10.88-9 6.37-3 13.12-3 6.75 0 13.13 3 6.37 3 10.87 9l148 199q11 15 2.81 31.5T628-549h-62v239q0 12.75-8.62 21.37Q548.75-280 536-280H423Zm-2-28h117v-270h92L480-782 329-578h92v270Zm59-270Z"/>
    </Icon>
  );
});

IconMaterialUpload2W100.displayName = 'OnesyIconMaterialUpload2W100';

export default IconMaterialUpload2W100;
