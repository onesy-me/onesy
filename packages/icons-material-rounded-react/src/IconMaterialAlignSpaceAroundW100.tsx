import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialAlignSpaceAroundW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AlignSpaceAroundW100'

      short_name='AlignSpaceAround'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M336-266q-12.75 0-21.37-8.63Q306-283.25 306-296v-8q0-12.75 8.63-21.38Q323.25-334 336-334h288q12.75 0 21.38 8.62Q654-316.75 654-304v8q0 12.75-8.62 21.37Q636.75-266 624-266H336Zm0-360q-12.75 0-21.37-8.63Q306-643.25 306-656v-8q0-12.75 8.63-21.38Q323.25-694 336-694h288q12.75 0 21.38 8.62Q654-676.75 654-664v8q0 12.75-8.62 21.37Q636.75-626 624-626H336ZM146-132q-5.95 0-9.98-4.04-4.02-4.03-4.02-10 0-5.96 4.02-9.96 4.03-4 9.98-4h668q5.95 0 9.97 4.04 4.03 4.03 4.03 10 0 5.96-4.03 9.96-4.02 4-9.97 4H146Zm0-668q-5.95 0-9.98-4.04-4.02-4.03-4.02-10 0-5.96 4.02-9.96 4.03-4 9.98-4h668q5.95 0 9.97 4.04 4.03 4.03 4.03 10 0 5.96-4.03 9.96-4.02 4-9.97 4H146Z"/>
    </Icon>
  );
});

IconMaterialAlignSpaceAroundW100.displayName = 'OnesyIconMaterialAlignSpaceAroundW100';

export default IconMaterialAlignSpaceAroundW100;
