import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialPercentW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PercentW100'

      short_name='Percent'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M317-539q-43.5 0-74.25-30.75T212-644q0-43.5 30.75-74.25T317-749q43.5 0 74.25 30.75T422-644q0 43.5-30.75 74.25T317-539Zm-.06-28q32.06 0 54.56-22.44t22.5-54.5q0-32.06-22.44-54.56t-54.5-22.5q-32.06 0-54.56 22.44t-22.5 54.5q0 32.06 22.44 54.56t54.5 22.5ZM644-212q-43.5 0-74.25-30.75T539-317q0-43.5 30.75-74.25T644-422q43.5 0 74.25 30.75T749-317q0 43.5-30.75 74.25T644-212Zm-.06-28q32.06 0 54.56-22.44t22.5-54.5q0-32.06-22.44-54.56t-54.5-22.5q-32.06 0-54.56 22.44t-22.5 54.5q0 32.06 22.44 54.56t54.5 22.5ZM232-232q-4-4-4-9.67 0-5.66 4-9.33l479-479q4-4 9-3.5t9 4.5q4 4 4 9.67 0 5.66-4 9.33L250-231q-4 4-9 3.5t-9-4.5Z"/>
    </Icon>
  );
});

IconMaterialPercentW100.displayName = 'OnesyIconMaterialPercentW100';

export default IconMaterialPercentW100;
