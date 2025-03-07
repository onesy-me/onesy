import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialDialerSip = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DialerSip'

      short_name='DialerSip'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M500-640q-8 0-14-6t-6-14q0-8 6-14t14-6h60v-40h-60q-8 0-14-6t-6-14v-80q0-8 6-14t14-6h80q8 0 14 6t6 14q0 8-6 14t-14 6h-60v40h60q8 0 14 6t6 14v80q0 8-6 14t-14 6h-80Zm160 0q-8 0-14-6t-6-14v-160q0-8 6-14t14-6q8 0 14 6t6 14v160q0 8-6 14t-14 6Zm80 0q-8 0-14-6t-6-14v-160q0-8 6-14t14-6h80q8 0 14 6t6 14v80q0 8-6 14t-14 6h-60v60q0 8-6 14t-14 6Zm20-120h40v-40h-40v40Zm38 640q-125 0-247-54.5T329-329Q229-429 174.5-551T120-798q0-18 12-30t30-12h162q14 0 25 9.5t13 22.5l26 140q2 16-1 27t-11 19l-97 98q20 37 47.5 71.5T387-386q31 31 65 57.5t72 48.5l94-94q9-9 23.5-13.5T670-390l138 28q14 4 23 14.5t9 23.5v162q0 18-12 30t-30 12ZM241-600l66-66-17-94h-89q5 41 14 81t26 79Zm358 358q39 17 79.5 27t81.5 13v-88l-94-19-67 67ZM241-600Zm358 358Z"/>
    </Icon>
  );
});

IconMaterialDialerSip.displayName = 'OnesyIconMaterialDialerSip';

export default IconMaterialDialerSip;
