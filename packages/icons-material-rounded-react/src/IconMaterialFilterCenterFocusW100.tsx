import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialFilterCenterFocusW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FilterCenterFocusW100'

      short_name='FilterCenterFocus'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M232-172q-26 0-43-17t-17-43v-114q0-6 4-10t10-4q6 0 10 4t4 10v114q0 12 10 22t22 10h114q6 0 10 4t4 10q0 6-4 10t-10 4H232Zm496 0H614q-6 0-10-4t-4-10q0-6 4-10t10-4h114q12 0 22-10t10-22v-114q0-6 4-10t10-4q6 0 10 4t4 10v114q0 26-17 43t-43 17ZM172-614v-114q0-26 17-43t43-17h114q6 0 10 4t4 10q0 6-4 10t-10 4H232q-12 0-22 10t-10 22v114q0 6-4 10t-10 4q-6 0-10-4t-4-10Zm588 0v-114q0-12-10-22t-22-10H614q-6 0-10-4t-4-10q0-6 4-10t10-4h114q26 0 43 17t17 43v114q0 6-4 10t-10 4q-6 0-10-4t-4-10ZM480-412q-29 0-48.5-19.5T412-480q0-29 19.5-48.5T480-548q29 0 48.5 19.5T548-480q0 29-19.5 48.5T480-412Zm0-28q17 0 28.5-11.5T520-480q0-17-11.5-28.5T480-520q-17 0-28.5 11.5T440-480q0 17 11.5 28.5T480-440Z"/>
    </Icon>
  );
});

IconMaterialFilterCenterFocusW100.displayName = 'OnesyIconMaterialFilterCenterFocusW100';

export default IconMaterialFilterCenterFocusW100;
