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
      <path d="M520-240q51 0 85.5-35t34.5-85h-80q0 17-11.5 28.5T520-320q-13 0-23-7.5T482-348q-6-17-14.5-33.5T445-412l-54-54q-15-15-23-34.5t-8-39.5q0-42 29-71t71-29q36 0 63.5 22.5T558-560h81q-8-69-59-114.5T460-720q-75 0-127.5 52.5T280-540q0 37 14 70.5t40 59.5l55 55q7 7 10.5 15.5T406-322q13 36 44.5 59t69.5 23Zm20-160q26 0 43-17.5t17-42.5q0-26-17-43t-43-17q-25 0-42.5 17T480-460q0 25 17.5 42.5T540-400ZM480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Z"/>
    </Icon>
  );
});

IconMaterialNoiseControlOn.displayName = 'OnesyIconMaterialNoiseControlOn';

export default IconMaterialNoiseControlOn;
