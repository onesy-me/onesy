import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialDoneFilled = (props: IIcon) => {

  return (
    <Icon
      name='DoneFilled'

      short_name='Done'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M382-240 154-468l57-57 171 171 367-367 57 57-424 424Z"/>
    </Icon>
  );
};

IconMaterialDoneFilled.displayName = 'OnesyIconMaterialDoneFilled';

export default IconMaterialDoneFilled;
