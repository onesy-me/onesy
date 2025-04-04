import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialTempleBuddhistW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='TempleBuddhistW100Filled'

      short_name='TempleBuddhist'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m334-682 124-165q5-5 10.5-8t11.5-3q6 0 11.5 3t10.5 8l124 165H334Zm-68 160v-104q-45-9-75.5-36.5T149-733q0-6 4-10t10-4q6 0 10 4t4 10q10 33 38 56t64 23h402q36 0 64-23t38-56q0-6 4-10t10-4q6 0 10 4t4 10q-8 42-39 69.5T694-626v104H266Zm-80 388v-332q-45-7-76.5-35.5T69-573q0-6 4-10t10-4q6 0 10 4t4 10q10 33 38 56t64 23h562q36 0 64-23t38-56q0-6 4-10t10-4q6 0 10 4t4 10q-7 42-38.5 70.5T774-466v332q0 11-8.5 19.5T746-106H576q-13 0-21.5-8.5T546-136v-104q0-27-19.5-46.5T480-306q-27 0-46.5 19.5T414-240v104q0 13-8.5 21.5T384-106H214q-11 0-19.5-8.5T186-134Z"/>
    </Icon>
  );
});

IconMaterialTempleBuddhistW100Filled.displayName = 'OnesyIconMaterialTempleBuddhistW100Filled';

export default IconMaterialTempleBuddhistW100Filled;
