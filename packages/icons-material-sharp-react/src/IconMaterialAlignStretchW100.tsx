import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialAlignStretchW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AlignStretchW100'

      short_name='AlignStretch'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M306-586v-214H132v-28h696v28H654v214H306ZM132-132v-28h174v-214h348v214h174v28H132Z"/>
    </Icon>
  );
});

IconMaterialAlignStretchW100.displayName = 'OnesyIconMaterialAlignStretchW100';

export default IconMaterialAlignStretchW100;
