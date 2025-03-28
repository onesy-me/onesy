import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialDataLossPrevention = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DataLossPrevention'

      short_name='DataLossPrevention'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M440-560q33 0 56.5-23.5T520-640q0-33-23.5-56.5T440-720q-33 0-56.5 23.5T360-640q0 33 23.5 56.5T440-560Zm0 160q45 0 84.5-19t68.5-54q-35-23-73.5-35T440-520q-41 0-79.5 12T287-473q29 35 68.5 54t84.5 19Zm0 160q-134 0-227-93t-93-227q0-134 93-227t227-93q134 0 227 93t93 227q0 56-18 105.5T692-364l160 160q11 11 11 28t-11 28q-11 11-28 11t-28-11L636-308q-41 32-90.5 50T440-240Zm0-80q100 0 170-70t70-170q0-100-70-170t-170-70q-100 0-170 70t-70 170q0 100 70 170t170 70Zm0-240Z"/>
    </Icon>
  );
});

IconMaterialDataLossPrevention.displayName = 'OnesyIconMaterialDataLossPrevention';

export default IconMaterialDataLossPrevention;
