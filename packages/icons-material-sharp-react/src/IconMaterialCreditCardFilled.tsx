import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialCreditCardFilled = (props: IIcon) => {

  return (
    <Icon
      name='CreditCardFilled'

      short_name='CreditCard'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M80-160v-640h800v640H80Zm80-320h640v-160H160v160Z"/>
    </Icon>
  );
};

IconMaterialCreditCardFilled.displayName = 'OnesyIconMaterialCreditCardFilled';

export default IconMaterialCreditCardFilled;
