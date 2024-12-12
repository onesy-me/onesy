import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialClosedCaptionDisabled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ClosedCaptionDisabled'

      short_name='ClosedCaptionDisabled'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m361-600 60 60H300v120h80v-20h60v80H240v-240h121Zm-86-200h565v565l-80-80v-405H355l-80-80Zm445 360v80h-5l-60-60h5v-20h60Zm-60-80v-20h-80v45l-60-60v-45h200v80h-60Zm-102 2Zm-154 75v-1 1ZM168-793l73 73h-41v480h407L27-820l57-57L876-85l-57 57-132-132H120v-633h48Z"/>
    </Icon>
  );
});

IconMaterialClosedCaptionDisabled.displayName = 'OnesyIconMaterialClosedCaptionDisabled';

export default IconMaterialClosedCaptionDisabled;
