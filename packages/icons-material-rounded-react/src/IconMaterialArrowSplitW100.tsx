import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialArrowSplitW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ArrowSplitW100'

      short_name='ArrowSplit'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M226-466q-5.95 0-9.98-4.04-4.02-4.03-4.02-10 0-5.96 4.02-9.96 4.03-4 9.98-4h235q6 0 11.5-2t10.5-7l217-217H574q-5.95 0-9.97-4.04-4.03-4.03-4.03-10 0-5.96 4.03-9.96 4.02-4 9.97-4h144q12.75 0 21.38 8.62Q748-730.75 748-718v144q0 5.95-4.04 9.97-4.03 4.03-10 4.03-5.96 0-9.96-4.03-4-4.02-4-9.97v-126L504-484q-8 8-19.28 13-11.28 5-23.72 5H226Zm348 254q-5.95 0-9.97-4.04-4.03-4.03-4.03-10 0-5.96 4.03-9.96 4.02-4 9.97-4h126L548-392q-4-4-4.5-9.5T548-412q5-5 10-5t10 5l152 152v-126q0-5.95 4.04-9.98 4.03-4.02 10-4.02 5.96 0 9.96 4.02 4 4.03 4 9.98v144q0 12.75-8.62 21.37Q730.75-212 718-212H574Z"/>
    </Icon>
  );
});

IconMaterialArrowSplitW100.displayName = 'OnesyIconMaterialArrowSplitW100';

export default IconMaterialArrowSplitW100;
