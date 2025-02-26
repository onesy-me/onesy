import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialPictureAsPdfFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PictureAsPdfFilled'

      short_name='PictureAsPdf'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M360-460h40v-80h60l20-20v-80l-20-20H360v200Zm40-120v-40h40v40h-40Zm120 120h100l20-20v-160l-20-20H520v200Zm40-40v-120h40v120h-40Zm120 40h40v-80h40v-40h-40v-40h40v-40h-80v200ZM240-240v-640h640v640H240ZM80-80v-640h80v560h560v80H80Z"/>
    </Icon>
  );
});

IconMaterialPictureAsPdfFilled.displayName = 'OnesyIconMaterialPictureAsPdfFilled';

export default IconMaterialPictureAsPdfFilled;
