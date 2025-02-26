import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialLineEndArrowNotchFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='LineEndArrowNotchFilled'

      short_name='LineEndArrowNotch'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M508-243q-14 8-25-2.5t-3-24.5l97-170H120q-17 0-28.5-11.5T80-480q0-17 11.5-28.5T120-520h457l-97-170q-8-14 3-24.5t25-2.5l319 203q19 12 19 34t-19 34L508-243Z"/>
    </Icon>
  );
});

IconMaterialLineEndArrowNotchFilled.displayName = 'OnesyIconMaterialLineEndArrowNotchFilled';

export default IconMaterialLineEndArrowNotchFilled;
