import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialWifiCallingFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='WifiCallingFilled'

      short_name='WifiCalling'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M798-120q-125 0-247-54.5T329-329Q229-429 174.5-551T120-798q0-18 12-30t30-12h162q14 0 25 9.5t13 22.5l26 140q2 16-1 27t-11 19l-97 98q20 37 47.5 71.5T387-386q31 31 65 57.5t72 48.5l94-94q9-9 23.5-13.5T670-390l138 28q14 4 23 14.5t9 23.5v162q0 18-12 30t-30 12ZM632-568 473-727q-14-14-12-33t19-29q42-26 88-38.5t92-12.5q45 0 90 13t88 39q17 11 19.5 29.5T846-726L688-568q-12 12-28 12t-28-12Z"/>
    </Icon>
  );
});

IconMaterialWifiCallingFilled.displayName = 'OnesyIconMaterialWifiCallingFilled';

export default IconMaterialWifiCallingFilled;
