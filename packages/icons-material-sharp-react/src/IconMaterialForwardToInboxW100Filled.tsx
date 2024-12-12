import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialForwardToInboxW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ForwardToInboxW100Filled'

      short_name='ForwardToInbox'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m740-103-19-19 88-90H606v-28h204l-90-90 20-19 123 123-123 123ZM132-212v-536h696v353q-20-9-41.5-14t-43.5-5q-82 0-139.5 57.5T546-217v5H132Zm348-274 320-211-16-23-304 200-304-200-16 23 320 211Z"/>
    </Icon>
  );
});

IconMaterialForwardToInboxW100Filled.displayName = 'OnesyIconMaterialForwardToInboxW100Filled';

export default IconMaterialForwardToInboxW100Filled;
