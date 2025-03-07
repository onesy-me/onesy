import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialVaccinesW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='VaccinesW100'

      short_name='Vaccines'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m294-112-28-21v-173H146v-380h-40v-28h160v-112h-60v-28h148v28h-60v112h160v28h-40v380H294v194ZM174-334h212v-102H276v-28h110v-92H276v-28h110v-102H174v352Zm372 228v-314q0-28.57 13-47.28Q572-486 583-498q10-11 16.5-20t6.5-22v-46h-40v-28h228v28h-40v46q0 13 6.5 22t16.5 20q11 12 24 30.5t13 47.5v314H546Zm28-278h212v-36q0-21-9-35t-22-28q-10.29-10.69-19.65-23.84Q726-520 726-540v-46h-92v46q0 19.71-9.5 32.86Q615-494 605-483q-13 14-22 28t-9 35v36Zm0 120h212v-92H574v92Zm0 130h212v-102H574v102Zm0-130h212-212Z"/>
    </Icon>
  );
});

IconMaterialVaccinesW100.displayName = 'OnesyIconMaterialVaccinesW100';

export default IconMaterialVaccinesW100;
