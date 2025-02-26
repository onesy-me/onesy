import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialSwipeLeftW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SwipeLeftW100'

      short_name='SwipeLeft'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M132-660v-168h28v106q82-62 161-91.5T483-843q112 0 205.5 49.5T828-660h-30q-48-72-132-113.5T483-815q-82 0-160 31t-159 96h136v28H132Zm303 528L212-354l29-27 145 35v-348h28v386l-160-43 192 191h274v-280h28v308H435Zm62-254v-174h28v174h-28Zm112 0v-134h28v134h-28Zm-32 113Z"/>
    </Icon>
  );
});

IconMaterialSwipeLeftW100.displayName = 'OnesyIconMaterialSwipeLeftW100';

export default IconMaterialSwipeLeftW100;
