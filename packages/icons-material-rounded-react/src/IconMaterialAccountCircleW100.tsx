import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialAccountCircleW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AccountCircleW100'

      short_name='AccountCircle'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M252-256q51-36 106.5-57T480-334q66 0 121.5 21T708-256q41-41 66.5-98T800-480q0-133-93.5-226.5T480-800q-133 0-226.5 93.5T160-480q0 69 25.5 126t66.5 98Zm228.03-210Q432-466 399-498.97t-33-81Q366-628 398.97-661t81-33Q528-694 561-661.03t33 81Q594-532 561.03-499t-81 33ZM480-132q-73 0-136.5-27T233-233q-47-47-74-110.5T132-480q0-73 27-136.5T233-727q47-47 110.5-74T480-828q73 0 136.5 27T727-727q47 47 74 110.5T828-480q0 73-27 136.5T727-233q-47 47-110.5 74T480-132Zm0-28q56 0 111.5-20.5T686-236q-39-32-91.5-51T480-306q-62 0-115 18.5T274-236q39 35 94.5 55.5T480-160Zm0-334q36 0 61-25t25-61q0-36-25-61t-61-25q-36 0-61 25t-25 61q0 36 25 61t61 25Zm0-86Zm0 347Z"/>
    </Icon>
  );
});

IconMaterialAccountCircleW100.displayName = 'OnesyIconMaterialAccountCircleW100';

export default IconMaterialAccountCircleW100;
