import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialWidgetsW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='WidgetsW100Filled'

      short_name='Widgets'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M627-515 517-625q-5-5-7-10.13-2-5.14-2-11 0-5.87 2-10.87 2-5 7-10l110-110q5-5 10.13-7 5.14-2 11-2 5.87 0 10.87 2 5 2 10 7l110 110q5 5 7 10.13 2 5.14 2 11 0 5.87-2 10.87-2 5-7 10L669-515q-5 5-10.13 7-5.14 2-11 2-5.87 0-10.87-2-5-2-10-7Zm-423-55v-156q0-12.75 8.63-21.38Q221.25-756 234-756h156q12.75 0 21.38 8.62Q420-738.75 420-726v156q0 12.75-8.62 21.37Q402.75-540 390-540H234q-12.75 0-21.37-8.63Q204-557.25 204-570Zm336 336v-156q0-12.75 8.63-21.38Q557.25-420 570-420h156q12.75 0 21.38 8.62Q756-402.75 756-390v156q0 12.75-8.62 21.37Q738.75-204 726-204H570q-12.75 0-21.37-8.63Q540-221.25 540-234Zm-336 0v-156q0-12.75 8.63-21.38Q221.25-420 234-420h156q12.75 0 21.38 8.62Q420-402.75 420-390v156q0 12.75-8.62 21.37Q402.75-204 390-204H234q-12.75 0-21.37-8.63Q204-221.25 204-234Z"/>
    </Icon>
  );
});

IconMaterialWidgetsW100Filled.displayName = 'OnesyIconMaterialWidgetsW100Filled';

export default IconMaterialWidgetsW100Filled;
