import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialSpeed15xW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Speed15xW100'

      short_name='Speed15x'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M184-626h-56q-5.95 0-9.97-4.04-4.03-4.03-4.03-10 0-5.96 4.03-9.96 4.02-4 9.97-4h70q5.95 0 9.98 4.03Q212-645.95 212-640v320q0 5.95-4.04 9.98-4.03 4.02-10 4.02-5.96 0-9.96-4.02-4-4.03-4-9.98v-306Zm554 163-90 150q-2.04 3.29-5.1 5.15-3.06 1.85-6.74 1.85-8.16 0-12.16-7t0-14l98-163-85-142q-5-8 0-15t13.16-7q3.68 0 6.74 1.85 3.06 1.86 5.1 5.15l77 129 77-129q2.04-3.29 5.1-5.15 3.06-1.85 6.74-1.85 8.16 0 12.16 7t0 14l-85 141 98 164q5 8 0 15t-13.16 7q-3.68 0-6.74-1.85-3.06-1.86-5.1-5.15l-90-150ZM493-306H374q-5.95 0-9.98-4.04-4.02-4.03-4.02-10 0-5.96 4.02-9.96 4.03-4 9.98-4h119q14 0 23-9t9-23v-68q0-14-9-23t-23-9H374q-5.95 0-9.98-4.02Q360-474.05 360-480v-160q0-5.95 4.02-9.97Q368.05-654 374-654h165q5.95 0 9.97 4.04 4.03 4.03 4.03 10 0 5.96-4.03 9.96-4.02 4-9.97 4H388v132h105q26 0 43 17t17 43v68q0 26-17 43t-43 17Zm-207.04 0q-5.96 0-9.96-4.04-4-4.03-4-10 0-5.96 4.04-9.96 4.03-4 10-4 5.96 0 9.96 4.04 4 4.03 4 10 0 5.96-4.04 9.96-4.03 4-10 4Z"/>
    </Icon>
  );
});

IconMaterialSpeed15xW100.displayName = 'OnesyIconMaterialSpeed15xW100';

export default IconMaterialSpeed15xW100;
