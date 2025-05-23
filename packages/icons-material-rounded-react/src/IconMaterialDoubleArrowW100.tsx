import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialDoubleArrowW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DoubleArrowW100'

      short_name='DoubleArrow'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M478-480 312-712q-5-7-1-14.5t12.19-7.5q3.28 0 6.22 1.59 2.95 1.59 4.59 4.41l178 248-178 248q-1.67 2.82-4.67 4.41-3 1.59-6.33 1.59-8 0-12-7.5t1-14.5l166-232Zm230 0L542-712q-5-7-1-14.5t12.19-7.5q3.28 0 6.22 1.59 2.95 1.59 4.59 4.41l178 248-178 248q-1.67 2.82-4.67 4.41-3 1.59-6.33 1.59-8 0-12-7.5t1-14.5l166-232Z"/>
    </Icon>
  );
});

IconMaterialDoubleArrowW100.displayName = 'OnesyIconMaterialDoubleArrowW100';

export default IconMaterialDoubleArrowW100;
