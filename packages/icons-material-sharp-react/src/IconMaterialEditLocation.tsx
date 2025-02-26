import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialEditLocation = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='EditLocation'

      short_name='EditLocation'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M340-420h58l156-157-57-57-157 156v58Zm243-186 39-39-57-57-39 39 57 57ZM480-186q122-112 181-203.5T720-552q0-109-69.5-178.5T480-800q-101 0-170.5 69.5T240-552q0 71 59 162.5T480-186Zm0 106Q319-217 239.5-334.5T160-552q0-150 96.5-239T480-880q127 0 223.5 89T800-552q0 100-79.5 217.5T480-80Zm0-480Z"/>
    </Icon>
  );
});

IconMaterialEditLocation.displayName = 'OnesyIconMaterialEditLocation';

export default IconMaterialEditLocation;
