import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialNetworkNodeW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='NetworkNodeW100Filled'

      short_name='NetworkNode'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M218-132q-35 0-60.5-25.5T132-218q0-35 25.5-60.5T218-304q16.96 0 32.98 6.5Q267-291 279-279l187-187v-191q-30-5-51-29.13T394-742q0-35 25.5-60.5T480-828q35 0 60.5 25.5T566-742q0 31.74-20.5 55.87T494-657v191l187 187q12-12 27.85-18.5Q724.71-304 742-304q35 0 60.5 25.5T828-218q0 35-25.5 60.5T742-132q-35 0-60.5-25.5T656-218q0-10.04 2-19.52t7-17.48L480-440 295-255q5 8 7 17.48t2 19.52q0 35-25.5 60.5T218-132Zm523.88-28Q766-160 783-176.88q17-16.88 17-41T783.12-259q-16.88-17-41-17T701-259.12q-17 16.88-17 41T700.88-177q16.88 17 41 17Zm-262-524Q504-684 521-700.88q17-16.88 17-41T521.12-783q-16.88-17-41-17T439-783.12q-17 16.88-17 41T438.88-701q16.88 17 41 17Zm-262 524Q242-160 259-176.88q17-16.88 17-41T259.12-259q-16.88-17-41-17T177-259.12q-17 16.88-17 41T176.88-177q16.88 17 41 17Z"/>
    </Icon>
  );
});

IconMaterialNetworkNodeW100Filled.displayName = 'OnesyIconMaterialNetworkNodeW100Filled';

export default IconMaterialNetworkNodeW100Filled;
