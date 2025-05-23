import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialNetworkCheckW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='NetworkCheckW100'

      short_name='NetworkCheck'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m84-516-28-28q85-85 194.5-130.5T480-720q19 0 37 1t37 3l-18 40q-14-2-28-3t-28-1q-112 0-214.5 42.5T84-516Zm170 170-28-28q45-45 102-71.5T448-480l-20 44q-50 7-94.5 31T254-346Zm210 152q-19-6-26.5-24t.5-36l192-432q2-4 6-6t8 0q5 2 7.5 5.5t.5 8.5L522-224q-5 18-22 27t-36 3Zm242-152q-12-11-25-22t-27-20l12-40q19 11 35.5 24.5T734-374l-28 28Zm170-170q-34-34-72.5-61.5T722-625l12-39q48 23 90.5 53t79.5 67l-28 28Z"/>
    </Icon>
  );
});

IconMaterialNetworkCheckW100.displayName = 'OnesyIconMaterialNetworkCheckW100';

export default IconMaterialNetworkCheckW100;
