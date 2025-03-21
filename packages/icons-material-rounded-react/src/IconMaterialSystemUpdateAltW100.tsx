import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialSystemUpdateAltW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SystemUpdateAltW100'

      short_name='SystemUpdateAlt'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M192-212q-26 0-43-17t-17-43v-416q0-26 17-43t43-17h140q6 0 10 4t4 10q0 6-4 10t-10 4H192q-12 0-22 10t-10 22v416q0 12 10 22t22 10h576q12 0 22-10t10-22v-416q0-12-10-22t-22-10H628q-6 0-10-4t-4-10q0-6 4-10t10-4h140q26 0 43 17t17 43v416q0 26-17 43t-43 17H192Zm274-212v-310q0-6 4-10t10-4q6 0 10 4t4 10v310l120-120q4-4 9.5-4.5T634-544q5 5 5 10t-5 10L501-391q-9 9-21 9t-21-9L326-524q-4-4-4.5-9.5T326-544q5-5 10-5t10 5l120 120Z"/>
    </Icon>
  );
});

IconMaterialSystemUpdateAltW100.displayName = 'OnesyIconMaterialSystemUpdateAltW100';

export default IconMaterialSystemUpdateAltW100;
