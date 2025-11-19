import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialCreditCardW100 = (props: IIcon) => {

  return (
    <Icon
      name='CreditCardW100'

      short_name='CreditCard'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M828-688v416q0 26-17 43t-43 17H192q-26 0-43-17t-17-43v-416q0-26 17-43t43-17h576q26 0 43 17t17 43Zm-668 90h640v-90q0-12-10-22t-22-10H192q-12 0-22 10t-10 22v90Zm0 76v250q0 12 10 22t22 10h576q12 0 22-10t10-22v-250H160Zm0 282v-480 480Z"/>
    </Icon>
  );
};

IconMaterialCreditCardW100.displayName = 'OnesyIconMaterialCreditCardW100';

export default IconMaterialCreditCardW100;
