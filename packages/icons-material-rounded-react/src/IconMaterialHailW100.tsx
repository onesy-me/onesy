import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialHailW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='HailW100'

      short_name='Hail'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M206-136.49v-127.02q0-13.49 8.63-21.99 8.62-8.5 21.37-8.5h8q12.75 0 21.38 8.5Q274-277 274-263.51v127.02q0 13.49-8.62 21.99-8.63 8.5-21.38 8.5h-8q-12.75 0-21.37-8.5Q206-123 206-136.49ZM402-120v-501q-63 17-98 55.5T258-460q-.77 6.32-5.4 10.16-4.64 3.84-10.42 3.84-6.18 0-9.68-5t-2.5-11q14-97 79-146.5T480-658q101 0 158-26.5T705-802q1-6 5.04-11 4.03-5 10-5 5.96 0 9.96 5 4 5 3 11-7 76-50.5 118.5T558-634v514q0 5.95-4.04 9.97-4.03 4.03-10 4.03-5.96 0-9.96-4.03-4-4.02-4-9.97v-220H430v220q0 5.95-4.04 9.97-4.03 4.03-10 4.03-5.96 0-9.96-4.03-4-4.02-4-9.97Zm78-612q-27 0-45.5-18.5T416-796q0-27 18.5-45.5T480-860q27 0 45.5 18.5T544-796q0 27-18.5 45.5T480-732Z"/>
    </Icon>
  );
});

IconMaterialHailW100.displayName = 'OnesyIconMaterialHailW100';

export default IconMaterialHailW100;
