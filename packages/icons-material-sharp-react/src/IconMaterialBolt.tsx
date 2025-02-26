import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialBolt = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Bolt'

      short_name='Bolt'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m422-232 207-248H469l29-227-185 267h139l-30 208ZM320-80l40-280H160l360-520h80l-40 320h240L400-80h-80Zm151-390Z"/>
    </Icon>
  );
});

IconMaterialBolt.displayName = 'OnesyIconMaterialBolt';

export default IconMaterialBolt;
