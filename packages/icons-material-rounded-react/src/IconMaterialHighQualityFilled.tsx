import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialHighQualityFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='HighQualityFilled'

      short_name='HighQuality'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M590-360v30q0 13 8.5 21.5T620-300q13 0 21.5-8.5T650-330v-30h30q17 0 28.5-11.5T720-400v-160q0-17-11.5-28.5T680-600H560q-17 0-28.5 11.5T520-560v160q0 17 11.5 28.5T560-360h30Zm-290-80h80v50q0 13 8.5 21.5T410-360q13 0 21.5-8.5T440-390v-180q0-13-8.5-21.5T410-600q-13 0-21.5 8.5T380-570v70h-80v-70q0-13-8.5-21.5T270-600q-13 0-21.5 8.5T240-570v180q0 13 8.5 21.5T270-360q13 0 21.5-8.5T300-390v-50Zm280 20v-120h80v120h-80ZM160-160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h640q33 0 56.5 23.5T880-720v480q0 33-23.5 56.5T800-160H160Z"/>
    </Icon>
  );
});

IconMaterialHighQualityFilled.displayName = 'OnesyIconMaterialHighQualityFilled';

export default IconMaterialHighQualityFilled;
