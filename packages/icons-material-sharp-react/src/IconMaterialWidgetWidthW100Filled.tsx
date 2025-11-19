import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialWidgetWidthW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='WidgetWidthW100Filled'

      short_name='WidgetWidth'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M132-132v-192h192v192H132Zm252 0v-192h192v192H384Zm252 0v-192h192v192H636ZM132-384v-192h192v192H132Zm252 0v-192h192v192H384Zm252 0v-192h192v192H636ZM132-636v-192h696v192H132Z"/>
    </Icon>
  );
});

IconMaterialWidgetWidthW100Filled.displayName = 'OnesyIconMaterialWidgetWidthW100Filled';

export default IconMaterialWidgetWidthW100Filled;
