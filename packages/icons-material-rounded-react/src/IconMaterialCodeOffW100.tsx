import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialCodeOffW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CodeOffW100'

      short_name='CodeOff'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m156-480 174 174q4 4 4.5 9.5T330-286q-5 5-10 5t-10-5L137-459q-5-5-7-10t-2-11q0-6 2-11t7-10l141-141-142-142q-4-4-4.5-9.5T136-804q5-5 10-5t10 5l648 648q4 4 4.5 9.5T804-136q-5 5-10 5t-10-5L298-622 156-480Zm552 116q-5-5-5-10t5-10l96-96-174-174q-4-4-4.5-9.5T630-674q5-5 10-5t10 5l173 173q5 5 7 10t2 11q0 6-2 11t-7 10l-95 95q-4 4-9.5 4.5T708-364Z"/>
    </Icon>
  );
});

IconMaterialCodeOffW100.displayName = 'OnesyIconMaterialCodeOffW100';

export default IconMaterialCodeOffW100;
