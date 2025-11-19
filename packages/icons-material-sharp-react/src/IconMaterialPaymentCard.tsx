import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialPaymentCard = (props: IIcon) => {

  return (
    <Icon
      name='PaymentCard'

      short_name='PaymentCard'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M80-160v-640h800v640H80Zm80-80h640v-480H160v480Zm40-40h400L400-680H200v400Zm320-320h240v-80H520v80ZM160-240v-480 480Z"/>
    </Icon>
  );
};

IconMaterialPaymentCard.displayName = 'OnesyIconMaterialPaymentCard';

export default IconMaterialPaymentCard;
