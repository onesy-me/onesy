import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialBorderStyleW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BorderStyleW100Filled'

      short_name='BorderStyle'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M768-604q-8.5 0-14.25-5.75T748-624q0-8.5 5.75-14.25T768-644q8.5 0 14.25 5.75T788-624q0 8.5-5.75 14.25T768-604Zm0 144q-8.5 0-14.25-5.75T748-480q0-8.5 5.75-14.25T768-500q8.5 0 14.25 5.75T788-480q0 8.5-5.75 14.25T768-460Zm0 144q-8.5 0-14.25-5.75T748-336q0-8.5 5.75-14.25T768-356q8.5 0 14.25 5.75T788-336q0 8.5-5.75 14.25T768-316ZM336-172q-8.5 0-14.25-5.75T316-192q0-8.5 5.75-14.25T336-212q8.5 0 14.25 5.75T356-192q0 8.5-5.75 14.25T336-172Zm144 0q-8.5 0-14.25-5.75T460-192q0-8.5 5.75-14.25T480-212q8.5 0 14.25 5.75T500-192q0 8.5-5.75 14.25T480-172Zm144 0q-8.5 0-14.25-5.75T604-192q0-8.5 5.75-14.25T624-212q8.5 0 14.25 5.75T644-192q0 8.5-5.75 14.25T624-172Zm144 0q-8.5 0-14.25-5.75T748-192q0-8.5 5.75-14.25T768-212q8.5 0 14.25 5.75T788-192q0 8.5-5.75 14.25T768-172Zm-596-14v-542q0-24.75 17.63-42.38Q207.25-788 232-788h542q5.95 0 9.97 4.04 4.03 4.03 4.03 10 0 5.96-4.03 9.96-4.02 4-9.97 4H232q-14 0-23 9t-9 23v542q0 5.95-4.04 9.98-4.03 4.02-10 4.02-5.96 0-9.96-4.02-4-4.03-4-9.98Z"/>
    </Icon>
  );
});

IconMaterialBorderStyleW100Filled.displayName = 'OnesyIconMaterialBorderStyleW100Filled';

export default IconMaterialBorderStyleW100Filled;
