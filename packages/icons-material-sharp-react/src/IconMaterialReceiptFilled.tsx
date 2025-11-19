import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialReceiptFilled = (props: IIcon) => {

  return (
    <Icon
      name='ReceiptFilled'

      short_name='Receipt'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M120-80v-800l60 60 60-60 60 60 60-60 60 60 60-60 60 60 60-60 60 60 60-60 60 60 60-60v800l-60-60-60 60-60-60-60 60-60-60-60 60-60-60-60 60-60-60-60 60-60-60-60 60Zm120-200h480v-80H240v80Zm0-160h480v-80H240v80Zm0-160h480v-80H240v80Z"/>
    </Icon>
  );
};

IconMaterialReceiptFilled.displayName = 'OnesyIconMaterialReceiptFilled';

export default IconMaterialReceiptFilled;
