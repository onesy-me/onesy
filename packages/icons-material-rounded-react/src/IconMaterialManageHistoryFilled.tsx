import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialManageHistoryFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ManageHistoryFilled'

      short_name='ManageHistory'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480-760q-69 0-129 32t-101 88h70q17 0 28.5 11.5T360-600q0 17-11.5 28.5T320-560H160q-17 0-28.5-11.5T120-600v-160q0-17 11.5-28.5T160-800q17 0 28.5 11.5T200-760v54q51-64 124.5-99T480-840q75 0 140.5 28T735-735q42 42 69 97t34 118q2 17-10 28t-29 11q-17 0-28.5-11T757-520q-7-46-27-86t-52-72q-38-38-88.5-60T480-760ZM164-434q16-2 29 6t18 24q22 81 85 135t146 65q21 3 30 15.5t9 26.5q0 16-10.5 29T441-122q-111-13-195.5-85.5T132-387q-5-17 5-31t27-16Zm356-62 48 48q14 14 12.5 29.5T568-392q-11 11-26.5 12.5T512-392l-60-60q-6-6-9-13.5t-3-15.5v-159q0-17 11.5-28.5T480-680q17 0 28.5 11.5T520-640v144ZM751 0q-14 0-24.5-9T713-32l-6-28q-12-5-22.5-10.5T663-84l-29 9q-13 4-25.5-1T589-92l-8-14q-7-12-5-26t13-23l22-19q-2-13-2-26t2-26l-22-19q-11-9-13-22.5t5-25.5l9-15q7-11 19-16t25-1l29 9q11-8 21.5-13.5T707-340l6-29q3-14 13.5-22.5T751-400h16q14 0 24.5 9t13.5 23l6 28q12 5 23 11.5t21 14.5l27-9q14-5 27 0t20 17l8 14q7 12 5 26t-13 23l-22 19q2 13 2 25t-2 25l22 19q11 9 13 22.5t-5 25.5l-9 15q-7 11-19 16t-25 1l-29-9q-11 8-21.5 13.5T811-60l-6 29q-3 14-13.5 22.5T767 0h-16Zm8-120q33 0 56.5-23.5T839-200q0-33-23.5-56.5T759-280q-33 0-56.5 23.5T679-200q0 33 23.5 56.5T759-120Z"/>
    </Icon>
  );
});

IconMaterialManageHistoryFilled.displayName = 'OnesyIconMaterialManageHistoryFilled';

export default IconMaterialManageHistoryFilled;
