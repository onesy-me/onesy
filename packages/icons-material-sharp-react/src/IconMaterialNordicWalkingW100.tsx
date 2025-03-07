import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialNordicWalkingW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='NordicWalkingW100'

      short_name='NordicWalking'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m183-66 69-318h28L211-66h-28Zm131 0 112-582-132 55v127h-28v-146l177-73q27-11 48-6.5t35 25.5l39 63q26 42 70 71t99 36v28q-61-5-115-41t-92-102l-39 199 86 83v263h-28v-223L420-410 342-66h-28Zm226-690q-26 0-45-19t-19-45q0-26 19-45t45-19q26 0 45 19t19 45q0 26-19 45t-45 19ZM716-66v-318h28v318h-28Z"/>
    </Icon>
  );
});

IconMaterialNordicWalkingW100.displayName = 'OnesyIconMaterialNordicWalkingW100';

export default IconMaterialNordicWalkingW100;
