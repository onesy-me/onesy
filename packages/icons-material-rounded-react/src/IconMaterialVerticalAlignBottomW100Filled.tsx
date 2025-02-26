import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialVerticalAlignBottomW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='VerticalAlignBottomW100Filled'

      short_name='VerticalAlignBottom'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M226-172q-5.95 0-9.98-4.04-4.02-4.03-4.02-10 0-5.96 4.02-9.96 4.03-4 9.98-4h508q5.95 0 9.97 4.04 4.03 4.03 4.03 10 0 5.96-4.03 9.96-4.02 4-9.97 4H226Zm253.87-156q-5.87 0-10.87-2-5-2-10-7L326-470q-4-4-4.5-9.5T326-490q5-5 10-5t10 5l120 120v-404q0-5.95 4.04-9.97 4.03-4.03 10-4.03 5.96 0 9.96 4.03 4 4.02 4 9.97v404l120-120q4-4 9.5-4.5T634-490q5 5 5 10t-5 10L501-337q-5 5-10.13 7-5.14 2-11 2Z"/>
    </Icon>
  );
});

IconMaterialVerticalAlignBottomW100Filled.displayName = 'OnesyIconMaterialVerticalAlignBottomW100Filled';

export default IconMaterialVerticalAlignBottomW100Filled;
