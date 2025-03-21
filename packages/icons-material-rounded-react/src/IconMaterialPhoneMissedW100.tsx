import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialPhoneMissedW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PhoneMissedW100'

      short_name='PhoneMissed'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m133-209-51-49q-13-12-12.5-29.5T83-318q75-75 181.36-118.5Q370.73-480 479.86-480 589-480 695.5-436.5 802-393 877-318q13 13 13.5 30.5T878-258l-51 49q-14 13-30 15t-30-8l-76-58q-13-10-19-21.08-6-11.07-6-24.92v-111q-52-19-95-27t-91-8q-48 0-91 8t-95 27v111q0 13.85-6 24.92Q282-270 269-260l-76 58q-14 10-30 8t-30-15Zm133-202q-47 21-91 51t-73 59q-5 5-5 10t5 10l50 49q5 5 12.5 6.5T178-229l76-57q5-4 8.5-10t3.5-11v-104Zm428 0v104q0 5 3.5 11t8.5 10l76 57q6 5 13.5 3.5T808-232l50-49q5-5 5-10t-5-10q-29-29-73-59t-91-51Zm-428-2Zm428 0ZM266.96-600q-5.96 0-9.96-4.03-4-4.02-4-9.97v-144q0-12.75 8.63-21.38Q270.25-788 283-788h144q5.95 0 9.98 4.04 4.02 4.03 4.02 10 0 5.96-4.02 9.96-4.03 4-9.98 4H301l157 157q9 9 23 9t23-9l176-176q4-4 9.5-4.5T700-779q5 5 5 10t-5 10L523-582q-16.93 17-41.97 17Q456-565 439-582L281-740v126q0 5.95-4.04 9.97-4.03 4.03-10 4.03Z"/>
    </Icon>
  );
});

IconMaterialPhoneMissedW100.displayName = 'OnesyIconMaterialPhoneMissedW100';

export default IconMaterialPhoneMissedW100;
