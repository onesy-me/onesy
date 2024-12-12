import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialClosedCaptionFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ClosedCaptionFilled'

      short_name='ClosedCaption'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M120-160v-640h720v640H120Zm120-200h200v-80h-60v20h-80v-120h80v20h60v-80H240v240Zm280 0h200v-80h-60v20h-80v-120h80v20h60v-80H520v240Z"/>
    </Icon>
  );
});

IconMaterialClosedCaptionFilled.displayName = 'OnesyIconMaterialClosedCaptionFilled';

export default IconMaterialClosedCaptionFilled;
