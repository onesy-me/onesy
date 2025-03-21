import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialPersonAddDisabledW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PersonAddDisabledW100'

      short_name='PersonAddDisabled'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M759-112 615-256v24H79v-52q0-22 13.5-41.5T129-356q55-26 109.5-39T347-408q34 0 68 5t69 16L358-513q-2 1-5 1h-6q-44.55 0-76.27-31.72Q239-575.45 239-620v-6q0-3 1-5L99-772l20-20 660 660-20 20Zm-26-314v-120H613v-28h120v-120h28v120h120v28H761v120h-28ZM447-578l-22-22q1-5 1.5-10t.5-10q0-33-23.5-56.5T347-700q-5 0-10 .5t-10 1.5l-22-22q10-4 20.57-6 10.56-2 21.43-2 44.55 0 76.27 31.72Q455-664.55 455-620q0 10.87-2 21.43-2 10.57-6 20.57ZM107-260h480l-58-82q-43-19-89-28.5t-93-9.5q-52.63 0-104.31 12.5Q191-355 143-332q-17 9-26.5 21.5T107-284v24Zm318-340Zm-78 340Z"/>
    </Icon>
  );
});

IconMaterialPersonAddDisabledW100.displayName = 'OnesyIconMaterialPersonAddDisabledW100';

export default IconMaterialPersonAddDisabledW100;
