import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialDiversity3Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Diversity3Filled'

      short_name='Diversity3'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M40-200v-120q0-34 23.5-57t56.5-23h131q20 0 38 10t29 27q29 39 71.5 61t90.5 22q49 0 91.5-22t70.5-61q13-17 30.5-27t36.5-10h131q34 0 57 23t23 57v120q0 17-11.5 28.5T880-160H680q-17 0-28.5-11.5T640-200v-51q-35 25-75.5 38T480-200q-43 0-84-13.5T320-252v52q0 17-11.5 28.5T280-160H80q-17 0-28.5-11.5T40-200Zm440-120q-38 0-72-17.5T351-386q-17-25-42.5-39.5T253-440q22-37 93-58.5T480-520q63 0 134 21.5t93 58.5q-29 0-55 14.5T609-386q-22 32-56 49t-73 17ZM160-440q-50 0-85-35t-35-85q0-51 35-85.5t85-34.5q51 0 85.5 34.5T280-560q0 50-34.5 85T160-440Zm640 0q-50 0-85-35t-35-85q0-51 35-85.5t85-34.5q51 0 85.5 34.5T920-560q0 50-34.5 85T800-440ZM480-560q-50 0-85-35t-35-85q0-51 35-85.5t85-34.5q51 0 85.5 34.5T600-680q0 50-34.5 85T480-560Z"/>
    </Icon>
  );
});

IconMaterialDiversity3Filled.displayName = 'OnesyIconMaterialDiversity3Filled';

export default IconMaterialDiversity3Filled;
