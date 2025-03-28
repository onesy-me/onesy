import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialExpandW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ExpandW100'

      short_name='Expand'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M200-132q-5.95 0-9.98-4.04-4.02-4.03-4.02-10 0-5.96 4.02-9.96 4.03-4 9.98-4h560q5.95 0 9.97 4.04 4.03 4.03 4.03 10 0 5.96-4.03 9.96-4.02 4-9.97 4H200Zm279.87-100q-5.87 0-10.87-2-5-2-10.35-7.35L366-334q-4-4-4.5-9.5t4.72-10.72Q371-359 376-359q5 0 10 5l80 80v-412l-80 80q-4 4-9.5 4.5t-10.72-4.72Q361-611 361-616q0-5 5-10l92.65-92.65Q464-724 469.13-726q5.14-2 11-2 5.87 0 10.87 2 5 2 10.35 7.35L594-626q4 4 4.5 9.5t-4.72 10.72Q589-601 584-601q-5 0-10-5l-80-80v412l80-80q4-4 9.5-4.5t10.72 4.72Q599-349 599-344q0 5-5 10l-92.65 92.65Q496-236 490.87-234q-5.14 2-11 2ZM200-800q-5.95 0-9.98-4.04-4.02-4.03-4.02-10 0-5.96 4.02-9.96 4.03-4 9.98-4h560q5.95 0 9.97 4.04 4.03 4.03 4.03 10 0 5.96-4.03 9.96-4.02 4-9.97 4H200Z"/>
    </Icon>
  );
});

IconMaterialExpandW100.displayName = 'OnesyIconMaterialExpandW100';

export default IconMaterialExpandW100;
