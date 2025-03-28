import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialCycloneW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CycloneW100Filled'

      short_name='Cyclone'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480-372q-45 0-76.5-31.5T372-480q0-45 31.5-76.5T480-588q45 0 76.5 31.5T588-480q0 45-31.5 76.5T480-372Zm0-28q33 0 56.5-23.5T560-480q0-33-23.5-56.5T480-560q-33 0-56.5 23.5T400-480q0 33 23.5 56.5T480-400Zm208 274q14-54 21.5-111t9.5-118q-33 63-98 103t-141 40q-160 0-227.5-6.5T126-242v-30q56 17 113 24t118 7q-59-26-102-92.5T212-480q0-94 7.5-186.5T241-834h30q-13 66-19 118.5T241-603q29-62 94-103.5T480-748q127 0 205.5 6.5T834-719v30q-56-14-116-21.5T604-720q67 36 105.5 101.5T748-480q0 142-8 218.5T718-126h-30ZM480-240q100 0 170-70t70-170q0-100-70-170t-170-70q-100 0-170 70t-70 170q0 100 70 170t170 70Z"/>
    </Icon>
  );
});

IconMaterialCycloneW100Filled.displayName = 'OnesyIconMaterialCycloneW100Filled';

export default IconMaterialCycloneW100Filled;
