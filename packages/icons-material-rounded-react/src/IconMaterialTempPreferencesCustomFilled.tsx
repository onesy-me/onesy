import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialTempPreferencesCustomFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='TempPreferencesCustomFilled'

      short_name='TempPreferencesCustom'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m19 9-1.25-2.75L15 5l2.75-1.25L19 1l1.25 2.75L23 5l-2.75 1.25Zm0 14-1.25-2.75L15 19l2.75-1.25L19 15l1.25 2.75L23 19l-2.75 1.25ZM9 20l-2.5-5.5L1 12l5.5-2.5L9 4l2.5 5.5L17 12l-5.5 2.5Z"/>
    </Icon>
  );
});

IconMaterialTempPreferencesCustomFilled.displayName = 'OnesyIconMaterialTempPreferencesCustomFilled';

export default IconMaterialTempPreferencesCustomFilled;
