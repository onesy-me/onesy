import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialMystery = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Mystery'

      short_name='Mystery'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M440-240q116 0 198-81.5T720-520q0-116-82-198t-198-82q-117 0-198.5 82T160-520q0 117 81.5 198.5T440-240Zm0-280Zm0 160q-72 0-133.5-38.5T210-501q-5-9-5-19t5-19q35-64 96.5-102.5T440-680q72 0 133 39t96 102q5 9 5 19t-5 19q-35 64-96 102.5T440-360Zm0-60q55 0 101-26.5t72-73.5q-26-46-72-73t-101-27q-56 0-102 27t-72 73q26 47 72 73.5T440-420Zm0-40q25 0 42.5-17t17.5-43q0-25-17.5-42.5T440-580q-26 0-43 17.5T380-520q0 26 17 43t43 17Zm0 300q-75 0-140.5-28.5t-114-77q-48.5-48.5-77-114T80-520q0-74 28.5-139.5t77-114.5q48.5-49 114-77.5T440-880q74 0 139.5 28.5T694-774q49 49 77.5 114.5T800-520q0 64-21 121t-58 104l131 131q12 12 11.5 28T851-108q-12 11-28 11t-28-11L664-238q-47 37-104 57.5T440-160Z"/>
    </Icon>
  );
});

IconMaterialMystery.displayName = 'OnesyIconMaterialMystery';

export default IconMaterialMystery;
