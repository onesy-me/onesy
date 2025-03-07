import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialNestDetectW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='NestDetectW100'

      short_name='NestDetect'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M380-106q-48 0-81-33t-33-81v-574q0-25 17.5-42.5T326-854h108q25 0 42.5 17.5T494-794v574q0 48-33 81t-81 33Zm-86-189q20-21 41.5-30t44.5-9q23 0 44.5 9t41.5 30v-499q0-14-9-23t-23-9H326q-14 0-23 9t-9 23v499Zm86 161q35 0 60.5-25.5T466-220q0-35-25.5-60.5T380-306q-35 0-60.5 25.5T294-220q0 35 25.5 60.5T380-134Zm306-132q-25 0-42.5-17.5T626-326v-308q0-25 17.5-42.5T686-694h28q25 0 42.5 17.5T774-634v308q0 25-17.5 42.5T714-266h-28Zm0-28h28q14 0 23-9t9-23v-308q0-14-9-23t-23-9h-28q-14 0-23 9t-9 23v308q0 14 9 23t23 9ZM294-826h172-172Zm392 532h-32 92-60Z"/>
    </Icon>
  );
});

IconMaterialNestDetectW100.displayName = 'OnesyIconMaterialNestDetectW100';

export default IconMaterialNestDetectW100;
