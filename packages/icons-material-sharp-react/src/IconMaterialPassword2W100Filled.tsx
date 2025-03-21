import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialPassword2W100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Password2W100Filled'

      short_name='Password2'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M181.06-459Q144-459 118-485.15q-26-26.14-26-63.5 0-37.35 25.94-62.85t63-25.5Q218-637 244-611.33q26 25.66 26 62.33 0 37.5-25.94 63.75t-63 26.25ZM132-240v-40h696v40H132Zm348.06-220Q443-460 417-485.94t-26-63Q391-586 416.94-612t63-26Q517-638 543-612.06t26 63Q569-512 543.06-486t-63 26Zm299 0Q742-460 716-485.94t-26-63Q690-586 715.94-612t63-26Q816-638 842-612.06t26 63Q868-512 842.06-486t-63 26Z"/>
    </Icon>
  );
});

IconMaterialPassword2W100Filled.displayName = 'OnesyIconMaterialPassword2W100Filled';

export default IconMaterialPassword2W100Filled;
