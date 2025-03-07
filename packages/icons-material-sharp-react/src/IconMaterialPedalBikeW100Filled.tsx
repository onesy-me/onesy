import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialPedalBikeW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PedalBikeW100Filled'

      short_name='PedalBike'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M200-186q-74 0-124-50T26-360q0-72 51-124t123-52q66 0 117 46.5T374-374h84l-90-252h-62v-28h148v28h-56l32 90h250l-77-210h-97v-28h117l87 238h50q72 0 123 51t51 123q0 72-51 123t-123 51q-68 0-117-45.5T586-346H374q-6 69-57.5 114.5T200-186Zm26-160h120v-28H226v28Zm264-28h96q3-29 22.5-71.5T666-508H440l50 134Zm246-6 26-10-42-112-24 10 40 112Z"/>
    </Icon>
  );
});

IconMaterialPedalBikeW100Filled.displayName = 'OnesyIconMaterialPedalBikeW100Filled';

export default IconMaterialPedalBikeW100Filled;
