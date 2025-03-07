import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialNoiseControlOn = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='NoiseControlOn'

      short_name='NoiseControlOn'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm39-80q-39 0-70-24t-45-62q-3-8-6.5-15.5T388-355l-50-51q-26-26-42-60t-16-72q0-75 52.5-128.5T460-720q52 0 95.5 27.5T622-618q10 20-1.5 39T586-560q-12 0-21.5-6.5T550-584q-13-26-37-41t-53-15q-42 0-71 29t-29 71q0 21 7.5 40t22.5 34l55 54q14 14 22.5 30.5T482-347q5 12 15 19.5t23 7.5q11 0 20.5-5.5T555-341q5-9 14-14t20-5q23 0 35 19t1 39q-16 29-44.5 45.5T519-240Zm21-160q25 0 42.5-17.5T600-460q0-25-17.5-42.5T540-520q-25 0-42.5 17.5T480-460q0 25 17.5 42.5T540-400Z"/>
    </Icon>
  );
});

IconMaterialNoiseControlOn.displayName = 'OnesyIconMaterialNoiseControlOn';

export default IconMaterialNoiseControlOn;
