import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialAd = (props: IIcon) => {

  return (
    <Icon
      name='Ad'

      short_name='Ad'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M120-120v-720h720v720H120Zm80-80h560v-440H200v440Z"/>
    </Icon>
  );
};

IconMaterialAd.displayName = 'OnesyIconMaterialAd';

export default IconMaterialAd;
