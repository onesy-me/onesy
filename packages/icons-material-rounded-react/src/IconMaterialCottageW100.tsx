import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialCottageW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CottageW100'

      short_name='Cottage'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M212-232v-303l-68 53q-5 4-10 3t-9-6q-4-5-3.5-10t5.5-9l85-66v-86q0-6 4-10t10-4q6 0 10 4t4 10v64l204-155q17-12 36.5-12t35.5 12l317 243q5 4 5.5 9t-3.5 10q-4 5-9 6t-10-3l-68-53v303q0 25-17.5 42.5T688-172H272q-25 0-42.5-17.5T212-232Zm60 32h148v-140q0-25 17.5-42.5T480-400q25 0 42.5 17.5T540-340v140h148q14 0 23-9t9-23v-324L499-724q-8-7-19-7t-19 7L240-556v324q0 14 9 23t23 9Zm0 0h448-480 32Zm-47-520q-5 0-9-4t-3-9q4-29 27-47t52-18q18 0 33-10.5t18-27.5q1-5 5-8.5t9-3.5q6 0 10.5 4.5T371-833q-5 28-27.5 45.5T292-770q-18 0-33 9t-18 26q-2 6-6 10.5t-10 4.5Z"/>
    </Icon>
  );
});

IconMaterialCottageW100.displayName = 'OnesyIconMaterialCottageW100';

export default IconMaterialCottageW100;
