import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialClosedCaptionDisabledFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ClosedCaptionDisabledFilled'

      short_name='ClosedCaptionDisabled'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M120-160v-567l-93-93 57-57L876-85l-57 57-132-132H120Zm720-75L715-360h5v-80h-60v20h-5l-75-75v-45h80v20h60v-80H520v45L275-800h565v565ZM240-360h200v-47l-33-33h-27v20h-80v-127l-45-45h-15v232Z"/>
    </Icon>
  );
});

IconMaterialClosedCaptionDisabledFilled.displayName = 'OnesyIconMaterialClosedCaptionDisabledFilled';

export default IconMaterialClosedCaptionDisabledFilled;
