import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialCompressW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CompressW100Filled'

      short_name='Compress'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M226-464q-5.95 0-9.98-4.04-4.02-4.03-4.02-10 0-5.96 4.02-9.96 4.03-4 9.98-4h508q5.95 0 9.97 4.04 4.03 4.03 4.03 10 0 5.96-4.03 9.96-4.02 4-9.97 4H226Zm0-108q-5.95 0-9.98-4.04-4.02-4.03-4.02-10 0-5.96 4.02-9.96 4.03-4 9.98-4h508q5.95 0 9.97 4.04 4.03 4.03 4.03 10 0 5.96-4.03 9.96-4.02 4-9.97 4H226Zm253.96 440q-5.96 0-9.96-4.02-4-4.03-4-9.98v-162l-80 80q-4 4-9.5 4.5T366-228q-5-5-5-10t5-10l92.65-92.65Q464-346 469.13-348q5.14-2 11-2 5.87 0 10.87 2 5 2 10.35 7.35L594-248q4 4 4.5 9.5t-4.72 10.72Q589-223 584-223q-5 0-10-5l-80-80v162q0 5.95-4.04 9.98-4.03 4.02-10 4.02Zm-.09-582q-5.87 0-10.87-2-5-2-10.35-7.35L366-816q-4-4-4.5-9.5T366-836q5-5 10-5t10 5l80 80v-162q0-5.95 4.04-9.97 4.03-4.03 10-4.03 5.96 0 9.96 4.03 4 4.02 4 9.97v162l80-80q4-4 9.5-4.5T594-836q5 5 5 10t-5 10l-92.65 92.65Q496-718 490.87-716q-5.14 2-11 2Z"/>
    </Icon>
  );
});

IconMaterialCompressW100Filled.displayName = 'OnesyIconMaterialCompressW100Filled';

export default IconMaterialCompressW100Filled;
