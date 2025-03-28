import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialOutpatientW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='OutpatientW100Filled'

      short_name='Outpatient'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M122.35-172q-13.35 0-21.85-8.63Q92-189.25 92-202v-556q0-12.75 8.63-21.38Q109.25-788 122-788h400q12.75 0 21.38 8.62Q552-770.75 552-758v556q0 12.75-8.62 21.37Q534.75-172 522-172H396v-156H248v156H122.35ZM220-456h52v-52h-52v52Zm0-152h52v-52h-52v52Zm152 152h52v-52h-52v52Zm0-152h52v-52h-52v52Zm280 127.96q0-5.96 4.03-9.96 4.02-4 9.97-4h150l-60-60q-4-4-4.5-10t4.2-10.17q4.3-3.83 9.97-3.83 5.66 0 9.33 4l73 73q9 9 9 21t-9 21l-73 73q-3.75 3.67-9.37 3.83Q760-382 756-386q-5-4-4.5-10t4.5-10l60-60H666q-5.95 0-9.97-4.04-4.03-4.03-4.03-10Z"/>
    </Icon>
  );
});

IconMaterialOutpatientW100Filled.displayName = 'OnesyIconMaterialOutpatientW100Filled';

export default IconMaterialOutpatientW100Filled;
