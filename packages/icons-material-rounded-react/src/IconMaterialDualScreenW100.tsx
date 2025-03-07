import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialDualScreenW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DualScreenW100'

      short_name='DualScreen'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m300-278 176 100q16 6 30-3t14-26v-476q0-10-5.5-18T500-713l-220-87v522h20Zm-10.15 55.69Q273-229 262.5-244.08 252-259.15 252-278v-520q0-13 8.5-21.5T282-828l228 90q16.81 6.72 27.4 22.03Q548-700.67 548-682v475q0 32.49-26.5 50.24Q495-139 465.69-150.9l-175.84-71.41ZM520-252v-28h128q14 0 23-9t9-23v-456q0-14-9-23t-23-9H282v-28h365.85q25.15 0 42.65 17.62Q708-792.75 708-768v456q0 24.75-17.62 42.37Q672.75-252 648-252H520Zm-240-26v-522 522Z"/>
    </Icon>
  );
});

IconMaterialDualScreenW100.displayName = 'OnesyIconMaterialDualScreenW100';

export default IconMaterialDualScreenW100;
