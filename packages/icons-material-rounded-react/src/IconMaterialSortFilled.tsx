import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialSortFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SortFilled'

      short_name='Sort'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M160-240q-17 0-28.5-11.5T120-280q0-17 11.5-28.5T160-320h160q17 0 28.5 11.5T360-280q0 17-11.5 28.5T320-240H160Zm0-200q-17 0-28.5-11.5T120-480q0-17 11.5-28.5T160-520h400q17 0 28.5 11.5T600-480q0 17-11.5 28.5T560-440H160Zm0-200q-17 0-28.5-11.5T120-680q0-17 11.5-28.5T160-720h640q17 0 28.5 11.5T840-680q0 17-11.5 28.5T800-640H160Z"/>
    </Icon>
  );
});

IconMaterialSortFilled.displayName = 'OnesyIconMaterialSortFilled';

export default IconMaterialSortFilled;
