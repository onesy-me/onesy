import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialAlignFlexCenterFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AlignFlexCenterFilled'

      short_name='AlignFlexCenter'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480-80q-17 0-28.5-11.5T440-120v-300H160q-17 0-28.5-11.5T120-460v-40q0-17 11.5-28.5T160-540h280v-300q0-17 11.5-28.5T480-880q17 0 28.5 11.5T520-840v300h280q17 0 28.5 11.5T840-500v40q0 17-11.5 28.5T800-420H520v300q0 17-11.5 28.5T480-80Z"/>
    </Icon>
  );
});

IconMaterialAlignFlexCenterFilled.displayName = 'OnesyIconMaterialAlignFlexCenterFilled';

export default IconMaterialAlignFlexCenterFilled;
