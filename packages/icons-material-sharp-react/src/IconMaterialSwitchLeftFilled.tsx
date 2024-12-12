import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialSwitchLeftFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SwitchLeftFilled'

      short_name='SwitchLeft'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M400-200 120-480l280-280v560Zm-60-145v-270L205-480l135 135Zm220 145v-560l280 280-280 280Z"/>
    </Icon>
  );
});

IconMaterialSwitchLeftFilled.displayName = 'OnesyIconMaterialSwitchLeftFilled';

export default IconMaterialSwitchLeftFilled;
