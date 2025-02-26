import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialPunchClock = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PunchClock'

      short_name='PunchClock'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M120-80v-640h120v-200h480v200h120v640H120Zm200-640h320v-120H320v120ZM200-160h560v-480H200v480Zm280-40q83 0 141.5-58.5T680-400q0-83-58.5-141.5T480-600q-83 0-141.5 58.5T280-400q0 83 58.5 141.5T480-200Zm0-60q-58 0-99-41t-41-99q0-58 41-99t99-41q58 0 99 41t41 99q0 58-41 99t-99 41Zm46-66 28-28-54-54v-92h-40v108l66 66Zm-46-74Z"/>
    </Icon>
  );
});

IconMaterialPunchClock.displayName = 'OnesyIconMaterialPunchClock';

export default IconMaterialPunchClock;
