import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialOwlFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='OwlFilled'

      short_name='Owl'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M340-560q-17 0-28.5-11.5T300-600q0-17 11.5-28.5T340-640q17 0 28.5 11.5T380-600q0 17-11.5 28.5T340-560Zm280 0q-17 0-28.5-11.5T580-600q0-17 11.5-28.5T620-640q17 0 28.5 11.5T660-600q0 17-11.5 28.5T620-560ZM480-80q-134 0-227-93t-93-227v-200q0-122 96-201t224-79q128 0 224 79t96 201v400q0 17-11.5 28.5T760-160h-40q-50 0-85-35t-35-85v-2q0-20-12.5-30T560-322q-15 0-27.5 10T520-282v2q0 48 21 89t56 68q15 11 10.5 27T588-80H480Zm0-320q95 0 167.5-55.5T720-600q0-35-12-65.5T674-720q-64 2-109 48t-45 112q0 17-11.5 28.5T480-520q-17 0-28.5-11.5T440-560q0-66-45-111t-109-48q-22 24-34 54t-12 65q0 89 72.5 144.5T480-400Z"/>
    </Icon>
  );
});

IconMaterialOwlFilled.displayName = 'OnesyIconMaterialOwlFilled';

export default IconMaterialOwlFilled;
