import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialCoffeeW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CoffeeW100'

      short_name='Coffee'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M453-280q-99 0-170-65.5T212-508v-252q0-11 8.5-19.5T240-788h487q41.84 0 71.42 27.5T828-692q0 43.91-29 74.96Q770-586 727-586h-43v78q0 95.27-67.5 161.64Q549-280 453-280ZM240-614h416v-146H240v146Zm213 306q85 0 144-58t59-142v-78H240v78q0 85 63 142.5T453-308Zm231-306h43q31 0 52-22.75T800-692q0-29-22-48.5T727-760h-43v146ZM226-172q-5.95 0-9.98-4.04-4.02-4.03-4.02-10 0-5.96 4.02-9.96 4.03-4 9.98-4h508q5.95 0 9.97 4.04 4.03 4.03 4.03 10 0 5.96-4.03 9.96-4.02 4-9.97 4H226Zm222-414Z"/>
    </Icon>
  );
});

IconMaterialCoffeeW100.displayName = 'OnesyIconMaterialCoffeeW100';

export default IconMaterialCoffeeW100;
