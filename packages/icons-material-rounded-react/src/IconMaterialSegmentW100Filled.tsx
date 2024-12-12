import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialSegmentW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SegmentW100Filled'

      short_name='Segment'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M426-278q-5.95 0-9.98-4.04-4.02-4.03-4.02-10 0-5.96 4.02-9.96 4.03-4 9.98-4h348q5.95 0 9.97 4.04 4.03 4.03 4.03 10 0 5.96-4.03 9.96-4.02 4-9.97 4H426Zm0-188q-5.95 0-9.98-4.04-4.02-4.03-4.02-10 0-5.96 4.02-9.96 4.03-4 9.98-4h348q5.95 0 9.97 4.04 4.03 4.03 4.03 10 0 5.96-4.03 9.96-4.02 4-9.97 4H426ZM186-654q-5.95 0-9.98-4.04-4.02-4.03-4.02-10 0-5.96 4.02-9.96 4.03-4 9.98-4h588q5.95 0 9.97 4.04 4.03 4.03 4.03 10 0 5.96-4.03 9.96-4.02 4-9.97 4H186Z"/>
    </Icon>
  );
});

IconMaterialSegmentW100Filled.displayName = 'OnesyIconMaterialSegmentW100Filled';

export default IconMaterialSegmentW100Filled;
