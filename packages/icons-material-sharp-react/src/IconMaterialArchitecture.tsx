import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialArchitecture = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Architecture'

      short_name='Architecture'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m270-120-10-88 114-314q15 14 32.5 23.5T444-484L334-182l-64 62Zm420 0-64-62-110-302q20-5 37.5-14.5T586-522l114 314-10 88ZM480-520q-50 0-85-35t-35-85q0-39 22.5-69.5T440-752v-88h80v88q35 12 57.5 42.5T600-640q0 50-35 85t-85 35Zm0-80q17 0 28.5-11.5T520-640q0-17-11.5-28.5T480-680q-17 0-28.5 11.5T440-640q0 17 11.5 28.5T480-600Z"/>
    </Icon>
  );
});

IconMaterialArchitecture.displayName = 'OnesyIconMaterialArchitecture';

export default IconMaterialArchitecture;
