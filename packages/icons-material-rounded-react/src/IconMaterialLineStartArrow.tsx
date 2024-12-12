import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialLineStartArrow = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='LineStartArrow'

      short_name='LineStartArrow'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M459-239 133-446q-19-12-19-34t19-34l326-207q20-13 40.5-1.5T520-687v167h320q17 0 28.5 11.5T880-480q0 17-11.5 28.5T840-440H520v167q0 24-20.5 35.5T459-239Zm-19-107v-268L229-480l211 134Zm0-134Z"/>
    </Icon>
  );
});

IconMaterialLineStartArrow.displayName = 'OnesyIconMaterialLineStartArrow';

export default IconMaterialLineStartArrow;
