import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialFrontHand = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FrontHand'

      short_name='FrontHand'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480-480v-440h80v440h-80Zm-160 0v-400h80v400h-80ZM500-40q-142 0-241-99t-99-241v-420h80v420q0 109 75.5 184.5T500-120q109 0 184.5-75.5T760-380v-140q-17 0-28.5 11.5T720-480v160H600q-33 0-56.5 23.5T520-240v40h-80v-40q0-66 47-113t113-47h40v-440h80v247q10-3 19.5-5t20.5-2h80v220q0 142-99 241T500-40Zm40-320Z"/>
    </Icon>
  );
});

IconMaterialFrontHand.displayName = 'OnesyIconMaterialFrontHand';

export default IconMaterialFrontHand;
