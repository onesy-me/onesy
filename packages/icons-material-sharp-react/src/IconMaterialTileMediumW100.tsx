import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialTileMediumW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='TileMediumW100'

      short_name='TileMedium'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M172-252v-178h258v178H172Zm358 0v-178h258v178H530ZM172-530v-178h616v178H172Zm28 250h202v-122H200v122Zm358 0h202v-122H558v122Zm-257-61Zm358 0Z"/>
    </Icon>
  );
});

IconMaterialTileMediumW100.displayName = 'OnesyIconMaterialTileMediumW100';

export default IconMaterialTileMediumW100;
