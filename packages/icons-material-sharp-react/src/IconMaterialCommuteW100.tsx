import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialCommuteW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CommuteW100'

      short_name='Commute'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M463-244v70h-28v-234l56.39-160H795l56 160v234h-28v-70H463Zm12-192h336l-36-104H511l-36 104Zm-12 28v136-136Zm64 98q14.45 0 24.22-9.77Q561-329.55 561-344q0-14.45-9.78-24.23Q541.45-378 527-378t-24.23 9.77Q493-358.45 493-344q0 14.45 9.77 24.23Q512.55-310 527-310Zm232 0q14.45 0 24.22-9.77Q793-329.55 793-344q0-14.45-9.78-24.23Q773.45-378 759-378t-24.22 9.77Q725-358.45 725-344q0 14.45 9.78 24.23Q744.55-310 759-310ZM189-186v-4l76-76q-58 0-107-21.5T109-360v-346q0-33 60-50.5T343-774q114 0 174 17.5t60 50.5v58h-28v-58H137v292h218v228H189Zm14-140q14.45 0 24.23-9.77Q237-345.55 237-360q0-14.45-9.77-24.23Q217.45-394 203-394q-14.45 0-24.23 9.77Q169-374.45 169-360q0 14.45 9.77 24.23Q188.55-326 203-326Zm260 54h360v-136H463v136Z"/>
    </Icon>
  );
});

IconMaterialCommuteW100.displayName = 'OnesyIconMaterialCommuteW100';

export default IconMaterialCommuteW100;
