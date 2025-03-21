import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialInputW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='InputW100Filled'

      short_name='Input'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M192-212q-26 0-43-17t-17-43v-60q0-6 4-10t10-4q6 0 10 4t4 10v60q0 12 10 22t22 10h576q12 0 22-10t10-22v-416q0-12-10-22t-22-10H192q-12 0-22 10t-10 22v60q0 6-4 10t-10 4q-6 0-10-4t-4-10v-60q0-26 17-43t43-17h576q26 0 43 17t17 43v416q0 26-17 43t-43 17H192Zm358-254H146q-6 0-10-4t-4-10q0-6 4-10t10-4h404l-80-80q-4-4-4.5-9.5T470-594q5-5 10-5t10 5l93 93q9 9 9 21t-9 21l-93 93q-4 4-9.5 4.5T470-366q-5-5-5-10t5-10l80-80Z"/>
    </Icon>
  );
});

IconMaterialInputW100Filled.displayName = 'OnesyIconMaterialInputW100Filled';

export default IconMaterialInputW100Filled;
