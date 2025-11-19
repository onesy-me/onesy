import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialCreditCard = (props: IIcon) => {

  return (
    <Icon
      name='CreditCard'

      short_name='CreditCard'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M80-160v-640h800v640H80Zm80-480h640v-80H160v80Zm0 400h640v-240H160v240Zm0 0v-480 480Z"/>
    </Icon>
  );
};

IconMaterialCreditCard.displayName = 'OnesyIconMaterialCreditCard';

export default IconMaterialCreditCard;
