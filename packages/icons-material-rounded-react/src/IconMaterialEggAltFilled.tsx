import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialEggAltFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='EggAltFilled'

      short_name='EggAlt'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M640-80q-67 0-101.5-22.5T480-150q-19-20-36.5-35T399-200q-45 0-100-15.5t-103.5-51Q147-302 114-359T80-499q-2-167 82.5-274T399-880q71 0 120 20.5t84.5 51.5q35.5 31 60 68.5T710-667q12 20 24 36.5t26 30.5q60 60 90 105t30 136q0 120-74.5 199.5T640-80ZM480-340q58 0 99-41t41-99q0-58-41-99t-99-41q-58 0-99 41t-41 99q0 58 41 99t99 41Z"/>
    </Icon>
  );
});

IconMaterialEggAltFilled.displayName = 'OnesyIconMaterialEggAltFilled';

export default IconMaterialEggAltFilled;
