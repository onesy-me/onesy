import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialSpoofFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SpoofFilled'

      short_name='Spoof'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M480 876q-131 0-243-66.5T63 627q-6-12-9-25t-3-26q0-13 3-26t9-25q62-116 174-182.5T480 276q131 0 243 66.5T897 525q6 12 9 25t3 26q0 13-3 26t-9 25q-62 116-174 182.5T480 876Zm0-80q96 0 178.5-42.5T796 636q-29-41-66-71.5T649 514q5 14 8 29.5t3 32.5q0 75-52.5 127.5T480 756q-75 0-127.5-52.5T300 576q0-17 3-32.5t8-29.5q-44 20-81 51t-66 71q55 75 137.5 117.5T480 796Zm0-120q42 0 71-29t29-71q0-42-29-71t-71-29q-42 0-71 29t-29 71q0 42 29 71t71 29ZM160 521q66-60 148.5-92.5T480 396q89 0 171.5 32.5T800 521q-54-77-138.5-121T480 356q-97 0-181.5 44T160 521Z"/>
    </Icon>
  );
});

IconMaterialSpoofFilled.displayName = 'OnesyIconMaterialSpoofFilled';

export default IconMaterialSpoofFilled;
