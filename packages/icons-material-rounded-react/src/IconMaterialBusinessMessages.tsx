import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialBusinessMessages = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BusinessMessages'

      short_name='BusinessMessages'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M280-160q-33 0-56.5-23.5T200-240v-370L68-767q-8-10-3-21.5T83-800h717q33 0 56.5 23.5T880-720v480q0 33-23.5 56.5T800-160H280Zm0-560v480h520v-480H280Zm272 360h128q17 0 28.5-11.5T720-400q0-17-11.5-28.5T680-440H457q-27 0-37.5 24.5T428-372l84 84q11 11 28 11t28-11q11-11 11-28t-11-28l-16-16Zm-24-240H400q-17 0-28.5 11.5T360-560q0 17 11.5 28.5T400-520h223q27 0 37.5-24.5T652-588l-84-84q-11-11-28-11t-28 11q-11 11-11 28t11 28l16 16ZM280-720v480-480Z"/>
    </Icon>
  );
});

IconMaterialBusinessMessages.displayName = 'OnesyIconMaterialBusinessMessages';

export default IconMaterialBusinessMessages;
