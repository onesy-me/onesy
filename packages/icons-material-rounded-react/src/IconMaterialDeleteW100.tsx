import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialDeleteW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DeleteW100'

      short_name='Delete'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M312-172q-24.75 0-42.37-17.63Q252-207.25 252-232v-488h-26q-5.95 0-9.98-4.04-4.02-4.03-4.02-10 0-5.96 4.02-9.96 4.03-4 9.98-4h134q0-11 8.5-19.5T388-776h184q11 0 19.5 8.5T600-748h134q5.95 0 9.97 4.04 4.03 4.03 4.03 10 0 5.96-4.03 9.96-4.02 4-9.97 4h-26v488q0 24.75-17.62 42.37Q672.75-172 648-172H312Zm368-548H280v488q0 14 9 23t23 9h336q14 0 23-9t9-23v-488ZM416.04-280q5.96 0 9.96-4.02 4-4.03 4-9.98v-332q0-5.95-4.04-9.97-4.03-4.03-10-4.03-5.96 0-9.96 4.03-4 4.02-4 9.97v332q0 5.95 4.04 9.98 4.03 4.02 10 4.02Zm128 0q5.96 0 9.96-4.02 4-4.03 4-9.98v-332q0-5.95-4.04-9.97-4.03-4.03-10-4.03-5.96 0-9.96 4.03-4 4.02-4 9.97v332q0 5.95 4.04 9.98 4.03 4.02 10 4.02ZM280-720v520-520Z"/>
    </Icon>
  );
});

IconMaterialDeleteW100.displayName = 'OnesyIconMaterialDeleteW100';

export default IconMaterialDeleteW100;
