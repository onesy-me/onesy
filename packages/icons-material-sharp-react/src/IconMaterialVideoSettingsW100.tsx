import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialVideoSettingsW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='VideoSettingsW100'

      short_name='VideoSettings'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M132-212v-536h696v228h-28v-200H160v480h320v28H132Zm274-136v-264l206 132-206 132Zm308 194-2-27q-26-5-42-15t-30-25l-24 13-18-24 23-18q-9-24-9-46t9-46l-23-18 18-24 24 13q14-15 30-25t42-15l2-27h28l2 27q26 5 42 15t30 25l24-13 18 24-23 18q9 24 9 46t-9 46l23 18-18 24-24-13q-14 15-30 25t-42 15l-2 27h-28Zm14-54q36 0 62-26t26-62q0-36-26-62t-62-26q-36 0-62 26t-26 62q0 36 26 62t62 26Z"/>
    </Icon>
  );
});

IconMaterialVideoSettingsW100.displayName = 'OnesyIconMaterialVideoSettingsW100';

export default IconMaterialVideoSettingsW100;
