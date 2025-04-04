import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialTokenFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='TokenFilled'

      short_name='Token'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M364-590q22-23 51.5-36.5T480-640q35 0 64.5 13.5T596-590l202-113-279-155q-18-11-39-11t-39 11L162-703l202 113Zm76 488v-223q-52-14-86-56.5T320-480q0-11 1-21t4-19L120-635v308q0 22 11 40.5t30 29.5l279 155Zm40-298q33 0 56.5-23.5T560-480q0-33-23.5-56.5T480-560q-33 0-56.5 23.5T400-480q0 33 23.5 56.5T480-400Zm40 298 279-155q19-11 30-29.5t11-40.5v-308L635-520q3 10 4 19.5t1 20.5q0 56-34 98.5T520-325v223Z"/>
    </Icon>
  );
});

IconMaterialTokenFilled.displayName = 'OnesyIconMaterialTokenFilled';

export default IconMaterialTokenFilled;
