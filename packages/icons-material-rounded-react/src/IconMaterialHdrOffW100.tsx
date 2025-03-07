import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialHdrOffW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='HdrOffW100'

      short_name='HdrOff'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M776-144 142-778q-4-4-4.5-9.5T142-798q5-5 10-5t10 5l634 634q4 4 4.5 9.5T796-144q-5 5-10 5t-10-5Zm-92-312v66l-28-28v-144q0-9 7-15.5t16-6.5h85q24 0 42 18t18 42v8q0 21-13 36.5T780-458l28 63q3 7-1 13t-12 6q-4 0-7.5-2t-5.5-6l-32-72h-66Zm0-28h80q12 0 22-10t10-22v-8q0-12-10-22t-22-10h-80v72Zm-120-26-74-74h14q23 0 41.5 18t18.5 42v14Zm-400 34v86q0 6-4 10t-10 4q-6 0-10-4t-4-10v-180q0-6 4-10t10-4q6 0 10 4t4 10v66h112v-66q0-6 4-10t10-4q6 0 10 4t4 10v180q0 6-4 10t-10 4q-6 0-10-4t-4-10v-86H164Zm232-68 28 28v112h80q6 0 11.5-2.5T526-414l20 20q-8 8-19 13t-23 5h-85q-9 0-16-7t-7-16v-145Z"/>
    </Icon>
  );
});

IconMaterialHdrOffW100.displayName = 'OnesyIconMaterialHdrOffW100';

export default IconMaterialHdrOffW100;
