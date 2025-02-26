import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialResume = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Resume'

      short_name='Resume'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M240-240v-480h80v480h-80Zm160 0 400-240-400-240v480Zm80-141v-198l165 99-165 99Zm0-99Z"/>
    </Icon>
  );
});

IconMaterialResume.displayName = 'OnesyIconMaterialResume';

export default IconMaterialResume;
