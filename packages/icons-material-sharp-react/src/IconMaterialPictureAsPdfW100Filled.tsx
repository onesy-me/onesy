import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialPictureAsPdfW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PictureAsPdfW100Filled'

      short_name='PictureAsPdf'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M342-466h28v-80h65l15-15v-78l-15-15h-93v188Zm28-108v-52h52v52h-52Zm122 108h89l15-15v-158l-15-15h-89v188Zm28-28v-132h48v132h-48Zm128 28h28v-80h60v-28h-60v-52h60v-28h-88v188ZM266-292v-536h536v536H266ZM158-184v-504h28v476h476v28H158Z"/>
    </Icon>
  );
});

IconMaterialPictureAsPdfW100Filled.displayName = 'OnesyIconMaterialPictureAsPdfW100Filled';

export default IconMaterialPictureAsPdfW100Filled;
