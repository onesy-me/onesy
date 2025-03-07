import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialRoundaboutLeftW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='RoundaboutLeftW100'

      short_name='RoundaboutLeft'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M599-186v-172q0-20 13-34.5t33-18.5q67-11 110.5-59T799-584q0-72-52-124t-124-52q-66 0-114 44t-59 110q-4 20-18.5 33T397-560H186l80 80q4 4 4.5 9.5T266-460q-5 5-10 5t-10-5l-93-93q-5-5-7-10t-2-11q0-6 2-11t7-10l93-93q4-4 9.5-4.5T266-688q5 5 5 10t-5 10l-80 80h213q8 0 14-6t8-14q13-76 68.5-128T623-788q85 0 144.5 59.5T827-584q0 78-52.5 133T647-383q-8 2-14 8.5t-6 14.5v174q0 6-4 10t-10 4q-6 0-10-4t-4-10Z"/>
    </Icon>
  );
});

IconMaterialRoundaboutLeftW100.displayName = 'OnesyIconMaterialRoundaboutLeftW100';

export default IconMaterialRoundaboutLeftW100;
