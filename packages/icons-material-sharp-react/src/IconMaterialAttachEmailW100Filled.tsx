import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialAttachEmailW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AttachEmailW100Filled'

      short_name='AttachEmail'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M753-134q-51 0-86.5-35.5T631-256v-180q0-28.56 19.72-48.28Q670.44-504 699-504q28.56 0 48.28 19.72Q767-464.56 767-436v180h-28v-180q0-17-11.5-28.5T699-476q-17 0-28.5 11.5T659-436v180q0 38.77 27.66 66.39Q714.32-162 753.16-162t66.34-27.61Q847-217.23 847-256v-160h28v160q0 51-35.5 86.5T753-134ZM85-292v-536h696v288h-82q-44.74 0-76.37 30Q591-480 591-436v144H85Zm348-274 320-212-16-22-304 200-304-200-16 22 320 212Z"/>
    </Icon>
  );
});

IconMaterialAttachEmailW100Filled.displayName = 'OnesyIconMaterialAttachEmailW100Filled';

export default IconMaterialAttachEmailW100Filled;
