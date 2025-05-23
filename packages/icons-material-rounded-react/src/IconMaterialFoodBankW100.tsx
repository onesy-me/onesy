import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialFoodBankW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FoodBankW100'

      short_name='FoodBank'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M272-172q-24.75 0-42.37-17.63Q212-207.25 212-232v-312q0-14.25 6.38-27 6.37-12.75 17.62-21l208-157q15.68-12 35.84-12Q500-761 516-749l208 157q11.25 8.25 17.63 21 6.37 12.75 6.37 27v312q0 24.75-17.62 42.37Q712.75-172 688-172H272Zm0-28h416q14 0 23-9t9-23v-312q0-8-3.5-14.5T707-570L499-726q-8-7-19-7t-19 7L253-570q-6 5-9.5 11.5T240-544v312q0 14 9 23t23 9Zm208-267Zm-48 193q7 0 11.5-4.5T448-290v-112q20 0 34-14t14-34v-80q0-7-4.5-11.5T480-546q-7 0-11.5 4.5T464-530v80h-16v-80q0-7-4.5-11.5T432-546q-7 0-11.5 4.5T416-530v80h-16v-80q0-7-4.5-11.5T384-546q-7 0-11.5 4.5T368-530v80q0 20 14 34t34 14v112q0 7 4.5 11.5T432-274Zm128 0q7 0 11.5-4.5T576-290v-235.2q0-8.8-6.08-14.8-6.09-6-15.01-6-21.91 0-32.41 20-10.5 20-10.5 44v65.83q0 13.17 8.5 21.67Q529-386 542-386h2v96q0 7 4.5 11.5T560-274Z"/>
    </Icon>
  );
});

IconMaterialFoodBankW100.displayName = 'OnesyIconMaterialFoodBankW100';

export default IconMaterialFoodBankW100;
