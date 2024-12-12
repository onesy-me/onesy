import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialIframeW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='IframeW100'

      short_name='Iframe'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M444-404h232v-112H444v112Zm-28 28v-168h288v168H416ZM132-212v-536h696v536H132Zm28-28h640v-400H160v400Z"/>
    </Icon>
  );
});

IconMaterialIframeW100.displayName = 'OnesyIconMaterialIframeW100';

export default IconMaterialIframeW100;
