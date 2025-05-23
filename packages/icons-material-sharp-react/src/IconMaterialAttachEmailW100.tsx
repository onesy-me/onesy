import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialAttachEmailW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AttachEmailW100'

      short_name='AttachEmail'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M433-566 113-778v426q0 14 9 23t23 9h406v28H85v-536h696v248h-28v-198L433-566Zm0-34 304-200H129l304 200Zm320 466q-51 0-86.5-35.5T631-256v-180q0-28.56 19.72-48.28Q670.44-504 699-504q28.56 0 48.28 19.72Q767-464.56 767-436v180h-28v-180q0-17-11.5-28.5T699-476q-17 0-28.5 11.5T659-436v180q0 38.77 27.66 66.39Q714.32-162 753.16-162t66.34-27.61Q847-217.23 847-256v-160h28v160q0 51-35.5 86.5T753-134ZM113-778v-22 480-458Z"/>
    </Icon>
  );
});

IconMaterialAttachEmailW100.displayName = 'OnesyIconMaterialAttachEmailW100';

export default IconMaterialAttachEmailW100;
