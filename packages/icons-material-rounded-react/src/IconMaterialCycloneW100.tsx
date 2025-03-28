import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialCycloneW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CycloneW100'

      short_name='Cyclone'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480-372q-45 0-76.5-31.5T372-480q0-45 31.5-76.5T480-588q45 0 76.5 31.5T588-480q0 45-31.5 76.5T480-372Zm0-28q33 0 56.5-23.5T560-480q0-33-23.5-56.5T480-560q-33 0-56.5 23.5T400-480q0 33 23.5 56.5T480-400Zm0 188q-148 0-214.5-5.5T145-237q-8-2-13.5-7t-5.5-13q0-6 5.5-9t12.5-1q51 14 103.5 20t109.5 6q-59-26-102-92.5T212-480q0-88 6.5-175.5T238-816q2-8 6-13t12-5q6 0 10 5.5t2 12.5q-11 60-16.5 108.5T241-603q29-62 94-103.5T480-748q118 0 193 5.5T814-723q8 2 14 6.5t6 12.5q0 6-5.5 9.5T816-693q-52-11-107-18t-105-9q67 36 105.5 101.5T748-480q0 131-7 205t-19 130q-2 8-6.5 13.5T703-126q-6 0-9.5-5t-1.5-12q12-50 18.5-102.5T719-355q-33 63-98 103t-141 40Zm0-28q100 0 170-70t70-170q0-100-70-170t-170-70q-100 0-170 70t-70 170q0 100 70 170t170 70Z"/>
    </Icon>
  );
});

IconMaterialCycloneW100.displayName = 'OnesyIconMaterialCycloneW100';

export default IconMaterialCycloneW100;
