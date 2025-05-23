import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialThumbsUpDownW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ThumbsUpDownW100'

      short_name='ThumbsUpDown'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M86-438q-26 0-43-17t-17-43v-234q0-6 2.5-11.5T36-754l139-139q5-5 10.5-7t10.5-2q14 0 23.5 10t6.5 26l-26 120h194q26 0 43 17t17 43v4q0 6-1 10.5t-3 9.5l-88 202q-5 10-13 16t-19 6H86Zm248-28 92-214v-6q0-14-9-23t-23-9H166l36-162L54-732v234q0 14 9 23t23 9h248Zm232 252q-26 0-43-17t-17-43v-4q0-6 1-10.5t3-9.5l88-202q5-10 13-16t19-6h244q26 0 43 17t17 43v234q0 6-2.5 11.5T924-206L785-67q-5 5-10.5 7T764-58q-14 0-23.5-10T734-94l26-120H566Zm60-280-92 214v6q0 14 9 23t23 9h228L758-80l148-148v-234q0-14-9-23t-23-9H626Zm-572-4v-234 266-32Zm852 36v234-266 32Z"/>
    </Icon>
  );
});

IconMaterialThumbsUpDownW100.displayName = 'OnesyIconMaterialThumbsUpDownW100';

export default IconMaterialThumbsUpDownW100;
