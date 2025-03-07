import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialRotateLeftW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='RotateLeftW100'

      short_name='RotateLeft'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M440-132q-41-7-78.5-22.5T292-194l20-20q29 21 61.5 34t66.5 18v30Zm80 0v-28q104-17 172-95.5T760-438q0-117-81.5-198.5T480-718h-38l90 90-20 20-124-124 124-124 20 20-90 90h38q64 0 120 24t98 66q42 42 66 98t24 120q0 117-76.5 204T520-132ZM236-250q-25-33-41-70.5T174-398h28q6 35 19.5 67t34.5 61l-20 20Zm-62-228q6-43 22-80.5t40-67.5l20 20q-21 29-34.5 61T202-478h-28Z"/>
    </Icon>
  );
});

IconMaterialRotateLeftW100.displayName = 'OnesyIconMaterialRotateLeftW100';

export default IconMaterialRotateLeftW100;
