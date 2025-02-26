import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialSkateboarding = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Skateboarding'

      short_name='Skateboarding'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M290 0q-12 0-21-9t-9-21q0-12 9-21t21-9q12 0 21 9t9 21q0 12-9 21t-21 9Zm340 0q-12 0-21-9t-9-21q0-12 9-21t21-9q12 0 21 9t9 21q0 12-9 21t-21 9ZM270-80q-45 0-83-19.5T124-152q-3-5-4.5-9t-1.5-9q0-12 8-21t22-9q8 0 13.5 3t10.5 9q12 17 30.5 28.5T242-143l125-151-64-201 115-185h-94l-76 122-68-42 100-160h228q27 0 43.5 15t22.5 28l21 48q20 48 64.5 78.5T760-560v80q-70 0-128-33.5T539-602l-72 115 173 107v240h12q29 0 54-13t42-35q5-6 10.5-9t13.5-3q13 0 21.5 9t8.5 21q0 5-1.5 9t-4.5 9q-25 33-62 52.5T652-80H270Zm74-60h216v-184l-140-88 40 132-116 140Zm256-620q-33 0-56.5-23.5T520-840q0-33 23.5-56.5T600-920q33 0 56.5 23.5T680-840q0 33-23.5 56.5T600-760Z"/>
    </Icon>
  );
});

IconMaterialSkateboarding.displayName = 'OnesyIconMaterialSkateboarding';

export default IconMaterialSkateboarding;
