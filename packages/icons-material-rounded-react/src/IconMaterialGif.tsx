import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialGif = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Gif'

      short_name='Gif'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M490-360q-13 0-21.5-8.5T460-390v-180q0-13 8.5-21.5T490-600q13 0 21.5 8.5T520-570v180q0 13-8.5 21.5T490-360Zm-250 0q-18 0-29-12.5T200-400v-160q0-15 11-27.5t29-12.5h130q13 0 21.5 8.5T400-570q0 13-8.5 21.5T370-540H260v120h80v-30q0-13 8.5-21.5T370-480q13 0 21.5 8.5T400-450v50q0 15-11 27.5T360-360H240Zm370 0q-13 0-21.5-8.5T580-390v-180q0-13 8.5-21.5T610-600h120q13 0 21.5 8.5T760-570q0 13-8.5 21.5T730-540h-90v40h50q13 0 21.5 8.5T720-470q0 13-8.5 21.5T690-440h-50v50q0 13-8.5 21.5T610-360Z"/>
    </Icon>
  );
});

IconMaterialGif.displayName = 'OnesyIconMaterialGif';

export default IconMaterialGif;
