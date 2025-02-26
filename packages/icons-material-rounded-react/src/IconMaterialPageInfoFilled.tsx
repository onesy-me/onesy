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
      <path d="M710-150q-63 0-106.5-43.5T560-300q0-63 43.5-106.5T710-450q63 0 106.5 43.5T860-300q0 63-43.5 106.5T710-150ZM440-260H200q-17 0-28.5-11.5T160-300q0-17 11.5-28.5T200-340h240q17 0 28.5 11.5T480-300q0 17-11.5 28.5T440-260ZM250-510q-63 0-106.5-43.5T100-660q0-63 43.5-106.5T250-810q63 0 106.5 43.5T400-660q0 63-43.5 106.5T250-510Zm510-110H520q-17 0-28.5-11.5T480-660q0-17 11.5-28.5T520-700h240q17 0 28.5 11.5T800-660q0 17-11.5 28.5T760-620Z"/>
    </Icon>
  );
});

IconMaterialPageInfoFilled.displayName = 'OnesyIconMaterialPageInfoFilled';

export default IconMaterialPageInfoFilled;
