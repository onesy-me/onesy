import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialNightlight = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Nightlight'

      short_name='Nightlight'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M560-80q-83 0-156-31.5T277-197q-54-54-85.5-127T160-480q0-83 31.5-156T277-763q54-54 127-85.5T560-880q35 0 70 7t67 21q12 5 18 15.5t6 21.5q0 9-3.5 17T706-784q-70 55-108 135t-38 169q0 90 37 170t108 134q8 6 11.5 14.5T720-144q0 11-6 21.5T696-107q-32 14-66.5 20.5T560-80Zm0-80h21q10 0 19-2-57-66-88.5-147.5T480-480q0-89 31.5-170.5T600-798q-9-2-19-2h-21q-133 0-226.5 93.5T240-480q0 133 93.5 226.5T560-160Zm-80-320Z"/>
    </Icon>
  );
});

IconMaterialNightlight.displayName = 'OnesyIconMaterialNightlight';

export default IconMaterialNightlight;
