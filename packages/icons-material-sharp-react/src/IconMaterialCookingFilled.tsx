import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialCookingFilled = (props: IIcon) => {

  return (
    <Icon
      name='CookingFilled'

      short_name='Cooking'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M360-120v-120H80v-80h280q33 0 56.5 23.5T440-240v120h-80Zm160 0v-120q0-33 23.5-56.5T600-320h280v80H600v120h-80ZM240-360q-50 0-85-35t-35-85v-160h720v160q0 50-35 85t-85 35H240ZM120-680v-80h240v-40q0-17 11.5-28.5T400-840h160q17 0 28.5 11.5T600-800v40h240v80H120Z"/>
    </Icon>
  );
};

IconMaterialCookingFilled.displayName = 'OnesyIconMaterialCookingFilled';

export default IconMaterialCookingFilled;
