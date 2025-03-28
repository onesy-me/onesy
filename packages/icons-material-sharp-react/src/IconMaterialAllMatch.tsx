import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialAllMatch = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AllMatch'

      short_name='AllMatch'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m266-280 130-200-130-200 130 200-20.5 31Q355-418 331-380.5t-44.5 69L266-280Zm-146 80 180-280-180-280h522l185 261q-27-11-55.5-16.5T714-520L600-680H266l130 200-130 200h177q-3 20-3 40t3 40H120Zm571 50 139-138-42-42-97 95-39-39-42 43 81 81Zm29 110q-83 0-141.5-58.5T520-240q0-83 58.5-141.5T720-440q83 0 141.5 58.5T920-240q0 83-58.5 141.5T720-40Z"/>
    </Icon>
  );
});

IconMaterialAllMatch.displayName = 'OnesyIconMaterialAllMatch';

export default IconMaterialAllMatch;
