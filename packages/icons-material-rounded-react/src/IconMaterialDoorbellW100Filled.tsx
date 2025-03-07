import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialDoorbellW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DoorbellW100Filled'

      short_name='Doorbell'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480-274q14.45 0 24.23-9 9.77-9 11.77-23h-72q2 14 11.77 23 9.78 9 24.23 9Zm-130-52h260q5.6 0 9.8-4.2 4.2-4.2 4.2-9.8 0-5.6-4.2-9.8-4.2-4.2-9.8-4.2h-26v-89.91q0-42.09-20.5-76.59T504-566v-14q0-10.4-6.8-17.2-6.8-6.8-17.2-6.8-10.4 0-17.2 6.8-6.8 6.8-6.8 17.2v14q-39 11-59.5 45.46-20.5 34.45-20.5 76.57V-354h-26q-5.6 0-9.8 4.2-4.2 4.2-4.2 9.8 0 5.6 4.2 9.8 4.2 4.2 9.8 4.2Zm-138 94v-312q0-14.25 6.38-27 6.37-12.75 17.62-21l208-157q8.3-6 17.34-9 9.05-3 18.86-3 9.8 0 18.71 3 8.92 3 17.09 9l208 157q11.25 8.25 17.63 21 6.37 12.75 6.37 27v312q0 24.75-17.62 42.37Q712.75-172 688-172H272q-24.75 0-42.37-17.63Q212-207.25 212-232Z"/>
    </Icon>
  );
});

IconMaterialDoorbellW100Filled.displayName = 'OnesyIconMaterialDoorbellW100Filled';

export default IconMaterialDoorbellW100Filled;
