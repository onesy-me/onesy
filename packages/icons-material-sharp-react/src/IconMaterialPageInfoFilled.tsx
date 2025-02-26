import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialPageInfoFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PageInfoFilled'

      short_name='PageInfo'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M710-150q-63 0-106.5-43.5T560-300q0-63 43.5-106.5T710-450q63 0 106.5 43.5T860-300q0 63-43.5 106.5T710-150ZM160-260v-80h320v80H160Zm90-250q-63 0-106.5-43.5T100-660q0-63 43.5-106.5T250-810q63 0 106.5 43.5T400-660q0 63-43.5 106.5T250-510Zm230-110v-80h320v80H480Z"/>
    </Icon>
  );
});

IconMaterialPageInfoFilled.displayName = 'OnesyIconMaterialPageInfoFilled';

export default IconMaterialPageInfoFilled;
