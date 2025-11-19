import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialMobileDotsW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='MobileDotsW100'

      short_name='MobileDots'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M251.96-454q11.04 0 18.54-7.46 7.5-7.47 7.5-18.5 0-11.04-7.46-18.54-7.47-7.5-18.5-7.5-11.04 0-18.54 7.46-7.5 7.47-7.5 18.5 0 11.04 7.46 18.54 7.47 7.5 18.5 7.5Zm152 0q11.04 0 18.54-7.46 7.5-7.47 7.5-18.5 0-11.04-7.46-18.54-7.47-7.5-18.5-7.5-11.04 0-18.54 7.46-7.5 7.47-7.5 18.5 0 11.04 7.46 18.54 7.47 7.5 18.5 7.5Zm152 0q11.04 0 18.54-7.46 7.5-7.47 7.5-18.5 0-11.04-7.46-18.54-7.47-7.5-18.5-7.5-11.04 0-18.54 7.46-7.5 7.47-7.5 18.5 0 11.04 7.46 18.54 7.47 7.5 18.5 7.5Zm152 0q11.04 0 18.54-7.46 7.5-7.47 7.5-18.5 0-11.04-7.46-18.54-7.47-7.5-18.5-7.5-11.04 0-18.54 7.46-7.5 7.47-7.5 18.5 0 11.04 7.46 18.54 7.47 7.5 18.5 7.5ZM92-252v-460h190v-36h134v36h452v460H92Zm748-28v-404H120v404h720Zm-720 0v-404 404Z"/>
    </Icon>
  );
});

IconMaterialMobileDotsW100.displayName = 'OnesyIconMaterialMobileDotsW100';

export default IconMaterialMobileDotsW100;
