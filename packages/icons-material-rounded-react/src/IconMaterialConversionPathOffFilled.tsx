import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialConversionPathOffFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ConversionPathOffFilled'

      short_name='ConversionPathOff'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M790-57 54-792q-12-12-12-28.5T54-849q12-12 28.5-12t28.5 12l736 736q12 12 12 28t-12 28q-12 12-28.5 12T790-57ZM440-200q-66 0-113-47t-47-113q0-66 47-113t113-47l80 80h-80q-33 0-56.5 23.5T360-360q0 33 23.5 56.5T440-280h240l142 142q-14 8-29.5 13t-32.5 5q-39 0-70-22.5T647-200H440Zm405-125q20 20 29 47t5 54q-2 8-9.5 10t-13.5-4l-61-61-57-57q-6-6-3.5-13.5T745-359q27-4 53.5 5t46.5 29ZM200-600q-50 0-85-35t-35-85q0-32 16-59t42-43l164 164q-16 26-43 42t-59 16Zm409 120q-17 0-28.5-11.5T569-520q0-11 15-32 9-9 12.5-21.5T600-600q0-33-23.5-56.5T520-680H411q-20 0-30-12.5T371-720q0-15 10-27.5t30-12.5h109q66 0 113 47t47 113q0 31-11 58t-30 48q-5 6-13 10t-17 4Z"/>
    </Icon>
  );
});

IconMaterialConversionPathOffFilled.displayName = 'OnesyIconMaterialConversionPathOffFilled';

export default IconMaterialConversionPathOffFilled;
