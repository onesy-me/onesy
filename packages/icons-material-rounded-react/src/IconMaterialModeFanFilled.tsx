import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialModeFanFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ModeFanFilled'

      short_name='ModeFan'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M424-80q-51 0-77.5-30.5T320-180q0-26 11.5-50.5T367-271q22-14 35.5-36t18.5-47l-12-6q-6-3-11-7l-92 33q-17 6-33 10t-33 4q-63 0-111.5-55T80-536q0-51 30.5-77.5T179-640q26 0 51 11.5t41 35.5q14 22 36 35.5t47 18.5l6-12q3-6 7-11l-33-92q-6-17-10-33t-4-32q0-64 55-112.5T536-880q51 0 77.5 30.5T640-781q0 26-11.5 51T593-689q-22 14-35.5 36T539-606l12 6q6 3 11 7l92-34q17-6 32.5-9.5T719-640q81 0 121 67t40 149q0 51-32 77.5T777-320q-25 0-48.5-11.5T689-367q-14-22-36-35.5T606-421l-6 12q-3 6-7 11l33 92q6 16 10 30.5t4 30.5q1 65-54 115T424-80Zm56-340q25 0 42.5-17.5T540-480q0-25-17.5-42.5T480-540q-25 0-42.5 17.5T420-480q0 25 17.5 42.5T480-420Z"/>
    </Icon>
  );
});

IconMaterialModeFanFilled.displayName = 'OnesyIconMaterialModeFanFilled';

export default IconMaterialModeFanFilled;
