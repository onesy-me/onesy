import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialVisibilityW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='VisibilityW100Filled'

      short_name='Visibility'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480.24-364q56.76 0 96.26-39.74 39.5-39.73 39.5-96.5 0-56.76-39.74-96.26-39.73-39.5-96.5-39.5-56.76 0-96.26 39.74-39.5 39.73-39.5 96.5 0 56.76 39.74 96.26 39.73 39.5 96.5 39.5Zm-.24-28q-45 0-76.5-31.5T372-500q0-45 31.5-76.5T480-608q45 0 76.5 31.5T588-500q0 45-31.5 76.5T480-392Zm0 140q-114 0-209.5-60T115-469q-5-8-7-15.55-2-7.55-2-15.5t2-15.45q2-7.5 7-15.5 60-97 155.5-157T480-748q114 0 209.5 60T845-531q5 8 7 15.55 2 7.55 2 15.5t-2 15.45q-2 7.5-7 15.5-60 97-155.5 157T480-252Z"/>
    </Icon>
  );
});

IconMaterialVisibilityW100Filled.displayName = 'OnesyIconMaterialVisibilityW100Filled';

export default IconMaterialVisibilityW100Filled;
