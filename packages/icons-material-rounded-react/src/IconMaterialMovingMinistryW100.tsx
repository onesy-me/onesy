import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialMovingMinistryW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='MovingMinistryW100'

      short_name='MovingMinistry'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M122-172q-12.75 0-21.37-8.63Q92-189.25 92-202v-556q0-12.75 8.63-21.38Q109.25-788 122-788h400q12.75 0 21.38 8.62Q552-770.75 552-758v556q0 12.75-8.62 21.37Q534.75-172 522-172H396v-156H248v156H122Zm-2-28h100v-156h204v156h100v-560H120v560Zm100-256h52v-52h-52v52Zm0-152h52v-52h-52v52Zm152 152h52v-52h-52v52Zm0-152h52v-52h-52v52ZM220-200v-156h204v156-156H220v156Zm432-280.04q0-5.96 4.03-9.96 4.02-4 9.97-4h150l-60-60q-4-4-4.5-10t4.2-10.17q4.3-3.83 9.97-3.83 5.66 0 9.33 4l73 73q9 9 9 21t-9 21l-73 73q-3.75 3.67-9.37 3.83Q760-382 756-386q-5-4-4.5-10t4.5-10l60-60H666q-5.95 0-9.97-4.04-4.03-4.03-4.03-10Z"/>
    </Icon>
  );
});

IconMaterialMovingMinistryW100.displayName = 'OnesyIconMaterialMovingMinistryW100';

export default IconMaterialMovingMinistryW100;
