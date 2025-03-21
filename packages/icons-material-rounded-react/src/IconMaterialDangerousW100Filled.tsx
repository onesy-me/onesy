import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialDangerousW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DangerousW100Filled'

      short_name='Dangerous'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M377-172q-12 0-23.5-5T334-190L190-334q-8-8-13-19.5t-5-23.5v-206q0-12 5-23.5t13-19.5l144-144q8-8 19.5-13t23.5-5h206q12 0 23.5 5t19.5 13l144 144q8 8 13 19.5t5 23.5v206q0 12-5 23.5T770-334L626-190q-8 8-19.5 13t-23.5 5H377Zm103-288 104 104q4 4 9.5 4.5T604-356q5-5 5-10t-5-10L500-480l104-104q4-4 4.5-9.5T604-604q-5-5-10-5t-10 5L480-500 376-604q-4-4-9.5-4.5T356-604q-5 5-5 10t5 10l104 104-104 104q-4 4-4.5 9.5T356-356q5 5 10 5t10-5l104-104Z"/>
    </Icon>
  );
});

IconMaterialDangerousW100Filled.displayName = 'OnesyIconMaterialDangerousW100Filled';

export default IconMaterialDangerousW100Filled;
