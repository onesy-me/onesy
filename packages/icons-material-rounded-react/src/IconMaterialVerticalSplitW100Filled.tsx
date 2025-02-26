import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialVerticalSplitW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='VerticalSplitW100Filled'

      short_name='VerticalSplit'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M186-394q-5.95 0-9.98-4.04-4.02-4.03-4.02-10 0-5.96 4.02-9.96 4.03-4 9.98-4h240q5.95 0 9.98 4.04 4.02 4.03 4.02 10 0 5.96-4.02 9.96-4.03 4-9.98 4H186Zm0 142q-5.95 0-9.98-4.04-4.02-4.03-4.02-10 0-5.96 4.02-9.96 4.03-4 9.98-4h240q5.95 0 9.98 4.04 4.02 4.03 4.02 10 0 5.96-4.02 9.96-4.03 4-9.98 4H186Zm0-286q-5.95 0-9.98-4.04-4.02-4.03-4.02-10 0-5.96 4.02-9.96 4.03-4 9.98-4h240q5.95 0 9.98 4.04 4.02 4.03 4.02 10 0 5.96-4.02 9.96-4.03 4-9.98 4H186Zm0-142q-5.95 0-9.98-4.04-4.02-4.03-4.02-10 0-5.96 4.02-9.96 4.03-4 9.98-4h240q5.95 0 9.98 4.04 4.02 4.03 4.02 10 0 5.96-4.02 9.96-4.03 4-9.98 4H186Zm446 428q-24.75 0-42.37-17.63Q572-287.25 572-312v-336q0-24.75 17.63-42.38Q607.25-708 632-708h96q24.75 0 42.38 17.62Q788-672.75 788-648v336q0 24.75-17.62 42.37Q752.75-252 728-252h-96Z"/>
    </Icon>
  );
});

IconMaterialVerticalSplitW100Filled.displayName = 'OnesyIconMaterialVerticalSplitW100Filled';

export default IconMaterialVerticalSplitW100Filled;
