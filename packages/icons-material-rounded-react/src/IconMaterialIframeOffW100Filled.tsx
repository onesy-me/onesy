import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialIframeOffW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='IframeOffW100Filled'

      short_name='IframeOff'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M192-212q-25 0-42.5-17.5T132-272v-416q0-25 17.5-42.5T192-748h20v40L100-820q-4-4-4.5-9.5T100-840q5-5 10-5t10 5L862-98q4 4 4.5 9.5T862-78q-5 5-10 5t-10-5L708-212H192Zm0-28h488L280-640H160v368q0 14 9 23t23 9Zm636-448v420q0 7-4.5 10.5T814-254q-5 0-9.5-3.5T800-268v-372H457q-12 0-23.5-5T414-658l-39-39q-7-8-8.5-16.5T368-730q3-8 10.5-13t17.5-5h372q25 0 42.5 17.5T828-688ZM720-530v106q0 20-18.5 27.5T669-403L563-509q-14-14-6.5-32.5T584-560h106q13 0 21.5 8.5T720-530Z"/>
    </Icon>
  );
});

IconMaterialIframeOffW100Filled.displayName = 'OnesyIconMaterialIframeOffW100Filled';

export default IconMaterialIframeOffW100Filled;
