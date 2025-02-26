import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialAutoAwesomeMotionW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AutoAwesomeMotionW100'

      short_name='AutoAwesomeMotion'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M452-132v-376h376v376H452Zm28-28h320v-320H480v320ZM292-280v-388h388v28H320v360h-28ZM132-440v-388h388v28H160v360h-28Zm348 280v-320 320Z"/>
    </Icon>
  );
});

IconMaterialAutoAwesomeMotionW100.displayName = 'OnesyIconMaterialAutoAwesomeMotionW100';

export default IconMaterialAutoAwesomeMotionW100;
