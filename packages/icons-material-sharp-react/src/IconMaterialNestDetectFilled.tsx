import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialNestDetectFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='NestDetectFilled'

      short_name='NestDetect'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M380-80q-58 0-99-41t-41-99v-580q0-33 23.5-56.5T320-880h120q33 0 56.5 23.5T520-800v580q0 58-41 99t-99 41Zm0-80q25 0 42.5-17.5T440-220q0-25-17.5-42.5T380-280q-25 0-42.5 17.5T320-220q0 25 17.5 42.5T380-160Zm300-80q-33 0-56.5-23.5T600-320v-320q0-33 23.5-56.5T680-720h40q33 0 56.5 23.5T800-640v320q0 33-23.5 56.5T720-240h-40Z"/>
    </Icon>
  );
});

IconMaterialNestDetectFilled.displayName = 'OnesyIconMaterialNestDetectFilled';

export default IconMaterialNestDetectFilled;
