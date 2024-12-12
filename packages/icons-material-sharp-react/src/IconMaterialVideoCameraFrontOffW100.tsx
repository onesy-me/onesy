import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialVideoCameraFrontOffW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='VideoCameraFrontOffW100'

      short_name='VideoCameraFrontOff'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M806-350 696-460v90l-28-28v-322H346l-28-28h378v248l110-110v260Zm-44 200L118-794l20-20 644 644-20 20ZM507-559Zm-77 77ZM206-746l26 26h-44v480h480v-44l26 26v46H160v-534h46Zm95 390v-2q0-28 35.5-47t88.5-19q53 0 88.5 19t35.5 47v2H301Z"/>
    </Icon>
  );
});

IconMaterialVideoCameraFrontOffW100.displayName = 'OnesyIconMaterialVideoCameraFrontOffW100';

export default IconMaterialVideoCameraFrontOffW100;
