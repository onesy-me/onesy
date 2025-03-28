import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialEraserSize5 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='EraserSize5'

      short_name='EraserSize5'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M402-120q-118 0-200-82t-82-200q0-54 20-105.5t62-93.5l157-157q42-42 93.5-62T558-840q118 0 200 82t82 200q0 54-20 105.5T758-359L601-202q-42 42-93.5 62T402-120Z"/>
    </Icon>
  );
});

IconMaterialEraserSize5.displayName = 'OnesyIconMaterialEraserSize5';

export default IconMaterialEraserSize5;
