import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialNatW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='NatW100Filled'

      short_name='Nat'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M175-386q-39 0-66.5-27.5T81-480q0-39 27.5-66.5T175-574q35 0 61.5 22.5T269-494h138q6 0 10 4t4 10q0 6-4 10t-10 4H269q-6 35-32.5 57.5T175-386Zm0-28q27 0 46.5-19.5T241-480q0-27-19.5-46.5T175-546q-27 0-46.5 19.5T109-480q0 27 19.5 46.5T175-414Zm366-66q0-134-87-224t-217-96q-7 0-11.5-4t-4.5-10q0-6 5.5-10t12.5-4q143 7 235 103.5T569-494h256l-80-80q-4-4-4.5-9.5T745-594q5-5 10-5t10 5l93 93q5 5 7 10t2 11q0 6-2 11t-7 10l-93 93q-4 4-9.5 4.5T745-366q-5-5-5-10t5-10l80-80H569q-3 134-95 230.5T239-132q-7 0-12.5-4t-5.5-10q0-6 4.5-10t11.5-4q130-6 217-96t87-224Z"/>
    </Icon>
  );
});

IconMaterialNatW100Filled.displayName = 'OnesyIconMaterialNatW100Filled';

export default IconMaterialNatW100Filled;
