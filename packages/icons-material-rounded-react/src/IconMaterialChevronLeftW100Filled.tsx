import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialChevronLeftW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ChevronLeftW100Filled'

      short_name='ChevronLeft'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m396-480 174 174q4 4 4.5 9.5T570-286q-5 5-10 5t-10-5L377-459q-5-5-7-10t-2-11q0-6 2-11t7-10l173-173q4-4 9.5-4.5T570-674q5 5 5 10t-5 10L396-480Z"/>
    </Icon>
  );
});

IconMaterialChevronLeftW100Filled.displayName = 'OnesyIconMaterialChevronLeftW100Filled';

export default IconMaterialChevronLeftW100Filled;
