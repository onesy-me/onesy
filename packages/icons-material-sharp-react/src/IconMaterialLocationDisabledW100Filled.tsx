import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialLocationDisabledW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='LocationDisabledW100Filled'

      short_name='LocationDisabled'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m742-316-20-20q17-30 27.5-68.5T760-478q0-116-82-198t-198-82q-36 0-73 10.5T340-720l-20-20q35-21 69.5-31t76.5-15v-52h28v52q125 11 204 90t90 204h52v28h-52q-5 42-15 77.5T742-316ZM466-118v-52q-125-11-204-90t-90-204h-52v-28h52q5-54 23-101.5t47-82.5L136-782l20-20 648 648-22 20-104-106q-35 29-82.5 47T494-170v52h-28Zm14-80q48 0 98-19t80-43L262-656q-24 30-43 78.5T200-478q0 116 82 198t198 82Z"/>
    </Icon>
  );
});

IconMaterialLocationDisabledW100Filled.displayName = 'OnesyIconMaterialLocationDisabledW100Filled';

export default IconMaterialLocationDisabledW100Filled;
