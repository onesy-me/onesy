import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialTagW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='TagW100'

      short_name='Tag'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m365-368-38 151q-1 5-4 7t-8 2q-6 0-10-5t-2-11l36-144H217q-7 0-11.5-5t-2.5-12q2-5 5.5-8t8.5-3h129l42-168H266q-7 0-11.5-5t-2.5-12q2-5 5.5-8t8.5-3h129l38-151q1-5 4-7t8-2q6 0 10 5t2 11l-36 144h174l38-151q1-5 4-7t8-2q6 0 10 5t2 11l-36 144h122q7 0 11.5 5t2.5 12q-2 5-5.5 8t-8.5 3H614l-42 168h122q7 0 11.5 5t2.5 12q-2 5-5.5 8t-8.5 3H565l-38 151q-1 5-4 7t-8 2q-6 0-10-5t-2-11l36-144H365Zm7-28h174l42-168H414l-42 168Z"/>
    </Icon>
  );
});

IconMaterialTagW100.displayName = 'OnesyIconMaterialTagW100';

export default IconMaterialTagW100;
