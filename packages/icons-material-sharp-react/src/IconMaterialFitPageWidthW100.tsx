import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialFitPageWidthW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FitPageWidthW100'

      short_name='FitPageWidth'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M350-384v-192l-96 96 96 96Zm356-96-96-96v192l96-96ZM132-212v-536h696v536H132Zm668-508H160v480h640v-480Zm-640 0v480-480Z"/>
    </Icon>
  );
});

IconMaterialFitPageWidthW100.displayName = 'OnesyIconMaterialFitPageWidthW100';

export default IconMaterialFitPageWidthW100;
