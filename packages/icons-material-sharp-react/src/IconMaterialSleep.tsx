import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialSleep = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Sleep'

      short_name='Sleep'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M483 976q-84 0-157.5-32t-128-86.5Q143 803 111 729.5T79 572q0-146 93-257.5T409 176q-18 99 11 193.5T520 535q71 71 165.5 100T879 646q-26 144-138 237t-258 93Zm0-80q88 0 163-44t118-121q-86-8-163-43.5T463 591q-61-61-97-138t-43-163q-77 43-120.5 118.5T159 572q0 135 94.5 229.5T483 896Zm-20-305Zm257-95-50-110-110-50 110-50 50-110 50 110 110 50-110 50-50 110Z"/>
    </Icon>
  );
});

IconMaterialSleep.displayName = 'OnesyIconMaterialSleep';

export default IconMaterialSleep;
