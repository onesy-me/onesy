import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialWaterVocW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='WaterVocW100Filled'

      short_name='WaterVoc'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m600-82-10-23q-7-16-10.5-33t-3.5-34q0-21 5.5-41.5T596-254q8-17 14-35.5t6-38.5q0-17-3.5-33T602-392l-7-15 25-11 10 22q7 16 10.5 33.5T644-328q0 21-5.5 41T624-247q-8 17-14 36t-6 39q0 16 3 31.5t10 29.5l9 18-26 11Zm120 0-10-23q-7-16-10.5-33t-3.5-34q0-21 5.5-41.5T716-254q8-17 14-35.5t6-38.5q0-17-3.5-33T722-392l-7-15 25-11 10 22q7 17 10.5 34t3.5 34q0 20-4.5 40T746-250q-9 19-15.5 38.5T724-172q0 16 3 31.5t10 29.5l9 18-26 11Zm120 0-10-23q-7-16-10.5-33t-3.5-34q0-21 5.5-41.5T836-254q8-17 14-35.5t6-38.5q0-17-3.5-33T842-392l-7-15 25-11 10 22q8 16 11 33.5t3 34.5q0 20-4.5 40T866-250q-9 19-15.5 38.5T844-172q0 16 3 31.5t10 29.5l9 18-26 11ZM212-408q0-82 66.5-182.5T480-812q100 90 162 168t88 146H556q-25 0-42.5 17.5T496-438v306h-16q-115 0-191.5-79T212-408Z"/>
    </Icon>
  );
});

IconMaterialWaterVocW100Filled.displayName = 'OnesyIconMaterialWaterVocW100Filled';

export default IconMaterialWaterVocW100Filled;
