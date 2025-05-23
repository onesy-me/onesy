import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialAutofpsSelectFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AutofpsSelectFilled'

      short_name='AutofpsSelect'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m438-592 40-116h4l40 116h-84Zm42 232q-100 0-170-70t-70-170q0-100 70-170t170-70q100 0 170 70t70 170q0 100-70 170t-170 70Zm-56-192h112l21 58q2 7 8 10.5t13 3.5q12 0 18.5-9.5T598-510l-88-235q-2-7-8-11t-14-4h-18q-8 0-14 4t-8 11l-87 235q-4 11 2.5 20.5T382-480q8 0 13.5-4t7.5-11l21-57ZM160-80q-17 0-28.5-11.5T120-120v-120q0-17 11.5-28.5T160-280q17 0 28.5 11.5T200-240v120q0 17-11.5 28.5T160-80Zm160 0q-17 0-28.5-11.5T280-120v-120q0-17 11.5-28.5T320-280q17 0 28.5 11.5T360-240v120q0 17-11.5 28.5T320-80Zm160 0q-17 0-28.5-11.5T440-120v-120q0-17 11.5-28.5T480-280q17 0 28.5 11.5T520-240v120q0 17-11.5 28.5T480-80Zm160 0q-17 0-28.5-11.5T600-120v-120q0-17 11.5-28.5T640-280h160q17 0 28.5 11.5T840-240v120q0 17-11.5 28.5T800-80H640Z"/>
    </Icon>
  );
});

IconMaterialAutofpsSelectFilled.displayName = 'OnesyIconMaterialAutofpsSelectFilled';

export default IconMaterialAutofpsSelectFilled;
