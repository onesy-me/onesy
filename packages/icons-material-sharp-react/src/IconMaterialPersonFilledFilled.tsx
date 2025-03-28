import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialPersonFilledFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PersonFilledFilled'

      short_name='PersonFilled'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M12 12q-1.65 0-2.825-1.175Q8 9.65 8 8q0-1.65 1.175-2.825Q10.35 4 12 4q1.65 0 2.825 1.175Q16 6.35 16 8q0 1.65-1.175 2.825Q13.65 12 12 12Zm-8 8v-2.8q0-.85.438-1.563.437-.712 1.162-1.087 1.55-.775 3.15-1.163Q10.35 13 12 13t3.25.387q1.6.388 3.15 1.163.725.375 1.162 1.087Q20 16.35 20 17.2V20Z"/>
    </Icon>
  );
});

IconMaterialPersonFilledFilled.displayName = 'OnesyIconMaterialPersonFilledFilled';

export default IconMaterialPersonFilledFilled;
