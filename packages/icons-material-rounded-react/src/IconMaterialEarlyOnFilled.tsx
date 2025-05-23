import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialEarlyOnFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='EarlyOnFilled'

      short_name='EarlyOn'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M680-120q-50 0-85-35t-35-85q0-50 35-85t85-35q50 0 85 35t35 85q0 50-35 85t-85 35Zm0-280q-13 0-21.5-8.5T650-430v-20q0-13 8.5-21.5T680-480q13 0 21.5 8.5T710-450v20q0 13-8.5 21.5T680-400Zm0 320q13 0 21.5 8.5T710-50v20q0 13-8.5 21.5T680 0q-13 0-21.5-8.5T650-30v-20q0-13 8.5-21.5T680-80Zm114-274q-9-9-9-21.5t9-21.5l14-14q9-9 21-8.5t21 9.5q9 9 9 21t-9 21l-14 14q-9 9-21 9t-21-9ZM567-127q9 9 9 21t-9 21l-15 15q-9 9-21 9t-21-9q-9-9-9-21t9-21l15-15q9-9 21-9t21 9Zm273-113q0-13 8.5-21.5T870-270h20q13 0 21.5 8.5T920-240q0 13-8.5 21.5T890-210h-20q-13 0-21.5-8.5T840-240Zm-320 0q0 13-8.5 21.5T490-210h-20q-13 0-21.5-8.5T440-240q0-13 8.5-21.5T470-270h20q13 0 21.5 8.5T520-240Zm274 113q9-9 21-8.5t21 8.5l15 14q9 9 9 21t-9 21q-9 9-21.5 9T808-71l-14-14q-8-9-8.5-21t8.5-21ZM567-354q-9 9-21.5 9t-21.5-9l-14-14q-8-9-8.5-21t8.5-21q9-9 21-8.5t21 8.5l15 14q9 9 9 21t-9 21ZM200-80q-33 0-56.5-23.5T120-160v-560q0-33 23.5-56.5T200-800h40v-40q0-17 11.5-28.5T280-880q17 0 28.5 11.5T320-840v40h320v-40q0-17 11.5-28.5T680-880q17 0 28.5 11.5T720-840v40h40q33 0 56.5 23.5T840-720v120q0 17-11.5 28.5T800-560H200v400h120q17 0 28.5 11.5T360-120q0 17-11.5 28.5T320-80H200Z"/>
    </Icon>
  );
});

IconMaterialEarlyOnFilled.displayName = 'OnesyIconMaterialEarlyOnFilled';

export default IconMaterialEarlyOnFilled;
