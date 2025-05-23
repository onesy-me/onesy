import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialCallSplitW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CallSplitW100'

      short_name='CallSplit'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M240-700v126q0 5.95-4.04 9.97-4.03 4.03-10 4.03-5.96 0-9.96-4.03-4-4.02-4-9.97v-144q0-12.75 8.63-21.38Q229.25-748 242-748h144q5.95 0 9.98 4.04 4.02 4.03 4.02 10 0 5.96-4.02 9.96-4.03 4-9.98 4H260l216 216q8 8 13 19.28 5 11.28 5 23.72v235q0 5.95-4.04 9.98-4.03 4.02-10 4.02-5.96 0-9.96-4.02-4-4.03-4-9.98v-235q0-6-2-11.5t-7-10.5L240-700Zm480 0L568-548q-4 4-9.5 4.5T548-548q-5-5-5-10t5-10l152-152H574q-5.95 0-9.97-4.04-4.03-4.03-4.03-10 0-5.96 4.03-9.96 4.02-4 9.97-4h144q12.75 0 21.38 8.62Q748-730.75 748-718v144q0 5.95-4.04 9.97-4.03 4.03-10 4.03-5.96 0-9.96-4.03-4-4.02-4-9.97v-126Z"/>
    </Icon>
  );
});

IconMaterialCallSplitW100.displayName = 'OnesyIconMaterialCallSplitW100';

export default IconMaterialCallSplitW100;
