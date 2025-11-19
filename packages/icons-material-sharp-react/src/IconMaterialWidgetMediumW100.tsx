import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialWidgetMediumW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='WidgetMediumW100'

      short_name='WidgetMedium'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M132-132v-192h192v192H132Zm252 0v-192h192v192H384Zm252 0v-192h192v192H636ZM132-384v-192h192v192H132Zm252 0v-192h192v192H384Zm252 0v-192h192v192H636ZM132-636v-192h444v192H132Zm504 0v-192h192v192H636ZM296-296Zm116 0h136-136Zm252 0ZM296-412v-136 136Zm184-68Zm184 68v-136 136Zm0-252ZM160-160h136v-136H160v136Zm252 0h136v-136H412v136Zm252 0h136v-136H664v136ZM160-412h136v-136H160v136Zm252 0h136v-136H412v136Zm252 0h136v-136H664v136Zm0-252h136v-136H664v136Z"/>
    </Icon>
  );
});

IconMaterialWidgetMediumW100.displayName = 'OnesyIconMaterialWidgetMediumW100';

export default IconMaterialWidgetMediumW100;
