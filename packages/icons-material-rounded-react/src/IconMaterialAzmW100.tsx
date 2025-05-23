import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialAzmW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AzmW100'

      short_name='Azm'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M502.96-215.96Q489-202 470.5-209.66 452-217.31 452-237v-183q0-14-9-23t-23-9H237q-19.69 0-27.34-18.5-7.66-18.5 6.3-32.46l226.96-226.96Q451-738 462.28-743t23.72-5h202q24.75 0 42.38 17.62Q748-712.75 748-688v202q0 12.44-5 23.72t-13.08 19.36L502.96-215.96ZM614-554v187l106-106v-215q0-14-9-23t-23-9H473L367-614h187q25.5 0 42.75 17.25T614-554ZM480-420v187l106-106v-215q0-14-9-23t-23-9H339L233-480h187q25.5 0 42.75 17.25T480-420Z"/>
    </Icon>
  );
});

IconMaterialAzmW100.displayName = 'OnesyIconMaterialAzmW100';

export default IconMaterialAzmW100;
