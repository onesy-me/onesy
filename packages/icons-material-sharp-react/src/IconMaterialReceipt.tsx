import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialReceipt = (props: IIcon) => {

  return (
    <Icon
      name='Receipt'

      short_name='Receipt'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M120-80v-800l60 60 60-60 60 60 60-60 60 60 60-60 60 60 60-60 60 60 60-60 60 60 60-60v800l-60-60-60 60-60-60-60 60-60-60-60 60-60-60-60 60-60-60-60 60-60-60-60 60Zm120-200h480v-80H240v80Zm0-160h480v-80H240v80Zm0-160h480v-80H240v80Zm-40 404h560v-568H200v568Zm0-568v568-568Z"/>
    </Icon>
  );
};

IconMaterialReceipt.displayName = 'OnesyIconMaterialReceipt';

export default IconMaterialReceipt;
