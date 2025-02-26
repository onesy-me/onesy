import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialSuperscriptW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SuperscriptW100'

      short_name='Superscript'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M728-600v-88h100v-32H728v-28h128v88H756v32h100v28H728ZM294-212l162-249-148-227h35l136 210 139-210h35L502-461l164 249h-35L479-444 329-212h-35Z"/>
    </Icon>
  );
});

IconMaterialSuperscriptW100.displayName = 'OnesyIconMaterialSuperscriptW100';

export default IconMaterialSuperscriptW100;
