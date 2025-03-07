import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialToken = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Token'

      short_name='Token'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480-92q-10 0-20-2.5t-19-7.5L161-257q-19-11-30-29.5T120-327v-306q0-22 11-40.5t30-29.5l280-155q9-5 19-7.5t20-2.5q10 0 20 2.5t19 7.5l280 155q19 11 30 29.5t11 40.5v306q0 22-11 40.5T799-257L519-102q-9 5-19 7.5T480-92ZM364-590q22-23 51.5-36.5T480-640q35 0 64.5 13.5T596-590l120-67-236-131-236 131 120 67Zm76 396v-131q-52-14-86-56.5T320-480q0-11 1-21t4-19l-125-70v263l240 133Zm40-206q33 0 56.5-23.5T560-480q0-33-23.5-56.5T480-560q-33 0-56.5 23.5T400-480q0 33 23.5 56.5T480-400Zm40 206 240-133v-263l-125 70q3 10 4 19.5t1 20.5q0 56-34 98.5T520-325v131Z"/>
    </Icon>
  );
});

IconMaterialToken.displayName = 'OnesyIconMaterialToken';

export default IconMaterialToken;
