import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialMailFilled = (props: IIcon) => {

  return (
    <Icon
      name='MailFilled'

      short_name='Mail'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M80-160v-640h800v640H80Zm400-280 320-200v-80L480-520 160-720v80l320 200Z"/>
    </Icon>
  );
};

IconMaterialMailFilled.displayName = 'OnesyIconMaterialMailFilled';

export default IconMaterialMailFilled;
