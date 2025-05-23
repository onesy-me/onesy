import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialTapAndPlayFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='TapAndPlayFilled'

      short_name='TapAndPlay'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M200-520v-400h560v880h-80v-680H280v200h-80Zm0 480v-80q33 0 56.5 23.5T280-40h-80Zm160 0q0-66-47-113t-113-47v-80q100 0 170 70t70 170h-80Zm160 0q0-134-93-227t-227-93v-80q83 0 156 31.5T483-323q54 54 85.5 127T600-40h-80Z"/>
    </Icon>
  );
});

IconMaterialTapAndPlayFilled.displayName = 'OnesyIconMaterialTapAndPlayFilled';

export default IconMaterialTapAndPlayFilled;
