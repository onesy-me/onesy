import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialWarningW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='WarningW100Filled'

      short_name='Warning'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M181.84-172q-8.84 0-15.49-4.13Q159.7-180.25 156-187q-4.17-6.6-4.58-14.3-.42-7.7 4.42-15.73l298.32-513.94Q459-739 465.5-742.5T480-746q8 0 14.5 3.5t11.34 11.53l298.32 513.94q4.84 8.03 4.42 15.73-.41 7.7-4.58 14.3-3.7 6.75-10.35 10.87Q787-172 778.16-172H181.84ZM480-260q8.5 0 14.25-5.75T500-280q0-8.5-5.75-14.25T480-300q-8.5 0-14.25 5.75T460-280q0 8.5 5.75 14.25T480-260Zm.04-80q5.96 0 9.96-4.02 4-4.03 4-9.98v-172q0-5.95-4.04-9.97-4.03-4.03-10-4.03-5.96 0-9.96 4.03-4 4.02-4 9.97v172q0 5.95 4.04 9.98 4.03 4.02 10 4.02Z"/>
    </Icon>
  );
});

IconMaterialWarningW100Filled.displayName = 'OnesyIconMaterialWarningW100Filled';

export default IconMaterialWarningW100Filled;
