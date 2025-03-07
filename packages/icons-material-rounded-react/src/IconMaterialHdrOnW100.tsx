import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialHdrOnW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='HdrOnW100'

      short_name='HdrOn'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M656-390v-172q0-9 7-15.5t16-6.5h85q24 0 42 18t18 42v8q0 17-10.5 33.5T780-458l28 63q3 7-1 13t-12 6q-4 0-7.71-2-3.7-2-5.29-6l-32-72h-66v66q0 6.07-3.95 10.03-3.96 3.97-10 3.97-6.05 0-10.05-3.97-4-3.96-4-10.03Zm28-94h80q12 0 22-10t10-22v-8q0-12-10-22t-22-10h-80v72Zm-520 8v86q0 6.07-3.95 10.03-3.96 3.97-10 3.97-6.05 0-10.05-3.97-4-3.96-4-10.03v-180q0-6.07 3.95-10.03 3.96-3.97 10-3.97 6.05 0 10.05 3.97 4 3.96 4 10.03v66h112v-66q0-6.07 3.95-10.03 3.96-3.97 10-3.97 6.05 0 10.05 3.97 4 3.96 4 10.03v180q0 6.07-3.95 10.03-3.96 3.97-10 3.97-6.05 0-10.05-3.97-4-3.96-4-10.03v-86H164Zm340 100h-85q-9 0-16-7t-7-16v-163q0-9 7-15.5t16-6.5h85q24 0 42 18t18 42v88q0 24-18 42t-42 18Zm-80-28h80q12 0 22-10t10-22v-88q0-12-10-22t-22-10h-80v152Z"/>
    </Icon>
  );
});

IconMaterialHdrOnW100.displayName = 'OnesyIconMaterialHdrOnW100';

export default IconMaterialHdrOnW100;
